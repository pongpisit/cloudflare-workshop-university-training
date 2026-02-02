# Cloudflare Workshop - Agenda (ภาษาไทย)

Workshop สำหรับมหาวิทยาลัย - 3 ชั่วโมง

---

## วัตถุประสงค์

1. เพื่อให้ผู้เข้าร่วมเข้าใจภาพรวมและประโยชน์ของผลิตภัณฑ์ที่อยู่ในโครงการ
2. เพื่อให้ผู้เข้าร่วมสามารถสร้างและ Deploy Cloudflare Pages ผ่าน Cloudflare Dashboard ได้ด้วยตนเอง
3. เพื่อให้ผู้เข้าร่วมสามารถตั้งค่านโยบาย DNS Filtering เพื่อบล็อกภัยคุกคาม/หมวดหมู่เว็บไซต์ และทดสอบการทำงานผ่าน Browser (DoH) ได้

---

## Agenda

### ช่วงที่ 1: แนะนำ Cloudflare และการให้บริการกับทางมหาลัย (45 นาที)

#### หัวข้อและรายละเอียดการอบรมเบื้องต้น

**แนะนำภาพรวมผลิตภัณฑ์ Cloudflare Platform และประโยชน์ที่เกี่ยวข้องกับโครงการ:**
- นำเสนอภาพรวมของ Cloudflare Platform ในฐานะแพลตฟอร์มบริการ Edge Services ที่ครอบคลุม
- ชุดผลิตภัณฑ์หลัก เช่น บริการด้านความปลอดภัย (Security), ประสิทธิภาพ (Performance), และการพัฒนาแอปพลิเคชัน (Developer Services)
- เน้นย้ำถึงประโยชน์หลักที่ Cloudflare จะนำมาสู่โครงการโดยเฉพาะ เช่น การประหยัดค่าใช้จ่ายด้านโครงสร้างพื้นฐาน และการเพิ่มความปลอดภัยให้กับบุคลากรในมหาลัย

**แนวคิด Edge / Serverless / DNS Security / Zero Trust Network Access: ทำงานอย่างไรแบบเข้าใจง่าย:**

1. **Edge Computing:**
   - อธิบายแนวคิดการประมวลผลที่ใกล้กับผู้ใช้ที่สุด (The Edge)
   - ความแตกต่างจากการประมวลผลแบบดั้งเดิม (Centralized Data Center)
   - ยกตัวอย่างการใช้งาน Cloudflare Workers/Pages

2. **Serverless Computing:**
   - แนะนำ Cloudflare Workers/Pages ในฐานะตัวอย่างของการเขียนโค้ดที่สามารถทำงานได้โดยไม่ต้องกังวลเรื่องการจัดการเซิร์ฟเวอร์ (Serverless)
   - เน้นประโยชน์ด้านความยืดหยุ่นและความคุ้มค่า

3. **DNS Security:**
   - อธิบายความสำคัญของการรักษาความปลอดภัยในระดับ DNS (Domain Name System)
   - การทำงานของบริการเช่น Cloudflare DNS (1.1.1.1) หรือ Cloudflare Gateway ในการป้องกันภัยคุกคามในระดับเครือข่าย

4. **Zero Trust Network Access (ZTNA):**
   - นำเสนอหลักการ Zero Trust โดยเน้นที่แนวคิด "Never Trust, Always Verify"
   - แนะนำ Cloudflare Access/ZTNA ในการควบคุมการเข้าถึงแอปพลิเคชันภายในอย่างปลอดภัย
   - โดยไม่จำเป็นต้องใช้ VPN แบบดั้งเดิม

**แจ้งความพร้อมผู้เข้าอบรม:**
- บัญชี/สิทธิ์/การเชื่อมต่อเข้าใช้ระบบ Cloudflare แบบ Free plan

---

### ช่วงที่ 2: Labs - Cloudflare Pages (60 นาที)

#### ภาพรวม Workers/Pages และตัวอย่างการใช้งานในงานจริง

**ทดสอบ Deploy Static Website ไปยัง Cloudflare Pages:**

1. **สร้าง Pages project:**
   - Upload ไฟล์ หรือ
   - เชื่อมผ่าน GitHub/GitLab

2. **Deploy และทดสอบการเข้าถึงจาก URL:**
   - เพื่อตรวจสอบการเผยแพร่
   - ทดสอบการทำงาน

