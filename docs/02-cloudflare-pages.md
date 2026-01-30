# Module 2: Deploy Website with Cloudflare Pages
# โมดูล 2: Deploy เว็บไซต์ด้วย Cloudflare Pages

**Duration / ระยะเวลา:** 45 minutes / 45 นาที

---

## 🎯 Learning Objectives / วัตถุประสงค์การเรียนรู้

### English
By the end of this module, you will be able to:
- Understand what Cloudflare Pages is
- Create a simple HTML website
- Deploy the website to Cloudflare Pages
- Access your live website on the internet
- Make updates to your website

### ภาษาไทย
เมื่อจบโมดูลนี้ คุณจะสามารถ:
- เข้าใจว่า Cloudflare Pages คืออะไร
- สร้างเว็บไซต์ HTML ง่ายๆ
- Deploy เว็บไซต์ไปยัง Cloudflare Pages
- เข้าถึงเว็บไซต์สดของคุณบนอินเทอร์เน็ต
- อัพเดตเว็บไซต์ของคุณ

---

## Part 1: What is Cloudflare Pages? / ส่วนที่ 1: Cloudflare Pages คืออะไร?

### English

**Cloudflare Pages** is a platform to deploy static websites instantly.

**What is a static website?**
- HTML, CSS, JavaScript files
- No server-side code needed
- Perfect for:
  - Course websites
  - Department pages
  - Documentation
  - Personal portfolios
  - Landing pages

**Benefits:**
- ⚡ **Fast** - Served from 300+ locations worldwide
- 🆓 **Free** - Unlimited bandwidth
- 🔒 **Secure** - Automatic HTTPS
- 🚀 **Easy** - Deploy in minutes
- 🔄 **Updates** - Push changes anytime

**Real-world examples:**
- Professor's course website
- Department announcement page
- Student project showcase
- Research lab homepage

### ภาษาไทย

**Cloudflare Pages** เป็นแพลตฟอร์มสำหรับ deploy เว็บไซต์แบบ static ทันที

**เว็บไซต์แบบ static คืออะไร?**
- ไฟล์ HTML, CSS, JavaScript
- ไม่ต้องการโค้ดฝั่งเซิร์ฟเวอร์
- เหมาะสำหรับ:
  - เว็บไซต์รายวิชา
  - หน้าภาควิชา
  - เอกสาร
  - พอร์ตโฟลิโอส่วนตัว
  - หน้า Landing

**ประโยชน์:**
- ⚡ **เร็ว** - ส่งจาก 300+ สถานที่ทั่วโลก
- 🆓 **ฟรี** - Bandwidth ไม่จำกัด
- 🔒 **ปลอดภัย** - HTTPS อัตโนมัติ
- 🚀 **ง่าย** - Deploy ในไม่กี่นาที
- 🔄 **อัพเดต** - Push การเปลี่ยนแปลงได้ทุกเมื่อ

**ตัวอย่างจากโลกจริง:**
- เว็บไซต์รายวิชาของอาจารย์
- หน้าประกาศภาควิชา
- แสดงผลงานนักศึกษา
- หน้าแรกห้องปฏิบัติการวิจัย

---

## Part 2: Create Your Website Files / ส่วนที่ 2: สร้างไฟล์เว็บไซต์

### English

We'll create a simple university department website.

**Step 1: Create a folder on your computer**

1. **Open File Explorer** (Windows) or **Finder** (Mac)
2. **Go to Desktop**
3. **Create new folder** named: `my-university-site`

**Step 2: Create HTML file**

