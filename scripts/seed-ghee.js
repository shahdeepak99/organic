// Database Seeding Script for Ghee Products
// Run this with: node scripts/seed-ghee.js
// Make sure MongoDB is running first!

const mongoose = require('mongoose');

// MongoDB connection
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
  {
    name: 'A2 Gir Cow Ghee - Bilona Method (500ml)',
    slug: 'a2-gir-cow-ghee-bilona-500ml',
    price: 1299,
    description: 'Premium A2 Gir cow ghee crafted using traditional bilona method. Made from pure A2 milk from grass-fed cows. Rich in omega-3, vitamins, and natural antioxidants. Golden yellow color with authentic aroma. No additives, no preservatives - just pure ghee. Perfect for daily cooking, tadka, and Ayurvedic remedies.',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '500',
    featured: true,
    discount: 15,
  },
  {
    name: 'A2 Gir Cow Ghee - Bilona Method (1L)',
    slug: 'a2-gir-cow-ghee-bilona-1l',
    price: 2499,
    description: 'Premium A2 Gir cow ghee in 1L pack - perfect for families. Crafted using traditional bilona method. Made from pure A2 milk from grass-fed indigenous cows. Rich in omega-3, vitamins, and natural antioxidants. Golden color with divine aroma. Best for cooking, sweets, and daily use.',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '1000',
    featured: true,
    discount: 20,
  },
  {
    name: 'Desi Cow Ghee - Traditional (500ml)',
    slug: 'desi-cow-ghee-traditional-500ml',
    price: 899,
    description: 'Authentic desi cow ghee made from traditional Vedic methods. Rich, golden, and aromatic. Perfect for daily cooking, rituals, and Ayurvedic preparations. Sourced from local farms with 100% grass-fed cows. Hand-churned using wooden churner for maximum purity.',
    stock: 60,
    imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '500',
    featured: true,
    discount: 10,
  },
  {
    name: 'Desi Cow Ghee - Traditional (1L)',
    slug: 'desi-cow-ghee-traditional-1l',
    price: 1699,
    description: 'Authentic desi cow ghee 1L family pack. Made from traditional Vedic methods. Rich, golden, and aromatic. Perfect for daily cooking, parathas, and traditional sweets. Sourced from local farms with 100% grass-fed cows. Best value for money.',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '1000',
    featured: true,
    discount: 15,
  },
  {
    name: 'Buffalo Ghee - Pure & Rich (500ml)',
    slug: 'buffalo-ghee-pure-rich-500ml',
    price: 749,
    description: 'Pure buffalo ghee with rich texture and distinct flavor. Higher fat content makes it ideal for traditional sweets and winter foods. Made from farm-fresh buffalo milk using time-honored techniques. Excellent for ladoo, halwa, and rich curries.',
    stock: 45,
    imageUrl: 'https://images.unsplash.com/photo-1621524110658-8d8d76c8f58e?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '500',
    featured: false,
    discount: 0,
  },
  {
    name: 'Buffalo Ghee - Pure & Rich (1L)',
    slug: 'buffalo-ghee-pure-rich-1l',
    price: 1399,
    description: 'Pure buffalo ghee 1L - perfect for sweet lovers. Rich texture and distinct flavor. Higher fat content makes it ideal for traditional sweets, halwa, and winter foods. Made from farm-fresh buffalo milk. Best for traditional recipes.',
    stock: 35,
    imageUrl: 'https://images.unsplash.com/photo-1621524110658-8d8d76c8f58e?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '1000',
    featured: false,
    discount: 5,
  },
  {
    name: 'Mixed Cow Ghee - Economy Pack (1L)',
    slug: 'mixed-cow-ghee-economy-1l',
    price: 699,
    description: 'Affordable mixed cow ghee - perfect for everyday cooking. Good quality at budget-friendly price. Made from mixed indigenous cow breeds. Ideal for daily tadka, parathas, and home cooking. Great value for money.',
    stock: 70,
    imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '1000',
    featured: false,
    discount: 0,
  },
  {
    name: 'Organic Ghee Gift Pack - Premium (500ml x 2)',
    slug: 'organic-ghee-gift-pack',
    price: 2399,
    description: 'Premium gift pack with 2 bottles of 500ml A2 Gir Cow Ghee. Beautifully packaged, perfect for gifting on festivals, weddings, and special occasions. Includes attractive gift box and traditional design packaging.',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=1200&q=80',
    category: 'ghee',
    unit: 'ml',
    weight: '1000',
    featured: true,
    discount: 10,
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
