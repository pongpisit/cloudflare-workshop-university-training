# Quick Reference Guide / คู่มืออ้างอิงด่วน
# Cloudflare Workshop: University Training

**Quick answers for common tasks / คำตอบด่วนสำหรับงานทั่วไป**

---

## 🔗 Important URLs / URL สำคัญ

### English
```
Cloudflare Dashboard:     https://dash.cloudflare.com
Zero Trust Dashboard:     https://one.dash.cloudflare.com
Cloudflare Pages:         https://dash.cloudflare.com → Workers & Pages
DNS Policies:             https://one.dash.cloudflare.com → Gateway → Firewall policies → DNS
DNS Locations:            https://one.dash.cloudflare.com → Networks → DNS locations
Logs:                     https://one.dash.cloudflare.com → Logs → Gateway → DNS
```

### ภาษาไทย
```
Cloudflare Dashboard:     https://dash.cloudflare.com
Zero Trust Dashboard:     https://one.dash.cloudflare.com
Cloudflare Pages:         https://dash.cloudflare.com → Workers & Pages
นโยบาย DNS:              https://one.dash.cloudflare.com → Gateway → Firewall policies → DNS
ตำแหน่ง DNS:             https://one.dash.cloudflare.com → Networks → DNS locations
Logs:                     https://one.dash.cloudflare.com → Logs → Gateway → DNS
```

---

## 📋 Navigation Cheat Sheet / คู่มือการนำทาง

### Cloudflare Dashboard

| Task | Path |
|------|------|
| Create Pages project | Left sidebar → Build → Compute & AI → Workers & Pages → Create application → Pages |
| View Pages projects | Left sidebar → Build → Compute & AI → Workers & Pages |
| Access Zero Trust | Left sidebar → Zero Trust |

### Zero Trust Dashboard

| Task | Path |
|------|------|
| DNS Policies | Left sidebar → Gateway → Firewall policies → DNS tab |
| DNS Locations | Left sidebar → Networks → DNS locations |
| View DNS Logs | Left sidebar → Logs → Gateway → DNS tab |
| Security Settings | Left sidebar → Settings → Gateway |

---

## 🚀 Common Tasks / งานทั่วไป

### Deploy Website to Pages / Deploy เว็บไซต์ไปยัง Pages

**English:**
1. Go to Workers & Pages
2. Click "Create application"
3. Click "Pages" tab
4. Click "Upload assets"
5. Create project name
6. Upload `index.html`
7. Click "Deploy site"
8. Wait 30-60 seconds
9. Click "Visit site"

**ภาษาไทย:**
1. ไปที่ Workers & Pages
2. คลิก "Create application"
3. คลิกแท็บ "Pages"
4. คลิก "Upload assets"
5. สร้างชื่อโปรเจค
6. อัพโหลด `index.html`
7. คลิก "Deploy site"
8. รอ 30-60 วินาที
9. คลิก "Visit site"

---

### Create DNS Policy / สร้างนโยบาย DNS

**English:**
1. Go to Zero Trust Dashboard
2. Click Gateway → Firewall policies → DNS
3. Click "Add a policy"
4. Enter policy name
5. Add traffic conditions
6. Select action (Allow/Block)
7. Click "Create policy"

**ภาษาไทย:**
1. ไปที่ Zero Trust Dashboard
2. คลิก Gateway → Firewall policies → DNS
3. คลิก "Add a policy"
4. ใส่ชื่อนโยบาย
5. เพิ่มเงื่อนไขการรับส่งข้อมูล
6. เลือกการกระทำ (Allow/Block)
7. คลิก "Create policy"

---

### Configure Browser DoH / ตั้งค่า DoH ในเบราว์เซอร์

**Chrome:**
```
Settings → Privacy and security → Security → Use secure DNS → With Custom → Paste DoH URL
```

**Firefox:**
```
Settings → Network Settings → Settings → Enable DNS over HTTPS → Custom → Paste DoH URL
```

