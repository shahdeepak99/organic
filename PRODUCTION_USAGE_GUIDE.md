# Production Usage Guide - Pure Ghee E-commerce
## Your Complete Guide to Managing Your Live Website

---

## 📋 Quick Reference

| Service | URL | Purpose |
|---------|-----|---------|
| **Your Live Site** | Check Vercel Dashboard | Customer-facing website |
| **Vercel Dashboard** | https://vercel.com/dashboard | Hosting & deployment management |
| **MongoDB Atlas** | https://cloud.mongodb.com | Database management |
| **GitHub Repo** | https://github.com/shahdeepak99/organic | Source code |
| **Local Development** | http://localhost:3000 | Test changes before deploying |

---

## 🌐 1. ACCESSING YOUR LIVE SITE

### Find Your Production URL:
1. Go to: **https://vercel.com/dashboard**
2. Click your **"organic"** project
3. Click **"Deployments"** tab
4. Look for deployment with **"Production"** badge (green)
5. Click **"Visit"** or copy the URL

### Your site URLs:
- **Production URL**: `https://organic-[your-hash].vercel.app`
- **Custom Domain** (when you add one): `https://yourdomain.com`

### Sharing Your Site:
- Share the production URL with customers
- Add it to social media profiles
- Use it for marketing

---

## 🔧 2. MAKING CHANGES TO YOUR SITE

### Method 1: Code Changes (New Features, Design Updates)

**Step 1: Make Changes Locally**
```bash
# Navigate to project
cd /Users/deepakshah/projects/organic/organic-ecommerce

# Start local dev server
npm run dev

# Visit http://localhost:3000 to test changes
```

**Step 2: Test Thoroughly**
- Check all pages work
- Test cart functionality
- Verify mobile responsiveness
- Test checkout flow

**Step 3: Push to GitHub**
```bash
# Save changes
git add .
git commit -m "Description of changes"
git push
```

**Step 4: Automatic Deployment**
- Vercel automatically detects the push
- Builds your site (2-3 minutes)
- Deploys to production
- Check Vercel Dashboard → Deployments to monitor

### Method 2: Environment Variables Changes

**When to use:**
- Update MongoDB connection
- Change API keys
- Update secrets

**Steps:**
1. Vercel Dashboard → Your Project → **Settings**
2. Click **"Environment Variables"**
3. Edit or add variables
4. Go to **Deployments** → Click **⋮** → **Redeploy**
5. Uncheck "Use existing build cache"
6. Click **Redeploy**

---

## 🗄️ 3. MANAGING YOUR DATABASE (MongoDB Atlas)

### Access Your Database:
1. Go to: **https://cloud.mongodb.com**
2. Log in
3. Click **"Database"** → Select **Cluster0**
4. Click **"Browse Collections"**
5. Select **organic-ecommerce** database

### View Your Data:

**Products Collection:**
- See all 8 ghee products
- Check stock levels
- View pricing

**Orders Collection:**
- See customer orders
- Track order status
- View payment information

**Users Collection:**
- See registered users (if any)
- Check user data

### Common Database Tasks:

#### **1. Update Product Stock**
1. Database → Browse Collections
2. Select **products** collection
3. Find the product
4. Click **Edit** (pencil icon)
5. Update `stock` field
6. Click **Update**

#### **2. Update Product Price**
1. Browse to **products** collection
2. Find product by name
3. Edit document
4. Change `price` value
5. Save

#### **3. Add New Product**
1. Go to **products** collection
2. Click **"Insert Document"**
3. Copy format from existing product
4. Fill in details:
   ```json
   {
     "name": "New Ghee Product",
     "slug": "new-ghee-product",
     "price": 999,
     "description": "Product description here",
     "stock": 50,
     "imageUrl": "https://images.unsplash.com/...",
     "category": "ghee",
     "unit": "ml",
     "weight": "500",
     "featured": false,
     "discount": 0
   }
   ```
4. Click **Insert**

#### **4. View Customer Orders**
1. Browse to **orders** collection
2. See all orders with:
   - Customer details
   - Products ordered
   - Payment status
   - Delivery address

### Database Best Practices:
- ✅ **Backup regularly** (Atlas does auto-backups on free tier)
- ✅ **Monitor storage** (free tier = 512 MB)
- ✅ **Check connections** (Network Access = 0.0.0.0/0)
- ❌ **Don't delete collections** accidentally
- ❌ **Don't share database credentials** publicly

---

## 📊 4. MONITORING YOUR SITE (Vercel Dashboard)

### Check Site Performance:
1. Vercel Dashboard → Your Project
2. Click **"Analytics"** tab
3. View:
   - Page visits
   - Geographic distribution
   - Performance metrics

