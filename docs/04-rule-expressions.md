# Module 4: Advanced Rule Expressions (Optional)

**Duration:** 30 minutes

## Objective

Learn to build advanced DNS policies using Traffic, Identity, and Device signals with complex conditions.

---

## Understanding Rule Components

Every Cloudflare Zero Trust policy has three parts:

1. **Traffic** - What is being accessed (domains, categories, applications)
2. **Identity** - Who is making the request (users, groups, emails)
3. **Device** - What device is being used (OS, posture, compliance)

---

## Lab 1: Block Social Media Except for Marketing Team

### Step 1: Create the Policy

1. Go to: **https://one.dash.cloudflare.com**
2. Navigate to: **Traffic policies** → **Firewall policies** → **DNS**
3. Click **Add a policy**

### Step 2: Configure Traffic Condition

**Policy name:** `Block Social Media - Non-Marketing`

**Traffic section:**
1. Click **Add condition**
2. **Selector:** `Content Categories`
3. **Operator:** `in`
4. **Value:** Check `Social Media`

### Step 3: Add Identity Condition

1. Click **Add condition** again
2. **Selector:** `User Group Names`
3. **Operator:** `not in`
4. **Value:** Type `Marketing` (create this group if needed)

### Step 4: Set Action

1. **Action:** `Block`
2. ✅ Enable **Display block page**
3. Click **Save policy**

**Result:** Social media is blocked for everyone EXCEPT the Marketing team.

---

## Lab 2: Block File Downloads on Personal Devices

### Step 1: Create HTTP Policy

1. Navigate to: **Traffic policies** → **Firewall policies** → **HTTP**
2. Click **Add a policy**

### Step 2: Configure Traffic Condition

**Policy name:** `Block Risky Downloads - Unmanaged Devices`

**Traffic section:**
1. Click **Add condition**
2. **Selector:** `Download File Types`
3. **Operator:** `in`
4. **Value:** Check:
   - ✅ Executable
   - ✅ Script
   - ✅ Archive

### Step 3: Add Device Condition

1. Click **Add condition**
2. **Selector:** `Passed Device Posture Checks`
3. **Operator:** `is`
4. **Value:** `false`

### Step 4: Set Action

1. **Action:** `Block`
2. Click **Save policy**

**Result:** Risky file downloads are blocked only on devices that fail posture checks.

---

## Lab 3: Using Lists for Scalable Policies

### Step 1: Create a Domain List

1. Navigate to: **Reusable components** → **Lists**
2. Click **Create a list**
3. **List name:** `personal-email-domains`
4. **List type:** `Domain`
5. **Add items:**
   ```
   gmail.com
   yahoo.com
   hotmail.com
   outlook.com
   protonmail.com
   ```
6. Click **Save**

### Step 2: Create Policy Using the List

1. Navigate to: **Traffic policies** → **Firewall policies** → **DNS**
2. Click **Add a policy**
3. **Policy name:** `Block Personal Email`

**Traffic section:**
4. Click **Add condition**
5. **Selector:** `Domain`
6. **Operator:** `in list`
7. **Value:** Select `personal-email-domains`

**Action:**
8. **Action:** `Block`
9. Click **Save policy**

**Benefit:** Update the list once, and all policies using it are automatically updated.

---

## Lab 4: Allow Exceptions with Policy Ordering

### Step 1: Create Allow Policy for IT Team

1. Click **Add a policy**
2. **Policy name:** `Allow IT Team - All Access`

**Identity section:**
3. Click **Add condition**
4. **Selector:** `User Group Names`
5. **Operator:** `in`
6. **Value:** `IT Team`

**Action:**
7. **Action:** `Allow`
8. Click **Save policy**

### Step 2: Reorder Policies

1. Find your new "Allow IT Team" policy
2. **Drag it to the top** of the policy list
3. Ensure it's above all Block policies

**Why:** First matching policy wins. IT Team will match the Allow policy first and bypass all Block policies below.

---

## Lab 5: Complex Multi-Condition Policy

### Scenario: Block Threats for Non-Compliant Devices Only

### Step 1: Create the Policy

1. Click **Add a policy**
2. **Policy name:** `Block Threats - Non-Compliant Devices Only`

### Step 2: Add Traffic Condition

**Traffic section:**
1. Click **Add condition**
2. **Selector:** `Security Categories`
3. **Operator:** `in`
4. **Value:** Check:
   - ✅ Malware
   - ✅ Phishing

