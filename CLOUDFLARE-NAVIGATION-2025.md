# Cloudflare Dashboard Navigation Reference (2025)

**Last Updated:** January 2025

This document provides the current navigation paths in the Cloudflare Dashboard for workshop instructors and participants.

---

## Main Cloudflare Dashboard

**URL:** https://dash.cloudflare.com

### Primary Navigation Structure

The Cloudflare Dashboard uses a left sidebar navigation with the following main sections:

#### 1. **Home**
- Dashboard overview
- Quick actions
- Recent activity

#### 2. **Websites**
- Domain management
- DNS settings
- SSL/TLS certificates

#### 3. **Workers & Pages** (Under "Build" section)
- **Path:** Left Sidebar → Workers & Pages
- **Alternative:** Click "Workers & Pages" in main menu
- Create applications
- Manage deployments
- View analytics

**To access Pages:**
1. Click "Workers & Pages" in left sidebar
2. Click "Create application" button (top right)
3. Select "Pages" tab
4. Choose "Upload assets" or "Connect to Git"

#### 4. **Zero Trust** 
- **Path:** Left Sidebar → Zero Trust
- **Direct URL:** https://one.dash.cloudflare.com
- Gateway (DNS Security)
- Access (Application Access)
- Networks
- Logs

---

## Zero Trust Dashboard

**URL:** https://one.dash.cloudflare.com

### Navigation Structure

#### 1. **Home**
- Overview dashboard
- Quick stats

#### 2. **Gateway**
- **Firewall Policies:**
  - Path: Gateway → Firewall policies → DNS tab
  - Create DNS filtering rules
  - Manage security policies
  
- **DNS Locations:**
  - Path: Networks → DNS locations
  - Get DoH endpoints
  - Configure locations

#### 3. **Access**
- Application access control
- Identity providers
- Service tokens

#### 4. **Networks**
- **DNS Locations:**
  - Path: Networks → DNS locations
  - View DoH URLs
  - Manage locations
  
- **Tunnels:**
  - Cloudflare Tunnel configuration

#### 5. **Logs**
- **DNS Logs:**
  - Path: Logs → Gateway → DNS tab
  - View query logs
  - Filter and export
  
- **Access Logs:**
  - Path: Logs → Access
  - Authentication logs

#### 6. **Settings**
- Account settings
- Team management
- Billing

---

## Key Navigation Paths for Workshop

### Cloudflare Pages Deployment

**Current Path (2025):**
```
Dashboard → Workers & Pages → Create application → Pages → Upload assets
```

**Step-by-step:**
1. Go to https://dash.cloudflare.com
2. Click "Workers & Pages" in left sidebar
3. Click "Create application" button (blue, top right)
4. Click "Pages" tab at the top
5. Click "Upload assets" button
6. Follow upload wizard

### DNS Security Policies

**Current Path (2025):**
```
Zero Trust Dashboard → Gateway → Firewall policies → DNS
```

**Step-by-step:**
1. Go to https://one.dash.cloudflare.com
2. Click "Gateway" in left sidebar
3. Click "Firewall policies"
4. Click "DNS" tab
5. Click "Add a policy" button

### DNS Locations (DoH Endpoint)

**Current Path (2025):**
```
Zero Trust Dashboard → Networks → DNS locations
```

**Step-by-step:**
1. Go to https://one.dash.cloudflare.com
2. Click "Networks" in left sidebar
3. Click "DNS locations"
4. Click on your location name
5. Copy the DoH URL from "DNS over HTTPS" section

### DNS Logs

**Current Path (2025):**
```
Zero Trust Dashboard → Logs → Gateway → DNS
```

**Step-by-step:**
1. Go to https://one.dash.cloudflare.com
2. Click "Logs" in left sidebar
3. Click "Gateway"
4. Click "DNS" tab
5. View and filter logs

---

## Common Navigation Changes

### What Changed in 2024-2025

1. **Workers & Pages consolidated**
   - Previously separate menus
   - Now unified under "Workers & Pages"

2. **Zero Trust rebranding**
   - Formerly "Cloudflare for Teams"
   - Now "Zero Trust"

3. **Gateway organization**
   - Firewall policies now under Gateway
   - Clearer separation of DNS/Network/HTTP policies

4. **Improved sidebar**
   - Collapsible sections
   - Better categorization
   - Search functionality

---

## Browser-Specific Notes

### Chrome/Edge
- Settings → Privacy and security → Security → Use secure DNS → With Custom

### Firefox  
- Settings → Network Settings → Settings... → Enable DNS over HTTPS → Custom

### Safari (macOS)
- System Settings → Network → DNS → Configure DNS → Add DoH URL

---

## Troubleshooting Navigation

### Can't find Workers & Pages?
- Look in the left sidebar
- May be under "Build" section
- Try searching in dashboard search bar

### Can't access Zero Trust?
- Make sure you're logged in
- Direct URL: https://one.dash.cloudflare.com
- Check account permissions

### Dashboard looks different?
- Cloudflare updates UI regularly
- Core functionality remains the same
- Look for similar menu items
- Use search function

---

## Quick Reference URLs

| Feature | URL |
|---------|-----|
| Main Dashboard | https://dash.cloudflare.com |
| Zero Trust | https://one.dash.cloudflare.com |
| Workers & Pages | https://dash.cloudflare.com → Workers & Pages |
| DNS Policies | https://one.dash.cloudflare.com → Gateway → Firewall policies → DNS |
| DNS Locations | https://one.dash.cloudflare.com → Networks → DNS locations |
| DNS Logs | https://one.dash.cloudflare.com → Logs → Gateway → DNS |

---

## Notes for Instructors

1. **Always verify navigation before workshop**
   - Cloudflare updates UI frequently
   - Test all paths 1-2 days before workshop

2. **Have screenshots ready**
   - Take fresh screenshots if UI changed
   - Show exact button locations

3. **Prepare alternatives**
   - Know direct URLs
   - Understand search functionality
   - Have backup navigation methods

4. **Common participant issues**
   - Wrong dashboard (main vs Zero Trust)
   - Missing permissions
   - Browser caching old UI

---

**Last Verified:** January 31, 2025
**Next Review:** March 2025 (or when UI changes are announced)
