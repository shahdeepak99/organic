# Vercel Deployment Guide - Pure Ghee E-commerce

## ✅ Prerequisites Completed
- [x] Code pushed to GitHub: https://github.com/shahdeepak99/organic
- [x] Linked with Vercel

---

## 🚀 Step-by-Step Deployment

### **1. Set Up MongoDB Atlas (5-10 minutes)**

#### a) Sign up & Create Cluster
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up (free)
3. Click **"Build a Database"**
4. Select **"M0 FREE"** tier
5. Choose cloud provider & region (closest to your users)
6. Name: `organic-ecommerce-cluster`
7. Click **"Create"**

#### b) Create Database User
1. Click **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Username: `organic-user`
4. Password: Generate strong password (save this!)
5. Database User Privileges: **"Read and write to any database"**
6. Click **"Add User"**

#### c) Whitelist IP Addresses
1. Click **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"**
4. IP: `0.0.0.0/0` (automatically filled)
5. Click **"Confirm"**

#### d) Get Connection String
1. Click **"Database"** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Copy the connection string:
   ```
   mongodb+srv://organic-user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name: `/organic-ecommerce` before the `?`
   
   **Final format:**
   ```
   mongodb+srv://organic-user:YourPassword123@cluster0.xxxxx.mongodb.net/organic-ecommerce?retryWrites=true&w=majority
   ```

---

### **2. Configure Environment Variables in Vercel (5 minutes)**

1. Go to: https://vercel.com/dashboard
2. Select your **"organic"** project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** (left sidebar)

#### Add these variables one by one:

**Variable 1: MONGODB_URI**
- Name: `MONGODB_URI`
- Value: `mongodb+srv://organic-user:YourPassword@cluster0.xxxxx.mongodb.net/organic-ecommerce?retryWrites=true&w=majority`
- Environment: Select **Production**, **Preview**, and **Development**
- Click **"Save"**

**Variable 2: JWT_SECRET**
- Name: `JWT_SECRET`
- Value: `pEpxsFdjUWiX64PE+FfjaNtvQ9lJ4IGWQxHe2G8TZr4=`
- Environment: All three
- Click **"Save"**

**Variable 3: RAZORPAY_KEY_ID** (Optional - for testing)
- Name: `RAZORPAY_KEY_ID`
- Value: `rzp_test_your_key_id` (get from Razorpay dashboard)
- Environment: All three
- Click **"Save"**

**Variable 4: RAZORPAY_KEY_SECRET** (Optional - for testing)
- Name: `RAZORPAY_KEY_SECRET`
- Value: `your_secret_key` (get from Razorpay dashboard)
- Environment: All three
- Click **"Save"**

**Note:** If you don't have Razorpay keys yet, skip these for now. You can add them later.

---

### **3. Seed Database with Ghee Products (2 minutes)**

After deployment, you need to populate your database:

#### Option A: Run Locally Against Cloud DB
1. Update your local `.env.local` with MongoDB Atlas connection string
2. Run: `node scripts/seed-ghee.js`

#### Option B: Use MongoDB Atlas UI
1. Go to MongoDB Atlas → Database → Collections
2. Create database: `organic-ecommerce`
3. Create collection: `products`
4. Import JSON (manually or use Compass)

---

### **4. Deploy Your Site (2 minutes)**

#### Automatic Deployment:
1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"** tab
3. Vercel automatically deploys when you push to GitHub
4. Wait for build to complete (2-3 minutes)
5. Click on the deployment URL

#### Manual Deployment:
1. Go to your project in Vercel
2. Click **"Deployments"** tab at top
3. Click **"Redeploy"** button (3 dots menu)
4. Select **"Use existing build cache"** (no)
5. Click **"Redeploy"**

---

### **5. Your Site Will Be Live At:**

```
https://organic.vercel.app
```
or
```
https://your-project-name.vercel.app
```

Vercel provides a **free subdomain** automatically!

---

## 🔧 Post-Deployment Tasks

### **1. Seed Your Database**
```bash
# Update local .env.local with Atlas connection string
MONGODB_URI=mongodb+srv://organic-user:pass@cluster0.xxxxx.mongodb.net/organic-ecommerce

# Run seed script
node scripts/seed-ghee.js
```

### **2. Test Your Site**
- ✅ Visit homepage
- ✅ Browse products
- ✅ Add to cart
- ✅ Test checkout (without payment if no Razorpay)

### **3. Check Deployment Logs**
- Vercel Dashboard → Deployments → Click on deployment
- View **"Function Logs"** for any errors

---

## 🌐 Getting a Custom Domain (Optional - Later)

### When You're Ready:
1. Buy domain from Namecheap (~₹700/year)
2. Vercel Dashboard → Settings → Domains
3. Add your domain: `yourdomain.com`
4. Update DNS records (Vercel provides instructions)
5. SSL certificate auto-generated ✅

---

## 💰 Current Costs

- **Vercel Hosting**: FREE ✅
- **MongoDB Atlas**: FREE (M0 tier) ✅  
- **SSL Certificate**: FREE ✅
- **Subdomain**: FREE ✅
- **Total**: ₹0 🎉

---

## 🐛 Troubleshooting

### "Application Error" on Site
- Check **Function Logs** in Vercel
- Verify all environment variables are set
- Check MongoDB connection string format

### "Internal Server Error"
- Database not seeded → Run seed script
- Wrong MongoDB URI → Check Atlas connection string
- Missing env variables → Add in Vercel settings

### Products Not Showing
- Database empty → Run seed script
- API route error → Check logs

---

## 📝 Quick Reference

| What | URL |
|------|-----|
| Your Site | `https://organic.vercel.app` |
| Vercel Dashboard | https://vercel.com/dashboard |
| MongoDB Atlas | https://cloud.mongodb.com |
| GitHub Repo | https://github.com/shahdeepak99/organic |
| Razorpay Dashboard | https://dashboard.razorpay.com |

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string copied
- [ ] Environment variables added in Vercel
- [ ] Site deployed successfully
- [ ] Database seeded with ghee products
- [ ] Site tested and working

---

**Your ghee e-commerce site is ready to go live! 🚀**