**Edge:**
```
Settings → Privacy, search, and services → Security → Use secure DNS → Choose a service provider → Enter custom provider → Paste DoH URL
```

---

## 🛡️ DNS Policy Templates / เทมเพลตนโยบาย DNS

### Block All Security Threats / บล็อกภัยคุกคามทั้งหมด

**English:**
- **Name:** Block All Security Threats
- **Condition:** Security Categories → in → All security risks
- **Action:** Block
- **Priority:** 2 (after Allow list)

**ภาษาไทย:**
- **ชื่อ:** Block All Security Threats
- **เงื่อนไข:** Security Categories → in → All security risks
- **การกระทำ:** Block
- **ลำดับความสำคัญ:** 2 (หลัง Allow list)

---

### Block Content Categories / บล็อกหมวดหมู่เนื้อหา

**English:**
- **Name:** Block Inappropriate Content
- **Condition:** Content Categories → in → Gambling, Adult Themes
- **Action:** Block
- **Priority:** 3

**ภาษาไทย:**
- **ชื่อ:** Block Inappropriate Content
- **เงื่อนไข:** Content Categories → in → Gambling, Adult Themes
- **การกระทำ:** Block
- **ลำดับความสำคัญ:** 3

---

### Allow University Domains / อนุญาตโดเมนมหาวิทยาลัย

**English:**
- **Name:** Allow University Domains
- **Condition:** Domain → in → university.edu, *.university.edu
- **Action:** Allow
- **Priority:** 1 (MUST be first!)

**ภาษาไทย:**
- **ชื่อ:** Allow University Domains
- **เงื่อนไข:** Domain → in → university.edu, *.university.edu
- **การกระทำ:** Allow
- **ลำดับความสำคัญ:** 1 (ต้องเป็นอันดับแรก!)

---

## 🐛 Troubleshooting / การแก้ปัญหา

### Pages Deployment Issues / ปัญหาการ Deploy Pages

**Problem:** Upload failed
**Solution:**
- Check file is named `index.html` (lowercase)
- File size should be reasonable
- Try different browser
- Refresh and try again

**Problem:** Website shows error
**Solution:**
- Verify HTML syntax
- Make sure saved as `.html` not `.txt`
- Check browser console (F12)

**Problem:** Changes don't appear
**Solution:**
- Wait 30-60 seconds
- Clear cache (Ctrl+F5 or Cmd+Shift+R)
- Try incognito mode

---

### DNS Filtering Issues / ปัญหาการกรอง DNS

**Problem:** Sites not being blocked
**Solution:**
- Wait 2-3 minutes for policy propagation
- Verify DoH URL is correct
- Check policy order (Allow first, then Block)
- Restart browser
- Clear DNS cache

**Problem:** Can't access important sites
**Solution:**
- Check Allow list includes the domain
- Verify Allow policy is first (priority 1)
- Check domain spelling
- Add wildcard: `*.domain.com`

**Problem:** DoH not working
**Solution:**
- Copy DoH URL exactly (no spaces)
- Restart browser after configuration
- Check browser supports DoH
- Try different browser

---

### Zero Trust Dashboard Issues / ปัญหา Zero Trust Dashboard

**Problem:** Can't find Zero Trust
**Solution:**
- Look in left sidebar of main dashboard
- Or go directly to: https://one.dash.cloudflare.com
- Make sure you're logged in

**Problem:** No DNS location
**Solution:**
- One is created automatically
- Go to Networks → DNS locations
- If none, click "Add a location"

**Problem:** Logs are empty
**Solution:**
- Wait a few minutes for data
- Make sure DoH is configured
- Try visiting some websites
- Check time range filter

---

## 🔧 Browser DNS Cache Clearing / ล้างแคช DNS ของเบราว์เซอร์

### Chrome
```
1. Open new tab
2. Go to: chrome://net-internals/#dns
3. Click "Clear host cache"
```

### Firefox
```
1. Open new tab
2. Go to: about:networking#dns
3. Click "Clear DNS Cache"
```

