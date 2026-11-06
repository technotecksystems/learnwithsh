const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = "http://localhost:9999";

const mode = process.argv[2] || "before";
const outDir = path.join(__dirname, "..", "public", "screenshots", mode);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const MENU_DEVICES = [
  { name: "iphone_se_320x568", width: 320, height: 568 },
  { name: "iphone_14_390x844", width: 390, height: 844 },
  { name: "iphone_14_pro_max_430x932", width: 430, height: 932 },
  { name: "galaxy_fold_280x653", width: 280, height: 653 },
  { name: "pixel_7_412x915", width: 412, height: 915 },
  { name: "landscape_667x375", width: 667, height: 375 },
  { name: "landscape_932x430", width: 932, height: 430 },
  { name: "safari_toolbar_390x744", width: 390, height: 744 }, // simulating 390x844 with Safari bottom toolbar taking ~100px
];

const HERO_VIEWPORTS = [
  { name: "hero_768x1024", width: 768, height: 1024 },
  { name: "hero_820x1180", width: 820, height: 1180 },
  { name: "hero_834x1194", width: 834, height: 1194 },
  { name: "hero_1024x1366", width: 1024, height: 1366 },
  { name: "hero_1180x820", width: 1180, height: 820 },
  { name: "hero_1366x1024", width: 1366, height: 1024 },
  { name: "hero_1440x900", width: 1440, height: 900 },
  { name: "hero_1920x1080", width: 1920, height: 1080 },
  { name: "hero_2560x1440", width: 2560, height: 1440 },
];

async function run() {
  console.log(`Starting ${mode} screenshot capture...`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  // 1. Menu Screenshots
  for (const dev of MENU_DEVICES) {
    console.log(`Capturing Menu [${mode}]: ${dev.name} (${dev.width}x${dev.height})`);
    await page.setViewport({ width: dev.width, height: dev.height, deviceScaleFactor: 2 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
    
    // Click burger to open menu
    const burger = await page.$(".bgr");
    if (burger) {
      await burger.click();
      await new Promise((r) => setTimeout(r, 900)); // wait for iris transition
    }

    const outPath = path.join(outDir, `menu_${dev.name}.png`);
    await page.screenshot({ path: outPath });
  }

  // 2. Hero Screenshots
  for (const vp of HERO_VIEWPORTS) {
    console.log(`Capturing Hero [${mode}]: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto(`${BASE_URL}/?debug=1`, { waitUntil: "networkidle0" });
    await new Promise((r) => setTimeout(r, 300));

    const outPath = path.join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: outPath });
  }

  await browser.close();
  console.log(`Finished ${mode} screenshot capture to ${outDir}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
