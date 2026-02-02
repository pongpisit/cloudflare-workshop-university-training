# Module 3: DNS Security - Protect Your Campus

**Duration:** 60 minutes

## Why DNS Security Matters for Universities

### Campus Security Challenges

**Thousands of Devices:**
- Student laptops
- Faculty computers
- Mobile devices
- IoT devices
- Guest devices

**Common Threats:**
- Malware infections
- Phishing attacks
- Ransomware
- Data breaches
- Inappropriate content
- Bandwidth abuse

**Traditional Solutions:**
- Expensive hardware firewalls
- Complex VPN setups
- Difficult to manage
- Doesn't protect off-campus
- High maintenance costs

### Cloudflare Gateway Solution

**DNS-Level Protection:**
- Block threats before they reach devices
- Works on and off campus
- No software to install
- Protects all devices
- Free for basic protection

**Key Benefits:**

✅ **Automatic Threat Blocking**
- Malware domains blocked
- Phishing sites prevented
- Ransomware stopped
- Updated in real-time

✅ **Content Filtering**
- Block inappropriate content
- Comply with regulations
- Protect minors
- Reduce liability

✅ **Bandwidth Management**
- Block streaming sites (optional)
- Reduce network congestion
- Prioritize academic traffic

✅ **Complete Visibility**
- See all DNS queries
- Identify threats
- Audit compliance
- Generate reports

✅ **Off-Campus Protection**
- Students protected at home
- Faculty protected while traveling
- No VPN required
- Works on any network

### Real University Benefits

**IT Department:**
- Reduce security incidents by 80%
- Less time fighting malware
- Easier compliance reporting
- Lower infrastructure costs

**Students:**
- Protected from threats automatically
- Faster, safer browsing
- Works on personal devices
- No complex setup

**Faculty:**
- Secure research data
- Safe remote access
- Protect sensitive information
- Peace of mind

**Administration:**
- Meet compliance requirements
- Reduce liability
- Lower security costs
- Better incident response

## Step 1: Access Zero Trust Dashboard

1. Go to https://one.dash.cloudflare.com
2. Or: Dashboard → Click **"Zero Trust"** in left sidebar
3. You should see Zero Trust Dashboard

## Step 2: Create DNS Security Policy

### Block Security Threats

1. Click **"Gateway"** in left sidebar
2. Click **"Firewall policies"**
3. Click **"DNS"** tab
4. Click **"Add a policy"**
5. Policy name: `Block All Security Threats`
6. Under "Traffic":
   - Click **"Add condition"**
   - Select **"Security Categories"**
   - Select **"in"**
   - Select **"All security risks"**
7. Under "Action": Select **"Block"**
8. Click **"Create policy"**

✅ Security threats are now blocked

### Block Content Categories (Optional)

1. Click **"Add a policy"**
2. Policy name: `Block Inappropriate Content`
3. Under "Traffic":
   - Click **"Add condition"**
   - Select **"Content Categories"**
   - Select **"in"**
   - Select **"Gambling"**
   - Click **"+ Or"**
   - Select **"Adult Themes"**
4. Under "Action": Select **"Block"**
5. Click **"Create policy"**

✅ Content categories are now blocked

### Create Allow List (Important!)

1. Click **"Add a policy"**
2. Policy name: `Allow University Domains`
3. Under "Traffic":
   - Click **"Add condition"**
   - Select **"Domain"**
   - Select **"in"**
   - Enter: `university.edu` (your domain)
   - Click **"+ Or"**
   - Enter: `*.university.edu`
4. Under "Action": Select **"Allow"**
5. Click **"Create policy"**
6. **IMPORTANT:** Drag this policy to position #1 (top)

✅ University domains are always allowed

**Policy order should be:**
```
1. Allow University Domains
2. Block All Security Threats
3. Block Inappropriate Content
```

## Step 3: Get Your DNS Location

1. Click **"Networks"** in left sidebar
2. Click **"DNS locations"**
3. Click on your location name
4. Find **"DNS over HTTPS (DoH)"** section
5. Copy the URL (looks like):
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```
6. Keep this URL - you'll need it next!

## Step 4: Configure Browser DNS

### Chrome / Edge

1. Open Chrome or Edge
2. Click three dots (⋮) → **Settings**
3. Click **"Privacy and security"**
4. Click **"Security"**
5. Scroll to **"Use secure DNS"**
6. Select **"With Custom"**
7. Paste your DoH URL
8. Click outside the box to save

✅ Chrome/Edge now uses Cloudflare Gateway

### Firefox

1. Open Firefox
2. Click three lines (≡) → **Settings**
3. Scroll to **"Network Settings"**
4. Click **"Settings..."**
5. Check **"Enable DNS over HTTPS"**
6. Select **"Custom"**
7. Paste your DoH URL
8. Click **"OK"**

✅ Firefox now uses Cloudflare Gateway

## Step 5: Test DNS Filtering

### Test 1: Block Security Threats

1. Try visiting: `http://malware.testing.google.test/testing/malware/`
2. You should see: Cloudflare Gateway block page
3. Message: "This site has been blocked"

✅ Security filtering works!

### Test 2: Block Content (if configured)

1. Try visiting a gambling site (e.g., `bet365.com`)
2. You should see: Cloudflare Gateway block page

✅ Content filtering works!

### Test 3: Allow List

1. Visit your university website
2. Should load normally (no block page)

✅ Allow list works!

**If sites aren't blocked:**
- Wait 2-3 minutes for policies to activate
- Clear browser cache (Ctrl+Shift+Delete)
- Restart browser
- Check DoH URL is correct

## Step 6: View DNS Logs

1. Go to Zero Trust Dashboard
2. Click **"Logs"** in left sidebar
3. Click **"Gateway"**
4. Click **"DNS"** tab

You'll see:
- All DNS queries
- Which were blocked/allowed
- Which policy matched
- Timestamps

**Filter logs:**
- Click **"Add filter"**
- Select **"Action"** → **"Block"**
- See only blocked queries

**Export logs:**
- Click **"Export"**
- Select CSV or JSON
- Choose time range

## Troubleshooting

**Policies not working:**
- Wait 2-3 minutes
- Verify DoH URL (no spaces)
- Check policy order (Allow first)
- Restart browser

**Can't access important sites:**
- Add to Allow list
- Make sure Allow policy is #1
- Check domain spelling
- Use wildcard: `*.domain.com`

**DoH not working:**
- Copy URL exactly
- Restart browser
- Try different browser
- Check browser supports DoH

## Summary

You've completed:
- ✅ Created DNS security policies
- ✅ Blocked threats and content
- ✅ Set up Allow list
- ✅ Configured browser DoH
- ✅ Tested filtering
- ✅ Viewed logs

Your network is now protected!

## Next Steps

**Want to learn more about building advanced policies?**

Continue to [Module 4: Rule Expressions](./04-rule-expressions.md) to master:
- Traffic, Identity, and Device signals
- Logical operators and complex conditions
- Working with Lists for scalable policies
- Policy evaluation order and best practices

Or see the [Quick Reference](../QUICK-REFERENCE.md) for commands and navigation tips.

- Monitor logs regularly
- Adjust policies as needed
- Add more domains to Allow list
- Explore other Zero Trust features