### Edge
```
1. Open new tab
2. Go to: edge://net-internals/#dns
3. Click "Clear host cache"
```

---

## 📊 Useful Commands / คำสั่งที่เป็นประโยชน์

### Test DNS Resolution / ทดสอบการแปลง DNS

**Windows:**
```cmd
nslookup example.com
```

**Mac/Linux:**
```bash
dig example.com
```

### Clear System DNS Cache / ล้างแคช DNS ของระบบ

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
```

---

## 📝 Policy Order Best Practices / แนวทางปฏิบัติที่ดีสำหรับลำดับนโยบาย

### English

**Correct order:**
```
1. Allow University Domains     ← Always first
2. Allow Critical Services      ← Important services
3. Block Security Threats       ← Security blocking
4. Block Content Categories     ← Content filtering
5. Log All (if needed)          ← Logging policy
```

**Why order matters:**
- First matching policy wins
- Allow policies should be first
- More specific before general
- Block policies after allows

### ภาษาไทย

**ลำดับที่ถูกต้อง:**
```
1. Allow University Domains     ← เสมอก่อน
2. Allow Critical Services      ← บริการสำคัญ
3. Block Security Threats       ← การบล็อกความปลอดภัย
4. Block Content Categories     ← การกรองเนื้อหา
5. Log All (ถ้าจำเป็น)          ← นโยบายการบันทึก
```

**ทำไมลำดับสำคัญ:**
- นโยบายที่ตรงกันก่อนชนะ
- นโยบาย Allow ควรอยู่ก่อน
- เฉพาะเจาะจงก่อนทั่วไป
- นโยบาย Block หลัง Allow

---

## 🎓 Content Categories Available / หมวดหมู่เนื้อหาที่มี

### Security Categories / หมวดหมู่ความปลอดภัย
- Malware
- Phishing
- Botnet Command and Control
- Cryptomining
- DNS Tunneling
- New Domains (suspicious)

### Content Categories / หมวดหมู่เนื้อหา
- Adult Themes
- Gambling
- Social Media
- Streaming Media
- File Sharing
- Gaming
- Shopping
- News and Media
- Education
- And many more...

---

## 💡 Pro Tips / เคล็ดลับมืออาชีพ

### English

1. **Test before deploying widely**
   - Start with one browser
   - Verify policies work
   - Then roll out to others

2. **Use descriptive policy names**
   - "Block Gambling Sites" not "Policy 1"
   - Makes management easier

3. **Document your policies**
   - Keep a list of what's blocked
   - Note why each policy exists
   - Share with team

4. **Monitor logs regularly**
   - Check for false positives
   - Adjust policies as needed
   - Look for new threats

5. **Start with security, add content later**
   - Block threats first
   - Add content filtering gradually
   - Get user feedback

### ภาษาไทย

1. **ทดสอบก่อน deploy กว้าง**
   - เริ่มด้วยเบราว์เซอร์หนึ่งตัว
   - ยืนยันว่านโยบายทำงาน
   - จากนั้น roll out ให้คนอื่น

2. **ใช้ชื่อนโยบายที่อธิบายได้**
   - "Block Gambling Sites" ไม่ใช่ "Policy 1"
   - ทำให้การจัดการง่ายขึ้น

3. **จดบันทึกนโยบายของคุณ**
   - เก็บรายการสิ่งที่ถูกบล็อก
   - บันทึกว่าทำไมแต่ละนโยบายมีอยู่
   - แชร์กับทีม

4. **ตรวจสอบ Logs เป็นประจำ**
   - ตรวจสอบ false positives
   - ปรับนโยบายตามต้องการ
   - มองหาภัยคุกคามใหม่

5. **เริ่มด้วยความปลอดภัย เพิ่มเนื้อหาทีหลัง**
   - บล็อกภัยคุกคามก่อน
   - เพิ่มการกรองเนื้อหาทีละน้อย
   - รับคำติชมจากผู้ใช้

---

## 📞 Getting Help / การขอความช่วยเหลือ

### During Workshop / ระหว่างการอบรม
- **Raise your hand** - Instructor will help
- **Ask classmates** - Peer learning
- **Check this guide** - Quick answers

### After Workshop / หลังการอบรม
- **Cloudflare Community:** https://community.cloudflare.com
- **Cloudflare Discord:** https://discord.cloudflare.com
- **Documentation:** https://developers.cloudflare.com
- **Support:** https://support.cloudflare.com

---

## 🔐 Security Best Practices / แนวทางปฏิบัติด้านความปลอดภัยที่ดี

### English

1. **Always have an Allow list**
   - Prevent blocking critical services
   - Include university domains
   - Add emergency contacts

2. **Test policies before enabling**
   - Use "Log" action first
   - Review logs
   - Then change to "Block"

3. **Don't block too much**
   - Start conservative
   - Add blocks gradually
   - Listen to user feedback

4. **Keep policies organized**
   - Use clear names
   - Group related policies
   - Document changes

5. **Review logs weekly**
   - Look for patterns
   - Identify new threats
   - Adjust as needed

### ภาษาไทย

1. **มี Allow list เสมอ**
   - ป้องกันการบล็อกบริการสำคัญ
   - รวมโดเมนมหาวิทยาลัย
   - เพิ่มผู้ติดต่อฉุกเฉิน

2. **ทดสอบนโยบายก่อนเปิดใช้งาน**
   - ใช้การกระทำ "Log" ก่อน
   - ตรวจสอบ Logs
   - จากนั้นเปลี่ยนเป็น "Block"

3. **อย่าบล็อกมากเกินไป**
   - เริ่มแบบอนุรักษ์นิยม
   - เพิ่มการบล็อกทีละน้อย
   - ฟังคำติชมจากผู้ใช้

4. **เก็บนโยบายให้เป็นระเบียบ**
   - ใช้ชื่อที่ชัดเจน
   - จัดกลุ่มนโยบายที่เกี่ยวข้อง
   - จดบันทึกการเปลี่ยนแปลง

5. **ตรวจสอบ Logs ทุกสัปดาห์**
   - มองหารูปแบบ
   - ระบุภัยคุกคามใหม่
   - ปรับตามต้องการ

---

## 📈 Free Tier Limits / ข้อจำกัดแพ็กเกจฟรี

### Cloudflare Pages
- ✅ 500 builds per month
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 1 build at a time

### Zero Trust Gateway (DNS)
- ✅ 50 users
- ✅ Unlimited DNS queries
- ✅ 7 days of logs
- ✅ Basic analytics

### What's NOT included
- ❌ More than 50 users
- ❌ Advanced analytics (90+ days)
- ❌ Priority support
- ❌ SLA guarantees

---

## 🎯 Workshop Completion Checklist / รายการตรวจสอบการทำการอบรมเสร็จ

### English
- [ ] Created Cloudflare account
- [ ] Deployed website to Pages
- [ ] Accessed Zero Trust Dashboard
- [ ] Created DNS security policies
- [ ] Configured browser DoH
- [ ] Tested DNS filtering
- [ ] Viewed DNS logs
- [ ] Understand policy order
- [ ] Know how to get help

### ภาษาไทย
- [ ] สร้างบัญชี Cloudflare
- [ ] Deploy เว็บไซต์ไปยัง Pages
- [ ] เข้าสู่ Zero Trust Dashboard
- [ ] สร้างนโยบายความปลอดภัย DNS
- [ ] ตั้งค่า DoH ในเบราว์เซอร์
- [ ] ทดสอบการกรอง DNS
- [ ] ดู DNS Logs
- [ ] เข้าใจลำดับนโยบาย
- [ ] รู้วิธีขอความช่วยเหลือ

---

<p align="center">
  <strong>Keep this guide handy! / เก็บคู่มือนี้ไว้ใกล้ๆ!</strong><br>
  <strong>You'll use it often / คุณจะใช้มันบ่อยๆ</strong>
</p>
