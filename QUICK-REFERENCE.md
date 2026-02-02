# Quick Reference

## URLs

```
Cloudflare Dashboard:    https://dash.cloudflare.com
Zero Trust Dashboard:    https://one.dash.cloudflare.com
```

## Navigation Paths

### Deploy to Pages
```
Dashboard → Workers & Pages → Create application → Pages → Upload assets
```

### DNS Policies
```
Zero Trust → Gateway → Firewall policies → DNS
```

### DNS Locations
```
Zero Trust → Networks → DNS locations
```

### DNS Logs
```
Zero Trust → Logs → Gateway → DNS
```

## Browser DNS Configuration

### Chrome/Edge
```
Settings → Privacy and security → Security → Use secure DNS → With Custom
```

### Firefox
```
Settings → Network Settings → Settings → Enable DNS over HTTPS → Custom
```

## Common Commands

### Clear DNS Cache

**Chrome:**
```
chrome://net-internals/#dns → Clear host cache
```

**Firefox:**
```
about:networking#dns → Clear DNS Cache
```

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

## Policy Order

```
1. Allow University Domains  (MUST be first!)
2. Block Security Threats
3. Block Content Categories
```

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Upload failed | Check filename is `index.html` (lowercase) |
| Changes don't appear | Wait 30s, clear cache (Ctrl+F5) |
| Sites not blocked | Wait 2-3 min, check DoH URL, restart browser |
| Can't access site | Add to Allow list, check policy order |
| DoH not working | Copy URL exactly, restart browser |

## Test URLs

**Malware test:**
```
http://malware.testing.google.test/testing/malware/
```

**Should show:** Cloudflare Gateway block page
