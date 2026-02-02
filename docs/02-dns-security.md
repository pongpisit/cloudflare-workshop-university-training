# Module 2: DNS Security - Block Malware Downloads

**Duration:** 45 minutes

## Objective

Configure DNS filtering to block malware, phishing, and prevent malicious file downloads using Cloudflare Gateway.

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

## Step 4: Create Allow List for Important Domains (Optional)

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

## Step 5: Get Your DNS Location

1. In the left sidebar, click **Networks**
2. Click **Resolvers & Proxies**
3. Click **DNS Locations** tab
4. You should see a default location listed
5. Click on the location name
6. Find and copy the **DoH subdomain**
   - It looks like: `https://xxxxx.cloudflare-gateway.com/dns-query`
7. **Keep this URL** - you'll need it in the next step

---

## Step 6: Configure Browser to Use DoH

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

## Step 7: Test Malware Download Blocking

### Test 1: EICAR Test File (Safe Malware Test)

1. Open a new browser tab
2. Go to: **https://www.eicar.org**
3. Try to download the EICAR test file:
   - Click on "Download" or "EICAR test files"
   - Try to download `eicar.com` or `eicar.com.txt`

4. **Expected Result:**
   - The download should be **blocked**
   - You may see a Cloudflare Gateway block page
   - Or the download will fail silently

### Test 2: Known Malware Domain

1. Try to visit: `http://malware.testing.google.test/testing/malware/`
2. **Expected Result:**
   - **Cloudflare Gateway block page** appears
   - Message explains why it was blocked
   - Shows which security category matched

### Test 3: Phishing Site Test

1. Try to visit: `http://testsafebrowsing.appspot.com/s/phishing.html`
2. **Expected Result:**
   - Site is blocked by Cloudflare Gateway
   - Block page shows "Phishing" category

**✅ If all tests are blocked, your DNS security is working correctly!**

---

## Step 8: View DNS Logs

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

## Step 9: Filter and Search Logs

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
- ✅ DNS security policy created
- ✅ Malware, phishing, and C2 blocking enabled
- ✅ DoH configured in browser
- ✅ Tested malware download blocking (EICAR test)
- ✅ Tested phishing site blocking
- ✅ Viewed DNS logs showing blocked threats

---

## What You've Accomplished

**Malware Download Protection:**
- ✅ Malware downloads blocked at DNS level
- ✅ Phishing sites blocked before access
- ✅ Command & Control servers blocked
- ✅ Spyware and cryptomining blocked
- ✅ Works on all devices using your DNS

**How It Works:**
1. User tries to download malware or visit malicious site
2. DNS query is sent to Cloudflare Gateway
3. Gateway checks domain against threat intelligence
4. If malicious, DNS query is blocked
5. User sees block page or download fails
6. Threat is logged for review

**Key Benefits:**
- No software installation required
- Works through DNS (invisible to users)
- Protects all devices on the network
- Real-time threat intelligence updates
- Complete visibility in logs

---

## Workshop Complete!

You've successfully configured DNS security to block malware downloads and protect your network from threats using Cloudflare Gateway.
