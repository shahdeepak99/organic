# 🌿 Pure Organic - E-Commerce Platform

A modern, fully-functional e-commerce platform for organic products including A2 Ghee, Cold-Pressed Oils, Organic Jaggery, and Premium Pulses.

## ✨ Features

### Customer-Facing Features
- 🏠 **Modern Homepage** with animated hero sections and testimonials
- 🛍️ **Product Catalog** with filtering by category
- 🛒 **Shopping Cart** with real-time updates and localStorage persistence
- 💳 **Razorpay Integration** for secure online payments
- 💰 **Cash on Delivery** option
- 📱 **Responsive Design** for mobile, tablet, and desktop
- ⚡ **Smooth Animations** using Framer Motion
- 🎨 **Beautiful UI** with gradient backgrounds and modern components

### Admin Features
- 📊 **Dashboard** with sales statistics
- 📦 **Product Management** (Add, Edit, Delete)
- 📋 **Order Management** and tracking
- 📈 **Inventory Management** with low-stock alerts

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** MongoDB with Mongoose
- **Payment:** Razorpay (Sandbox/Production)
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB database (local or MongoDB Atlas)
- Razorpay account (for payment integration)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd organic-ecommerce
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Razorpay API Keys
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET

# Application Settings
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Get Razorpay API Keys

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/signup)
2. Go to **Settings** → **API Keys**
3. Generate **Test Keys** for development
4. Copy the **Key ID** and **Key Secret**
5. Add them to your `.env.local` file

**Important:** Use **Test Mode** keys for development. Switch to **Live Mode** keys only in production.

### 5. Setup MongoDB

#### Option A: MongoDB Atlas (Recommended)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier available)
3. Create a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string and add to `.env.local`

#### Option B: Local MongoDB
```bash
# Install MongoDB locally
# Then use connection string:
MONGODB_URI=mongodb://localhost:27017/organic-ecommerce
```

### 6. Seed the database (Optional)
```bash
node scripts/seed.js
```

### 7. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💳 Razorpay Payment Testing

### Test Cards (Razorpay Test Mode)

**Success Payments:**
- Card Number: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date
- Name: Any name

**UPI Testing:**
- UPI ID: `success@razorpay`

**Net Banking:**
- Select any bank and use `success` credentials

**Wallets:**
- Select any wallet → Success

### Test Scenarios
1. Navigate to `/products`
2. Add items to cart
3. Go to `/cart` and proceed to checkout
4. Fill in the form with test data
5. Select "Online Payment (Razorpay)"
6. Click "Proceed to Payment"
7. Use test credentials above

## 🗂️ Project Structure

```
organic-ecommerce/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Homepage
│   │   ├── products/          # Products listing page
│   │   ├── cart/              # Shopping cart page
│   │   ├── checkout/          # Checkout page with Razorpay
│   │   ├── admin/             # Admin dashboard
│   │   └── api/               # API routes
│   │       ├── products/      # Products API
│   │       ├── orders/        # Orders API
│   │       └── razorpay/      # Razorpay integration
│   ├── components/            # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── contexts/              # React contexts
│   │   └── CartContext.tsx   # Cart state management
│   ├── models/                # Mongoose models
│   │   ├── Product.ts
│   │   ├── Order.ts
│   │   └── User.ts
│   ├── types/                 # TypeScript types
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── .env.local                 # Environment variables
└── package.json
```

## 🎯 Key Features Implementation

### Cart Management
- Uses React Context API for global state
- Persists to localStorage
- Real-time cart count updates
- Quantity controls with stock validation

### Payment Flow
1. User fills checkout form
2. Validates form data
3. Creates Razorpay order via API
4. Opens Razorpay payment modal
5. Verifies payment signature
6. Saves order to database
7. Clears cart and redirects

### Product Categories
- **A2 Ghee** (🥛 Droplet icon)
- **Organic Pulses** (🌾 Wheat icon)
- **Cold-Pressed Oils** (🔥 Flame icon)
- **Organic Jaggery** (🍪 Cookie icon)

## 🔒 Security Notes

- Never commit `.env.local` to version control
- Use test keys in development
- Verify payment signatures on the backend
- Validate all user inputs
- Use HTTPS in production
- Keep dependencies updated

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Environment Variables in Production
Add all variables from `.env.local` to your hosting platform:
- `MONGODB_URI`
- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`

**Important:** Switch to Razorpay **Live Mode** keys in production!

## 📱 Pages & Routes

- `/` - Homepage with hero and featured products
- `/products` - All products with category filters
- `/products/[id]` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout with Razorpay integration
- `/admin` - Admin dashboard
- `/admin/products` - Product management
- `/admin/orders` - Order management

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Organic brown/amber tones
- `accent`: Green for organic theme
- `gold`: For highlights and badges

### Images
- Update hero images in `src/app/page.tsx`
- Product images stored in database (imageUrl field)
- Placeholder: `/assets/placeholder.jpg`

## 🐛 Troubleshooting

### Razorpay script not loading
- Check internet connection
- Verify NEXT_PUBLIC_RAZORPAY_KEY_ID is set
- Check browser console for errors

### Cart not persisting
- Check localStorage permissions
- Clear browser cache
- Verify CartContext is wrapped around app

### MongoDB connection issues
- Verify connection string format
- Check network access in MongoDB Atlas
- Ensure database user has correct permissions

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions:
- Create an issue on GitHub
- Email: support@pureorganic.com (example)

---

Built with ❤️ for healthy living and organic products 🌿
