# Module 3: DNS Security with Zero Trust
# โมดูล 3: DNS Security ด้วย Zero Trust

**Duration / ระยะเวลา:** 60 minutes / 60 นาที

---

## 🎯 Learning Objectives / วัตถุประสงค์การเรียนรู้

### English
By the end of this module, you will be able to:
- Access Zero Trust Dashboard
- Configure DNS Firewall Policies
- Block security threats automatically
- Block content categories (gambling, adult content, etc.)
- Set up Allow lists for important domains
- Configure browser to use Secure DNS (DoH)
- Test DNS filtering
- View logs and analytics

### ภาษาไทย
เมื่อจบโมดูลนี้ คุณจะสามารถ:
- เข้าสู่ Zero Trust Dashboard
- ตั้งค่า DNS Firewall Policies
- บล็อกภัยคุกคามด้านความปลอดภัยอัตโนมัติ
- บล็อกหมวดหมู่เนื้อหา (การพนัน, เนื้อหาผู้ใหญ่, ฯลฯ)
- ตั้งค่า Allow list สำหรับโดเมนสำคัญ
- ตั้งค่าเบราว์เซอร์ให้ใช้ Secure DNS (DoH)
- ทดสอบการกรอง DNS
- ดู Logs และ Analytics

---

## Part 1: Understanding DNS Security / ส่วนที่ 1: ทำความเข้าใจ DNS Security

### English

**What we're protecting against:**

1. **Malware & Phishing** 🦠
   - Malicious websites that install viruses
   - Fake websites that steal passwords
   - Ransomware distribution sites

2. **Inappropriate Content** 🚫
   - Gambling websites
   - Adult content
   - Violence and hate speech
   - Social media (if needed)

3. **Data Exfiltration** 📤
   - Unauthorized data transfers
   - Command and control servers
   - Botnet communications

**How DNS filtering works:**

```
Traditional (No filtering):
User → DNS → Malicious Site ❌ (User gets infected)

With Cloudflare Gateway:
User → Cloudflare Gateway → Check Policy → Block ✅ (User protected)
```

**Benefits for universities:**
- Protect students and staff
- Comply with regulations
- Reduce security incidents
- Control bandwidth usage
- Visibility into network activity

### ภาษาไทย

**สิ่งที่เรากำลังป้องกัน:**

1. **มัลแวร์และฟิชชิ่ง** 🦠
   - เว็บไซต์ที่เป็นอันตรายที่ติดตั้งไวรัส
   - เว็บไซต์ปลอมที่ขโมยรหัสผ่าน
   - เว็บไซต์แจกจ่าย Ransomware

2. **เนื้อหาที่ไม่เหมาะสม** 🚫
   - เว็บไซต์การพนัน
   - เนื้อหาผู้ใหญ่
   - ความรุนแรงและคำพูดที่แสดงความเกลียดชัง
   - โซเชียลมีเดีย (ถ้าจำเป็น)

3. **การขโมยข้อมูล** 📤
   - การถ่ายโอนข้อมูลที่ไม่ได้รับอนุญาต
   - เซิร์ฟเวอร์ควบคุมและสั่งการ
   - การสื่อสารของบอทเน็ต

**การกรอง DNS ทำงานอย่างไร:**

```
แบบดั้งเดิม (ไม่มีการกรอง):
ผู้ใช้ → DNS → เว็บไซต์ที่เป็นอันตราย ❌ (ผู้ใช้ติดเชื้อ)

ด้วย Cloudflare Gateway:
ผู้ใช้ → Cloudflare Gateway → ตรวจสอบนโยบาย → บล็อก ✅ (ผู้ใช้ได้รับการปกป้อง)
```

**ประโยชน์สำหรับมหาวิทยาลัย:**
- ปกป้องนักศึกษาและเจ้าหน้าที่
- ปฏิบัติตามกฎระเบียบ
- ลดเหตุการณ์ด้านความปลอดภัย
- ควบคุมการใช้ Bandwidth
- มองเห็นกิจกรรมเครือข่าย

---

## Part 2: Access Zero Trust Dashboard / ส่วนที่ 2: เข้าสู่ Zero Trust Dashboard

### English

**Step 1: Navigate to Zero Trust**

1. **Open Cloudflare Dashboard**
   ```
   https://dash.cloudflare.com
   ```

2. **Log in** with your email and password

