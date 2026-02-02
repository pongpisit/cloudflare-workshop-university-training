# Screenshot Guide for Workshop

This guide lists all screenshots needed for the workshop documentation.

## How to Take Screenshots

### Windows
- **Full screen:** Press `Windows + Print Screen`
- **Active window:** Press `Alt + Print Screen`
- **Snipping Tool:** Press `Windows + Shift + S`

### Mac
- **Full screen:** Press `Cmd + Shift + 3`
- **Selection:** Press `Cmd + Shift + 4`
- **Window:** Press `Cmd + Shift + 4`, then `Space`

### Tips
- Use **1920x1080** resolution for consistency
- Highlight important buttons/fields with red boxes (use Snipping Tool or Preview)
- Save as **PNG** format
- Use descriptive filenames

---

## Module 1: Introduction

### Screenshot 1: Dashboard Home
**Filename:** `01-dashboard-home.png`
**Location:** `assets/screenshots/module1/`

**What to capture:**
1. Go to https://dash.cloudflare.com
2. Log in
3. Capture full dashboard showing:
   - Left sidebar with all menu items
   - Home overview
   - Main sections visible

**Highlight:**
- Workers & Pages menu item
- Zero Trust menu item

---

### Screenshot 2: Account Menu
**Filename:** `02-account-menu.png`

**What to capture:**
1. Click your profile icon (top right)
2. Capture dropdown menu showing:
   - Account name
   - Settings
   - Logout

---

## Module 2: Cloudflare Pages

### Screenshot 3: Workers & Pages Menu
**Filename:** `03-workers-pages-menu.png`
**Location:** `assets/screenshots/module2/`

**What to capture:**
1. Click "Workers & Pages" in left sidebar
2. Capture the Workers & Pages overview page
3. Show "Create application" button

**Highlight:**
- "Create application" button (top right)

---

### Screenshot 4: Create Application - Pages Tab
**Filename:** `04-create-pages.png`

**What to capture:**
1. Click "Create application"
2. Capture modal showing:
   - Workers tab
   - **Pages tab** (selected)
   - "Upload assets" button
   - "Connect to Git" button

**Highlight:**
- Pages tab
- Upload assets button

---

### Screenshot 5: Upload Assets Page
**Filename:** `05-upload-assets.png`

**What to capture:**
1. Click "Upload assets"
2. Capture page showing:
   - "Create a new project" button
   - Instructions

**Highlight:**
- "Create a new project" button

---

### Screenshot 6: Project Name Input
**Filename:** `06-project-name.png`

**What to capture:**
1. Click "Create a new project"
2. Show project name input field
3. Example: `my-university-site` entered

**Highlight:**
- Project name field
- "Create project" button

---

### Screenshot 7: File Upload
**Filename:** `07-file-upload.png`

**What to capture:**
1. After creating project
2. Show file upload interface:
   - "Select from computer" button
   - Drag and drop area

**Highlight:**
- "Select from computer" button

---

### Screenshot 8: Deployment in Progress
**Filename:** `08-deploying.png`

**What to capture:**
1. After uploading file
2. Show deployment progress:
   - Progress bar
   - "Deploying..." message

---

### Screenshot 9: Deployment Success
**Filename:** `09-deployment-success.png`

**What to capture:**
1. After deployment completes
2. Show success screen:
   - Green checkmark
   - "Your site is live!" message
   - Site URL (e.g., `https://my-university-site.pages.dev`)
   - "Continue to project" button

**Highlight:**
- Site URL
- "Continue to project" button

---

### Screenshot 10: Project Dashboard
**Filename:** `10-project-dashboard.png`

**What to capture:**
1. Click "Continue to project"
2. Show project dashboard:
   - Deployments tab
   - Custom domains tab
   - Settings tab
   - "Visit site" button (top right)

**Highlight:**
- "Visit site" button

---

### Screenshot 11: Live Website
**Filename:** `11-live-website.png`

**What to capture:**
1. Click "Visit site"
2. Capture the deployed website in browser
3. Show full page with:
   - University department header
   - Content sections
   - Footer

