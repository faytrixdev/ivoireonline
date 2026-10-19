const { chromium } = require("playwright");

const pages = [
  ["a-propos", "/a-propos"],
  ["services", "/services"],
  ["temoignages", "/temoignages"],
  ["formations", "/formations"],
  ["boutique", "/boutique"],
  ["contact", "/contact"],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("console: " + m.text());
  });

  for (const [name, path] of pages) {
    await page.goto("http://localhost:3000" + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `shots/pg-${name}-top.png` });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.35));
    await page.waitForTimeout(900);
    await page.screenshot({ path: `shots/pg-${name}-mid.png` });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.7));
    await page.waitForTimeout(900);
    await page.screenshot({ path: `shots/pg-${name}-low.png` });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(name, "overflow:", overflow);
  }
  console.log("errors:", errors.length ? errors : "none");
  await browser.close();
})();
