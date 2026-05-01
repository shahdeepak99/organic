'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Product } from '@/types';
import { ShoppingCart, ArrowLeft, Star, Package, Shield, Truck, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const ProductDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      if (data.success) {
        setProduct(data.data);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    { icon: Leaf, text: '100% Organic' },
    { icon: Shield, text: 'Quality Assured' },
    { icon: Truck, text: 'Fast Delivery' },
    { icon: Package, text: 'Secure Packaging' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className={`rounded-2xl shadow-lg overflow-hidden p-8 flex items-center justify-center bg-gradient-to-br ${product.category?.toLowerCase().includes('buffalo') ? 'from-sky-50 via-slate-50 to-blue-50' : 'from-amber-50 via-cream-100 to-primary-50'}`}>
            <div className="relative w-full">
              <img
                src={product.imageUrl || '/banner.jpg'}
                alt={product.name}
                className="w-full h-96 object-contain rounded-xl drop-shadow-lg"
              />
              {product.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Featured
                </div>
              )}
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div>
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4 capitalize">
                {product.category}
              </span>
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold gradient-text">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <span className="text-2xl text-gray-400 line-through">
                    ₹{(product.price / (1 - product.discount / 100)).toFixed(2)}
                  </span>
                )}
                <span className="text-gray-600">
                  / {product.weight} {product.unit}
                </span>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8 border-l-4 border-primary-500 pl-4">
                {product.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-br from-white to-primary-50 rounded-lg border border-primary-100">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Product Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Net Weight</h3>
              <p className="text-gray-600">{product.weight} {product.unit}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Category</h3>
              <p className="text-gray-600 capitalize">{product.category}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Availability</h3>
              <p className="text-gray-600">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;