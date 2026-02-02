# Screenshot Automation Scripts

Automated screenshot capture for the Cloudflare Workshop using Playwright.

## Prerequisites

- Node.js 16+ installed
- Cloudflare account with access to Dashboard and Zero Trust

## Setup

1. **Install dependencies:**
   ```bash
   cd scripts
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npm run install-browsers
   ```

3. **Configure credentials:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Cloudflare credentials:
   ```
   CLOUDFLARE_EMAIL=your-email@example.com
   CLOUDFLARE_PASSWORD=your-password
   ```

## Usage

### Run Screenshot Automation

```bash
npm run screenshots
```

The script will:
- ✅ Log into Cloudflare Dashboard
- ✅ Navigate through all workshop modules
- ✅ Capture 29 screenshots automatically
- ✅ Save to `assets/screenshots/` folders
- ✅ Highlight important UI elements

### What Gets Captured

**Module 1 (2 screenshots):**
- Dashboard home
- Account menu

**Module 2 (13 screenshots):**
- Workers & Pages flow
- Pages creation and deployment
- Live website
- Optional: SSL, custom domains, analytics

**Module 3 (14 screenshots):**
- Zero Trust dashboard
- Gateway policies
- DNS locations
- Browser settings (manual)
- Block page (manual)
- DNS logs

### Manual Steps

Some screenshots require manual interaction:
- **Module 2:** File upload (you'll be prompted)
- **Module 3:** Browser DNS settings (Chrome & Firefox)
- **Module 3:** Block page capture

The script will pause and prompt you when manual steps are needed.

## Configuration

Edit `take-screenshots.js` to customize:

```javascript
const CONFIG = {
  viewport: { width: 1920, height: 1080 },  // Screenshot resolution
  timeout: 30000,                            // Wait timeout
  headless: false                            // Show browser (true = hidden)
};
```

## Troubleshooting

### Login Issues
- Verify credentials in `.env`
- Check for 2FA (may need to disable temporarily)
- Try running with `headless: false` to see what's happening

### Screenshot Failures
- Increase timeout in CONFIG
- Check Cloudflare Dashboard hasn't changed UI
- Run with slower `slowMo` setting

### Missing Screenshots
- Check `assets/screenshots/` folders
- Review console output for errors
- Some screenshots require manual capture

## Output

Screenshots are saved to:
```
assets/screenshots/
├── module1/
│   ├── 01-dashboard-home.png
│   └── 02-account-menu.png
├── module2/
│   ├── 03-workers-pages-menu.png
│   ├── 04-create-pages.png
│   └── ... (13 total)
└── module3/
    ├── 16-zero-trust-dashboard.png
    ├── 17-gateway-firewall.png
    └── ... (14 total)
```

## Security

⚠️ **Important:**
- Never commit `.env` file to Git
- `.env` is already in `.gitignore`
- Use a test account if possible
- Consider using API tokens instead of passwords

## After Capturing

1. **Review screenshots:**
   ```bash
   ls -la ../assets/screenshots/module*
   ```

2. **Compress if needed:**
   ```bash
   # Use tools like ImageOptim, TinyPNG, or:
   npm install -g imagemin-cli
   imagemin ../assets/screenshots/**/*.png --out-dir=../assets/screenshots/
   ```

3. **Commit to Git:**
   ```bash
   cd ..
   git add assets/screenshots/
   git commit -m "Add workshop screenshots"
   git push origin main
   ```

## Alternative: Manual Screenshots

If automation doesn't work, use the manual guide:
- See `../SCREENSHOT-GUIDE.md` for detailed instructions
- Follow step-by-step for each screenshot
- Use built-in OS screenshot tools

## Support

Issues with the script? Check:
- [Playwright Documentation](https://playwright.dev)
- [SCREENSHOT-GUIDE.md](../SCREENSHOT-GUIDE.md) for manual approach
- GitHub Issues for this repository
