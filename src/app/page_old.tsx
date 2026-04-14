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
import { useCart } from '@/contexts/CartContext';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

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

  const categories = [
    {
      icon: Droplet,
      name: 'Premium A2 Ghee',
      description: 'Pure desi cow ghee made traditionally',
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-amber-50',
      link: '/products?category=Ghee',
    },
    {
      icon: Wheat,
      name: 'Organic Pulses',
      description: 'Farm-fresh lentils and legumes',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      link: '/products?category=Pulses',
    },
    {
      icon: Flame,
      name: 'Cold-Pressed Oils',
      description: 'Nutrient-rich traditional oils',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      link: '/products?category=Oils',
    },
    {
      icon: Cookie,
      name: 'Organic Jaggery',
      description: 'Natural sweetness, pure gud',
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50',
      link: '/products?category=Jaggery',
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'Certified organic products from trusted farms',
      color: 'text-green-600',
    },
    {
      icon: Award,
      title: 'Traditional Methods',
      description: 'Made using age-old traditional techniques',
      color: 'text-amber-600',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality checks for purity',
      color: 'text-blue-600',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Fresh products at your doorstep',
      color: 'text-purple-600',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'The A2 ghee is absolutely pure! You can taste the difference. My family loves it.',
      avatar: '👩',
    },
    {
      name: 'Raj Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Best organic jaggery I have found online. Perfect for making traditional sweets.',
      avatar: '👨',
    },
    {
      name: 'Sneha Reddy',
      location: 'Bangalore',
      rating: 5,
      text: 'Cold-pressed oils are authentic and fresh. Great quality and fast delivery!',
      avatar: '👩',
    },
  ];

  const benefits = [
    'No Chemicals or Pesticides',
    'Farm Fresh Quality',
    'Traditional Processing',
    'Rich in Nutrients',
    'Authentic Taste',
    'Sustainable Farming',
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
                Pure & Natural
                <span className="block gradient-text mt-2">Organic Goodness</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience the finest selection of premium A2 ghee, cold-pressed oils, 
                organic jaggery, and pure pulses. Traditional methods, authentic taste, 
                100% natural.
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Premium Organic Ghee and Traditional Products"
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
                      <p className="text-xs text-gray-500">Loved by</p>
                      <p className="text-lg font-bold text-gray-900">10,000+</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4"
            >
              Shop by <span className="gradient-text">Category</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our range of premium organic products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link href={category.link}>
                  <div className={`${category.bgColor} p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full`}>
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
              Featured <span className="gradient-text">Products</span>
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked selection of our finest organic products
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
                  <ProductCard product={product} onAddToCart={addToCart} />
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