3. **Look in left sidebar** for "Zero Trust"
   - It's under the main menu
   - Click "Zero Trust"

4. **You'll see Zero Trust Dashboard**
   - This is a separate dashboard for security features
   - Different from main Cloudflare Dashboard

✅ **Success!** You're now in Zero Trust Dashboard

**Alternative direct URL:**
```
https://one.dash.cloudflare.com
```

**Step 2: Understand Zero Trust Dashboard**

**Main sections you'll see:**

| Section | What It Does |
|---------|-------------|
| **Home** | Overview and quick stats |
| **Gateway** | DNS filtering and policies |
| **Access** | Application access control |
| **Networks** | Network configuration |
| **Logs** | Activity logs and analytics |
| **Settings** | Account settings |

**For this workshop, we'll focus on:**
- **Gateway** → DNS policies
- **Networks** → DNS locations
- **Logs** → DNS activity

### ภาษาไทย

**ขั้นตอนที่ 1: ไปยัง Zero Trust**

1. **เปิด Cloudflare Dashboard**
   ```
   https://dash.cloudflare.com
   ```

2. **เข้าสู่ระบบ** ด้วยอีเมลและรหัสผ่าน

3. **มองในแถบด้านข้างซ้าย** หา "Zero Trust"
   - อยู่ในเมนูหลัก
   - คลิก "Zero Trust"

4. **คุณจะเห็น Zero Trust Dashboard**
   - นี่เป็น Dashboard แยกต่างหากสำหรับฟีเจอร์ความปลอดภัย
   - แตกต่างจาก Cloudflare Dashboard หลัก

✅ **สำเร็จ!** ตอนนี้คุณอยู่ใน Zero Trust Dashboard แล้ว

**URL ทางลัดทางเลือก:**
```
https://one.dash.cloudflare.com
```

**ขั้นตอนที่ 2: ทำความเข้าใจ Zero Trust Dashboard**

**ส่วนหลักที่คุณจะเห็น:**

| ส่วน | ทำอะไร |
|---------|-------------|
| **Home** | ภาพรวมและสถิติด่วน |
| **Gateway** | การกรอง DNS และนโยบาย |
| **Access** | การควบคุมการเข้าถึงแอปพลิเคชัน |
| **Networks** | การตั้งค่าเครือข่าย |
| **Logs** | Logs กิจกรรมและ Analytics |
| **Settings** | การตั้งค่าบัญชี |

**สำหรับการอบรมนี้ เราจะเน้นที่:**
- **Gateway** → นโยบาย DNS
- **Networks** → ตำแหน่ง DNS
- **Logs** → กิจกรรม DNS

---

## Part 3: Create DNS Firewall Policies / ส่วนที่ 3: สร้าง DNS Firewall Policies

### English

**Step 1: Navigate to DNS Policies**

1. **In Zero Trust Dashboard**, click **"Gateway"** in left sidebar

2. **Click "Firewall policies"**

3. **Click "DNS"** tab at the top

✅ You should see the DNS Policies page

**Step 2: Block Security Threats**

This policy will automatically block all known malicious domains.

1. **Click "Add a policy"** button

2. **Enter policy name:**
   ```
   Block All Security Threats
   ```

3. **In "Traffic" section:**
   - Click "Add condition"
   - Select **"Security Categories"**
   - Select **"in"**
   - Select **"All security risks"**

4. **In "Action" section:**
   - Select **"Block"**

5. **Click "Create policy"**

✅ **Done!** Security threats are now blocked

**What this blocks:**
- Malware
- Phishing
- Botnet command and control
- Cryptomining
- DNS tunneling

**Step 3: Block Content Categories (Optional)**

Let's block gambling and adult content as examples.

1. **Click "Add a policy"** button

2. **Enter policy name:**
   ```
   Block Inappropriate Content
   ```

3. **In "Traffic" section:**
   - Click "Add condition"
   - Select **"Content Categories"**
   - Select **"in"**
   - Select **"Gambling"**
   - Click "+ Or" to add another
   - Select **"Adult Themes"**

4. **In "Action" section:**
   - Select **"Block"**

5. **Click "Create policy"**

✅ **Done!** Content categories are now blocked

**Available content categories:**
- Adult Themes
- Gambling
- Social Media
- Streaming Media
- File Sharing
- Gaming
- And many more...

**Step 4: Create Allow List (Important!)**

