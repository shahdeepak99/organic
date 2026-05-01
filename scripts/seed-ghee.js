// Database Seeding Script for Ghee Products
// Run this with: node scripts/seed-ghee.js
// Make sure MongoDB is running first!

const mongoose = require('mongoose');

// MongoDB connection — load .env.local so Atlas URI is picked up automatically
require('fs').existsSync('.env.local') && require('fs').readFileSync('.env.local', 'utf8')
  .split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length && !process.env[key.trim()]) {
      process.env[key.trim()] = rest.join('=').trim();
    }
  });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/organic-ecommerce';

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  price: Number,
  description: String,
  stock: Number,
  imageUrl: String,
  category: String,
  unit: String,
  weight: String,
  featured: Boolean,
  discount: Number,
}, { timestamps: true });

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// Sample Products Data - Premium Ghee Collection Only
const sampleProducts = [
  // ── Pure Cow Ghee ──────────────────────────────────────────────
  {
    name: 'Pure Cow Ghee 1000ml',
    slug: 'pure-cow-ghee-1000ml',
    price: 1400,
    description: 'Premium pure desi cow ghee crafted using the traditional bilona method. Made from 100% grass-fed indigenous cow milk, hand-churned with a wooden bilona for authentic texture and aroma. Rich in omega-3 fatty acids, vitamins A, D, E & K2. No additives, no preservatives — pure golden goodness. Ideal for daily cooking, tadka, rotis, and Ayurvedic remedies.',
    stock: 50,
    imageUrl: '/cow1000.jpg',
    category: 'Cow Ghee',
    unit: 'ml',
    weight: '1000',
    featured: true,
    discount: 10,
  },
  {
    name: 'Pure Cow Ghee 500ml',
    slug: 'pure-cow-ghee-500ml',
    price: 800,
    description: 'Pure desi cow ghee in a convenient 500ml jar. Made from 100% grass-fed cow milk using the traditional bilona hand-churning method. Beautiful golden colour with a rich, nutty aroma. Packed with natural vitamins and healthy fats. Perfect for everyday cooking, parathas, sweets, and dal tadka.',
    stock: 60,
    imageUrl: '/cow500ml.jpg',
    category: 'Cow Ghee',
    unit: 'ml',
    weight: '500',
    featured: true,
    discount: 5,
  },
  {
    name: 'Pure Cow Ghee 250ml',
    slug: 'pure-cow-ghee-250ml',
    price: 450,
    description: 'Pure desi cow ghee in a handy 250ml jar — perfect for trying our signature bilona ghee or gifting to loved ones. Made from grass-fed cow milk using the traditional wooden bilona method. Authentic golden colour, divine aroma, and rich taste. No artificial additives.',
    stock: 80,
    imageUrl: '/cow250ml.jpg',
    category: 'Cow Ghee',
    unit: 'ml',
    weight: '250',
    featured: false,
    discount: 0,
  },
  // ── Pure Buffalo Ghee ──────────────────────────────────────────
  {
    name: 'Pure Buffalo Ghee 1000ml',
    slug: 'pure-buffalo-ghee-1000ml',
    price: 1200,
    description: 'Rich, creamy pure buffalo ghee made from farm-fresh buffalo milk using traditional time-honoured techniques. Higher fat content gives it a distinctive, indulgent taste perfect for festive sweets, ladoos, halwa, and rich curries. Naturally white to light yellow with a smooth, velvety texture.',
    stock: 40,
    imageUrl: '/b1000ml.jpg',
    category: 'Buffalo Ghee',
    unit: 'ml',
    weight: '1000',
    featured: true,
    discount: 8,
  },
  {
    name: 'Pure Buffalo Ghee 500ml',
    slug: 'pure-buffalo-ghee-500ml',
    price: 700,
    description: 'Pure buffalo ghee in a 500ml jar — crafted from fresh, quality buffalo milk. Its rich texture and high fat content make it the go-to choice for traditional Indian sweets, biryani, and celebratory dishes. Thick, aromatic, and absolutely pure with no additives.',
    stock: 55,
    imageUrl: '/b500ml.jpg',
    category: 'Buffalo Ghee',
    unit: 'ml',
    weight: '500',
    featured: true,
    discount: 5,
  },
  {
    name: 'Pure Buffalo Ghee 250ml',
    slug: 'pure-buffalo-ghee-250ml',
    price: 400,
    description: 'Pure buffalo ghee in a compact 250ml jar. Ideal for those who love the rich, creamy flavour of buffalo ghee in their sweets and special dishes. Made from fresh buffalo milk with no additives or preservatives. Great for gifting or first-time buyers.',
    stock: 70,
    imageUrl: '/b250ml.jpg',
    category: 'Buffalo Ghee',
    unit: 'ml',
    weight: '250',
    featured: false,
    discount: 0,
  },
];

// Seed function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding for Ghee Products...');
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');
    
    // Insert sample products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`✅ Inserted ${insertedProducts.length} ghee products`);
    
    // Display summary
    console.log('\n📊 Seeding Summary:');
    console.log(`   - Total Products: ${insertedProducts.length}`);
    console.log(`   - Featured Products: ${insertedProducts.filter(p => p.featured).length}`);
    console.log(`   - Category: Premium Ghee Collection`);
    
    console.log('\n🎉 Database seeding completed successfully!');
    console.log('You can now start your application with: npm run dev');
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n👋 Database connection closed');
  }
}

// Run the seeding
seedDatabase();
