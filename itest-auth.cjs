const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));

  const email = `test${Date.now()}@example.com`;
  const password = "motdepasse1234";

  // 1. Register page (premium shell)
  await page.goto("http://localhost:3000/auth/inscription", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/auth-register.png" });

  await page.fill("#auth-email", email);
  await page.fill("#auth-password", password);
  await page.fill("#auth-confirm", password);
  await page.click('button[type="submit"]');
  await page.waitForURL("**/compte", { timeout: 15000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shots/compte-library.png" });

  // 2. Orders tab (empty state)
  await page.click('button[role="tab"]:has-text("Mes commandes")');
  await page.waitForTimeout(500);
  await page.screenshot({ path: "shots/compte-orders.png" });

  // 3. Profile tab
  await page.click('button[role="tab"]:has-text("Mon profil")');
  await page.waitForTimeout(500);
  await page.fill("#pf-name", "Aymeric Test");
  await page.click('button[type="submit"]:has-text("Enregistrer")');
  await page.waitForTimeout(400);
  await page.screenshot({ path: "shots/compte-profile.png" });

  // 4. Logout via banner
  await page.click('button.btn-ghost:has-text("Se déconnecter")');
  await page.waitForURL("http://localhost:3000/", { timeout: 15000 });

  // 5. Login
  await page.goto("http://localhost:3000/auth/connexion", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/auth-login.png" });
  await page.fill("#auth-email", email);
  await page.fill("#auth-password", password);
  await page.click('button[type="submit"]');
  await page.waitForURL("**/compte", { timeout: 15000 });
  const banner = await page.textContent("h1");
  console.log("banner:", banner);

  // 6. Header shows Mon compte
  const headerLink = await page.locator('header a[href="/compte"]').count();
  console.log("header compte link:", headerLink);

  // 7. Join a formation from library flow
  await page.goto("http://localhost:3000/formations", { waitUntil: "networkidle" });
  await page.click('a[href^="/formations/"]');
  await page.waitForLoadState("networkidle");
  const joinBtn = page.locator('button:has-text("Rejoindre cette formation")');
  await joinBtn.waitFor({ state: "visible", timeout: 15000 });
  await joinBtn.click();
  await page.waitForSelector('a:has-text("Accéder à ma bibliothèque")', { timeout: 10000 });
  console.log("joined formation ✓");
  await page.goto("http://localhost:3000/compte", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const cards = await page.locator('a[href^="/formations/"]').count();
  console.log("library cards after join:", cards);
  await page.screenshot({ path: "shots/compte-library-filled.png" });

  // 8. Wrong password error
  await page.goto("http://localhost:3000/auth/connexion", { waitUntil: "networkidle" });
  await page.fill("#auth-email", email);
  await page.fill("#auth-password", "mauvaispassword");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(600);
  const err = await page.locator('[role="alert"]').count();
  console.log("login error shown:", err);

  // 9. Mobile auth
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://localhost:3000/auth/inscription", { waitUntil: "networkidle" });
  await page.screenshot({ path: "shots/auth-register-mobile.png" });

  console.log("js errors:", errors.length ? errors : "none");
  await browser.close();
})();
