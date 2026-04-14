'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';
import { 
  ArrowRight, Star, Shield, Leaf, Heart, Award, Sparkles, CheckCircle2, Truck
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
        setFeaturedProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const gheeTypes = [
    {
      title: 'A2 Gir Cow Ghee',
      slug: 'ghee',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80',
      badge: 'Best Seller',
      description: 'Premium bilona method'
    },
    {
      title: 'Desi Cow Ghee',
      slug: 'ghee',
      image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80',
      badge: 'Traditional',
      description: 'Vedic method ghee'
    },
    {
      title: 'Buffalo Ghee',
      slug: 'ghee',
      image: 'https://images.unsplash.com/photo-1621524110658-8d8d76c8f58e?w=600&q=80',
      badge: 'Rich & Creamy',
      description: 'Perfect for sweets'
    },
    {
      title: 'Gift Packs',
      slug: 'ghee',
      image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&q=80',
      badge: 'Premium',
      description: 'Perfect for gifting'
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: '100% Pure Ghee',
      description: 'Made from pure A2 milk from grass-fed indigenous cows'
    },
    {
      icon: Shield,
      title: 'Lab Tested Quality',
      description: 'Every batch tested for purity and authenticity'
    },
    {
      icon: Award,
      title: 'Traditional Bilona',
      description: 'Hand-churned using ancient bilona method for maximum nutrition'
    },
    {
      icon: Heart,
      title: 'Farm to Table',
      description: 'Direct from local farms, supporting rural communities'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'The A2 ghee quality is exceptional. You can taste the purity in every spoonful. Finally found authentic desi ghee the way my grandmother used to make!',
      product: 'A2 Gir Cow Ghee'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best ghee I have ever purchased online. The golden color and aroma prove its authenticity. Worth every penny!',
      product: 'Desi Cow Ghee'
    },
    {
      name: 'Anjali Mehta',
      rating: 5,
      text: 'Using this ghee for my baby\'s food. The purity and quality give me peace of mind. Highly recommended for families!',
      product: 'A2 Bilona Ghee'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50">
      {/* Hero Section - Clean & Minimalist */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-primary-50 to-sage-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOWQ4MyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-accent-500" />
                <span className="text-sm font-medium text-gray-700">Certified Organic & Chemical-Free</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight">
                Pure Desi Ghee,
                <br />
                <span className="bg-gradient-to-r from-primary-600 to-sage-500 bg-clip-text text-transparent">
                  Ancient Purity
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience authentic traditional ghee made using the bilona method. From our farms to your family, 
                with love and purity in every drop.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/products"
                  className="group inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Ghee Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#categories"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-colors border-2 border-primary-200"
                >
                  Explore Our Ghee
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-200/30 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-bounce-slow delay-300"></div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 text-center">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary-600" />
              <span className="text-gray-700 font-medium">100% Organic</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="text-gray-700 font-medium">Lab Tested</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-primary-600" />
              <span className="text-gray-700 font-medium">Free Delivery ₹500+</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-primary-600" />
              <span className="text-gray-700 font-medium">20k+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category - Premium Grid */}
      <section id="categories" className="py-20 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Ghee Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our premium range of pure, authentic ghee
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gheeTypes.map((gheeType, index) => (
              <motion.div
                key={gheeType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={`/products?category=${gheeType.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={gheeType.image}
                      alt={gheeType.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-accent-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {gheeType.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {gheeType.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{gheeType.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <hFeatured Ghee Products
            </h2>
            <p className="text-lg text-gray-600">
              Our bestselling pure ghee products, lov600">
              Our most loved products, trusted by thousands
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 aspect-square rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 8).map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-sage-50 to-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, tradition, and your health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-cream-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-sage-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-sage-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Start Your Organic Journey Today
            </h2>
            <p className="text-lg mb-10 text-primary-50">
              Join thousands of families choosing health, purity, and tradition. 
              Get 15% off on your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:bg-cream-50 transition-colors shadow-lg"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 bg-primary-700/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-colors border-2 border-white/30"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