Some domains should NEVER be blocked (like university systems).

1. **Click "Add a policy"** button

2. **Enter policy name:**
   ```
   Allow University Domains
   ```

3. **In "Traffic" section:**
   - Click "Add condition"
   - Select **"Domain"**
   - Select **"in"**
   - Enter your university domains:
     ```
     university.edu
     *.university.edu
     learning.university.edu
     ```
   - Click "+ Or" to add more domains

4. **In "Action" section:**
   - Select **"Allow"**

5. **Click "Create policy"**

6. **IMPORTANT: Move this policy to the TOP**
   - Drag and drop the policy to position #1
   - Allow policies should always be first!

✅ **Done!** University domains are always allowed

**Policy order matters!**
```
1. Allow University Domains ← Checked first
2. Block Security Threats    ← Then this
3. Block Inappropriate Content ← Then this
```

### ภาษาไทย

**ขั้นตอนที่ 1: ไปยังนโยบาย DNS**

1. **ใน Zero Trust Dashboard** คลิก **"Gateway"** ในแถบด้านข้างซ้าย

2. **คลิก "Firewall policies"**

3. **คลิกแท็บ "DNS"** ด้านบน

✅ คุณควรเห็นหน้านโยบาย DNS

**ขั้นตอนที่ 2: บล็อกภัยคุกคามด้านความปลอดภัย**

นโยบายนี้จะบล็อกโดเมนที่เป็นอันตรายที่รู้จักทั้งหมดโดยอัตโนมัติ

1. **คลิกปุ่ม "Add a policy"**

2. **ใส่ชื่อนโยบาย:**
   ```
   Block All Security Threats
   ```

3. **ในส่วน "Traffic":**
   - คลิก "Add condition"
   - เลือก **"Security Categories"**
   - เลือก **"in"**
   - เลือก **"All security risks"**

4. **ในส่วน "Action":**
   - เลือก **"Block"**

5. **คลิก "Create policy"**

✅ **เสร็จแล้ว!** ภัยคุกคามด้านความปลอดภัยถูกบล็อกแล้ว

**สิ่งที่นี่บล็อก:**
- มัลแวร์
- ฟิชชิ่ง
- การควบคุมและสั่งการของบอทเน็ต
- การขุดคริปโต
- DNS tunneling

**ขั้นตอนที่ 3: บล็อกหมวดหมู่เนื้อหา (ไม่บังคับ)**

มาบล็อกการพนันและเนื้อหาผู้ใหญ่เป็นตัวอย่าง

1. **คลิกปุ่ม "Add a policy"**

2. **ใส่ชื่อนโยบาย:**
   ```
   Block Inappropriate Content
   ```

3. **ในส่วน "Traffic":**
   - คลิก "Add condition"
   - เลือก **"Content Categories"**
   - เลือก **"in"**
   - เลือก **"Gambling"**
   - คลิก "+ Or" เพื่อเพิ่มอีกอัน
   - เลือก **"Adult Themes"**

4. **ในส่วน "Action":**
   - เลือก **"Block"**

5. **คลิก "Create policy"**

✅ **เสร็จแล้ว!** หมวดหมู่เนื้อหาถูกบล็อกแล้ว

**หมวดหมู่เนื้อหาที่มี:**
- Adult Themes
- Gambling
- Social Media
- Streaming Media
- File Sharing
- Gaming
- และอีกมากมาย...

**ขั้นตอนที่ 4: สร้าง Allow List (สำคัญ!)**

โดเมนบางตัวไม่ควรถูกบล็อกเลย (เช่น ระบบมหาวิทยาลัย)

1. **คลิกปุ่ม "Add a policy"**

2. **ใส่ชื่อนโยบาย:**
   ```
   Allow University Domains
   ```

3. **ในส่วน "Traffic":**
   - คลิก "Add condition"
   - เลือก **"Domain"**
   - เลือก **"in"**
   - ใส่โดเมนมหาวิทยาลัยของคุณ:
     ```
     university.edu
     *.university.edu
     learning.university.edu
     ```
   - คลิก "+ Or" เพื่อเพิ่มโดเมนเพิ่มเติม

4. **ในส่วน "Action":**
   - เลือก **"Allow"**

5. **คลิก "Create policy"**

6. **สำคัญ: ย้ายนโยบายนี้ไปด้านบนสุด**
   - ลากและวางนโยบายไปตำแหน่ง #1
   - นโยบาย Allow ควรอยู่ก่อนเสมอ!