### View Deployment Logs:
1. **Deployments** tab
2. Click on any deployment
3. Click **"View Function Logs"**
4. See:
   - API requests
   - Errors
   - Database connections

### Monitor Errors:
1. Check **"Logs"** in real-time
2. Look for red error messages
3. Common errors:
   - Database connection failed
   - API timeout
   - Missing environment variables

### Check Build Status:
1. **Deployments** tab shows:
   - ✅ **Ready** = Successful
   - 🔄 **Building** = In progress
   - ❌ **Error** = Failed (check logs)

---

## 🚀 5. COMMON PRODUCTION TASKS

### Task 1: Update Product Images

**Option A: Use Unsplash (Free)**
1. Go to https://unsplash.com
2. Search for "ghee" or "clarified butter"
3. Copy image URL
4. MongoDB Atlas → products collection
5. Update `imageUrl` field

**Option B: Upload Your Own**
1. Use image hosting (Cloudinary, ImgBB)
2. Upload product photo
3. Copy public URL
4. Update in MongoDB

### Task 2: Run a Discount Campaign

**Update prices in database:**
```javascript
// Example: 20% off on all products
// Update discount field in MongoDB
{
  "discount": 20  // Shows 20% off
}
```

Or use the `discount` field already in your products!

### Task 3: Check Today's Orders

1. MongoDB Atlas → orders collection
2. Filter by date:
   ```json
   { "createdAt": { "$gte": "2026-04-14T00:00:00.000Z" } }
   ```
3. View all orders from today

### Task 4: Seed Database with New Products

**Run seed script:**
```bash
# From your local machine
cd /Users/deepakshah/projects/organic/organic-ecommerce

# Update scripts/seed-ghee.js with new products
# Then run:
MONGODB_URI="mongodb+srv://shahdeepak88_db_user:F1RBYyGKHYFxH4Kr@cluster0.snphaau.mongodb.net/organic-ecommerce" node scripts/seed-ghee.js
```

### Task 5: Add Custom Domain

**When you buy a domain:**
1. Vercel Dashboard → Settings → **Domains**
2. Click **"Add Domain"**
3. Enter: `yourdomain.com`
4. Follow DNS instructions
5. Add these records to your domain registrar:
   - Type: **A**, Value: Vercel IP
   - Type: **CNAME**, Value: cname.vercel-dns.com
6. Wait 24-48 hours for propagation
7. SSL certificate auto-generated ✅

---

## 🛡️ 6. SECURITY & BEST PRACTICES

### Protect Your Credentials:

**Never share publicly:**
- ❌ MongoDB connection string
- ❌ JWT_SECRET
- ❌ Razorpay API keys
- ❌ Database passwords

**Keep safe:**
- ✅ Store in `.env.local` (never commit)
- ✅ Use Vercel environment variables
- ✅ Change passwords if compromised

### Environment Variables Security:
```
✅ Stored in Vercel Dashboard (encrypted)
✅ Never in GitHub repository
✅ Only accessible to your Vercel project
```

### MongoDB Atlas Security:
1. **Network Access**: Keep 0.0.0.0/0 for Vercel
2. **Database Access**: Use strong passwords
3. **Backup**: Atlas does automatic backups
4. **Monitor**: Check "Metrics" for unusual activity

### Vercel Security:
1. **Enable 2FA** on Vercel account
2. **Review deployments** before promoting to production
3. **Monitor logs** for suspicious activity

---

## 🐛 7. TROUBLESHOOTING PRODUCTION ISSUES

### Problem: Products Not Showing

**Check:**
1. ✅ MongoDB Atlas → Network Access = 0.0.0.0/0
2. ✅ Vercel → Environment Variables = MONGODB_URI set
3. ✅ Database has products (check collections)
4. ✅ Deployment successful (green checkmark)

**Fix:**
- Redeploy from Vercel
- Check Function Logs for errors

### Problem: "Internal Server Error"

**Check Vercel Logs:**
1. Deployments → Click deployment
2. View Function Logs
3. Look for error message

**Common causes:**
- Missing environment variable
- Database connection timeout
- Invalid MongoDB URI
- API route error

### Problem: Site is Slow

**Check:**
1. MongoDB Atlas → Metrics (connection count)
2. Vercel → Analytics (traffic spike?)
3. Free tier limits reached?

**Optimize:**
- Enable caching
- Optimize images
- Reduce API calls

### Problem: Orders Not Saving

**Check:**
1. MongoDB → orders collection exists
2. Vercel logs → any errors?
3. Razorpay keys configured (if using payment)

**Test locally:**
```bash
npm run dev
# Try placing order
# Check MongoDB Compass for new order
```

---

## 📈 8. SCALING YOUR BUSINESS

### When You Grow:

