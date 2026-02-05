# Module 4: Zero Trust Network Access (ZTNA)

**Duration:** 45 minutes

## Objective

Securely expose internal applications without VPN using Cloudflare Tunnel and Access policies.

---

## Step 1: Install Sample Application (Netdata)

1. Run this command on your Ubuntu server:

```bash
wget -O /tmp/netdata-kickstart.sh https://get.netdata.cloud/kickstart.sh && sh /tmp/netdata-kickstart.sh
```

2. Verify Netdata is running:

```bash
sudo systemctl status netdata
```

3. Test local access:

```bash
curl http://localhost:19999
```

---

## Step 2: Create Cloudflare Tunnel

1. Go to: **https://one.dash.cloudflare.com**
2. Click **Networks** > **Tunnels**
3. Click **Create a tunnel**
4. Select **Cloudflared** connector type
5. Click **Next**
6. Enter tunnel name: `university-lab-tunnel`
7. Click **Save tunnel**

---

## Step 3: Install Cloudflare Tunnel Connector

1. Select your **Operating System** (Linux, macOS, Windows, Docker)
2. Select your **Architecture** (64-bit recommended)
3. Copy the installation command provided by Cloudflare
4. Run the command on your server:

```bash
sudo cloudflared service install <your-token>
```

5. Wait for connector status to show **"Connected"** (green)
6. Click **Next**

---

## Step 4: Configure Public Hostname

1. Go to **Public Hostname** tab
2. Click **Add a public hostname**
3. Fill in the fields:
   - **Subdomain:** `netdata`
   - **Domain:** Select your domain
   - **Path:** Leave empty
   - **Type:** `HTTP`
   - **URL:** `localhost:19999`
4. Click **Save hostname**

---

## Step 5: Create Access Application

1. Click **Access** > **Applications**
2. Click **Add an application**
3. Select **Self-hosted**
4. Configure:
   - **Application name:** `Netdata Dashboard`
   - **Session Duration:** `24 hours`
   - **Subdomain:** `netdata`
   - **Domain:** Select your domain
5. Select **Identity providers:** ✅ One-time PIN
6. Click **Next**

---

## Step 6: Create Access Policy

1. **Policy name:** `Allow University Users`
2. **Action:** `Allow`
3. Configure **Include** rules:
   - **Selector:** Emails
   - **Operator:** in
   - **Value:** your.email@university.edu
4. Click **Next**
5. Click **Add application**

---

## Step 7: Test Access

1. Open browser and go to: `https://netdata.yourdomain.com`
2. You should see **Cloudflare Access login page**
3. Select **One-time PIN**
4. Enter your email address
5. Check email for PIN code
6. Enter PIN and click **Sign in**
7. **Expected Result:** Netdata dashboard loads successfully

---

## Step 8: View Access Logs

1. Click **Insights** > **Logs**
2. Click **Access** tab
3. Review access events:
   - Successful authentications (green)
   - User email
   - Application name
   - Timestamp

---

## Troubleshooting

**Tunnel not connecting:**
- Check service: `sudo systemctl status cloudflared`
- Restart: `sudo systemctl restart cloudflared`

**Access denied:**
- Verify email matches policy
- Check logs: **Insights** > **Logs** > **Access**

**Application not loading:**
- Verify tunnel status is green
- Test locally: `curl http://localhost:19999`

---

## ✅ Checkpoint

You should now have:
- ✅ Cloudflare Tunnel installed and running
- ✅ Netdata exposed via tunnel
- ✅ Access policy protecting your application
- ✅ Successfully authenticated and accessed your app
- ✅ Viewed access logs
