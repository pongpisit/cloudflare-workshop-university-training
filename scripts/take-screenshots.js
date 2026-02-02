/**
 * Automated Screenshot Capture for Cloudflare Workshop
 * 
 * This script uses Playwright to automatically navigate through the Cloudflare
 * Dashboard and capture all required screenshots for the workshop.
 * 
 * Usage:
 *   1. Copy .env.example to .env
 *   2. Add your Cloudflare credentials
 *   3. Run: node scripts/take-screenshots.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuration
const CONFIG = {
  email: process.env.CLOUDFLARE_EMAIL,
  password: process.env.CLOUDFLARE_PASSWORD,
  dashboardUrl: 'https://dash.cloudflare.com',
  zeroTrustUrl: 'https://one.dash.cloudflare.com',
  screenshotDir: path.join(__dirname, '..', 'assets', 'screenshots'),
  viewport: { width: 1920, height: 1080 },
  timeout: 30000
};

// Ensure screenshot directories exist
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

// Helper to take screenshot with annotation
async function takeScreenshot(page, filename, options = {}) {
  const filepath = path.join(CONFIG.screenshotDir, filename);
  console.log(`📸 Capturing: ${filename}`);
  
  // Wait a bit for animations to complete
  await page.waitForTimeout(1000);
  
  await page.screenshot({
    path: filepath,
    fullPage: options.fullPage || false,
    ...options
  });
  
  console.log(`✅ Saved: ${filepath}`);
}

// Helper to highlight element
async function highlightElement(page, selector) {
  await page.evaluate((sel) => {
    const element = document.querySelector(sel);
    if (element) {
      element.style.outline = '3px solid red';
      element.style.outlineOffset = '2px';
    }
  }, selector);
}

async function main() {
  console.log('🚀 Starting screenshot automation...\n');
  
  // Validate credentials
  if (!CONFIG.email || !CONFIG.password) {
    console.error('❌ Error: CLOUDFLARE_EMAIL and CLOUDFLARE_PASSWORD must be set in .env file');
    process.exit(1);
  }
  
  ensureDirectories();
  
  const browser = await chromium.launch({
    headless: false, // Set to true for headless mode
    slowMo: 500 // Slow down for visibility
  });
  
  const context = await browser.newContext({
    viewport: CONFIG.viewport
  });
  
  const page = await context.newPage();
  page.setDefaultTimeout(CONFIG.timeout);
  
  try {
    // ========================================
    // MODULE 1: Introduction
    // ========================================
    console.log('\n📚 MODULE 1: Introduction\n');
    
    // Login to Cloudflare
    console.log('🔐 Logging in to Cloudflare...');
    await page.goto(CONFIG.dashboardUrl);
    await page.waitForLoadState('networkidle');
    
    // Check if already logged in
    const isLoggedIn = await page.locator('nav').isVisible().catch(() => false);
    
    if (!isLoggedIn) {
      await page.fill('input[type="email"]', CONFIG.email);
      await page.click('button[type="submit"]');
      await page.waitForTimeout(2000);
      await page.fill('input[type="password"]', CONFIG.password);
      await page.click('button[type="submit"]');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(3000);
    }
    
    // Screenshot 1: Dashboard Home
    await page.goto(CONFIG.dashboardUrl);
    await page.waitForLoadState('networkidle');
    await highlightElement(page, 'a[href*="workers"]');
    await highlightElement(page, 'a[href*="zero-trust"]');
    await takeScreenshot(page, 'module1/01-dashboard-home.png', { fullPage: true });
    
    // Screenshot 2: Account Menu
    await page.click('[data-testid="account-menu"], .avatar, [aria-label*="Account"]');
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
    await highlightElement(page, 'button:has-text("Create application"), a:has-text("Create application")');
    await takeScreenshot(page, 'module2/03-workers-pages-menu.png', { fullPage: true });
    
    // Screenshot 4: Create Application - Pages Tab
    await page.click('button:has-text("Create application"), a:has-text("Create application")');
    await page.waitForTimeout(2000);
    await page.click('button:has-text("Pages"), [role="tab"]:has-text("Pages")');
    await page.waitForTimeout(1000);
    await highlightElement(page, 'button:has-text("Upload assets")');
    await takeScreenshot(page, 'module2/04-create-pages.png');
    
    // Screenshot 5: Upload Assets Page
    await page.click('button:has-text("Upload assets")');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'button:has-text("Create a new project")');
    await takeScreenshot(page, 'module2/05-upload-assets.png');
    
    // Screenshot 6: Project Name Input
    await page.click('button:has-text("Create a new project")');
    await page.waitForTimeout(1000);
    await page.fill('input[name="name"], input[placeholder*="project"]', 'my-university-site');
    await highlightElement(page, 'button:has-text("Create project")');
    await takeScreenshot(page, 'module2/06-project-name.png');
    
    // Screenshot 7: File Upload
    await page.click('button:has-text("Create project")');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'button:has-text("Select from computer"), input[type="file"]');
    await takeScreenshot(page, 'module2/07-file-upload.png');
    
    console.log('\n⚠️  Manual step required:');
    console.log('   Upload index.html file and continue deployment');
    console.log('   Press Enter when deployment is complete...');
    
    // Wait for user to complete upload and deployment
    await new Promise(resolve => {
      process.stdin.once('data', () => resolve());
    });
    
    // Screenshot 8: Deployment in Progress (if visible)
    const deployingVisible = await page.locator('text=Deploying').isVisible().catch(() => false);
    if (deployingVisible) {
      await takeScreenshot(page, 'module2/08-deploying.png');
      await page.waitForTimeout(5000);
    }
    
    // Screenshot 9: Deployment Success
    await page.waitForSelector('text=Your site is live, text=success', { timeout: 60000 });
    await highlightElement(page, 'button:has-text("Continue to project")');
    await takeScreenshot(page, 'module2/09-deployment-success.png');
    
    // Screenshot 10: Project Dashboard
    await page.click('button:has-text("Continue to project")');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'a:has-text("Visit site"), button:has-text("Visit site")');
    await takeScreenshot(page, 'module2/10-project-dashboard.png', { fullPage: true });
    
    // Screenshot 11: Live Website
    const visitButton = await page.locator('a:has-text("Visit site"), button:has-text("Visit site")').first();
    const siteUrl = await visitButton.getAttribute('href');
    
    if (siteUrl) {
      const sitePage = await context.newPage();
      await sitePage.goto(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`);
      await sitePage.waitForLoadState('networkidle');
      await sitePage.waitForTimeout(2000);
      await takeScreenshot(sitePage, 'module2/11-live-website.png', { fullPage: true });
      
      // Screenshot 12: SSL Certificate (Optional)
      console.log('\n⚠️  Manual step for SSL certificate:');
      console.log('   Click the padlock icon and capture certificate details');
      console.log('   Save as: module2/12-ssl-certificate.png');
      console.log('   Press Enter to continue...');
      await new Promise(resolve => process.stdin.once('data', () => resolve()));
      
      await sitePage.close();
    }
    
    // Screenshot 13: Custom Domains Tab (Optional)
    await page.click('a:has-text("Custom domains"), button:has-text("Custom domains")');
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module2/13-custom-domains.png');
    
    // Screenshot 14: Analytics Tab (Optional)
    await page.click('a:has-text("Analytics"), button:has-text("Analytics")');
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module2/14-analytics.png', { fullPage: true });
    
    // Screenshot 15: Deployments List (Optional)
    await page.click('a:has-text("Deployments"), button:has-text("Deployments")');
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
    await page.click('a:has-text("Gateway")');
    await page.waitForTimeout(1000);
    await page.click('a:has-text("Firewall policies")');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await page.click('button:has-text("DNS"), [role="tab"]:has-text("DNS")');
    await page.waitForTimeout(1000);
    await highlightElement(page, 'button:has-text("Add a policy")');
    await takeScreenshot(page, 'module3/17-gateway-firewall.png', { fullPage: true });
    
    // Screenshot 18: Create DNS Policy
    await page.click('button:has-text("Add a policy")');
    await page.waitForTimeout(2000);
    await page.fill('input[name="name"], input[placeholder*="name"]', 'Block All Security Threats');
    await highlightElement(page, 'button:has-text("Add condition")');
    await takeScreenshot(page, 'module3/18-create-policy.png');
    
    // Screenshot 19: Security Categories Selector
    await page.click('button:has-text("Add condition")');
    await page.waitForTimeout(1000);
    await page.click('text=Security Categories');
    await page.waitForTimeout(1000);
    await highlightElement(page, 'text=All security risks');
    await takeScreenshot(page, 'module3/19-security-categories.png');
    
    console.log('\n⚠️  Manual steps required:');
    console.log('   1. Complete policy creation');
    console.log('   2. Create additional policies as needed');
    console.log('   3. Press Enter to continue with remaining screenshots...');
    await new Promise(resolve => process.stdin.once('data', () => resolve()));
    
    // Screenshot 20: Policy Created
    await page.goto(`${CONFIG.zeroTrustUrl}/gateway/firewall-policies/dns`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module3/20-policy-created.png', { fullPage: true });
    
    // Screenshot 21: Multiple Policies
    await takeScreenshot(page, 'module3/21-multiple-policies.png', { fullPage: true });
    
    // Screenshot 22: DNS Locations
    await page.goto(`${CONFIG.zeroTrustUrl}/networks/dns-locations`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'tr:first-child td:first-child');
    await takeScreenshot(page, 'module3/22-dns-locations.png');
    
    // Screenshot 23: DNS Location Details
    await page.click('tr:first-child td:first-child a, tr:first-child button');
    await page.waitForTimeout(2000);
    await highlightElement(page, 'text=DNS over HTTPS');
    await takeScreenshot(page, 'module3/23-dns-location-details.png', { fullPage: true });
    
    // Screenshot 24 & 25: Browser DNS Settings
    console.log('\n⚠️  Manual steps for browser DNS settings:');
    console.log('   24. Open Chrome settings and capture DNS configuration');
    console.log('   25. Open Firefox settings and capture DNS configuration');
    console.log('   Press Enter when done...');
    await new Promise(resolve => process.stdin.once('data', () => resolve()));
    
    // Screenshot 26: Block Page
    console.log('\n⚠️  Manual step for block page:');
    console.log('   Visit a blocked site and capture the block page');
    console.log('   Save as: module3/26-block-page.png');
    console.log('   Press Enter when done...');
    await new Promise(resolve => process.stdin.once('data', () => resolve()));
    
    // Screenshot 27: DNS Logs
    await page.goto(`${CONFIG.zeroTrustUrl}/logs/gateway/dns`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    await highlightElement(page, 'th:has-text("Action")');
    await takeScreenshot(page, 'module3/27-dns-logs.png', { fullPage: true });
    
    // Screenshot 28: Filtered Logs
    await page.click('button:has-text("Add filter"), button:has-text("Filter")');
    await page.waitForTimeout(1000);
    await page.click('text=Action');
    await page.click('text=Block');
    await page.waitForTimeout(2000);
    await takeScreenshot(page, 'module3/28-filtered-logs.png', { fullPage: true });
    
    // Screenshot 29: Log Details
    const firstLog = await page.locator('tr[data-testid="log-row"], tbody tr').first();
    if (await firstLog.isVisible()) {
      await firstLog.click();
      await page.waitForTimeout(2000);
      await takeScreenshot(page, 'module3/29-log-details.png');
    }
    
    console.log('\n✅ Screenshot capture complete!');
    console.log(`📁 Screenshots saved to: ${CONFIG.screenshotDir}`);
    
  } catch (error) {
    console.error('\n❌ Error during screenshot capture:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