### Step 3: Add Device Conditions

1. Click **Add condition**
2. **Selector:** `Operating System`
3. **Operator:** `in`
4. **Value:** Check:
   - ✅ Windows
   - ✅ macOS

5. Click **Add condition**
6. **Selector:** `Passed Device Posture Checks`
7. **Operator:** `is`
8. **Value:** `false`

### Step 4: Set Action

1. **Action:** `Block`
2. Click **Save policy**

**Result:** Threats are blocked only on Windows/macOS devices that fail posture checks.

---

## Understanding Operators

### Comparison Operators

| Operator | Use Case | Example |
|----------|----------|---------|
| `is` | Exact match | Domain is "facebook.com" |
| `is not` | Not exact match | Domain is not "cloudflare.com" |
| `in` | Match any in set | Category in {Malware, Phishing} |
| `not in` | Exclude from set | User not in {Admins, IT} |
| `in list` | Match against list | Domain in list "blocklist" |
| `contains` | String contains | URL contains "download" |
| `matches regex` | Pattern match | Domain matches ".*\.cn$" |

### Logical Operators

- **AND** - All conditions must be true (default between conditions)
- **OR** - Any condition can be true (within same selector)
- **NOT** - Invert condition (use "not in" or "is not")

---

## Policy Evaluation Order

```
Request → Policy 1 (Match?) → YES → Apply Action → STOP
              ↓ NO
          Policy 2 (Match?) → YES → Apply Action → STOP
              ↓ NO
          Policy 3 (Match?) → YES → Apply Action → STOP
              ↓ NO
          Default Action (Usually Allow)
```

**Best Practice Order:**
1. Allow exceptions (specific users/apps)
2. Block high-risk (security threats)
3. Block by policy (content filtering)
4. Allow everything else

---

## Lab 6: Test Your Policies

### Step 1: View Policy Order

1. Go to your DNS policies page
2. Review the order of all policies
3. Ensure Allow policies are at the top

### Step 2: Test Blocking

1. Try to access a blocked domain
2. Verify you see the block page
3. Check which policy matched

### Step 3: Check Logs

1. Navigate to: **Insights** → **Logs** → **DNS**
2. Find your test query
3. Click on it to see:
   - Which policy matched
   - Why it was blocked
   - All conditions that were evaluated

---

## Quick Reference

### Signal Types by Policy

| Signal | DNS | HTTP | Network |
|--------|-----|------|---------|
| Domain | ✅ | ✅ | ❌ |
| URL/Path | ❌ | ✅ | ❌ |
| Application | ❌ | ✅ | ❌ |
| File Types | ❌ | ✅ | ❌ |
| User Identity | ✅ | ✅ | ✅ |
| User Groups | ✅ | ✅ | ✅ |
| Device Posture | ✅ | ✅ | ✅ |
| Source IP | ✅ | ✅ | ✅ |

### Common Patterns

| Pattern | Expression |
|---------|------------|
| Block multiple categories | `Category in {A, B, C}` |
| Exempt specific users | `User not in {Admins}` |
| Block TLD | `Domain matches regex ".*\.cn$"` |
| Use managed list | `Domain in list "blocklist"` |
| Require all conditions | Add multiple conditions (AND) |

---

## ✅ Checkpoint

You should now understand:
- ✅ Traffic, Identity, and Device signals
- ✅ Comparison and logical operators
- ✅ How to use Lists for scalability
- ✅ Policy evaluation order
- ✅ How to build complex multi-condition policies
- ✅ How to test and verify policies

---

## Summary

**Key Concepts:**
- **Signals** - Traffic (what), Identity (who), Device (how)
- **Operators** - `and`, `or`, `not`, `in`, `not in`, `contains`, `matches regex`
- **Lists** - Centralized management, reusable across policies
- **Evaluation** - First match wins, order matters
- **Best Practice** - Specific exceptions first, then blocks, then allows

---

## Workshop Complete!

You've learned how to:
1. ✅ Create a Cloudflare account
2. ✅ Deploy websites with Cloudflare Pages
3. ✅ Configure DNS security filtering
4. ✅ Build advanced policies with rule expressions

**Next Steps:**
- Explore other Zero Trust features
- Set up WARP client for device protection
- Configure Access policies for internal apps
- Monitor your security logs regularly
