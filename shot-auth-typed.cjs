const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3000/auth/inscription", { waitUntil: "networkidle" });
  await page.fill("#auth-email", "aymeric@ivoire.ci");
  await page.fill("#auth-password", "motdepasse1234");
  await page.fill("#auth-confirm", "motdepasse1234");
  await page.click("#auth-password + div button, .relative button").catch(() => {});
  // toggle eye on password to show plaintext
  await page.locator('button[aria-label*="Afficher"]').first().click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: "shots/auth-typed.png" });
  await browser.close();
})();
