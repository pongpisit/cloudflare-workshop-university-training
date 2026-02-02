# Module 3: DNS Security Setup

**Duration:** 45 minutes

## Objective

Configure DNS filtering to block security threats and test using DNS over HTTPS (DoH) in your browser.

---

## Step 1: Access Zero Trust Dashboard

1. Go to: **https://dash.cloudflare.com**
2. In the **left sidebar**, click **Zero Trust**
3. If this is your first time:
   - You'll see a welcome screen
   - Click **Get started** or **Continue**
   - Choose a **team name** (e.g., `my-university-team`)
   - Click **Continue**
4. You'll be redirected to: **https://one.dash.cloudflare.com**

---

## Step 2: Navigate to DNS Policies

1. In the Zero Trust Dashboard left sidebar:
2. Click **Traffic policies**
3. Click **Firewall policies**
4. Click **DNS** tab

---

## Step 3: Create Security Threat Blocking Policy

1. Click **Add a policy** button
2. Fill in the policy details:

**Policy name:** `Block Security Threats`

**Traffic section:**
3. Click **Add condition**
4. **Selector:** Select `Security Categories`
5. **Operator:** Select `in`
6. **Value:** Check these categories:
   - ✅ Malware
   - ✅ Phishing
   - ✅ Command and Control & Botnet
   - ✅ Spyware
   - ✅ Cryptomining

**Action section:**
7. **Action:** Select `Block`
8. ✅ Enable **Display block page**

9. Click **Save policy**

---

## Step 4: Create Content Filtering Policy (Optional)

1. Click **Add a policy** button
2. Fill in the policy details:

**Policy name:** `Block Adult Content`

**Traffic section:**
3. Click **Add condition**
4. **Selector:** Select `Content Categories`
5. **Operator:** Select `in`
6. **Value:** Check categories you want to block:
   - ✅ Adult Themes
   - ✅ Gambling
   - ✅ Illegal Activities

**Action section:**
7. **Action:** Select `Block`
8. ✅ Enable **Display block page**

9. Click **Save policy**

---

## Step 5: Create Allow List (Optional)

If you need to allow specific domains:

1. Click **Add a policy** button
2. **Policy name:** `Allow Important Domains`

**Traffic section:**
3. Click **Add condition**
4. **Selector:** Select `Domain`
5. **Operator:** Select `in`
6. **Value:** Enter domains (one per line):
   ```
   google.com
   microsoft.com
   cloudflare.com
   ```

**Action section:**
7. **Action:** Select `Allow`
8. Click **Save policy**

**Important:** Drag this policy to the **top** of the list (Allow policies should be first)

---

## Step 6: Get Your DNS Location

1. In the left sidebar, click **Networks**
2. Click **Resolvers & Proxies**
3. Click **DNS Locations** tab
4. You should see a default location listed
5. Click on the location name
6. Find and copy the **DoH subdomain**
   - It looks like: `https://xxxxx.cloudflare-gateway.com/dns-query`
7. **Keep this URL** - you'll need it in the next step

---

## Step 7: Configure Browser to Use DoH

### For Chrome/Edge:

1. Open Chrome or Edge
2. Go to **Settings**
3. Search for: `secure dns`
4. Click **Security** (or **Privacy and security**)
5. Find **Use secure DNS**
6. Select **With Custom**
7. Paste your DoH URL: `https://xxxxx.cloudflare-gateway.com/dns-query`
8. Click **Save** or close settings

### For Firefox:

1. Open Firefox
2. Go to **Settings**
3. Search for: `dns`
4. Scroll to **Network Settings**
5. Click **Settings** button
6. ✅ Enable **Enable DNS over HTTPS**
7. Select **Custom**
8. Paste your DoH URL: `https://xxxxx.cloudflare-gateway.com/dns-query`
9. Click **OK**

### For Safari (macOS):

1. Open **System Settings**
2. Go to **Network**
3. Select your active connection (Wi-Fi or Ethernet)
4. Click **Details**
5. Click **DNS** tab
6. Click **+** under DNS Servers
7. Add: `1.1.1.1` and `1.0.0.1`
8. Note: Safari uses system DNS settings

---

## Step 8: Test Security Blocking

1. Open a new browser tab
2. Try to visit a test malware domain:
   - Visit: `http://malware.testing.google.test/testing/malware/`
   - Or search for "EICAR test file" and try to download it

3. You should see:
   - **Cloudflare Gateway block page**
   - Message explaining why it was blocked
   - This confirms your DNS filtering is working!

---

## Step 9: Test Content Filtering (If Configured)

If you set up content filtering:

1. Try to visit a gambling or adult website
2. You should see the Cloudflare block page
3. This confirms content filtering is working

---

## Step 10: View DNS Logs

1. Go back to Zero Trust Dashboard: **https://one.dash.cloudflare.com**
2. In the left sidebar, click **Insights**
3. Click **Logs**
4. Click **DNS** tab
5. You should see your DNS queries listed

**Check the logs:**
- **Allowed queries** - Green checkmark
- **Blocked queries** - Red X
- **Policy matched** - Shows which policy blocked it
- **Query details** - Domain, timestamp, action

---

## Step 11: Filter and Search Logs

1. Use the **Filter** options:
   - Filter by **Action** (Allowed/Blocked)
   - Filter by **Policy**
   - Filter by **Time range**

2. Click on any query to see details:
   - Source IP
   - Query type
   - Policy applied
   - Timestamp

---

## ✅ Checkpoint

You should now have:
- ✅ Zero Trust account configured
- ✅ DNS policies created (Block threats)
- ✅ Optional content filtering configured
- ✅ DoH configured in browser
- ✅ Tested blocking functionality
- ✅ Viewed DNS logs

---

## What You've Accomplished

**Security Protection:**
- Malware domains blocked automatically
- Phishing sites blocked
- Command & Control servers blocked
- Content filtering (if configured)

**Visibility:**
- All DNS queries logged
- See what's being blocked
- Identify threats in real-time

**No Software Required:**
- Works through DNS
- No agents to install
- Protects all devices using your DNS

---

## Next Steps

**Optional Advanced Module:**
Continue to [Module 4: Advanced Rule Expressions](./04-rule-expressions.md) to learn how to build complex policies with multiple conditions.

**Or finish here** - You've completed the core workshop!