1. **Open Notepad** (Windows) or **TextEdit** (Mac)
2. **Copy and paste this code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Computer Science Department</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        
        header h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
        }
        
        header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .section {
            margin: 3rem 0;
        }
        
        .section h2 {
            color: #667eea;
            margin-bottom: 1rem;
            font-size: 2rem;
        }
        
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .card {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }
        
        .card h3 {
            color: #764ba2;
            margin-bottom: 1rem;
        }
        
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }
        
        .powered-by {
            margin-top: 1rem;
            font-size: 0.9rem;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <header>
        <h1>🎓 Computer Science Department</h1>
        <p>Your University Name</p>
    </header>
    
    <div class="container">
        <section class="section">
            <h2>Welcome</h2>
            <p>Welcome to the Computer Science Department. We offer cutting-edge programs in software engineering, artificial intelligence, and data science.</p>
        </section>
        
        <section class="section">
            <h2>Our Programs</h2>
            <div class="cards">
                <div class="card">
                    <h3>📚 Undergraduate</h3>
                    <p>Bachelor of Science in Computer Science with specializations in AI, Software Engineering, and Cybersecurity.</p>
                </div>
                <div class="card">
                    <h3>🎓 Graduate</h3>
                    <p>Master's and PhD programs in advanced computing topics with world-class faculty.</p>
                </div>
                <div class="card">
                    <h3>💼 Research</h3>
                    <p>Active research labs in Machine Learning, Cloud Computing, and Internet of Things.</p>
                </div>
            </div>
        </section>
        
        <section class="section">
            <h2>Contact Us</h2>
            <p>📧 Email: cs-dept@university.edu</p>
            <p>📞 Phone: +66 2 XXX XXXX</p>
            <p>📍 Location: Building 1, Floor 3</p>
        </section>
    </div>
    
    <footer>
        <p>&copy; 2025 Computer Science Department. All rights reserved.</p>
        <p class="powered-by">⚡ Powered by Cloudflare Pages</p>
    </footer>
</body>
</html>
```

3. **Save the file:**
   - File name: `index.html`
   - Save location: Inside `my-university-site` folder
   - File type: "All Files" (not .txt!)

✅ **You now have a website file!**

### ภาษาไทย

เราจะสร้างเว็บไซต์ภาควิชามหาวิทยาลัยง่ายๆ

**ขั้นตอนที่ 1: สร้างโฟลเดอร์บนคอมพิวเตอร์**

1. **เปิด File Explorer** (Windows) หรือ **Finder** (Mac)
2. **ไปที่ Desktop**
3. **สร้างโฟลเดอร์ใหม่** ชื่อ: `my-university-site`

**ขั้นตอนที่ 2: สร้างไฟล์ HTML**

1. **เปิด Notepad** (Windows) หรือ **TextEdit** (Mac)
2. **คัดลอกและวางโค้ดนี้:** (ใช้โค้ดด้านบน)

3. **บันทึกไฟล์:**
   - ชื่อไฟล์: `index.html`
   - ตำแหน่งบันทึก: ภายในโฟลเดอร์ `my-university-site`
   - ประเภทไฟล์: "All Files" (ไม่ใช่ .txt!)

✅ **ตอนนี้คุณมีไฟล์เว็บไซต์แล้ว!**

---

## Part 3: Deploy to Cloudflare Pages / ส่วนที่ 3: Deploy ไปยัง Cloudflare Pages

### English

**Step 1: Go to Cloudflare Pages**

1. **Open Cloudflare Dashboard**
   ```
   https://dash.cloudflare.com
   ```

2. **Log in** with your email and password

3. **Click "Workers & Pages"** in left sidebar
   - Look under "Build" section
   - Click to expand if needed

4. **Click "Create application"** button (top right)

5. **Click "Pages" tab** at the top

6. **Click "Upload assets"** button

✅ You should see the upload page

**Step 2: Upload your website**

1. **Click "Create a new project"**

2. **Enter project name:**
   - Type: `my-university-site`
   - (Use lowercase, no spaces)

3. **Click "Create project"**

4. **Upload your files:**
   - Click "Select from computer"
   - Navigate to your `my-university-site` folder
   - Select `index.html`
   - Click "Open"

5. **Click "Deploy site"** button

⏳ **Wait 30-60 seconds** for deployment...

✅ **Success!** You'll see:
- Green checkmark
- "Your site is live!"
- A URL like: `https://my-university-site.pages.dev`

**Step 3: View your website**

1. **Click "Continue to project"**

2. **Click "Visit site"** button (top right)

3. **Your website opens in new tab!**

🎉 **Congratulations!** Your website is now live on the internet!

### ภาษาไทย

**ขั้นตอนที่ 1: ไปที่ Cloudflare Pages**

1. **เปิด Cloudflare Dashboard**
   ```
   https://dash.cloudflare.com
   ```

2. **เข้าสู่ระบบ** ด้วยอีเมลและรหัสผ่าน

3. **คลิก "Workers & Pages"** ในแถบด้านข้างซ้าย
   - มองหาในส่วน "Build"
   - คลิกเพื่อขยายถ้าจำเป็น

4. **คลิกปุ่ม "Create application"** (มุมขวาบน)

5. **คลิกแท็บ "Pages"** ด้านบน

6. **คลิกปุ่ม "Upload assets"**

✅ คุณควรเห็นหน้าอัพโหลด

**ขั้นตอนที่ 2: อัพโหลดเว็บไซต์ของคุณ**

1. **คลิก "Create a new project"**

2. **ใส่ชื่อโปรเจค:**
   - พิมพ์: `my-university-site`
   - (ใช้ตัวพิมพ์เล็ก ไม่มีช่องว่าง)

3. **คลิก "Create project"**

4. **อัพโหลดไฟล์ของคุณ:**
   - คลิก "Select from computer"
   - ไปที่โฟลเดอร์ `my-university-site` ของคุณ
   - เลือก `index.html`
   - คลิก "Open"

5. **คลิกปุ่ม "Deploy site"**

⏳ **รอ 30-60 วินาที** สำหรับการ deploy...

✅ **สำเร็จ!** คุณจะเห็น:
- เครื่องหมายถูกสีเขียว
- "Your site is live!"
- URL เช่น: `https://my-university-site.pages.dev`

**ขั้นตอนที่ 3: ดูเว็บไซต์ของคุณ**

1. **คลิก "Continue to project"**

2. **คลิกปุ่ม "Visit site"** (มุมขวาบน)

3. **เว็บไซต์ของคุณเปิดในแท็บใหม่!**

🎉 **ยินดีด้วย!** เว็บไซต์ของคุณอยู่บนอินเทอร์เน็ตแล้ว!

---

## Part 4: Understanding Your Deployment / ส่วนที่ 4: ทำความเข้าใจการ Deploy

### English

**Your Pages Dashboard shows:**

1. **Deployments tab**
   - History of all deployments
   - Each deployment has a unique ID
   - Shows deployment status and time

2. **Settings tab**
   - Project name
   - Custom domains (advanced)
   - Environment variables
   - Build settings

3. **Analytics tab** (if available)
   - Page views
   - Requests
   - Bandwidth usage

**Your website URL:**
```
https://[project-name].pages.dev
```

**What this means:**
- `[project-name]` = Your project name
- `pages.dev` = Cloudflare Pages domain
- **HTTPS** = Secure connection (automatic!)
- **Global** = Accessible worldwide

**Cool features:**
- ✅ Automatic HTTPS certificate
- ✅ Global CDN (fast everywhere)
- ✅ Unlimited bandwidth
- ✅ DDoS protection
- ✅ Always online

### ภาษาไทย

**Pages Dashboard ของคุณแสดง:**

1. **แท็บ Deployments**
   - ประวัติการ deploy ทั้งหมด
   - แต่ละการ deploy มี ID ไม่ซ้ำ
   - แสดงสถานะและเวลาการ deploy

2. **แท็บ Settings**
   - ชื่อโปรเจค
   - โดเมนที่กำหนดเอง (ขั้นสูง)
   - ตัวแปรสภาพแวดล้อม
   - การตั้งค่า Build

3. **แท็บ Analytics** (ถ้ามี)
   - จำนวนการดูหน้า
   - คำขอ
   - การใช้ Bandwidth

**URL เว็บไซต์ของคุณ:**
```
https://[project-name].pages.dev
```

**นี่หมายความว่า:**
- `[project-name]` = ชื่อโปรเจคของคุณ
- `pages.dev` = โดเมน Cloudflare Pages
- **HTTPS** = การเชื่อมต่อที่ปลอดภัย (อัตโนมัติ!)
- **Global** = เข้าถึงได้ทั่วโลก

**ฟีเจอร์เจ๋งๆ:**
- ✅ ใบรับรอง HTTPS อัตโนมัติ
- ✅ CDN โลก (เร็วทุกที่)
- ✅ Bandwidth ไม่จำกัด
- ✅ การป้องกัน DDoS
- ✅ ออนไลน์ตลอดเวลา

---

## Part 5: Update Your Website / ส่วนที่ 5: อัพเดตเว็บไซต์

### English

**Let's make a change to your website!**

**Step 1: Edit your HTML file**

1. **Open** `index.html` in Notepad/TextEdit

2. **Find this line:**
   ```html
   <p>Your University Name</p>
   ```

3. **Change it to your actual university name:**
   ```html
   <p>Chulalongkorn University</p>
   ```

4. **Save the file** (Ctrl+S or Cmd+S)

**Step 2: Deploy the update**

1. **Go back to Cloudflare Dashboard**

2. **Click your project** (`my-university-site`)

3. **Click "Create new deployment"** button

4. **Upload the updated** `index.html` file

5. **Click "Save and Deploy"**

⏳ **Wait 30 seconds...**

✅ **Done!** Your changes are live!

**Step 3: Verify the update**

1. **Click "Visit site"**

2. **You should see your university name!**

3. **If you don't see changes:**
   - Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - This refreshes and clears cache

🎉 **You just updated a live website!**

### ภาษาไทย

**มาเปลี่ยนแปลงเว็บไซต์ของคุณกัน!**

**ขั้นตอนที่ 1: แก้ไขไฟล์ HTML**

1. **เปิด** `index.html` ใน Notepad/TextEdit

2. **หาบรรทัดนี้:**
   ```html
   <p>Your University Name</p>
   ```

3. **เปลี่ยนเป็นชื่อมหาวิทยาลัยจริงของคุณ:**
   ```html
   <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
   ```

4. **บันทึกไฟล์** (Ctrl+S หรือ Cmd+S)

**ขั้นตอนที่ 2: Deploy การอัพเดต**

1. **กลับไปที่ Cloudflare Dashboard**

2. **คลิกโปรเจคของคุณ** (`my-university-site`)

3. **คลิกปุ่ม "Create new deployment"**

4. **อัพโหลด** ไฟล์ `index.html` ที่อัพเดตแล้ว

5. **คลิก "Save and Deploy"**

⏳ **รอ 30 วินาที...**

✅ **เสร็จแล้ว!** การเปลี่ยนแปลงของคุณอยู่บนเว็บแล้ว!

**ขั้นตอนที่ 3: ตรวจสอบการอัพเดต**

1. **คลิก "Visit site"**

2. **คุณควรเห็นชื่อมหาวิทยาลัยของคุณ!**

3. **ถ้าคุณไม่เห็นการเปลี่ยนแปลง:**
   - กด Ctrl+F5 (Windows) หรือ Cmd+Shift+R (Mac)
   - นี่จะรีเฟรชและล้างแคช

🎉 **คุณเพิ่งอัพเดตเว็บไซต์สดเสร็จแล้ว!**

---

## Part 6: Advanced Options (Optional) / ส่วนที่ 6: ตัวเลือกขั้นสูง (ไม่บังคับ)

### English

**Connect to GitHub/GitLab**

Instead of uploading files manually, you can connect your project to GitHub or GitLab:

**Benefits:**
- Automatic deployments when you push code
- Version control
- Collaboration with team members
- Rollback to previous versions

**How to connect:**
1. Create a GitHub/GitLab account
2. Create a repository
3. Push your code to the repository
4. In Cloudflare Pages, choose "Connect to Git"
5. Authorize Cloudflare to access your repository
6. Select your repository
7. Configure build settings
8. Deploy!

**Custom Domain**

You can use your own domain name:

**Example:**
- Instead of: `my-university-site.pages.dev`
- Use: `cs.university.edu`

**Steps:**
1. Own a domain name
2. Go to Pages project → Settings → Custom domains
3. Click "Set up a custom domain"
4. Enter your domain
5. Update DNS records (Cloudflare provides instructions)
6. Wait for verification (5-10 minutes)
7. Done!

### ภาษาไทย

**เชื่อมต่อกับ GitHub/GitLab**

แทนที่จะอัพโหลดไฟล์ด้วยตนเอง คุณสามารถเชื่อมต่อโปรเจคของคุณกับ GitHub หรือ GitLab:

**ประโยชน์:**
- การ deploy อัตโนมัติเมื่อคุณ push โค้ด
- การควบคุมเวอร์ชัน
- ทำงานร่วมกับสมาชิกในทีม
- ย้อนกลับไปเวอร์ชันก่อนหน้า

**วิธีเชื่อมต่อ:**
1. สร้างบัญชี GitHub/GitLab
2. สร้าง repository
3. Push โค้ดของคุณไปยัง repository
4. ใน Cloudflare Pages เลือก "Connect to Git"
5. อนุญาต Cloudflare ให้เข้าถึง repository ของคุณ
6. เลือก repository ของคุณ
7. ตั้งค่า build
8. Deploy!

**โดเมนที่กำหนดเอง**

คุณสามารถใช้ชื่อโดเมนของคุณเอง:

**ตัวอย่าง:**
- แทนที่จะเป็น: `my-university-site.pages.dev`
- ใช้: `cs.university.edu`

**ขั้นตอน:**
1. มีชื่อโดเมน
2. ไปที่โปรเจค Pages → Settings → Custom domains
3. คลิก "Set up a custom domain"
4. ใส่โดเมนของคุณ
5. อัพเดต DNS records (Cloudflare ให้คำแนะนำ)
6. รอการยืนยัน (5-10 นาที)
7. เสร็จแล้ว!

---

## Troubleshooting / การแก้ปัญหา

### English

**Problem: Can't find Workers & Pages**
- **Solution:** Look in left sidebar under "Build" section
- Click "Build" to expand if collapsed
- Scroll down if needed

**Problem: Upload failed**
- **Solution:** 
  - Make sure file is named `index.html` (lowercase)
  - Check file size (should be small)
  - Try a different browser
  - Refresh the page and try again

**Problem: Website shows error**
- **Solution:**
  - Check if HTML file has errors
  - Make sure you saved as `.html` not `.txt`
  - Try uploading again

**Problem: Changes don't appear**
- **Solution:**
  - Wait 30-60 seconds after deployment
  - Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
  - Try incognito/private browsing mode

**Problem: Can't access website**
- **Solution:**
  - Check if deployment completed successfully
  - Verify the URL is correct
  - Try from different device/network

### ภาษาไทย

**ปัญหา: หา Workers & Pages ไม่เจอ**
- **วิธีแก้:** มองในแถบด้านข้างซ้ายในส่วน "Build"
- คลิก "Build" เพื่อขยายถ้าถูกยุบ
- เลื่อนลงถ้าจำเป็น

**ปัญหา: อัพโหลดล้มเหลว**
- **วิธีแก้:**
  - ตรวจสอบให้แน่ใจว่าไฟล์ชื่อ `index.html` (ตัวพิมพ์เล็ก)
  - ตรวจสอบขนาดไฟล์ (ควรเล็ก)
  - ลองใช้เบราว์เซอร์อื่น
  - รีเฟรชหน้าและลองอีกครั้ง

**ปัญหา: เว็บไซต์แสดงข้อผิดพลาด**
- **วิธีแก้:**
  - ตรวจสอบว่าไฟล์ HTML มีข้อผิดพลาดหรือไม่
  - ตรวจสอบให้แน่ใจว่าคุณบันทึกเป็น `.html` ไม่ใช่ `.txt`
  - ลองอัพโหลดอีกครั้ง

**ปัญหา: การเปลี่ยนแปลงไม่ปรากฏ**
- **วิธีแก้:**
  - รอ 30-60 วินาทีหลังการ deploy
  - ล้างแคชเบราว์เซอร์ (Ctrl+F5 หรือ Cmd+Shift+R)
  - ลองโหมด incognito/private browsing

**ปัญหา: เข้าถึงเว็บไซต์ไม่ได้**
- **วิธีแก้:**
  - ตรวจสอบว่าการ deploy เสร็จสมบูรณ์หรือไม่
  - ตรวจสอบว่า URL ถูกต้อง
  - ลองจากอุปกรณ์/เครือข่ายอื่น

---

## Summary / สรุป

### English

**What we learned:**
✅ Created a simple HTML website
✅ Deployed to Cloudflare Pages
✅ Website is live on the internet
✅ Updated the website
✅ Understood deployment process

**Key takeaways:**
- Cloudflare Pages makes deployment easy
- No server management needed
- Changes go live in seconds
- Free and unlimited bandwidth
- Automatic HTTPS and global CDN

**Your website:**
- URL: `https://[your-project].pages.dev`
- Accessible worldwide
- Fast and secure
- Easy to update

**Next steps:**
- Module 3: Set up DNS Security with Zero Trust
- Learn to protect your network

**Questions?** Ask your instructor now!

### ภาษาไทย

**สิ่งที่เราเรียนรู้:**
✅ สร้างเว็บไซต์ HTML ง่ายๆ
✅ Deploy ไปยัง Cloudflare Pages
✅ เว็บไซต์อยู่บนอินเทอร์เน็ต
✅ อัพเดตเว็บไซต์
✅ เข้าใจกระบวนการ deploy

**สิ่งสำคัญที่ได้เรียนรู้:**
- Cloudflare Pages ทำให้การ deploy ง่าย
- ไม่ต้องจัดการเซิร์ฟเวอร์
- การเปลี่ยนแปลงอยู่บนเว็บในไม่กี่วินาที
- ฟรีและ bandwidth ไม่จำกัด
- HTTPS อัตโนมัติและ CDN โลก

**เว็บไซต์ของคุณ:**
- URL: `https://[your-project].pages.dev`
- เข้าถึงได้ทั่วโลก
- เร็วและปลอดภัย
- อัพเดตง่าย

**ขั้นตอนถัดไป:**
- โมดูล 3: ตั้งค่า DNS Security ด้วย Zero Trust
- เรียนรู้การปกป้องเครือข่ายของคุณ

**มีคำถาม?** ถามผู้สอนของคุณตอนนี้!

---

<p align="center">
  <strong>Great job! / ทำได้ดีมาก!</strong><br>
  <strong>Continue to <a href="./03-dns-security.md">Module 3: DNS Security</a></strong>
</p>