**ขั้นตอนปฏิบัติ:**
- เข้า Dashboard: https://dash.cloudflare.com
- ไปที่ Build → Compute & AI → Workers & Pages
- สร้าง Pages Project
- Upload ไฟล์ HTML
- Deploy และทดสอบ

---

### ช่วงที่ 3: Labs - Zero Trust เฉพาะ DNS Security ผ่าน Browser (DoH) (60 นาที)

#### ตั้งค่า DNS Filtering และทดสอบ

**1. เข้า Zero Trust Dashboard:**
- URL: https://one.dash.cloudflare.com/

**2. ไปที่เมนู: Traffic policies > Firewall policies > DNS**

**3. Block Security Threats:**
- Security Categories in "All security risks"
- Action: Block

**4. (ตัวเลือก) บล็อก Content Category:**
- เช่น Adult Themes / Gambling
- Action: Block

**5. (ตัวเลือก) Allow list:**
- สำหรับโดเมนงานสำคัญ
- แนวทางจัดลำดับ policy (Allow ก่อน Block)

**6. ไปที่เมนู: Networks > Resolvers & Proxies > DNS Locations**
- จดค่า DoH ที่ระบบให้
- ตัวอย่าง: `https://xxxxx.cloudflare-gateway.com/dns-query`

**7. ตั้งค่า Browser ให้ใช้ Secure DNS/DoH:**
- Chrome/Edge: Settings → Privacy and security → Security → Use secure DNS → With Custom
- Firefox: Settings → Network Settings → Enable DNS over HTTPS → Custom
- ใส่ DoH endpoint ข้างต้น

**8. ทดสอบด้วยโดเมนตามหมวดหมู่:**
- เช่นกลุ่ม Gambling/Adult
- ตรวจผลการบล็อก/อนุญาต

**9. ไปที่เมนู: Insights > Logs (DNS tab)**
- ตรวจ Allowed/Blocked
- ดู policy ที่ match
- เพื่อยืนยันการทำงานของนโยบาย

---

## ตารางเวลา

| เวลา | กิจกรรม | ระยะเวลา |
|------|---------|----------|
| 09:00-09:45 | ช่วงที่ 1: แนะนำ Cloudflare Platform | 45 นาที |
| 09:45-10:00 | พัก | 15 นาที |
| 10:00-11:00 | ช่วงที่ 2: Lab - Cloudflare Pages | 60 นาที |
| 11:00-11:15 | พัก | 15 นาที |
| 11:15-12:15 | ช่วงที่ 3: Lab - DNS Security | 60 นาที |
| 12:15-12:30 | Q&A และสรุป | 15 นาที |

**รวมเวลา:** 3 ชั่วโมง (รวมพัก 30 นาที)

---

## สิ่งที่ต้องเตรียม

### สำหรับผู้เข้าอบรม
- ✅ คอมพิวเตอร์ (Windows หรือ macOS)
- ✅ เชื่อมต่ออินเทอร์เน็ต
- ✅ Web Browser (Chrome, Firefox, Safari, หรือ Edge)
- ✅ บัญชี Cloudflare (สร้างก่อนอบรม หรือสร้างในช่วงแรก)

### สำหรับผู้สอน
- ✅ บัญชี Cloudflare พร้อมตัวอย่าง
- ✅ ไฟล์ HTML ตัวอย่างสำหรับ Pages
- ✅ เตรียม DoH endpoint สำหรับทดสอบ
- ✅ รายการเว็บไซต์ทดสอบการบล็อก

---

## ผลลัพธ์ที่คาดหวัง

หลังจากเข้าร่วม Workshop ผู้เข้าอบรมจะสามารถ:

1. ✅ เข้าใจภาพรวม Cloudflare Platform และประโยชน์สำหรับมหาวิทยาลัย
2. ✅ Deploy เว็บไซต์ด้วย Cloudflare Pages ได้ด้วยตนเอง
3. ✅ ตั้งค่า DNS Filtering เพื่อป้องกันภัยคุกคาม
4. ✅ ทดสอบการทำงานของ DNS Security ผ่าน Browser
5. ✅ เข้าใจแนวคิด Edge, Serverless, DNS Security, Zero Trust

---

## ทรัพยากรเพิ่มเติม

- [Cloudflare Dashboard](https://dash.cloudflare.com)
- [Zero Trust Dashboard](https://one.dash.cloudflare.com)
- [เอกสาร Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [เอกสาร Zero Trust](https://developers.cloudflare.com/cloudflare-one/)
- [Cloudflare Community (ภาษาไทย)](https://community.cloudflare.com)
