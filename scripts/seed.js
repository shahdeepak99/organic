// Database Seeding Script
// Run this with: node scripts/seed.js
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

// Sample Products Data - Premium Ghee Collection
const sampleProducts = [
  // PREMIUM GHEE COLLECTION
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
    console.log('🌱 Starting database seeding...');
    
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
    console. log(`   - Category: Premium Ghee Collection`);
    
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
    discount: 0,
  },
  {
    name: 'Organic Masoor Dal - Red Lentils',
    slug: 'organic-masoor-dal',
    price: 149,
    description: 'Organic red lentils (masoor dal) rich in protein and iron. Quick cooking and delicious. Perfect for dal preparations, soups, and protein-rich meals. Certified organic and pesticide-free.',
    stock: 110,
    imageUrl: 'https://images.unsplash.com/photo-1599904762193-457b0baecead?w=1200&q=80',
    category: 'pulses',
    unit: 'kg',
    weight: '1kg',
    featured: false,
    discount: 0,
  },
  {
    name: 'Organic Chana Dal - Bengal Gram',
    slug: 'organic-chana-dal',
    price: 169,
    description: 'Premium organic chana dal (split chickpeas). High in protein and fiber, perfect for dal, snacks, and sweets. Rich, nutty flavor and excellent texture. Naturally cultivated without chemicals.',
    stock: 75,
    imageUrl: 'https://images.unsplash.com/photo-1598288796688-2b5bb5dc89ff?w=1200&q=80',
    category: 'pulses',
    unit: 'kg',
    weight: '1kg',
    featured: false,
    discount: 0,
  },
  {
    name: 'Organic Urad Dal - Black Gram',
    slug: 'organic-urad-dal',
    price: 189,
    description: 'Organic urad dal (black gram) essential for South Indian cuisine. Perfect for idli, dosa, vada, and dal makhani. Rich in protein, minerals, and nutrients. Premium quality with natural taste.',
    stock: 85,
    imageUrl: 'https://images.unsplash.com/photo-1599909533657-e6c86cad5647?w=1200&q=80',
    category: 'pulses',
    unit: 'kg',
    weight: '1kg',
    featured: true,
    discount: 0,
  },

  // COLD-PRESSED OIL COLLECTION
  {
    name: 'Cold-Pressed Coconut Oil - Virgin',
    slug: 'cold-pressed-coconut-oil',
    price: 459,
    description: 'Extra virgin cold-pressed coconut oil extracted using traditional wood press. Rich in MCT, lauric acid, and antioxidants. Perfect for cooking, hair care, and skin care. No heat, no chemicals - pure and natural.',
    stock: 65,
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&q=80',
    category: 'oils',
    unit: 'ml',
    weight: '1L',
    featured: true,
    discount: 8,
  },
  {
    name: 'Cold-Pressed Mustard Oil - Kachi Ghani',
    slug: 'cold-pressed-mustard-oil',
    price: 349,
    description: 'Pure cold-pressed mustard oil made using traditional kachi ghani method. Pungent aroma and authentic taste. Excellent for cooking, pickles, and massage. Rich in omega-3 and essential fatty acids.',
    stock: 70,
    imageUrl: 'https://images.unsplash.com/photo-1612096500105-8f282f1e3ea5?w=1200&q=80',
    category: 'oils',
    unit: 'ml',
    weight: '1L',
    featured: true,
    discount: 0,
  },
  {
    name: 'Cold-Pressed Groundnut Oil',
    slug: 'cold-pressed-groundnut-oil',
    price: 299,
    description: 'Premium cold-pressed groundnut (peanut) oil with natural aroma. Ideal for high-temperature cooking and deep frying. Rich in vitamin E and heart-healthy fats. Unrefined and chemical-free.',
    stock: 55,
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1200&q=80',
    category: 'oils',
    unit: 'ml',
    weight: '1L',
    featured: false,
    discount: 0,
  },
  {
    name: 'Cold-Pressed Sesame Oil - Til Oil',
    slug: 'cold-pressed-sesame-oil',
    price: 379,
    description: 'Pure cold-pressed sesame oil (til ka tel) with rich nutty flavor. Perfect for South Indian cooking, seasoning, and massage. Rich in antioxidants, vitamins, and minerals. Traditional wood-pressed quality.',
    stock: 48,
    imageUrl: 'https://images.unsplash.com/photo-1608158087953-38ef005e5bc4?w=1200&q=80',
    category: 'oils',
    unit: 'ml',
    weight: '500ml',
    featured: false,
    discount: 0,
  },

  // ORGANIC HONEY COLLECTION
  {
    name: 'Raw Wild Forest Honey',
    slug: 'raw-wild-forest-honey',
    price: 589,
    description: 'Unprocessed raw wild forest honey collected from indigenous bee colonies. Rich in enzymes, antioxidants, and natural nutrients. Pure, raw, and never heated. Perfect for immunity and wellness.',
    stock: 45,
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784053?w=1200&q=80',
    category: 'honey',
    unit: 'g',
    weight: '500g',
    featured: true,
    discount: 0,
  },
  {
    name: 'Raw Tulsi Honey - Immunity Booster',
    slug: 'raw-tulsi-honey',
    price: 549,
    description: 'Premium raw tulsi (holy basil) honey with medicinal properties. Collected from tulsi flowers, known for respiratory health and immunity. Unfiltered and unpasteurized.',
    stock: 38,
    imageUrl: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=1200&q=80',
    category: 'honey',
    unit: 'g',
    weight: '500g',
    featured: true,
    discount: 0,
  },
  {
    name: 'Raw Sheesham Honey',
    slug: 'raw-sheesham-honey',
    price: 599,
    description: 'Rare raw sheesham (rosewood) honey with unique flavor profile. Rich golden color with medicinal properties. Harvested from sheesham forests, naturally sweet and aromatic.',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&q=80',
    category: 'honey',
    unit: 'g',
    weight: '500g',
    featured: false,
    discount: 0,
  },

  // TRADITIONAL SUPERFOODS
  {
    name: 'Rose Gulkand - Traditional Preserve',
    slug: 'rose-gulkand',
    price: 399,
    description: 'Authentic rose gulkand made from organic rose petals and mishri sugar. Perfect for cooling effects, digestive health, and traditional sweets. Natural pink color with aromatic flavor.',
    stock: 55,
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&q=80',
    category: 'superfoods',
    unit: 'g',
    weight: '300g',
    featured: true,
    discount: 0,
  },
  {
    name: 'Amla Murabba - Gooseberry Preserve',
    slug: 'amla-murabba',
    price: 549,
    description: 'Traditional amla murabba made from fresh Indian gooseberries. Rich in vitamin C, antioxidants, and digestive enzymes. Natural immunity booster and health tonic.',
    stock: 42,
    imageUrl: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=1200&q=80',
    category: 'superfoods',
    unit: 'g',
    weight: '500g',
    featured: true,
    discount: 0,
  },
  {
    name: 'Khapli Wheat Atta - Ancient Grain',
    slug: 'khapli-wheat-atta',
    price: 240,
    description: 'Stone-ground khapli (emmer) wheat atta, ancient grain flour. Low GI, high fiber, and rich in nutrients. Perfect for diabetics and health-conscious individuals. Chemical-free cultivation.',
    stock: 70,
    imageUrl: 'https://images.unsplash.com/photo-1586016650946-e9c45f4b7e18?w=1200&q=80',
    category: 'superfoods',
    unit: 'kg',
    weight: '1kg',
    featured: true,
    discount: 0,
  },
  {
    name: 'Turmeric Latte Mix - Golden Milk',
    slug: 'turmeric-latte-mix',
    price: 270,
    description: 'Premium turmeric latte mix with ashwagandha and spices. Perfect immunity booster and wellness drink. Made from organic turmeric, black pepper, cinnamon, and adaptogens.',
    stock: 60,
    imageUrl: 'https://images.unsplash.com/photo-1607626692253-bd306724c598?w=1200&q=80',
    category: 'superfoods',
    unit: 'g',
    weight: '100g',
    featured: false,
    discount: 0,
  },
  {
    name: 'Kashmiri Mongra Saffron',
    slug: 'kashmiri-mongra-saffron',
    price: 1900,
    description: 'Premium grade Kashmiri mongra saffron, world\'s finest quality. Hand-picked from Kashmir fields. Deep red threads with exceptional aroma. Perfect for sweets, milk, and luxury dishes.',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1575468130797-de06c2ca07f6?w=1200&q=80',
    category: 'superfoods',
    unit: 'g',
    weight: '5g',
    featured: true,
    discount: 0,
  },

  // TRADITIONAL PICKLES
  {
    name: 'Mango Pickle - Sun Dried',
    slug: 'mango-pickle-sun-dried',
    price: 349,
    description: 'Traditional mango pickle made using authentic sun-drying method. Tangy, spicy, and naturally preserved. Made with raw mangoes, mustard oil, and aromatic spices. No artificial preservatives.',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1596097637553-103ba2c95b6d?w=1200&q=80',
    category: 'pickles',
    unit: 'g',
    weight: '500g',
    featured: false,
    discount: 0,
  },
  {
    name: 'Mixed Vegetable Pickle',
    slug: 'mixed-vegetable-pickle',
    price: 299,
    description: 'Authentic mixed vegetable pickle with carrot, cauliflower, and spices. Traditional recipe with mustard oil. Perfect accompaniment for meals. Home-style taste with natural preservation.',
    stock: 45,
    imageUrl: 'https://images.unsplash.com/photo-1589494602228-0e91ab37de37?w=1200&q=80',
    category: 'pickles',
    unit: 'g',
    weight: '500g',
    featured: false,
    discount: 0,
  },
  {
    name: 'Lemon Pickle - Nimbu Achaar',
    slug: 'lemon-pickle',
    price: 269,
    description: 'Zesty lemon pickle (nimbu achaar) made from organic lemons. Tangy and spicy with traditional spices. Sun-dried and naturally fermented. Perfect digestive and meal enhancer.',
    stock: 55,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&q=80',
    category: 'pickles',
    unit: 'g',
    weight: '400g',
    featured: false,
    discount: 0,
  },

  // HEALTHY SNACKS
  {
    name: 'Roasted Makhana - Fox Nuts',
    slug: 'roasted-makhana',
    price: 249,
    description: 'Premium roasted makhana (fox nuts) lightly seasoned. Perfect healthy snack, low in calories and high in protein. Crunchy and delicious. Great for weight watchers and fitness enthusiasts.',
    stock: 65,
    imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527b67f0?w=1200&q=80',
    category: 'snacks',
    unit: 'g',
    weight: '200g',
    featured: false,
    discount: 0,
  },
  {
    name: 'Trail Mix - Nuts & Berries',
    slug: 'trail-mix-nuts-berries',
    price: 399,
    description: 'Premium trail mix with almonds, cashews, walnuts, and dried berries. Perfect energy snack for active lifestyles. No added sugar, all natural ingredients. Rich in omega-3 and antioxidants.',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1613919226108-af1882c9f4f7?w=1200&q=80',
    category: 'snacks',
    unit: 'g',
    weight: '250g',
    featured: true,
    discount: 0,
  },
];

// Seed function
async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');
    
    // Insert sample products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`✅ Inserted ${insertedProducts.length} products`);
    
    // Display summary
    console.log('\n📊 Seeding Summary:');
    console.log(`   - Total Products: ${insertedProducts.length}`);
    console.log(`   - Featured Products: ${insertedProducts.filter(p => p.featured).length}`);
    
    const categories = [...new Set(insertedProducts.map(p => p.category))];
    console.log(`   - Categories: ${categories.join(', ')}`);
    
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