✅ **เสร็จแล้ว!** โดเมนมหาวิทยาลัยได้รับอนุญาตเสมอ

**ลำดับนโยบายสำคัญ!**
```
1. Allow University Domains ← ตรวจสอบก่อน
2. Block Security Threats    ← จากนั้นนี่
3. Block Inappropriate Content ← จากนั้นนี่
```

---

## Part 4: Get Your DNS Location / ส่วนที่ 4: รับตำแหน่ง DNS ของคุณ

### English

**Step 1: Create DNS Location**

1. **In Zero Trust Dashboard**, click **"Networks"** in left sidebar

2. **Click "DNS locations"**

3. **You should see a default location already created**
   - Name: Usually your account name
   - Status: Active

4. **Click on the location name** to view details

**Step 2: Get Your DoH Endpoint**

1. **Look for "DNS over HTTPS (DoH)"** section

2. **Copy the DoH URL** - It looks like:
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

3. **Write this down or keep the tab open!**
   - You'll need this URL in the next step
   - This is YOUR unique DNS endpoint

✅ **Important!** Each account has a unique DoH URL

**What is DoH?**
- DoH = DNS over HTTPS
- Encrypts DNS queries
- Prevents snooping
- Works in browsers

**Alternative: IPv4 Addresses**

You'll also see IPv4 addresses:
```
172.64.36.1
172.64.36.2
```

These can be used for:
- Router configuration
- Network-wide filtering
- Devices that don't support DoH

### ภาษาไทย

**ขั้นตอนที่ 1: สร้างตำแหน่ง DNS**

1. **ใน Zero Trust Dashboard** คลิก **"Networks"** ในแถบด้านข้างซ้าย

2. **คลิก "DNS locations"**

3. **คุณควรเห็นตำแหน่งเริ่มต้นที่สร้างไว้แล้ว**
   - ชื่อ: มักเป็นชื่อบัญชีของคุณ
   - สถานะ: Active

4. **คลิกที่ชื่อตำแหน่ง** เพื่อดูรายละเอียด

**ขั้นตอนที่ 2: รับ DoH Endpoint ของคุณ**

1. **มองหาส่วน "DNS over HTTPS (DoH)"**

2. **คัดลอก DoH URL** - มันจะดูเหมือน:
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

3. **จดสิ่งนี้ไว้หรือเปิดแท็บไว้!**
   - คุณจะต้องใช้ URL นี้ในขั้นตอนถัดไป
   - นี่คือ DNS endpoint ที่ไม่ซ้ำของคุณ

✅ **สำคัญ!** แต่ละบัญชีมี DoH URL ที่ไม่ซ้ำ

**DoH คืออะไร?**
- DoH = DNS over HTTPS
- เข้ารหัสคำขอ DNS
- ป้องกันการแอบดู
- ทำงานในเบราว์เซอร์

**ทางเลือก: ที่อยู่ IPv4**

คุณจะเห็นที่อยู่ IPv4 ด้วย:
```
172.64.36.1
172.64.36.2
```

สามารถใช้สำหรับ:
- การตั้งค่าเราเตอร์
- การกรองทั้งเครือข่าย
- อุปกรณ์ที่ไม่รองรับ DoH

---

## Part 5: Configure Browser to Use Secure DNS / ส่วนที่ 5: ตั้งค่าเบราว์เซอร์ให้ใช้ Secure DNS

### English

**For Google Chrome:**

1. **Open Chrome**

2. **Click three dots (⋮)** in top right

3. **Click "Settings"**

4. **Click "Privacy and security"** in left sidebar

5. **Click "Security"**

6. **Scroll down to "Use secure DNS"**

7. **Select "With Custom"**

8. **Paste your DoH URL:**
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

9. **Click outside the box** to save

✅ **Done!** Chrome now uses Cloudflare Gateway

**For Mozilla Firefox:**

1. **Open Firefox**

2. **Click three lines (≡)** in top right

3. **Click "Settings"**

4. **Scroll down to "Network Settings"**

5. **Click "Settings..." button**

6. **Check "Enable DNS over HTTPS"**

7. **Select "Custom"**

8. **Paste your DoH URL:**
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

9. **Click "OK"**

✅ **Done!** Firefox now uses Cloudflare Gateway

