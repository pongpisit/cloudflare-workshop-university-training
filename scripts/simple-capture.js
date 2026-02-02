/**
 * Simple Screenshot Tool - Manual Navigation
 * You navigate, we capture. Works with any UI.
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
  await page.waitForTimeout(500);
  await page.screenshot({ path: filepath, fullPage });
  console.log(`✅ Saved: ${filename}`);
  return filepath;
}

// Screenshot list with descriptions
const screenshots = {
  // Module 1
  '01': { file: 'module1/01-dashboard-home.png', desc: 'Dashboard home - after login', full: true },
  '02': { file: 'module1/02-account-menu.png', desc: 'Account menu (click profile/avatar)', full: false },
  
  // Module 2  
  '03': { file: 'module2/03-workers-pages-menu.png', desc: 'Workers & Pages section', full: true },
  '04': { file: 'module2/04-create-pages.png', desc: 'Create application → Pages tab', full: false },
  '05': { file: 'module2/05-upload-assets.png', desc: 'Upload assets option', full: false },
  '06': { file: 'module2/06-project-name.png', desc: 'Project name input', full: false },
  '07': { file: 'module2/07-file-upload.png', desc: 'File upload interface', full: false },
  '09': { file: 'module2/09-deployment-success.png', desc: 'Deployment success message', full: false },
  '10': { file: 'module2/10-project-dashboard.png', desc: 'Project dashboard', full: true },
  '11': { file: 'module2/11-live-website.png', desc: 'Live website (visit site)', full: true },
  '13': { file: 'module2/13-custom-domains.png', desc: 'Custom domains tab', full: false },
  '14': { file: 'module2/14-analytics.png', desc: 'Analytics tab', full: true },
  '15': { file: 'module2/15-deployments-list.png', desc: 'Deployments list', full: true },
  
  // Module 3
  '16': { file: 'module3/16-zero-trust-dashboard.png', desc: 'Zero Trust dashboard', full: true },
  '17': { file: 'module3/17-gateway-firewall.png', desc: 'Gateway → Firewall policies → DNS', full: true },
  '18': { file: 'module3/18-create-policy.png', desc: 'Create policy form', full: false },
  '19': { file: 'module3/19-security-categories.png', desc: 'Security categories selector', full: false },
  '20': { file: 'module3/20-policy-created.png', desc: 'Policy in list', full: true },
  '21': { file: 'module3/21-multiple-policies.png', desc: 'Multiple policies', full: true },
  '22': { file: 'module3/22-dns-locations.png', desc: 'DNS locations list', full: false },
  '23': { file: 'module3/23-dns-location-details.png', desc: 'DNS location details + DoH URL', full: true },
  '24': { file: 'module3/24-chrome-dns-settings.png', desc: 'Chrome DNS settings', full: false },
  '25': { file: 'module3/25-firefox-dns-settings.png', desc: 'Firefox DNS settings', full: false },
  '26': { file: 'module3/26-block-page.png', desc: 'Gateway block page', full: false },
  '27': { file: 'module3/27-dns-logs.png', desc: 'DNS logs', full: true },
  '28': { file: 'module3/28-filtered-logs.png', desc: 'Filtered logs (blocked)', full: true },
  '29': { file: 'module3/29-log-details.png', desc: 'Log entry details', full: false }
};

async function main() {
  console.log('📸 Simple Screenshot Capture Tool\n');
  console.log('How it works:');
  console.log('  1. Browser opens to Cloudflare');
  console.log('  2. You navigate manually to each screen');
  console.log('  3. Type screenshot number to capture');
  console.log('  4. We save it automatically\n');
  
  ensureDirectories();
  
  const browser = await chromium.launch({ 
    headless: false,
    args: ['--start-maximized']
  });
  
  const context = await browser.newContext({ 
    viewport: CONFIG.viewport 
  });
  
  const page = await context.newPage();
  
  // Open Cloudflare
  console.log('🌐 Opening Cloudflare Dashboard...\n');
  await page.goto('https://dash.cloudflare.com');
  
  console.log('📋 Available Screenshots:\n');
  console.log('MODULE 1 - Introduction:');
  console.log('  01 - Dashboard home');
  console.log('  02 - Account menu\n');
  
  console.log('MODULE 2 - Cloudflare Pages:');
  console.log('  03 - Workers & Pages menu');
  console.log('  04 - Create Pages dialog');
  console.log('  05 - Upload assets');
  console.log('  06 - Project name');
  console.log('  07 - File upload');
  console.log('  09 - Deployment success');
  console.log('  10 - Project dashboard');
  console.log('  11 - Live website');
  console.log('  13 - Custom domains');
  console.log('  14 - Analytics');
  console.log('  15 - Deployments list\n');
  
  console.log('MODULE 3 - DNS Security:');
  console.log('  16 - Zero Trust dashboard');
  console.log('  17 - Gateway firewall');
  console.log('  18 - Create policy');
  console.log('  19 - Security categories');
  console.log('  20 - Policy created');
  console.log('  21 - Multiple policies');
  console.log('  22 - DNS locations');
  console.log('  23 - DNS location details');
  console.log('  24 - Chrome DNS settings');
  console.log('  25 - Firefox DNS settings');
  console.log('  26 - Block page');
  console.log('  27 - DNS logs');
  console.log('  28 - Filtered logs');
  console.log('  29 - Log details\n');
  
  console.log('Commands:');
  console.log('  [number] - Capture that screenshot');
  console.log('  list     - Show this list again');
  console.log('  status   - Show captured screenshots');
  console.log('  quit     - Exit\n');
  
  let captured = [];
  
  while (true) {
    const input = await question('Enter command (number/list/status/quit): ');
    const cmd = input.trim().toLowerCase();
    
    if (cmd === 'quit' || cmd === 'exit' || cmd === 'q') {
      console.log('\n👋 Exiting...');
      break;
    }
    
    if (cmd === 'list' || cmd === 'l') {
      console.log('\n📋 Screenshot List:\n');
      Object.entries(screenshots).forEach(([num, info]) => {
        const status = captured.includes(num) ? '✅' : '⬜';
        console.log(`  ${status} ${num} - ${info.desc}`);
      });
      console.log('');
      continue;
    }
    
    if (cmd === 'status' || cmd === 's') {
      console.log(`\n📊 Status: ${captured.length}/${Object.keys(screenshots).length} captured`);
      console.log('Captured:', captured.sort().join(', ') || 'none');
      console.log('Missing:', Object.keys(screenshots).filter(n => !captured.includes(n)).sort().join(', ') || 'none');
      console.log('');
      continue;
    }
    
    // Check if it's a screenshot number
    const num = cmd.padStart(2, '0');
    if (screenshots[num]) {
      const shot = screenshots[num];
      console.log(`\n📸 Capturing: ${shot.desc}`);
      console.log(`   File: ${shot.file}`);
      console.log(`   Full page: ${shot.full ? 'Yes' : 'No'}`);
      
      const confirm = await question('   Ready? (Enter = yes, any key = cancel): ');
      if (confirm === '') {
        await takeScreenshot(page, shot.file, shot.full);
        if (!captured.includes(num)) {
          captured.push(num);
        }
        console.log(`   ✅ Captured! (${captured.length}/${Object.keys(screenshots).length})\n`);
      } else {
        console.log('   ❌ Cancelled\n');
      }
    } else {
      console.log(`❌ Unknown command: ${input}`);
      console.log('   Type a number (01-29), "list", "status", or "quit"\n');
    }
  }
  
  await browser.close();
  rl.close();
  
  console.log('\n✅ Screenshot session complete!');
  console.log(`   📸 Captured: ${captured.length}/${Object.keys(screenshots).length}`);
  console.log(`   📁 Location: ${CONFIG.screenshotDir}\n`);
}

main().catch(error => {
  console.error('❌ Error:', error);
  rl.close();
  process.exit(1);
});
