const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // Services coaching cards
  await page.goto("http://localhost:3000/services", { waitUntil: "networkidle" });
  await page.evaluate(() => document.querySelector("#coaching")?.scrollIntoView());
  await page.waitForTimeout(1300);
  await page.screenshot({ path: "shots/fix-services-cards.png" });

  // Footer logo
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(900);
  await page.screenshot({ path: "shots/fix-footer.png" });

  // Boutique top (no hero cart btn) + card section
  await page.goto("http://localhost:3000/boutique", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shots/fix-boutique-top.png" });

  // A-propos values
  await page.goto("http://localhost:3000/a-propos", { waitUntil: "networkidle" });
  await page.evaluate(() => {
    const el = [...document.querySelectorAll("p")].find((p) => p.textContent?.includes("Ma conviction"));
    el?.scrollIntoView({ block: "center" });
  });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shots/fix-apropos-values.png" });

  await browser.close();
})();