**For Microsoft Edge:**

1. **Open Edge**

2. **Click three dots (⋯)** in top right

3. **Click "Settings"**

4. **Click "Privacy, search, and services"**

5. **Scroll down to "Security"**

6. **Find "Use secure DNS"**

7. **Turn it ON**

8. **Select "Choose a service provider"**

9. **Select "Enter custom provider"**

10. **Paste your DoH URL:**
    ```
    https://xxxxx.cloudflare-gateway.com/dns-query
    ```

11. **Click "Save"**

✅ **Done!** Edge now uses Cloudflare Gateway

### ภาษาไทย

**สำหรับ Google Chrome:**

1. **เปิด Chrome**

2. **คลิกจุดสามจุด (⋮)** มุมขวาบน

3. **คลิก "Settings"**

4. **คลิก "Privacy and security"** ในแถบด้านข้างซ้าย

5. **คลิก "Security"**

6. **เลื่อนลงไปที่ "Use secure DNS"**

7. **เลือก "With Custom"**

8. **วาง DoH URL ของคุณ:**
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

9. **คลิกนอกกล่อง** เพื่อบันทึก

✅ **เสร็จแล้ว!** Chrome ใช้ Cloudflare Gateway แล้ว

**สำหรับ Mozilla Firefox:**

1. **เปิด Firefox**

2. **คลิกเส้นสามเส้น (≡)** มุมขวาบน

3. **คลิก "Settings"**

4. **เลื่อนลงไปที่ "Network Settings"**

5. **คลิกปุ่ม "Settings..."**

6. **เช็ค "Enable DNS over HTTPS"**

7. **เลือก "Custom"**

8. **วาง DoH URL ของคุณ:**
   ```
   https://xxxxx.cloudflare-gateway.com/dns-query
   ```

9. **คลิก "OK"**

✅ **เสร็จแล้ว!** Firefox ใช้ Cloudflare Gateway แล้ว

**สำหรับ Microsoft Edge:**

1. **เปิด Edge**

2. **คลิกจุดสามจุด (⋯)** มุมขวาบน

3. **คลิก "Settings"**

4. **คลิก "Privacy, search, and services"**

5. **เลื่อนลงไปที่ "Security"**

6. **หา "Use secure DNS"**

7. **เปิดมัน**

8. **เลือก "Choose a service provider"**

9. **เลือก "Enter custom provider"**

10. **วาง DoH URL ของคุณ:**
    ```
    https://xxxxx.cloudflare-gateway.com/dns-query
    ```

11. **คลิก "Save"**

✅ **เสร็จแล้ว!** Edge ใช้ Cloudflare Gateway แล้ว

---

## Part 6: Test DNS Filtering / ส่วนที่ 6: ทดสอบการกรอง DNS

### English

**Test 1: Block Security Threats**

1. **Open your browser** (with DoH configured)

2. **Try to visit a test malware site:**
   ```
   http://malware.testing.google.test/testing/malware/
   ```

3. **You should see:**
   - Cloudflare Gateway block page
   - Message: "This site has been blocked"
   - Reason: Security threat

✅ **Success!** Security filtering is working

**Test 2: Block Content Categories**

If you blocked gambling:

1. **Try to visit a gambling site** (example):
   ```
   https://www.bet365.com
   ```

2. **You should see:**
   - Cloudflare Gateway block page
   - Message: "This site has been blocked"
   - Reason: Content category

✅ **Success!** Content filtering is working

**Test 3: Allow List**

1. **Visit your university website:**
   ```
   https://university.edu
   ```

2. **You should see:**
   - Website loads normally
   - No block page

✅ **Success!** Allow list is working

**What if sites aren't blocked?**

1. **Wait 2-3 minutes** for policies to propagate
2. **Clear browser cache** (Ctrl+Shift+Delete)
3. **Restart browser**
4. **Check DoH configuration** is correct
5. **Try incognito/private mode**

### ภาษาไทย

**การทดสอบ 1: บล็อกภัยคุกคามด้านความปลอดภัย**

1. **เปิดเบราว์เซอร์ของคุณ** (ที่ตั้งค่า DoH แล้ว)

2. **ลองเข้าเว็บไซต์มัลแวร์ทดสอบ:**
   ```
   http://malware.testing.google.test/testing/malware/
   ```

