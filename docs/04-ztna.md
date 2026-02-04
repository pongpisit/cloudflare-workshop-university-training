# Module 4: Zero Trust Network Access (ZTNA)

**Duration:** 45 minutes

## Objective

Learn how to securely expose internal applications without VPN using Cloudflare Zero Trust Network Access (ZTNA).

---

## What is ZTNA?

**Zero Trust Network Access (ZTNA)** replaces traditional VPNs with identity-based access control. Instead of granting network-level access, ZTNA provides application-level access based on user identity, device posture, and context.

### How ZTNA Works

```
┌──────────┐                    ┌─────────────────────────────┐
│  Remote  │    Browser/WARP    │   Cloudflare Network        │
│   User   │ ──────────────────►│                             │
└──────────┘                    │  ┌─────────────────────┐    │
                                │  │  Access Policies    │    │
                                │  │  • Identity Check   │    │
                                │  │  • Device Posture   │    │
                                │  └──────────┬──────────┘    │
                                │             │               │
                                └─────────────┼───────────────┘
                                              │
                                ┌─────────────┼───────────────┐
                                │             ▼               │
                                │  ┌─────────────────────┐    │
                                │  │  Cloudflare Tunnel  │    │
                                │  │   (cloudflared)     │    │
                                │  └──────────┬──────────┘    │
                                │             │               │
                                │             ▼               │
                                │  ┌─────────────────────┐    │
                                │  │ Private Application │    │
                                │  │ (Internal Network)  │    │
                                │  └─────────────────────┘    │
                                │      Your Network           │
                                └─────────────────────────────┘
```

### ZTNA Benefits

- ✅ **No VPN needed** - Access via browser
- ✅ **Identity-based** - Not network-based access
- ✅ **Per-application control** - Granular permissions
- ✅ **No inbound firewall rules** - Outbound connections only
- ✅ **Works from anywhere** - Remote access made simple

---

## Prerequisites

Before starting this module:
- ✅ Cloudflare account created (Module 1)
- ✅ Zero Trust organization configured (Module 3)
- ✅ Access to a server or VM to install Cloudflare Tunnel

---

## Step 1: Install Sample Application (Netdata)

For this workshop, we'll install **Netdata** as a sample internal application to expose via ZTNA.

### 1.1 Install Netdata on Your Server

If you have an Ubuntu server or VM, run this command:

```bash
wget -O /tmp/netdata-kickstart.sh https://get.netdata.cloud/kickstart.sh && sh /tmp/netdata-kickstart.sh
```

**What this does:**
- Downloads and installs Netdata monitoring agent
- Starts Netdata service automatically
- Exposes a web dashboard on **port 19999**

### 1.2 Verify Netdata is Running

```bash
sudo systemctl status netdata
```

You should see: `Active: active (running)`

### 1.3 Test Local Access

```bash
curl http://localhost:19999
```

You should see HTML content from the Netdata dashboard.

> **Note:** If you don't have a server available, you can use any local web application running on your computer for this lab.

---

## Step 2: Create Cloudflare Tunnel

### 2.1 Access Tunnel Creation

1. Go to: **https://one.dash.cloudflare.com**
2. In the left sidebar, click **Networks**
3. Click **Tunnels**
4. Click **Create a tunnel**

### 2.2 Select Connector Type

1. Select **Cloudflared** as the connector type
2. Click **Next**

### 2.3 Name Your Tunnel

1. Enter a **tunnel name** (e.g., `university-lab-tunnel`)
2. Click **Save tunnel**

---

## Step 3: Install Cloudflare Tunnel Connector

### 3.1 Select Your Environment

Cloudflare will display installation instructions tailored to your system.

1. **Select your Operating System:**
   - Windows
   - macOS
   - Linux (Debian/Ubuntu, CentOS/RHEL)
   - Docker

2. **Select your Architecture:**
   - 64-bit (most common)
   - 32-bit
   - ARM
   - ARM64

### 3.2 Copy and Run Installation Command

