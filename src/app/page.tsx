'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { 
  ArrowRight, Sparkles, Truck, Shield, Leaf, Heart, Award,
  Droplet, Wheat, Cookie, Flame, Star, ShoppingBag, CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('/api/products?featured=true');
      const data = await response.json();
      if (data.success) {
        setFeaturedProducts(data.data.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Ghee benefits for the homepage
  const gheeBenefits = [
    {
      icon: Droplet,
      title: 'A2 Bilona Method',
      description: 'Traditional hand-churned using wooden bilona',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      icon: Leaf,
      title: '100% Pure Desi Cow',
      description: 'Made from grass-fed indigenous cow milk',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Shield,
      title: 'Lab Tested Purity',
      description: 'Every batch tested for authenticity',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Heart,
      title: 'Rich in Nutrients',
      description: 'Omega-3, vitamins A, D, E, K2',
      color: 'from-red-500 to-pink-600',
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Pure Desi Cow Ghee',
      description: 'Made from indigenous grass-fed A2 cow milk',
      color: 'text-green-600',
    },
    {
      icon: Award,
      title: 'Bilona Method',
      description: 'Traditional hand-churned wooden bilona process',
      color: 'text-amber-600',
    },
    {
      icon: Shield,
      title: 'Lab Tested',
      description: 'Every batch tested for purity and quality',
      color: 'text-blue-600',
    },
    {
      icon: Truck,
      title: 'Fresh Delivery',
      description: 'Delivered fresh to maintain aroma and quality',
      color: 'text-purple-600',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'The A2 ghee is absolutely pure! The golden color and aroma remind me of my grandmother\'s homemade ghee. My family loves it!',
      avatar: '👩',
    },
    {
      name: 'Raj Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Best ghee I\'ve purchased online. The traditional bilona method makes all the difference. Perfect for our daily cooking and sweets!',
      avatar: '👨',
    },
    {
      name: 'Sneha Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Using this desi cow ghee for my baby\'s food. The purity and quality give me complete peace of mind. Highly recommend!',
      avatar: '👩',
    },
  ];

  const benefits = [
    '100% Pure A2 Ghee',
    'Traditional Bilona Method',
    'Grass-Fed Desi Cows',
    'Rich in Vitamins',
    'Authentic Aroma & Taste',
    'Lab Tested for Purity',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-amber-50 to-accent-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span className="text-sm font-semibold text-gray-700">
                  100% Certified Organic
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                Pure Desi Ghee
                <span className="block gradient-text mt-2">Golden Purity</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience authentic A2 desi cow ghee made using traditional bilona method. 
                Hand-churned from grass-fed cows, rich in nutrients, and full of natural goodness. 
                The way our ancestors made it.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl btn-primary-hover"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Shop Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/products?featured=true">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all border-2 border-primary-600 shadow-md"
                  >
                    <Star className="w-5 h-5" />
                    Featured Products
                  </motion.button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                {benefits.slice(0, 3).map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-600" />
                    <span className="font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl shadow-2xl overflow-hidden premium-card">
                <img
                  src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&q=80"
                  alt="Pure A2 Desi Cow Ghee - Traditional Bilona Method"
                  className="object-cover w-full h-96 lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="text-xs text-gray-500">Happy Families</p>
                      <p className="text-lg font-bold text-gray-900">5,000+</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Ghee is Special */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
            >
              Why Our <span className="gradient-text">Ghee is Special</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ancient tradition meets modern quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gheeBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group h-full"
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all premium-card"
              >
                <motion.div
                  className={`w-14 h-14 ${feature.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
            >
              Our Premium <span className="gradient-text">Ghee Collection</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of pure, authentic desi cow ghee
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton h-96 rounded-2xl"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-accent-50 via-primary-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
            >
              What Our <span className="gradient-text">Customers Say</span>
            </motion.h2>
            <p className="text-xl text-gray-600">Trusted by thousands across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all premium-card"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 organic-pattern"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Start Your Organic Journey Today
            </motion.h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of happy customers who choose pure, natural, and healthy products
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-10 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl text-lg"
              >
                <ShoppingBag className="w-6 h-6" />
                Shop Now
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