3. **คุณควรเห็น:**
   - หน้าบล็อกของ Cloudflare Gateway
   - ข้อความ: "This site has been blocked"
   - เหตุผล: Security threat

✅ **สำเร็จ!** การกรองความปลอดภัยทำงาน

**การทดสอบ 2: บล็อกหมวดหมู่เนื้อหา**

ถ้าคุณบล็อกการพนัน:

1. **ลองเข้าเว็บไซต์การพนัน** (ตัวอย่าง):
   ```
   https://www.bet365.com
   ```

2. **คุณควรเห็น:**
   - หน้าบล็อกของ Cloudflare Gateway
   - ข้อความ: "This site has been blocked"
   - เหตุผล: Content category

✅ **สำเร็จ!** การกรองเนื้อหาทำงาน

**การทดสอบ 3: Allow List**

1. **เข้าเว็บไซต์มหาวิทยาลัยของคุณ:**
   ```
   https://university.edu
   ```

2. **คุณควรเห็น:**
   - เว็บไซต์โหลดปกติ
   - ไม่มีหน้าบล็อก

✅ **สำเร็จ!** Allow list ทำงาน

**ถ้าเว็บไซต์ไม่ถูกบล็อกล่ะ?**

1. **รอ 2-3 นาที** เพื่อให้นโยบายแพร่กระจาย
2. **ล้างแคชเบราว์เซอร์** (Ctrl+Shift+Delete)
3. **รีสตาร์ทเบราว์เซอร์**
4. **ตรวจสอบการตั้งค่า DoH** ว่าถูกต้อง
5. **ลองโหมด incognito/private**

---

## Part 7: View Logs and Analytics / ส่วนที่ 7: ดู Logs และ Analytics

### English

**Step 1: Access DNS Logs**

1. **In Zero Trust Dashboard**, click **"Logs"** in left sidebar

2. **Click "Gateway"**

3. **Click "DNS"** tab

✅ You should see DNS query logs

**What you'll see:**

| Column | Information |
|--------|-------------|
| **Timestamp** | When the query happened |
| **Domain** | What domain was requested |
| **Query Type** | A, AAAA, MX, etc. |
| **Action** | Allowed or Blocked |
| **Policy** | Which policy matched |
| **User** | Who made the request (if identified) |
| **Location** | DNS location used |

**Step 2: Filter Logs**

**To see only blocked queries:**

1. **Click "Add filter"**
2. **Select "Action"**
3. **Select "Block"**
4. **Click "Apply"**

**To see specific domain:**

1. **Click "Add filter"**
2. **Select "Domain"**
3. **Enter domain name**
4. **Click "Apply"**

**To see specific time range:**

1. **Click the time dropdown** (top right)
2. **Select time range** (Last hour, Last 24 hours, etc.)
3. **Or select custom range**

**Step 3: Export Logs (Optional)**

1. **Click "Export"** button

2. **Select format:**
   - CSV
   - JSON

3. **Select time range**

4. **Click "Export"**

✅ **Done!** Logs downloaded

**Use cases for logs:**
- Security audits
- Compliance reporting
- Troubleshooting
- Understanding user behavior
- Identifying threats

### ภาษาไทย

**ขั้นตอนที่ 1: เข้าถึง DNS Logs**

1. **ใน Zero Trust Dashboard** คลิก **"Logs"** ในแถบด้านข้างซ้าย

2. **คลิก "Gateway"**

3. **คลิกแท็บ "DNS"**

✅ คุณควรเห็น Logs คำขอ DNS

**สิ่งที่คุณจะเห็น:**

| คอลัมน์ | ข้อมูล |
|--------|-------------|
| **Timestamp** | เมื่อคำขอเกิดขึ้น |
| **Domain** | โดเมนที่ถูกขอ |
| **Query Type** | A, AAAA, MX, ฯลฯ |
| **Action** | อนุญาตหรือบล็อก |
| **Policy** | นโยบายไหนที่ตรงกัน |
| **User** | ใครทำคำขอ (ถ้าระบุ) |
| **Location** | ตำแหน่ง DNS ที่ใช้ |

**ขั้นตอนที่ 2: กรอง Logs**

**เพื่อดูเฉพาะคำขอที่ถูกบล็อก:**

1. **คลิก "Add filter"**
2. **เลือก "Action"**
3. **เลือก "Block"**
4. **คลิก "Apply"**

**เพื่อดูโดเมนเฉพาะ:**