1. **Copy the command** provided by Cloudflare
   - The command includes your unique tunnel token
   - Example format: `sudo cloudflared service install <your-token>`

2. **Run the command** on your server
   - Open terminal/SSH to your server
   - Paste and execute the command
   - The connector will install and start automatically

3. **Wait for connector to appear**
   - The dashboard will show your connector status
   - Status should change to **"Connected"** (green)

4. Click **Next** to continue

> **Important:** The installation command contains your unique tunnel token. Do not share this token.

### 3.3 Verify Connector Status

Your connector should show:
- **Status:** Connected (green indicator)
- **Version:** Latest cloudflared version
- **Origin:** Your server's hostname

---

## Step 4: Configure Public Hostname

Now we'll expose the Netdata dashboard through the tunnel.

### 4.1 Add Public Hostname

1. In the tunnel configuration, go to **Public Hostname** tab
2. Click **Add a public hostname**

### 4.2 Configure Hostname for Netdata

Fill in the following fields:

| Field | Value | Description |
|-------|-------|-------------|
| **Subdomain** | `netdata` | Your app subdomain |
| **Domain** | Select your domain | From dropdown (if you have one) |
| **Path** | Leave empty | No specific path needed |
| **Type** | `HTTP` | Netdata uses HTTP |
| **URL** | `localhost:19999` | Netdata's default port |

3. Click **Save hostname**

> **Note:** If you don't have a custom domain, Cloudflare will provide a temporary `.trycloudflare.com` domain for testing.

### 4.3 Your Application URL

Your Netdata will be accessible at:
- With custom domain: `https://netdata.yourdomain.com`
- With temporary domain: `https://netdata-xxx.trycloudflare.com`

---

## Step 5: Create Access Application

Protect your application with Cloudflare Access policies.

### 5.1 Navigate to Access Applications

1. In the left sidebar, click **Access**
2. Click **Applications**
3. Click **Add an application**
4. Select **Self-hosted**

### 5.2 Configure Application

**Application Configuration:**

1. **Application name:** `Netdata Dashboard`
2. **Session Duration:** `24 hours`
3. **Application domain:** 
   - **Subdomain:** `netdata`
   - **Domain:** Select your domain

4. **Identity providers:** Select at least one:
   - ✅ **One-time PIN** (simplest for testing)
   - Azure AD
   - Google Workspace
   - GitHub
   - Okta

5. Click **Next**

---

## Step 6: Create Access Policy

### 6.1 Add Policy

1. **Policy name:** `Allow University Users`
2. **Action:** `Allow`

### 6.2 Configure Include Rules

Define who can access the application.

**Option 1: Email-based access**

| Selector | Operator | Value |
|----------|----------|-------|
| Emails | in | your.email@university.edu |

**Option 2: Domain-based access**

| Selector | Operator | Value |
|----------|----------|-------|
| Emails ending in | matches | @university.edu |

**Option 3: Everyone (for testing only)**

| Selector | Operator | Value |
|----------|----------|-------|
| Everyone | - | - |

> **Recommendation:** For this lab, use "Emails" with your own email address for testing.

### 6.3 Additional Rules (Optional)

You can add **Require** rules for additional security:

| Rule Type | Selector | Value |
|-----------|----------|-------|
| Require | Country | Thailand, United States |
| Require | IP ranges | Your university IP range |

### 6.4 Save Policy

1. Click **Next**
2. Review your configuration
3. Click **Add application**

---

## Step 7: Test Access

### 7.1 Access Your Application

1. Open a new browser tab
2. Go to your application URL:
   - `https://netdata.yourdomain.com` (or your `.trycloudflare.com` URL)

3. **Expected Result:**
   - You should see the **Cloudflare Access login page**
   - The page shows your configured identity providers

### 7.2 Authenticate

1. Select **One-time PIN** (or your configured provider)
2. Enter your email address
3. Check your email for the PIN code
4. Enter the PIN code
5. Click **Sign in**

### 7.3 View Your Application

After successful authentication:
- ✅ You should see the **Netdata dashboard**
- ✅ The application is now accessible securely
- ✅ No VPN required!