**Highlight:**
- Browser address bar showing `.pages.dev` URL
- Padlock icon (HTTPS)

---

### Screenshot 12: SSL Certificate (Optional)
**Filename:** `12-ssl-certificate.png`

**What to capture:**
1. On live site, click padlock icon
2. Click "Connection is secure"
3. Click "Certificate is valid"
4. Show certificate details:
   - Issued by Cloudflare
   - Valid dates
   - TLS 1.3

---

### Screenshot 13: Custom Domains Tab (Optional)
**Filename:** `13-custom-domains.png`

**What to capture:**
1. In project dashboard, click "Custom domains" tab
2. Show "Set up a custom domain" button
3. Show any existing custom domains

---

### Screenshot 14: Analytics Tab (Optional)
**Filename:** `14-analytics.png`

**What to capture:**
1. Click "Analytics" tab
2. Show analytics dashboard:
   - Requests graph
   - Data transfer
   - Unique visitors

---

### Screenshot 15: Deployments List (Optional)
**Filename:** `15-deployments-list.png`

**What to capture:**
1. Click "Deployments" tab
2. Show list of deployments:
   - Deployment IDs
   - Timestamps
   - Status
   - Preview URLs

---

## Module 3: DNS Security

### Screenshot 16: Zero Trust Dashboard
**Filename:** `16-zero-trust-dashboard.png`
**Location:** `assets/screenshots/module3/`

**What to capture:**
1. Go to https://one.dash.cloudflare.com
2. Show Zero Trust home page:
   - Left sidebar menu
   - Gateway section
   - Access section
   - Networks section

**Highlight:**
- Gateway menu item

---

### Screenshot 17: Gateway Firewall Policies
**Filename:** `17-gateway-firewall.png`

**What to capture:**
1. Click "Gateway" → "Firewall policies"
2. Show DNS tab selected
3. Show "Add a policy" button
4. Show any existing policies

**Highlight:**
- DNS tab
- "Add a policy" button

---

### Screenshot 18: Create DNS Policy
**Filename:** `18-create-policy.png`

**What to capture:**
1. Click "Add a policy"
2. Show policy creation form:
   - Policy name field
   - Traffic conditions section
   - Action dropdown

**Highlight:**
- Policy name field
- "Add condition" button

---

### Screenshot 19: Security Categories Selector
**Filename:** `19-security-categories.png`

**What to capture:**
1. Click "Add condition"
2. Select "Security Categories"
3. Show dropdown with options:
   - All security risks
   - Malware
   - Phishing
   - etc.

**Highlight:**
- "All security risks" option

---

### Screenshot 20: Policy Created
**Filename:** `20-policy-created.png`

**What to capture:**
1. After creating "Block All Security Threats" policy
2. Show policy in list:
   - Policy name
   - Conditions
   - Action (Block)
   - Enabled toggle

---

### Screenshot 21: Multiple Policies
**Filename:** `21-multiple-policies.png`

**What to capture:**
1. After creating all policies
2. Show policy list with:
   - Allow University Domains (position 1)
   - Block All Security Threats (position 2)
   - Block Inappropriate Content (position 3)

**Highlight:**
- Policy order numbers
- Drag handles for reordering

---

### Screenshot 22: DNS Locations
**Filename:** `22-dns-locations.png`

**What to capture:**
1. Click "Networks" → "DNS locations"
2. Show DNS locations list
3. Show default location

**Highlight:**
- Location name (clickable)

---

### Screenshot 23: DNS Location Details
**Filename:** `23-dns-location-details.png`

**What to capture:**
1. Click on location name
2. Show location details page:
   - DNS over HTTPS (DoH) section
   - DoH URL
   - IPv4 addresses
   - IPv6 addresses

**Highlight:**
- DoH URL (blur sensitive parts if needed)
- Copy button

---

### Screenshot 24: Chrome DNS Settings
**Filename:** `24-chrome-dns-settings.png`

**What to capture:**
1. Open Chrome Settings
2. Go to Privacy and security → Security
3. Show "Use secure DNS" section:
   - "With Custom" selected
   - DoH URL entered

**Highlight:**
- "With Custom" radio button
- DoH URL field

---

