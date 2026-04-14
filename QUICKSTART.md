# Quick Start Guide - Pure Organic E-Commerce

Follow these simple steps to get your organic e-commerce website up and running!

## 📋 Prerequisites

Before you begin, ensure you have:
- ✅ Node.js 18 or higher installed ([Download](https://nodejs.org/))
- ✅ MongoDB installed locally ([Download](https://www.mongodb.com/try/download/community)) OR a MongoDB Atlas account ([Sign up free](https://www.mongodb.com/cloud/atlas/register))
- ✅ A code editor (VS Code recommended)
- ✅ Terminal/Command prompt access

## 🚀 Step-by-Step Setup

### Step 1: Open Terminal
Navigate to the project directory:
```bash
cd /Users/deepakshah/projects/organic/organic-ecommerce
```

### Step 2: Install Dependencies
```bash
npm install
```
This will install all required packages (may take 1-2 minutes).

### Step 3: Set Up Environment Variables
The `.env.local` file is already configured with default settings:
```env
MONGODB_URI=mongodb://localhost:27017/organic-ecommerce
NEXT_PUBLIC_API_URL=http://localhost:3000/api
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

**For MongoDB Atlas (optional):**
Replace the MONGODB_URI with your Atlas connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/organic-ecommerce
```

### Step 4: Start MongoDB
**If using local MongoDB:**
```bash
mongod
```
Keep this terminal window open.

**If using MongoDB Atlas:**
Skip this step - your cloud database is already running!

### Step 5: Seed the Database (Optional but Recommended)
Open a new terminal window and run:
```bash
node scripts/seed.js
```

This will populate your database with 12 sample products including:
- 3 types of Ghee
- 2 types of Gud (Jaggery)
- 3 varieties of Pulses (Dal)
- 2 Cold-pressed Oils
- 2 Organic Spices
- 2 Grain products

You should see:
```
🌱 Starting database seeding...
✅ Connected to MongoDB
🗑️ Cleared existing products
✅ Inserted 12 products
🎉 Database seeding completed successfully!
```

### Step 6: Start the Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### Step 7: Open Your Browser
Visit: **http://localhost:3000**

🎉 **Congratulations!** Your organic e-commerce website is now running!

## 🎨 What You'll See

### Customer Pages
- **Homepage** (`/`) - Beautiful hero section with featured products
- **Products** (`/products`) - Browse all products with filters
- **Product Detail** (`/products/[id]`) - View individual product details
- **Cart** (`/cart`) - Shopping cart (empty initially)
- **Checkout** (`/checkout`) - Complete order form

### Admin Pages
- **Admin Dashboard** (`/admin`) - Overview with statistics
- **Product Management** (`/admin/products`) - Add, edit, delete products
- **Order Management** (`/admin/orders`) - View and manage orders

## ✨ Test Features

### Try These Actions:

1. **Browse Products**
   - Go to Products page
   - Try the search bar
   - Click on category filters
   - View a product detail page

2. **Admin Panel**
   - Visit `/admin`
   - Click "Products" tab
   - Click "Add Product" button
   - Fill in the form and create a new product
   - Try editing and deleting products
   - View the stock levels with color coding

3. **Create Test Order**
   - Go to Checkout page
   - Fill in the form with test data
   - Click "Place Order"
   - Check MongoDB or Admin Orders page

## 📱 Responsive Testing

Test the website on different screen sizes:
1. Open Chrome DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Try different devices:
   - iPhone 12 Pro (Mobile)
   - iPad (Tablet)
   - Desktop (1920×1080)

## 🗄️ Database Management

### View Your Data
**Using MongoDB Compass (Recommended):**
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect to: `mongodb://localhost:27017`
3. Browse the `organic-ecommerce` database

**Using MongoDB CLI:**
```bash
mongosh
use organic-ecommerce
db.products.find().pretty()
db.orders.find().pretty()
```

### Clear Database
```bash
mongosh
use organic-ecommerce
db.products.deleteMany({})
db.orders.deleteMany({})
```

## 🔧 Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Check if MongoDB is running: `ps aux | grep mongod`
- Start MongoDB: `mongod`
- Verify connection string in `.env.local`

### Issue: "Port 3000 is already in use"
**Solution:**
```bash
# Find the process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3001
```

### Issue: "Module not found" errors
**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: Products not showing
**Solution:**
- Run the seed script: `node scripts/seed.js`
- Check MongoDB connection
- Check browser console for errors (F12)

## 📝 Making Changes

### Add New Products
1. Go to `/admin/products`
2. Click "Add Product"
3. Fill in all required fields
4. Use image URLs from:
   - Unsplash: `https://images.unsplash.com/...`
   - Your own hosted images
   - Local images in `/public/assets/`

### Update Styling
Edit files in:
- `src/app/globals.css` - Global styles
- `tailwind.config.js` - Theme colors, fonts
- Individual component files - Component-specific styles

### Add New Pages
Create new files in `src/app/` directory:
```bash
# Example: Create an "About" page
touch src/app/about/page.tsx
```

## 🚀 Next Steps

1. **Add Real Product Images**
   - Replace placeholder images with professional photos
   - Store images in `/public/assets/`
   - Or use image hosting service

2. **Customize Branding**
   - Update company name in Header
   - Change color scheme in `tailwind.config.js`
   - Add your logo

3. **Set Up Email Notifications**
   - Install nodemailer
   - Configure email service
   - Send order confirmations

4. **Deploy to Production**
   - See DEPLOYMENT.md for detailed guide
   - Deploy on Vercel (recommended)
   - Set up custom domain

5. **Add More Features**
   - User authentication
   - Order tracking
   - Reviews and ratings
   - Wishlist
   - Payment gateway integration

## 📚 Documentation

- **Full README**: `README.md`
- **Product Requirements**: `PRD.md`
- **API Documentation**: See PRD.md Section 7
- **Database Schema**: See PRD.md Section 6

## 🆘 Getting Help

If you encounter issues:
1. Check the console for error messages
2. Review the documentation files
3. Check MongoDB connection
4. Verify all environment variables
5. Ensure all dependencies are installed

## 🎉 Success Checklist

After following this guide, you should be able to:
- [ ] See the homepage with featured products
- [ ] Browse the products catalog
- [ ] View product details
- [ ] Access the admin dashboard
- [ ] Add/edit/delete products via admin panel
- [ ] View the site on mobile/tablet/desktop
- [ ] See sample data in MongoDB

---

**Built with ❤️ for Pure Organic**

Happy coding! 🚀
