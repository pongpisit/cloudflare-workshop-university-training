# Instructor Guide / คู่มือผู้สอน
# Cloudflare Workshop: University Training

**For workshop instructors and facilitators**

---

## 📋 Pre-Workshop Preparation

### 1 Week Before

**English:**
- [ ] Review all workshop materials
- [ ] Test all modules yourself
- [ ] Verify Cloudflare Dashboard hasn't changed
- [ ] Prepare participant list
- [ ] Send Getting Started guide to participants
- [ ] Ask participants to create Cloudflare accounts

**ภาษาไทย:**
- [ ] ตรวจสอบเอกสารการอบรมทั้งหมด
- [ ] ทดสอบโมดูลทั้งหมดด้วยตัวเอง
- [ ] ยืนยันว่า Cloudflare Dashboard ไม่เปลี่ยนแปลง
- [ ] เตรียมรายชื่อผู้เข้าร่วม
- [ ] ส่งคู่มือเริ่มต้นให้ผู้เข้าร่วม
- [ ] ขอให้ผู้เข้าร่วมสร้างบัญชี Cloudflare

### 1 Day Before

**English:**
- [ ] Test internet connection at venue
- [ ] Verify projector/screen works
- [ ] Print Quick Reference guides (optional)
- [ ] Prepare backup materials
- [ ] Test all demo accounts
- [ ] Prepare troubleshooting laptop

**ภาษาไทย:**
- [ ] ทดสอบการเชื่อมต่ออินเทอร์เน็ตที่สถานที่
- [ ] ยืนยันว่าโปรเจคเตอร์/หน้าจอทำงาน
- [ ] พิมพ์คู่มืออ้างอิงด่วน (ไม่บังคับ)
- [ ] เตรียมเอกสารสำรอง
- [ ] ทดสอบบัญชีสาธิตทั้งหมด
- [ ] เตรียมแล็ปท็อปสำหรับแก้ปัญหา

---

## ⏰ Workshop Timeline

### Module 1: Introduction (30 minutes)

**0:00-0:10 - Welcome & Overview**
- Introduce yourself
- Workshop objectives
- Housekeeping (breaks, restrooms, etc.)
- Ice breaker (optional)

**0:10-0:25 - Cloudflare Platform Introduction**
- What is Cloudflare?
- Why universities need it
- Key concepts (Edge, Serverless, DNS Security, Zero Trust)
- Benefits demonstration

**0:25-0:30 - Q&A**
- Answer questions
- Verify everyone understands concepts

**Tips:**
- Use simple analogies
- Show real examples
- Keep it interactive
- Don't go too technical

---

### Module 2: Cloudflare Pages (45 minutes)

**0:30-0:40 - Pages Introduction**
- What is Cloudflare Pages?
- Use cases for universities
- Demo: Show existing Pages site

**0:40-1:00 - Hands-on: Deploy Website**
- Guide participants through HTML creation
- Walk through upload process
- Help troubleshoot issues
- Verify everyone's site is live

**1:00-1:15 - Update Website**
- Show how to make changes
- Deploy updates
- Test changes

**Tips:**
- Walk around to help
- Use screen sharing for demos
- Have backup HTML file ready
- Celebrate when sites go live!

---

### Break (15 minutes)

**1:15-1:30**
- Coffee/tea break
- Networking
- Individual help if needed

---

### Module 3: DNS Security (60 minutes)

**1:30-1:40 - DNS Security Introduction**
- Why DNS security matters
- Threats we're protecting against
- How filtering works

**1:40-2:00 - Create DNS Policies**
- Navigate to Zero Trust
- Create security threat policy
- Create content category policy
- Create allow list
- Explain policy order

**2:00-2:15 - Configure Browser DoH**
- Show for each browser type
- Help participants configure
- Verify configuration

**2:15-2:25 - Test Filtering**
- Test malware blocking
- Test content blocking
- Test allow list
- Troubleshoot issues

**2:25-2:30 - View Logs**
- Show DNS logs
- Explain what to look for
- Demonstrate filtering