### Screenshot 25: Firefox DNS Settings
**Filename:** `25-firefox-dns-settings.png`

**What to capture:**
1. Open Firefox Settings
2. Go to Network Settings
3. Show DNS over HTTPS settings:
   - "Enable DNS over HTTPS" checked
   - "Custom" selected
   - DoH URL entered

**Highlight:**
- Enable checkbox
- Custom option
- DoH URL field

---

### Screenshot 26: Block Page
**Filename:** `26-block-page.png`

**What to capture:**
1. Try visiting blocked site (e.g., malware test site)
2. Capture Cloudflare Gateway block page:
   - Cloudflare logo
   - "This site has been blocked" message
   - Reason for blocking
   - Request ID

**Highlight:**
- Block message
- Reason

---

### Screenshot 27: DNS Logs
**Filename:** `27-dns-logs.png`

**What to capture:**
1. Go to "Logs" → "Gateway" → "DNS"
2. Show DNS query logs:
   - Timestamp
   - Domain
   - Query type
   - Action (Allowed/Blocked)
   - Policy name

**Highlight:**
- Action column
- Policy column

---

### Screenshot 28: Filtered Logs (Blocked Only)
**Filename:** `28-filtered-logs.png`

**What to capture:**
1. Click "Add filter"
2. Filter by Action = Block
3. Show only blocked queries

**Highlight:**
- Filter applied indicator
- Blocked queries

---

### Screenshot 29: Log Details
**Filename:** `29-log-details.png`

**What to capture:**
1. Click on a log entry
2. Show detailed log information:
   - Full domain
   - Source IP
   - Policy matched
   - Timestamp
   - Query type

---

## Screenshot Organization

```
assets/
└── screenshots/
    ├── module1/
    │   ├── 01-dashboard-home.png
    │   └── 02-account-menu.png
    ├── module2/
    │   ├── 03-workers-pages-menu.png
    │   ├── 04-create-pages.png
    │   ├── 05-upload-assets.png
    │   ├── 06-project-name.png
    │   ├── 07-file-upload.png
    │   ├── 08-deploying.png
    │   ├── 09-deployment-success.png
    │   ├── 10-project-dashboard.png
    │   ├── 11-live-website.png
    │   ├── 12-ssl-certificate.png (optional)
    │   ├── 13-custom-domains.png (optional)
    │   ├── 14-analytics.png (optional)
    │   └── 15-deployments-list.png (optional)
    └── module3/
        ├── 16-zero-trust-dashboard.png
        ├── 17-gateway-firewall.png
        ├── 18-create-policy.png
        ├── 19-security-categories.png
        ├── 20-policy-created.png
        ├── 21-multiple-policies.png
        ├── 22-dns-locations.png
        ├── 23-dns-location-details.png
        ├── 24-chrome-dns-settings.png
        ├── 25-firefox-dns-settings.png
        ├── 26-block-page.png
        ├── 27-dns-logs.png
        ├── 28-filtered-logs.png
        └── 29-log-details.png
```

## Total Screenshots Needed

- **Module 1:** 2 screenshots
- **Module 2:** 13 screenshots (8 required + 5 optional)
- **Module 3:** 14 screenshots

**Total:** 29 screenshots

## After Taking Screenshots

1. **Resize if needed:** Keep width around 1200-1400px
2. **Compress:** Use tools like TinyPNG to reduce file size
3. **Add annotations:** Use red boxes/arrows for important elements
4. **Commit to Git:**
   ```bash
   git add assets/screenshots/
   git commit -m "Add workshop screenshots"
   git push origin main
   ```

## Adding Screenshots to Documentation

In each module markdown file, add images like this:

```markdown
![Dashboard Home](../assets/screenshots/module1/01-dashboard-home.png)
```

Or with caption:

```markdown
**Step 1: Open Dashboard**

![Cloudflare Dashboard showing main navigation](../assets/screenshots/module1/01-dashboard-home.png)

*Figure 1: Cloudflare Dashboard home page*
```

---

**Note:** You'll need to take these screenshots yourself as you go through the workshop steps. Follow the exact steps in each module to capture the screens at the right moment.
