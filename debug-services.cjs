const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.click('header nav a:has-text("Services")');
  await page.waitForTimeout(1200);

  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 700) {
      window.scrollTo(0, y);
      await sleep(120);
    }
    await sleep(500);
  });

  const info = await page.evaluate(() => {
    const all = [...document.querySelectorAll(".reveal")];
    return all
      .filter((n) => !n.classList.contains("is-visible"))
      .map((n) => ({
        text: (n.textContent || "").trim().slice(0, 50),
        top: n.getBoundingClientRect().top,
        cls: n.className.slice(0, 60),
      }));
  });
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})();