**Tips:**
- This is the most complex module
- Go slowly
- Check everyone is following
- Have screenshots ready
- Be patient with questions

---

### Wrap-up (15 minutes)

**2:30-2:45**
- Recap what was learned
- Answer remaining questions
- Share Quick Reference guide
- Provide contact information
- Collect feedback
- Certificates (if applicable)

---

## 🎯 Teaching Tips

### For Non-Technical Audiences

**English:**
1. **Use analogies** - Compare to familiar concepts
2. **Show, don't just tell** - Live demonstrations
3. **Repeat key points** - Reinforce important concepts
4. **Check understanding** - Ask "Does this make sense?"
5. **Be patient** - Some will be slower than others
6. **Celebrate wins** - Acknowledge when things work
7. **Stay positive** - Technical issues happen

**ภาษาไทย:**
1. **ใช้การเปรียบเทียบ** - เปรียบกับแนวคิดที่คุ้นเคย
2. **แสดง ไม่ใช่แค่บอก** - การสาธิตสด
3. **ทำซ้ำประเด็นสำคัญ** - เสริมแนวคิดสำคัญ
4. **ตรวจสอบความเข้าใจ** - ถาม "เข้าใจไหม?"
5. **อดทน** - บางคนจะช้ากว่าคนอื่น
6. **ฉลองชัยชนะ** - ยอมรับเมื่อสิ่งต่างๆ ทำงาน
7. **คิดบวก** - ปัญหาทางเทคนิคเกิดขึ้นได้

---

## 🐛 Common Issues & Solutions

### Issue: Participants can't create account

**Causes:**
- Email already used
- Corporate email blocked
- Verification email in spam

**Solutions:**
- Check spam folder
- Use personal email
- Wait and resend verification
- Contact Cloudflare support

---

### Issue: Upload to Pages fails

**Causes:**
- File not named index.html
- File saved as .txt
- Browser issue
- Network problem

**Solutions:**
- Verify filename (case-sensitive)
- Check file extension
- Try different browser
- Check internet connection

---

### Issue: DNS policies not working

**Causes:**
- DoH URL incorrect
- Policy order wrong
- Browser cache
- Propagation delay

**Solutions:**
- Verify DoH URL (no spaces)
- Check policy order (Allow first)
- Clear browser cache
- Wait 2-3 minutes
- Restart browser

---

### Issue: Participants falling behind

**Solutions:**
- Pair them with someone ahead
- Provide one-on-one help during breaks
- Have assistant instructors
- Don't wait too long for stragglers
- Offer follow-up session

---

## 📊 Engagement Strategies

### Keep Participants Engaged

**English:**
1. **Ask questions** - "Who has used Cloudflare before?"
2. **Show real examples** - University websites using Cloudflare
3. **Share stories** - Security incidents prevented
4. **Use humor** - Keep it light and fun
5. **Interactive demos** - Let them suggest what to test
6. **Pair programming** - Encourage helping each other
7. **Breaks** - Don't skip them!

**ภาษาไทย:**
1. **ถามคำถาม** - "ใครเคยใช้ Cloudflare บ้าง?"
2. **แสดงตัวอย่างจริง** - เว็บไซต์มหาวิทยาลัยที่ใช้ Cloudflare
3. **แบ่งปันเรื่องราว** - เหตุการณ์ความปลอดภัยที่ป้องกันได้
4. **ใช้อารมณ์ขัน** - ทำให้เบาและสนุก
5. **การสาธิตแบบโต้ตอบ** - ให้พวกเขาแนะนำสิ่งที่จะทดสอบ
6. **การเขียนโปรแกรมเป็นคู่** - ส่งเสริมให้ช่วยเหลือกัน
7. **พัก** - อย่าข้ามพวกเขา!

---

## 📝 Assessment Ideas

### Check Understanding

**Quiz Questions:**
1. What is Edge Computing?
2. What does DNS Security protect against?
3. Why is policy order important?
4. What is DoH?
5. How do you update a Pages site?