1. **คลิก "Add filter"**
2. **เลือก "Domain"**
3. **ใส่ชื่อโดเมน**
4. **คลิก "Apply"**

**เพื่อดูช่วงเวลาเฉพาะ:**

1. **คลิก dropdown เวลา** (มุมขวาบน)
2. **เลือกช่วงเวลา** (ชั่วโมงที่แล้ว, 24 ชั่วโมงที่แล้ว, ฯลฯ)
3. **หรือเลือกช่วงที่กำหนดเอง**

**ขั้นตอนที่ 3: ส่งออก Logs (ไม่บังคับ)**

1. **คลิกปุ่ม "Export"**

2. **เลือกรูปแบบ:**
   - CSV
   - JSON

3. **เลือกช่วงเวลา**

4. **คลิก "Export"**

✅ **เสร็จแล้ว!** Logs ดาวน์โหลดแล้ว

**กรณีการใช้งานสำหรับ Logs:**
- การตรวจสอบความปลอดภัย
- การรายงานการปฏิบัติตามกฎระเบียบ
- การแก้ปัญหา
- ทำความเข้าใจพฤติกรรมผู้ใช้
- ระบุภัยคุกคาม

---

## Summary / สรุป

### English

**What we accomplished:**
✅ Accessed Zero Trust Dashboard
✅ Created DNS Firewall Policies
✅ Blocked security threats automatically
✅ Blocked content categories
✅ Set up Allow list for important domains
✅ Configured browser to use Secure DNS (DoH)
✅ Tested DNS filtering
✅ Viewed logs and analytics

**Key takeaways:**
- DNS filtering protects at the network level
- Policies are easy to configure
- Allow lists prevent blocking important sites
- DoH encrypts DNS queries
- Logs provide visibility
- Free tier covers 50 users

**Your network is now protected!**
- Malware blocked automatically
- Inappropriate content filtered
- University systems always accessible
- All activity logged
- Encrypted DNS queries

**Next steps:**
- Monitor logs regularly
- Adjust policies as needed
- Add more users (up to 50 free)
- Consider network-wide deployment
- Explore other Zero Trust features

**Questions?** Ask your instructor now!

### ภาษาไทย

**สิ่งที่เราทำสำเร็จ:**
✅ เข้าสู่ Zero Trust Dashboard
✅ สร้าง DNS Firewall Policies
✅ บล็อกภัยคุกคามด้านความปลอดภัยอัตโนมัติ
✅ บล็อกหมวดหมู่เนื้อหา
✅ ตั้งค่า Allow list สำหรับโดเมนสำคัญ
✅ ตั้งค่าเบราว์เซอร์ให้ใช้ Secure DNS (DoH)
✅ ทดสอบการกรอง DNS
✅ ดู Logs และ Analytics

**สิ่งสำคัญที่ได้เรียนรู้:**
- การกรอง DNS ปกป้องในระดับเครือข่าย
- นโยบายตั้งค่าง่าย
- Allow list ป้องกันการบล็อกเว็บไซต์สำคัญ
- DoH เข้ารหัสคำขอ DNS
- Logs ให้ความมองเห็น
- แพ็กเกจฟรีครอบคลุม 50 ผู้ใช้

**เครือข่ายของคุณได้รับการปกป้องแล้ว!**
- มัลแวร์ถูกบล็อกอัตโนมัติ
- เนื้อหาที่ไม่เหมาะสมถูกกรอง
- ระบบมหาวิทยาลัยเข้าถึงได้เสมอ
- กิจกรรมทั้งหมดถูกบันทึก
- คำขอ DNS ถูกเข้ารหัส

**ขั้นตอนถัดไป:**
- ตรวจสอบ Logs เป็นประจำ
- ปรับนโยบายตามต้องการ
- เพิ่มผู้ใช้เพิ่มเติม (สูงสุด 50 ฟรี)
- พิจารณาการ deploy ทั้งเครือข่าย
- สำรวจฟีเจอร์ Zero Trust อื่นๆ

**มีคำถาม?** ถามผู้สอนของคุณตอนนี้!

---

<p align="center">
  <strong>Excellent work! / ทำได้ยอดเยี่ยม!</strong><br>
  <strong>You've completed the main workshop modules!</strong><br>
  <strong>คุณทำโมดูลหลักของการอบรมเสร็จแล้ว!</strong>
</p>
