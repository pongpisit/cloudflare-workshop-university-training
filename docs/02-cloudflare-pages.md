# Module 2: Deploy Website with Cloudflare Pages

**Duration:** 45 minutes

## Step 1: Create HTML File

1. Open Notepad (Windows) or TextEdit (Mac)
2. Copy this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My University Site</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
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
        header h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        header p { font-size: 1.2rem; opacity: 0.9; }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        .section { margin: 3rem 0; }
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
        .card h3 { color: #764ba2; margin-bottom: 1rem; }
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
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
        <p>⚡ Powered by Cloudflare Pages</p>
    </footer>
</body>
</html>
```

3. Save as `index.html` (not .txt!)
4. Save to Desktop or Documents folder

## Step 2: Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com
2. Click **"Workers & Pages"** in left sidebar
3. Click **"Create application"** (blue button, top right)
4. Click **"Pages"** tab
5. Click **"Upload assets"**
6. Click **"Create a new project"**
7. Enter project name: `my-university-site` (lowercase, no spaces)
8. Click **"Create project"**
9. Click **"Select from computer"**
10. Select your `index.html` file
11. Click **"Deploy site"**
12. Wait 30-60 seconds
13. Click **"Continue to project"**
14. Click **"Visit site"** (top right)

✅ Your website is now live!

## Step 3: Update Your Website

1. Open `index.html` in Notepad/TextEdit
2. Change line: `<p>Your University Name</p>`
3. To: `<p>Your University</p>` (or your university)
4. Save the file
5. Go back to Cloudflare Dashboard
6. Click your project name
7. Click **"Create new deployment"**
8. Upload the updated `index.html`
9. Click **"Save and Deploy"**
10. Wait 30 seconds
11. Click **"Visit site"**
12. Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to refresh

✅ Your changes are live!

## Troubleshooting

**Upload failed:**
- Check filename is `index.html` (lowercase)
- Make sure it's .html not .txt
- Try a different browser

**Changes don't appear:**
- Wait 30-60 seconds
- Clear browser cache (Ctrl+F5)
- Try incognito mode

**Can't find Workers & Pages:**
- Look in left sidebar
- Search for "Pages" in dashboard
- Direct URL: https://dash.cloudflare.com

## Next Steps

Continue to [Module 3: DNS Security](./03-dns-security.md)