**Practical Assessment:**
- Deploy a website successfully
- Create a working DNS policy
- Configure browser DoH
- View and interpret logs

**Feedback Collection:**
- What was most useful?
- What was confusing?
- What would you change?
- Would you recommend this workshop?

---

## 🎁 Bonus Content (If Time Permits)

### Advanced Topics

1. **Custom Domains for Pages**
   - How to add custom domain
   - DNS configuration
   - SSL certificates

2. **Network-Wide DNS Filtering**
   - Router configuration
   - IPv4 addresses
   - DHCP settings

3. **Zero Trust Access**
   - Application access control
   - Identity providers
   - Access policies

4. **Cloudflare Analytics**
   - Traffic analytics
   - Security insights
   - Performance metrics

---

## 📞 Support Resources

### During Workshop
- Quick Reference Guide
- Troubleshooting section in each module
- Cloudflare Community Forum
- Your contact information

### After Workshop
- Share presentation slides
- Provide recording (if recorded)
- Create follow-up email with resources
- Offer office hours for questions

---

## 🎯 Success Metrics

### Workshop is Successful If:

**English:**
- ✅ 80%+ participants deploy a website
- ✅ 80%+ participants configure DNS security
- ✅ 90%+ understand key concepts
- ✅ Positive feedback scores
- ✅ Participants can help each other
- ✅ Questions show engagement
- ✅ Participants want to learn more

**ภาษาไทย:**
- ✅ 80%+ ผู้เข้าร่วม deploy เว็บไซต์
- ✅ 80%+ ผู้เข้าร่วมตั้งค่า DNS security
- ✅ 90%+ เข้าใจแนวคิดสำคัญ
- ✅ คะแนนคำติชมเชิงบวก
- ✅ ผู้เข้าร่วมสามารถช่วยเหลือกัน
- ✅ คำถามแสดงการมีส่วนร่วม
- ✅ ผู้เข้าร่วมต้องการเรียนรู้เพิ่มเติม

---

## 📧 Follow-Up Email Template

```
Subject: Cloudflare Workshop - Thank You & Resources

Dear Workshop Participants,

Thank you for attending the Cloudflare Workshop! Here are the resources we discussed:

📚 Workshop Materials:
- Getting Started Guide: [link]
- Quick Reference: [link]
- All Modules: [link]

🔗 Useful Links:
- Cloudflare Dashboard: https://dash.cloudflare.com
- Zero Trust Dashboard: https://one.dash.cloudflare.com
- Documentation: https://developers.cloudflare.com
- Community: https://community.cloudflare.com

💡 What's Next:
- Practice what you learned
- Explore other Cloudflare features
- Share knowledge with colleagues
- Join Cloudflare Community

❓ Questions?
Feel free to reach out: [your email]

Best regards,
[Your name]
```

---

## 🎓 Continuous Improvement

### After Each Workshop

**English:**
1. **Collect feedback** - Survey participants
2. **Review what worked** - Keep successful elements
3. **Identify issues** - What needs improvement?
4. **Update materials** - Fix errors, add clarifications
5. **Share learnings** - Help other instructors
6. **Celebrate success** - Acknowledge good work

**ภาษาไทย:**
1. **รวบรวมคำติชม** - สำรวจผู้เข้าร่วม
2. **ตรวจสอบสิ่งที่ได้ผล** - เก็บองค์ประกอบที่ประสบความสำเร็จ
3. **ระบุปัญหา** - อะไรต้องปรับปรุง?
4. **อัพเดตเอกสาร** - แก้ไขข้อผิดพลาด เพิ่มคำชี้แจง
5. **แบ่งปันการเรียนรู้** - ช่วยผู้สอนคนอื่น
6. **ฉลองความสำเร็จ** - ยอมรับงานที่ดี

---

<p align="center">
  <strong>Good luck with your workshop! / โชคดีกับการอบรมของคุณ!</strong><br>
  <strong>You've got this! / คุณทำได้!</strong>
</p>
