const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:9999";
const OUTPUT_DIR = path.join(__dirname, "..", "public", "screenshots", "desktop_matrix");

const VIEWPORTS = [
  { name: "1366x768", width: 1366, height: 768 },
  { name: "1536x864", width: 1536, height: 864 },
  { name: "1920x1080", width: 1920, height: 1080 },
  { name: "2560x1440", width: 2560, height: 1440 },
  { name: "3440x1440", width: 3440, height: 1440 },
];

const ZOOMS = [0.5, 0.67, 0.8, 0.9, 1.0, 1.1, 1.25];

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  console.log("=== RUNNING DESKTOP HERO SIZING TEST MATRIX ===\n");

  let totalTests = 0;
  let passedTests = 0;
  const resultsTable = [];

  for (const vp of VIEWPORTS) {
    for (const zoom of ZOOMS) {
      totalTests++;
      const zoomPercent = Math.round(zoom * 100);
      const effW = Math.round(vp.width / zoom);
      const effH = Math.round(vp.height / zoom);

      await page.setViewport({
        width: effW,
        height: effH,
        deviceScaleFactor: 1,
      });

      await page.goto(`${BASE_URL}/?debug=1`, { waitUntil: "networkidle0" });
      await new Promise((r) => setTimeout(r, 200));

      const metrics = await page.evaluate(() => {
        const hero = document.querySelector(".hero");
        const stage = document.querySelector(".hero-stage");
        const portrait = document.querySelector(".hero-portrait");
        const eyebrow = document.querySelector(".eyebrow-badge");
        const headline = document.querySelector("h1");
        const chips = Array.from(document.querySelectorAll(".hero-chip"));

        if (!hero || !stage || !portrait || !eyebrow) {
          return { error: "Missing essential elements" };
        }

        const hRect = hero.getBoundingClientRect();
        const sRect = stage.getBoundingClientRect();
        const pRect = portrait.getBoundingClientRect();
        const eRect = eyebrow.getBoundingClientRect();
        const headRect = headline ? headline.getBoundingClientRect() : null;

        // 1. Hero fills viewport height (respecting max(100svh, 640px) min constraint)
        const expectedH = Math.max(window.innerHeight, 640);
        const heroHeightMatchesViewport = Math.abs(hRect.height - expectedH) <= 2;

        // 2. Portrait centered in arch within 1% horizontally
        const archCenterX = sRect.left + sRect.width * 0.769;
        const portraitCenterX = pRect.left + pRect.width / 2;
        const diffXPercent = Math.abs((portraitCenterX - archCenterX) / sRect.width) * 100;
        const portraitCenteredWithin1Percent = diffXPercent <= 1.0;

        // 3. Portrait feet on bottom edge
        const feetOnBottomEdge = Math.abs(hRect.bottom - pRect.bottom) <= 2;

        // 4. Portrait head not clipped (top >= 0 or head is within view)
        const headNotClipped = pRect.top >= 0;

        // 5. Eyebrow distance below nav bottom (scaled ~55-60px below nav)
        const eyebrowDist = eRect.top - 72;

        // 6. Headline never overlaps portrait or chips
        let headlineOverlaps = false;
        if (headRect) {
          // Check portrait overlap
          const overlapsPortrait = !(
            headRect.right < pRect.left ||
            headRect.left > pRect.right ||
            headRect.bottom < pRect.top ||
            headRect.top > pRect.bottom
          );
          if (overlapsPortrait) headlineOverlaps = true;

          // Check chip overlap
          for (const chip of chips) {
            const cRect = chip.getBoundingClientRect();
            const overlapsChip = !(
              headRect.right < cRect.left ||
              headRect.left > cRect.right ||
              headRect.bottom < cRect.top ||
              headRect.top > cRect.bottom
            );
            if (overlapsChip) headlineOverlaps = true;
          }
        }

        // 7. No empty/flat band on left (stage right is 0, stage width >= minW)
        const stageRightAligned = Math.abs(window.innerWidth - sRect.right) <= 2;

        return {
          heroH: hRect.height,
          viewportH: window.innerHeight,
          heroHeightMatchesViewport,
          diffXPercent: diffXPercent.toFixed(2),
          portraitCenteredWithin1Percent,
          feetOnBottomEdge,
          headNotClipped,
          eyebrowDist: eyebrowDist.toFixed(1),
          headlineOverlaps,
          stageRightAligned,
          stageW: sRect.width.toFixed(1),
          cropTop: (sRect.top - hRect.top).toFixed(1),
        };
      });

      const pass =
        metrics.heroHeightMatchesViewport &&
        metrics.portraitCenteredWithin1Percent &&
        metrics.feetOnBottomEdge &&
        metrics.headNotClipped &&
        !metrics.headlineOverlaps &&
        metrics.stageRightAligned;

      if (pass) passedTests++;

      const filename = `hero_${vp.width}x${vp.height}_zoom${zoomPercent}.png`;
      const screenshotPath = path.join(OUTPUT_DIR, filename);
      await page.screenshot({ path: screenshotPath });

      console.log(
        `${pass ? "✓ PASS" : "✗ FAIL"} [${vp.name} @ ${zoomPercent}%] ` +
        `HeroH: ${metrics.heroH}/${metrics.viewportH}px | ` +
        `ArchCenterDiff: ${metrics.diffXPercent}% | ` +
        `FeetOnBottom: ${metrics.feetOnBottomEdge} | ` +
        `HeadNotClipped: ${metrics.headNotClipped} | ` +
        `EyebrowDist: ${metrics.eyebrowDist}px | ` +
        `NoTextOverlap: ${!metrics.headlineOverlaps}`
      );

      resultsTable.push({
        viewport: vp.name,
        zoom: `${zoomPercent}%`,
        pass,
        metrics,
        filename,
      });
    }
  }

  // Also capture clean version (without ?debug=1) for 1920x1080 @ 100% and 1920x880 reference
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "hero_1920x1080_clean.png") });

  await page.setViewport({ width: 1920, height: 880, deviceScaleFactor: 1 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 200));
  await page.screenshot({ path: path.join(OUTPUT_DIR, "hero_1920x880_reference_clean.png") });

  await browser.close();

  console.log(`\n=== RESULTS: ${passedTests}/${totalTests} PASSED (${Math.round((passedTests / totalTests) * 100)}%) ===`);
}

run().catch(console.error);
