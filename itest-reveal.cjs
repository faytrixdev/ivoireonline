const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const targets = ["À propos", "Services", "Témoignages", "Academy", "Boutique", "Contact"];
  for (const label of targets) {
    await page.click(`header nav a:has-text("${label}")`);
    await page.waitForURL((u) => !u.pathname.includes("auth"));
    await page.waitForTimeout(1200);
    // scroll through the page to trigger reveals, then check none remain hidden in viewport
    const stats = await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const h = document.body.scrollHeight;
      for (let y = 0; y < h; y += 700) {
        window.scrollTo(0, y);
        await sleep(120);
      }
      await sleep(500);
      const all = [...document.querySelectorAll(".reveal")];
      const hidden = all.filter((n) => !n.classList.contains("is-visible"));
      return { total: all.length, hidden: hidden.length };
    });
    console.log(label, JSON.stringify(stats));
    if (stats.hidden > 0) {
      await page.screenshot({ path: `shots/reveal-bug-${label.replace(/\s/g, "-")}.png` });
    }
  }

  console.log("errors:", errors.length ? errors : "none");
  await browser.close();
})();
