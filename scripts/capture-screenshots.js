/**
 * Simple Interactive Screenshot Capture
 * Captures one screenshot at a time with your guidance
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CONFIG = {
  screenshotDir: path.join(__dirname, '..', 'assets', 'screenshots'),
  viewport: { width: 1920, height: 1080 }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve));
}

function ensureDirectories() {
  ['module1', 'module2', 'module3'].forEach(dir => {
    const fullPath = path.join(CONFIG.screenshotDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
}

async function takeScreenshot(page, filename, fullPage = false) {
  const filepath = path.join(CONFIG.screenshotDir, filename);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: filepath, fullPage });
  console.log(`✅ Saved: ${filename}\n`);
}

const screenshots = [
  // Module 1
  { file: 'module1/01-dashboard-home.png', desc: 'Dashboard home page (full page)', url: 'https://dash.cloudflare.com', fullPage: true },
  { file: 'module1/02-account-menu.png', desc: 'Click account menu (top right)', fullPage: false },
  
  // Module 2
  { file: 'module2/03-workers-pages-menu.png', desc: 'Workers & Pages page', url: 'https://dash.cloudflare.com/workers-and-pages', fullPage: true },
  { file: 'module2/04-create-pages.png', desc: 'After clicking Create → Pages tab', fullPage: false },
  { file: 'module2/05-upload-assets.png', desc: 'After clicking Upload assets', fullPage: false },
  { file: 'module2/06-project-name.png', desc: 'Project name input filled', fullPage: false },
  { file: 'module2/07-file-upload.png', desc: 'File upload page', fullPage: false },
  { file: 'module2/09-deployment-success.png', desc: 'Deployment success page', fullPage: false },
  { file: 'module2/10-project-dashboard.png', desc: 'Project dashboard', fullPage: true },
  { file: 'module2/11-live-website.png', desc: 'Live website in browser', fullPage: true },
  { file: 'module2/13-custom-domains.png', desc: 'Custom domains tab', fullPage: false },
  { file: 'module2/14-analytics.png', desc: 'Analytics tab', fullPage: true },
  { file: 'module2/15-deployments-list.png', desc: 'Deployments list', fullPage: true },
  
  // Module 3
  { file: 'module3/16-zero-trust-dashboard.png', desc: 'Zero Trust dashboard', url: 'https://one.dash.cloudflare.com', fullPage: true },
  { file: 'module3/17-gateway-firewall.png', desc: 'Gateway → Firewall policies → DNS tab', fullPage: true },
  { file: 'module3/18-create-policy.png', desc: 'Create policy form', fullPage: false },
  { file: 'module3/19-security-categories.png', desc: 'Security categories selector', fullPage: false },
  { file: 'module3/20-policy-created.png', desc: 'Policy created in list', fullPage: true },
  { file: 'module3/21-multiple-policies.png', desc: 'Multiple policies in order', fullPage: true },
  { file: 'module3/22-dns-locations.png', desc: 'DNS locations list', fullPage: false },
  { file: 'module3/23-dns-location-details.png', desc: 'DNS location details with DoH URL', fullPage: true },
  { file: 'module3/24-chrome-dns-settings.png', desc: 'Chrome DNS settings', fullPage: false },
  { file: 'module3/25-firefox-dns-settings.png', desc: 'Firefox DNS settings', fullPage: false },
  { file: 'module3/26-block-page.png', desc: 'Cloudflare Gateway block page', fullPage: false },
  { file: 'module3/27-dns-logs.png', desc: 'DNS logs page', fullPage: true },
  { file: 'module3/28-filtered-logs.png', desc: 'Filtered logs (blocked only)', fullPage: true },
  { file: 'module3/29-log-details.png', desc: 'Log entry details', fullPage: false }
];

async function main() {
  console.log('🚀 Interactive Screenshot Capture\n');
  console.log('This script will help you capture screenshots one at a time.\n');
  
  ensureDirectories();
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: CONFIG.viewport });
  const page = await context.newPage();
  
  console.log('📋 Total screenshots to capture: ' + screenshots.length);
  console.log('You can skip screenshots by typing "skip"\n');
  
  // Login first
  console.log('🔐 Opening Cloudflare Dashboard for login...\n');
  await page.goto('https://dash.cloudflare.com');
  await question('Press Enter after you have logged in...');
  
  let captured = 0;
  let skipped = 0;
  
  for (let i = 0; i < screenshots.length; i++) {
    const shot = screenshots[i];
    console.log(`\n📸 Screenshot ${i + 1}/${screenshots.length}`);
    console.log(`   File: ${shot.file}`);
    console.log(`   Description: ${shot.desc}`);
    
    if (shot.url) {
      console.log(`   Navigating to: ${shot.url}`);
      try {
        await page.goto(shot.url, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(3000);
      } catch (e) {
        console.log(`   ⚠️  Navigation slow, continuing anyway...`);
        await page.waitForTimeout(2000);
      }
    }
    
    const answer = await question('\n   Ready to capture? (Enter = yes, "skip" = skip, "quit" = exit): ');
    
    if (answer.toLowerCase() === 'quit') {
      console.log('\n⏹️  Stopping capture...');
      break;
    }
    
    if (answer.toLowerCase() === 'skip') {
      console.log('   ⏭️  Skipped');
      skipped++;
      continue;
    }
    
    await takeScreenshot(page, shot.file, shot.fullPage);
    captured++;
  }
  
  await browser.close();
  rl.close();
  
  console.log('\n✅ Screenshot capture complete!');
  console.log(`   📸 Captured: ${captured}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   📁 Location: ${CONFIG.screenshotDir}\n`);
}

main().catch(error => {
  console.error('❌ Error:', error);
  rl.close();
  process.exit(1);
});
