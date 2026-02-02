/**
 * Manual Login Version - Screenshot Automation
 * Opens browser and waits for you to log in manually
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const CONFIG = {
  dashboardUrl: 'https://dash.cloudflare.com',
  zeroTrustUrl: 'https://one.dash.cloudflare.com',
  screenshotDir: path.join(__dirname, '..', 'assets', 'screenshots'),
  viewport: { width: 1920, height: 1080 },
  timeout: 60000
};

function ensureDirectories() {
  const dirs = [
    path.join(CONFIG.screenshotDir, 'module1'),
    path.join(CONFIG.screenshotDir, 'module2'),
    path.join(CONFIG.screenshotDir, 'module3')
  ];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

async function takeScreenshot(page, filename, options = {}) {
  const filepath = path.join(CONFIG.screenshotDir, filename);
  console.log(`📸 Capturing: ${filename}`);
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: filepath,
    fullPage: options.fullPage || false,
    ...options
  });
  console.log(`✅ Saved: ${filepath}`);
}

async function highlightElement(page, selector) {
  try {
    await page.locator(selector).first().evaluate((element) => {
      element.style.outline = '3px solid red';
      element.style.outlineOffset = '2px';
    });
  } catch (e) {
    // Ignore if element not found
  }
}

async function waitForEnter(message) {
  console.log(`\n⏸️  ${message}`);
  console.log('   Press Enter to continue...\n');
  return new Promise(resolve => {
    process.stdin.once('data', () => resolve());
  });
}

async function main() {
  console.log('🚀 Starting screenshot automation (Manual Login)...\n');
  
  ensureDirectories();
  
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });
  
  const context = await browser.newContext({
    viewport: CONFIG.viewport
  });
  
  const page = await context.newPage();
  page.setDefaultTimeout(CONFIG.timeout);
  
  try {
    // Open Cloudflare Dashboard for manual login
    console.log('🌐 Opening Cloudflare Dashboard...');
    await page.goto(CONFIG.dashboardUrl);
    await page.waitForLoadState('networkidle');
    
    console.log('\n🔐 MANUAL LOGIN REQUIRED');
    console.log('   1. Log in to your Cloudflare account in the browser');
    console.log('   2. Complete any 2FA if needed');
    console.log('   3. Wait until you see the main dashboard');
    await waitForEnter('When logged in and on dashboard, press Enter');
    
    // ========================================
    // MODULE 1: Introduction
    // ========================================
    console.log('\n📚 MODULE 1: Introduction\n');
    
    await page.goto(CONFIG.dashboardUrl);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    // Screenshot 1: Dashboard Home
    await highlightElement(page, 'a[href*="workers"], nav a:has-text("Workers")');
    await highlightElement(page, 'a[href*="zero-trust"], nav a:has-text("Zero Trust")');
    await takeScreenshot(page, 'module1/01-dashboard-home.png', { fullPage: true });
    
    // Screenshot 2: Account Menu
    await page.click('[data-testid="account-menu"], .avatar, [aria-label*="Account"], button:has-text("Account")').catch(() => {});
    await page.waitForTimeout(1000);
    await takeScreenshot(page, 'module1/02-account-menu.png');
    
    // ========================================
    // MODULE 2: Cloudflare Pages
    // ========================================
    console.log('\n📚 MODULE 2: Cloudflare Pages\n');
    
    // Screenshot 3: Workers & Pages Menu
    await page.goto(`${CONFIG.dashboardUrl}/workers-and-pages`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'button:has-text("Create")');
    await takeScreenshot(page, 'module2/03-workers-pages-menu.png', { fullPage: true });
    
    // Screenshot 4: Create Application - Pages Tab
    await page.getByRole('button', { name: /create/i }).first().click().catch(() => {});
    await page.waitForTimeout(2000);
    await page.getByRole('tab', { name: /pages/i }).click().catch(() => {});
    await page.waitForTimeout(1000);
    await highlightElement(page, 'button:has-text("Upload")');
    await takeScreenshot(page, 'module2/04-create-pages.png');
    
    // Screenshot 5: Upload Assets Page
    await page.getByRole('button', { name: /upload/i }).first().click().catch(() => {});
    await page.waitForTimeout(2000);
    await highlightElement(page, 'button:has-text("Create")');
    await takeScreenshot(page, 'module2/05-upload-assets.png');
    
    // Screenshot 6: Project Name Input
    await page.getByRole('button', { name: /create/i }).first().click().catch(() => {});
    await page.waitForTimeout(1000);
    const nameInput = page.locator('input[name="name"], input[placeholder*="project"]').first();
    if (await nameInput.isVisible().catch(() => false)) {
      await nameInput.fill('my-university-site');
    }
    await highlightElement(page, 'button:has-text("Create project")');
    await takeScreenshot(page, 'module2/06-project-name.png');
    
    // Screenshot 7: File Upload
    await page.getByRole('button', { name: /create project/i }).first().click().catch(() => {});
    await page.waitForTimeout(2000);
    await highlightElement(page, 'button:has-text("Select")');
    await takeScreenshot(page, 'module2/07-file-upload.png');
    
    await waitForEnter('Upload your index.html file and wait for deployment to complete');
    
    // Screenshot 9: Deployment Success
    await page.waitForSelector('text=live, text=success', { timeout: 60000 }).catch(() => {});
    await highlightElement(page, 'button:has-text("Continue")');
    await takeScreenshot(page, 'module2/09-deployment-success.png');
    
    // Screenshot 10: Project Dashboard
    await page.click('button:has-text("Continue")').catch(() => {});
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'a:has-text("Visit"), button:has-text("Visit")');
    await takeScreenshot(page, 'module2/10-project-dashboard.png', { fullPage: true });
    
    // Screenshot 11: Live Website
    const visitLink = await page.locator('a:has-text("Visit"), button:has-text("Visit")').first().getAttribute('href').catch(() => null);
    if (visitLink) {
      const sitePage = await context.newPage();
      await sitePage.goto(visitLink.startsWith('http') ? visitLink : `https://${visitLink}`);
      await sitePage.waitForLoadState('networkidle');
      await sitePage.waitForTimeout(2000);
      await takeScreenshot(sitePage, 'module2/11-live-website.png', { fullPage: true });
      await sitePage.close();
    }
    
    // Optional screenshots
    await page.click('a:has-text("Custom"), button:has-text("Custom")').catch(() => {});
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module2/13-custom-domains.png');
    
    await page.click('a:has-text("Analytics"), button:has-text("Analytics")').catch(() => {});
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module2/14-analytics.png', { fullPage: true });
    
    await page.click('a:has-text("Deployments"), button:has-text("Deployments")').catch(() => {});
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module2/15-deployments-list.png', { fullPage: true });
    
    // ========================================
    // MODULE 3: DNS Security
    // ========================================
    console.log('\n📚 MODULE 3: DNS Security\n');
    
    // Screenshot 16: Zero Trust Dashboard
    await page.goto(CONFIG.zeroTrustUrl);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    await highlightElement(page, 'a:has-text("Gateway")');
    await takeScreenshot(page, 'module3/16-zero-trust-dashboard.png', { fullPage: true });
    
    // Screenshot 17: Gateway Firewall Policies
    await page.click('a:has-text("Gateway")').catch(() => {});
    await page.waitForTimeout(1000);
    await page.click('a:has-text("Firewall")').catch(() => {});
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await page.click('button:has-text("DNS"), [role="tab"]:has-text("DNS")').catch(() => {});
    await page.waitForTimeout(1000);
    await highlightElement(page, 'button:has-text("Add")');
    await takeScreenshot(page, 'module3/17-gateway-firewall.png', { fullPage: true });
    
    // Screenshot 18: Create DNS Policy
    await page.click('button:has-text("Add")').catch(() => {});
    await page.waitForTimeout(2000);
    const policyName = await page.locator('input[name="name"], input[placeholder*="name"]').first();
    if (await policyName.isVisible()) {
      await policyName.fill('Block All Security Threats');
    }
    await highlightElement(page, 'button:has-text("Add condition")');
    await takeScreenshot(page, 'module3/18-create-policy.png');
    
    // Screenshot 19: Security Categories
    await page.click('button:has-text("Add condition")').catch(() => {});
    await page.waitForTimeout(1000);
    await page.click('text=Security').catch(() => {});
    await page.waitForTimeout(1000);
    await highlightElement(page, 'text=security risk');
    await takeScreenshot(page, 'module3/19-security-categories.png');
    
    await waitForEnter('Complete policy creation and create additional policies as needed');
    
    // Remaining screenshots
    await page.goto(`${CONFIG.zeroTrustUrl}/gateway/firewall-policies/dns`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module3/20-policy-created.png', { fullPage: true });
    await takeScreenshot(page, 'module3/21-multiple-policies.png', { fullPage: true });
    
    // DNS Locations
    await page.goto(`${CONFIG.zeroTrustUrl}/networks/dns-locations`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'tr:first-child');
    await takeScreenshot(page, 'module3/22-dns-locations.png');
    
    await page.click('tr:first-child').catch(() => {});
    await page.waitForTimeout(2000);
    await highlightElement(page, 'text=DNS over HTTPS');
    await takeScreenshot(page, 'module3/23-dns-location-details.png', { fullPage: true });
    
    // DNS Logs
    await page.goto(`${CONFIG.zeroTrustUrl}/logs/gateway/dns`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    await takeScreenshot(page, 'module3/27-dns-logs.png', { fullPage: true });
    
    await page.click('button:has-text("Filter"), button:has-text("Add")').catch(() => {});
    await page.waitForTimeout(1000);
    await page.click('text=Block').catch(() => {});
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module3/28-filtered-logs.png', { fullPage: true });
    
    console.log('\n✅ Screenshot capture complete!');
    console.log(`📁 Screenshots saved to: ${CONFIG.screenshotDir}`);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    console.log('\n⏸️  Press Enter to close browser...');
    await new Promise(resolve => process.stdin.once('data', () => resolve()));
    await browser.close();
  }
}

main().catch(console.error);