---

## Step 8: View Access Logs

### 8.1 Navigate to Logs

1. In the Zero Trust Dashboard, click **Insights**
2. Click **Logs**
3. Click **Access** tab

### 8.2 Review Access Events

You should see:
- **Successful authentications** - Green checkmark
- **User email** - Who accessed
- **Application name** - What was accessed
- **Timestamp** - When it happened
- **Action** - Allow/Block

### 8.3 Filter Logs

Use filters to find specific events:
- **User:** Filter by email
- **Application:** Filter by app name
- **Action:** Show only Allow or Block
- **Time range:** Last hour, day, week

---

## Step 9: Add More Applications (Optional)

You can expose multiple applications through the same tunnel.

### 9.1 Add Another Public Hostname

1. Go to **Networks** > **Tunnels**
2. Click on your tunnel name
3. Go to **Public Hostname** tab
4. Click **Add a public hostname**

### 9.2 Common Application Types

| Type | URL Format | Use Case |
|------|------------|----------|
| HTTP | `http://localhost:8080` | Web applications |
| HTTPS | `https://localhost:443` | Secure web apps |
| SSH | `ssh://localhost:22` | SSH access via browser |
| RDP | `rdp://localhost:3389` | Remote desktop |

### 9.3 Example: Expose SSH

1. **Subdomain:** `ssh`
2. **Type:** `SSH`
3. **URL:** `ssh://localhost:22`
4. Save and create a corresponding Access application

Access via browser: `https://ssh.yourdomain.com`

---

## Troubleshooting

### Issue: "Tunnel not connecting"

**Solutions:**
- Check cloudflared service is running: `sudo systemctl status cloudflared`
- Restart the service: `sudo systemctl restart cloudflared`
- Check firewall allows outbound port 443
- View connector status in **Networks** > **Tunnels**

### Issue: "Access denied"

**Solutions:**
- Verify your email matches the policy rules
- Check the Access policy includes your email
- Go to **Insights** > **Logs** (Access tab) to see denial reason
- Verify application domain matches exactly

### Issue: "Application not loading"

**Solutions:**
- Verify tunnel is healthy (green status)
- Check the service URL in public hostname configuration
- Verify the application is running locally: `curl http://localhost:19999`
- Check tunnel logs: `sudo journalctl -u cloudflared -f`

### Issue: "Certificate errors"

**Solutions:**
- Wait a few minutes for DNS propagation
- Verify hostname matches configuration exactly
- Clear browser cache and try again

---

## ✅ Checkpoint

You should now have:
- ✅ Cloudflare Tunnel installed and running
- ✅ Netdata (or sample app) exposed via tunnel
- ✅ Access application configured
- ✅ Access policy protecting your application
- ✅ Successfully authenticated and accessed your app
- ✅ Viewed access logs

---

## What You Learned

| Skill | Completed |
|-------|-----------|
| Understand ZTNA concepts | ✅ |
| Create Cloudflare Tunnel | ✅ |
| Install tunnel connector | ✅ |
| Configure public hostname | ✅ |
| Create Access application | ✅ |
| Create Access policy | ✅ |
| Test secure access | ✅ |
| View access logs | ✅ |

---

## Key Takeaways

1. **ZTNA replaces VPN** - No need for traditional VPN infrastructure
2. **Identity-based access** - Access based on who you are, not where you are
3. **Zero trust principle** - Never trust, always verify
4. **No inbound firewall rules** - Tunnel makes outbound connections only
5. **Browser-based access** - No client software required (except for TCP/UDP)

---

## Next Steps

Continue to explore Cloudflare Zero Trust:
- Add more applications to your tunnel
- Configure device posture checks
- Set up Access groups for easier management
- Explore private network routing for entire subnets

---

## Resources

- [Cloudflare Tunnel Documentation](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)
- [Access Policies Documentation](https://developers.cloudflare.com/cloudflare-one/policies/access/)
- [Zero Trust Dashboard](https://one.dash.cloudflare.com)