**Free Tier Limits:**
- **Vercel**: 100 GB bandwidth/month
- **MongoDB Atlas**: 512 MB storage
- **Atlas Connections**: Shared cluster

**Upgrade Path:**

**Level 1: More Orders** ($0 → ~$10/month)
- Keep Vercel free
- Upgrade MongoDB to M10 ($0.08/hr = ~$60/month)
- Or stay free if under 512 MB

**Level 2: Custom Domain** ($0 → ~$700/year)
- Buy domain from Namecheap/GoDaddy
- Add to Vercel (free SSL included)
- Professional branding

**Level 3: High Traffic** ($20+ /month)
- Vercel Pro ($20/month) - more bandwidth
- MongoDB M10 - better performance
- CDN for images

### Monitor Your Usage:

**Vercel:**
- Dashboard → Usage tab
- Check bandwidth consumption
- 100 GB free / month

**MongoDB Atlas:**
- Metrics → Storage usage
- 512 MB free tier
- Monitor connections

---

## 🔄 9. BACKUP & DISASTER RECOVERY

### Automatic Backups:

**MongoDB Atlas:**
- Free tier: Limited backups
- Paid tier: Point-in-time recovery
- Manual: Export collections as JSON

**GitHub:**
- All code backed up in repository
- Git history = version control
- Can roll back to any commit

**Vercel:**
- All deployments saved
- Can rollback to previous deployment
- Deployment → ⋮ → "Promote to Production"

### Manual Backup:

**Export Database:**
```bash
# Using MongoDB Compass
1. Connect to Cluster0
2. Select collection
3. Click "Export Collection"
4. Save as JSON
```

**Backup Code:**
```bash
# Your code is on GitHub
# Additional backup:
cd /Users/deepakshah/projects/organic/organic-ecommerce
zip -r backup-$(date +%Y%m%d).zip . -x "node_modules/*" ".next/*"
```

---

## 📞 10. SUPPORT RESOURCES

### When You Need Help:

**Vercel:**
- Docs: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Status: https://www.vercel-status.com

**MongoDB Atlas:**
- Docs: https://www.mongodb.com/docs/atlas/
- Community: https://www.mongodb.com/community/forums/
- Support: https://support.mongodb.com

**Next.js:**
- Docs: https://nextjs.org/docs
- GitHub: https://github.com/vercel/next.js/discussions

### Your Project Info:

```
Framework: Next.js 14.2.35
Database: MongoDB Atlas (Cluster0)
Hosting: Vercel
Payment: Razorpay (optional)
Database Name: organic-ecommerce
Collections: products, orders, users
```

---

## ✅ DAILY/WEEKLY CHECKLIST

### Daily:
- [ ] Check for new orders in MongoDB
- [ ] Monitor stock levels
- [ ] Check Vercel logs for errors
- [ ] Test site loads correctly

### Weekly:
- [ ] Review sales data
- [ ] Update low-stock products
- [ ] Check site analytics
- [ ] Backup important data

### Monthly:
- [ ] Review Vercel usage (bandwidth)
- [ ] Check MongoDB storage usage
- [ ] Update product images/descriptions
- [ ] Security audit (passwords, access)

---

## 🎯 QUICK COMMANDS REFERENCE

### Local Development:
```bash
# Start dev server
npm run dev

# Build for production (test)
npm run build

# Seed database
MONGODB_URI="your-atlas-uri" node scripts/seed-ghee.js

# Push changes to GitHub
git add .
git commit -m "Your message"
git push
```

### Git Commands:
```bash
# Check status
git status

# View history
git log --oneline -5

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Pull latest
git pull
```

---

## 💡 PRO TIPS

1. **Test Locally First**: Always run `npm run dev` and test before pushing
2. **Commit Often**: Small commits are easier to debug
3. **Monitor Logs**: Check Vercel logs weekly for issues
4. **Backup Before Changes**: Export database before major updates
5. **Use Preview Deployments**: Test on preview URL before promoting to production
6. **Keep Dependencies Updated**: Run `npm update` monthly
7. **Document Changes**: Update README when adding features
8. **Monitor Performance**: Use Vercel Analytics to track site speed

---

## 🎉 YOU'RE ALL SET!

Your Pure Ghee e-commerce site is now live and ready to serve customers!

**Remember:**
- 💻 **Local changes** → Git push → **Auto-deploys to Vercel**
- 🗄️ **Database changes** → Update in **MongoDB Atlas** → **Live immediately**
- 🔐 **Secrets** → Stored in **Vercel Environment Variables**

**Need to make updates?**
1. Make changes locally
2. Test thoroughly
3. Push to GitHub
4. Vercel auto-deploys
5. Verify on live site

---

**Happy Selling! 🚀🧈**
