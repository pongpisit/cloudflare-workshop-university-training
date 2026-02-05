# Module 3a: Understanding Rule Expressions

**Duration:** 15 minutes

## Objective

Learn how to build DNS security policies using Traffic, Identity, and Device signals with operators.

---

## The Three Signal Types

### 1. Traffic Signals (What is being accessed?)

| Signal | Example | Use Case |
|--------|---------|----------|
| Domain | `facebook.com` | Block specific sites |
| Security Categories | `Malware, Phishing` | Block threats |
| Content Categories | `Social Media, Gambling` | Filter content |

### 2. Identity Signals (Who is making the request?)

| Signal | Example | Use Case |
|--------|---------|----------|
| User Email | `john@university.edu` | Allow specific user |
| Emails ending in | `@university.edu` | Allow domain users |
| Country | `Thailand` | Geo-restrictions |

### 3. Device Signals (What device is being used?)

| Signal | Example | Use Case |
|--------|---------|----------|
| Firewall | Enabled | Require firewall |
| Disk Encryption | Encrypted | Require encryption |
| OS Version | >= 14.0 | Require updated OS |

---

## Operators

### Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `is` | Exact match | Domain is "x.com" |
| `in` | Value in set | Category in {Malware, Phishing} |
| `not in` | Value not in set | User not in {Admins} |
| `contains` | String contains | URL contains "api" |
| `matches regex` | Regular expression | Domain matches ".*\.cn$" |

### Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `AND` | All conditions must be true | Category is Malware AND User not in IT |
| `OR` | Any condition can be true | Category is Malware OR Category is Phishing |
| `NOT` | Invert condition | User NOT in Contractors |

---

## Hands-On: Create a DNS Policy Rule

### Step 1: Navigate to DNS Policies

1. Go to: **https://one.dash.cloudflare.com**
2. Click **Gateway** > **Firewall Policies**
3. Click **DNS** tab
4. Click **Add a policy**

### Step 2: Add Traffic Selector

1. **Policy name:** `Block Social Media for Non-Marketing`
2. In **Traffic** section, click **Add condition**
3. Configure:
   - **Selector:** `Content Categories`
   - **Operator:** `in`
   - **Value:** Select `Social Media`

### Step 3: Add Identity Selector

1. Click **Add condition** again
2. Configure:
   - **Selector:** `User Group Names`
   - **Operator:** `not in`
   - **Value:** `Marketing`

### Step 4: Set Action

1. **Action:** Select `Block`
2. ✅ Enable **Display block page**
3. Click **Save policy**

### Understanding the Expression

The rule translates to:

```
IF   Content Categories IN { Social Media }
AND  User Group Names NOT IN { Marketing }
THEN Block
```

This combines:
- **Traffic signals** (Content Categories)
- **Identity signals** (User Group Names)

---

## Practical Examples

### Example 1: Block Threats Except Security Team

**Goal:** Block malware/phishing for all users except Security team.

**Configuration:**
1. **Selector:** `Security Categories` → **Operator:** `in` → **Value:** `Malware, Phishing, Command and Control`
2. Click **Add condition**
3. **Selector:** `User Group Identity` → **Operator:** `not in` → **Value:** `Security Team`
4. **Action:** `Block`

### Example 2: Block Gambling Sites

**Goal:** Block all gambling websites.

**Configuration:**
1. **Selector:** `Content Categories` → **Operator:** `in` → **Value:** `Gambling`
2. **Action:** `Block`

### Example 3: Block Specific Domain

**Goal:** Block access to a specific domain.

**Configuration:**
1. **Selector:** `Domain` → **Operator:** `is` → **Value:** `block.com`
2. **Action:** `Block`

---

## Working with Lists

Lists let you manage values centrally and reuse them across policies.

### Create a List

1. Go to **Gateway** > **Lists**
2. Click **Create a list**
3. Choose list type: **Domain**
4. Enter list name: `blocked-domains`
5. Add domains (one per line):
   ```
   example1.com
   example2.com
   example3.com
   ```
6. Click **Save**

### Use List in Policy

1. Create new DNS policy
2. **Selector:** `Domain` → **Operator:** `in list` → **Value:** Select `blocked-domains`
3. **Action:** `Block`

**Benefits:**
- ✅ Update once, apply everywhere
- ✅ Easier management
- ✅ Reduces policy errors

---

## Policy Evaluation Order

**Important:** First matching policy wins!

```
Request → Policy 1 (Match?) → YES → Apply Action & STOP
              ↓ NO
          Policy 2 (Match?) → YES → Apply Action & STOP
              ↓ NO
          Policy 3 (Match?) → YES → Apply Action & STOP
              ↓ NO
          Default Action (Allow)
```

### Best Practice Order

1. **Allow exceptions first** (bypass for specific users)
2. **Block high-risk** (security threats)
3. **Block by policy** (content filtering)
4. **Allow everything else** (default)

---

## ✅ Checkpoint

You should now understand:
- ✅ Three signal types: Traffic, Identity, Device
- ✅ Comparison operators: `is`, `in`, `not in`, `contains`
- ✅ Logical operators: `AND`, `OR`, `NOT`
- ✅ How to create DNS policies with multiple conditions
- ✅ How to use Lists for scalable management
- ✅ Policy evaluation order matters

---

## Quick Reference

### Common Patterns

| Pattern | Expression | Use Case |
|---------|------------|----------|
| Match any in set | `Category in {A, B, C}` | Block multiple categories |
| Exclude from rule | `User not in {Admins}` | Exempt specific users |
| Use managed list | `Domain in list "blocklist"` | Scalable blocking |
| Combine conditions | `A and B and C` | All must match |
