const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.click('header nav a:has-text("À propos")');
  await page.waitForTimeout(1500);
  const s = await page.evaluate(() => {
    const all = [...document.querySelectorAll(".reveal")];
    return {
      count: all.length,
      visible: all.filter((n) => n.classList.contains("is-visible")).length,
      opacities: all.slice(0, 4).map((n) => getComputedStyle(n).opacity),
      jsReady: document.documentElement.classList.contains("js-ready"),
    };
  });
  console.log("after nav:", JSON.stringify(s));
  // slow stepped scroll like a real user
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 400) {
      window.scrollTo({ top: y, behavior: "instant" });
      await sleep(250);
    }
    await sleep(600);
  });
  const s2 = await page.evaluate(() => {
    const all = [...document.querySelectorAll(".reveal")];
    return {
      visible: all.filter((n) => n.classList.contains("is-visible")).length,
      total: all.length,
      hiddenTexts: all
        .filter((n) => !n.classList.contains("is-visible"))
        .map((n) => (n.textContent || "").trim().slice(0, 40)),
    };
  });
  console.log("after slow scroll:", JSON.stringify(s2, null, 1));
  await browser.close();
})();
