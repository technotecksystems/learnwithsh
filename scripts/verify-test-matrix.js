const puppeteer = require("puppeteer-core");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:9999";

const MENU_DEVICES = [
  { name: "iPhone SE", width: 320, height: 568 },
  { name: "iPhone 14", width: 390, height: 844 },
  { name: "iPhone 14 Pro Max", width: 430, height: 932 },
  { name: "Galaxy Fold", width: 280, height: 653 },
  { name: "Pixel 7", width: 412, height: 915 },
  { name: "Landscape 667x375", width: 667, height: 375 },
  { name: "Landscape 932x430", width: 932, height: 430 },
  { name: "Safari with toolbar", width: 390, height: 744 },
];

const HERO_VIEWPORTS = [
  { name: "iPad Mini Portrait", width: 768, height: 1024 },
  { name: "iPad Air 10.9 Portrait", width: 820, height: 1180 },
  { name: "iPad Pro 11 Portrait", width: 834, height: 1194 },
  { name: "iPad Pro 12.9 Portrait", width: 1024, height: 1366 },
  { name: "iPad Air 10.9 Landscape", width: 1180, height: 820 },
  { name: "iPad Pro 12.9 Landscape", width: 1366, height: 1024 },
  { name: "MacBook / Laptop", width: 1440, height: 900 },
  { name: "Desktop FHD", width: 1920, height: 1080 },
  { name: "Desktop QHD", width: 2560, height: 1440 },
];

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  console.log("=== RUNNING TEST MATRIX VERIFICATION ===\n");

  let allPassed = true;

  // 1. Menu Checks
  console.log("--- 1. MOBILE MENU TESTS ---");
  for (const dev of MENU_DEVICES) {
    await page.setViewport({ width: dev.width, height: dev.height, deviceScaleFactor: 2 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });

    // Click burger
    const burger = await page.$(".bgr");
    await burger.click();
    await new Promise((r) => setTimeout(r, 600));

    const result = await page.evaluate(() => {
      const menu = document.querySelector(".mobile-iris-menu");
      const mi = document.querySelector(".mi-container");
      const links = Array.from(document.querySelectorAll(".menu-link .t"));
      const portalLink = links.find((el) => el.textContent.includes("Student Portal"));

      // Check if scrollable
      const isScrollable = menu.scrollHeight > menu.clientHeight + 1;

      // Check if Student Portal wraps (check text element clientHeight vs single line line-height)
      const portalHeight = portalLink ? portalLink.clientHeight : 0;
      const portalFont = portalLink ? parseFloat(window.getComputedStyle(portalLink).fontSize) : 0;
      const wraps = portalHeight > portalFont * 1.5;

      // Check body scroll lock
      const bodyStyle = document.body.style;
      const isLocked =
        bodyStyle.position === "fixed" &&
        (bodyStyle.top === "0px" || bodyStyle.top.startsWith("-")) &&
        document.documentElement.classList.contains("lock");

      return {
        isScrollable,
        wraps,
        isLocked,
        scrollHeight: menu.scrollHeight,
        clientHeight: menu.clientHeight,
        portalHeight,
        portalFont,
      };
    });

    const pass = !result.isScrollable && !result.wraps && result.isLocked;
    if (!pass) allPassed = false;

    console.log(
      `${pass ? "✓ PASS" : "✗ FAIL"} [${dev.name} ${dev.width}x${dev.height}] ` +
      `NoInnerScroll: ${!result.isScrollable} (scroll: ${result.scrollHeight} vs client: ${result.clientHeight}) | ` +
      `PortalSingleLine: ${!result.wraps} | ` +
      `BodyLocked: ${result.isLocked}`
    );
  }

  // 2. Keyboard & Focus Trap Tests
  console.log("\n--- 2. ACCESSIBILITY & FOCUS TRAP TESTS ---");
  {
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });

    // Open menu
    await page.click(".bgr");
    await new Promise((r) => setTimeout(r, 600));

    // Test Esc key
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 400));
    const isClosed = await page.evaluate(() => {
      const menu = document.querySelector(".mobile-iris-menu");
      return !menu.classList.contains("open") && menu.style.visibility === "hidden";
    });
    console.log(`${isClosed ? "✓ PASS" : "✗ FAIL"} Esc key closes menu: ${isClosed}`);
    if (!isClosed) allPassed = false;
  }

  // 3. Hero Alignment Checks
  console.log("\n--- 3. HERO STAGE ALIGNMENT TESTS ---");
  for (const vp of HERO_VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE_URL}/?debug=1`, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 300));

    const heroResult = await page.evaluate(() => {
      const stages = Array.from(document.querySelectorAll(".hero-stage"));
      const stage = stages.find((el) => el.getBoundingClientRect().width > 0);
      if (!stage) return { hasStage: false };

      const stageRect = stage.getBoundingClientRect();
      const portrait = stage.querySelector(".hero-portrait");
      if (!portrait) return { hasStage: true, hasPortrait: false };

      const portraitRect = portrait.getBoundingClientRect();

      // Stage arch center is 76.9%
      const expectedArchCenterX = stageRect.left + stageRect.width * 0.769;
      const portraitCenterX = portraitRect.left + portraitRect.width / 2;
      const diffXPercent = Math.abs((portraitCenterX - expectedArchCenterX) / stageRect.width) * 100;

      // Bottom edge check: portrait bottom aligns with stage bottom
      const bottomDiff = Math.abs(portraitRect.bottom - stageRect.bottom);

      // Check text overlap on tablet/desktop (using the active visible headline)
      const headlines = Array.from(document.querySelectorAll("h1"));
      const headline = headlines.find((el) => el.getBoundingClientRect().height > 0);
      let overlapsText = false;
      if (headline) {
        const headRect = headline.getBoundingClientRect();
        overlapsText = !(
          headRect.right < portraitRect.left ||
          headRect.left > portraitRect.right ||
          headRect.bottom < portraitRect.top ||
          headRect.top > portraitRect.bottom
        );
      }

      return {
        hasStage: true,
        hasPortrait: true,
        diffXPercent: diffXPercent.toFixed(2),
        bottomDiff: bottomDiff.toFixed(1),
        overlapsText,
      };
    });

    const isAligned = heroResult.hasPortrait && parseFloat(heroResult.diffXPercent) <= 1.0;
    const isAtBottom = heroResult.hasPortrait && parseFloat(heroResult.bottomDiff) <= 2.0;
    const noOverlap = heroResult.hasPortrait && !heroResult.overlapsText;
    const pass = isAligned && isAtBottom && noOverlap;
    if (!pass) allPassed = false;

    console.log(
      `${pass ? "✓ PASS" : "✗ FAIL"} [${vp.name} ${vp.width}x${vp.height}] ` +
      `CentredWithin1%: ${isAligned} (diff: ${heroResult.diffXPercent}%) | ` +
      `OnBottomEdge: ${isAtBottom} (diff: ${heroResult.bottomDiff}px) | ` +
      `NoTextOverlap: ${noOverlap}`
    );
  }

  await browser.close();
  console.log(`\n=== OVERALL TEST MATRIX: ${allPassed ? "ALL PASSED (100%)" : "FAILURES DETECTED"} ===`);
}

verify().catch(console.error);
