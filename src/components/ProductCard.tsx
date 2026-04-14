'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const discountedPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success('Added to cart!', {
      icon: '🛒',
      style: {
        borderRadius: '12px',
        background: '#7d9374',
        color: '#fff',
      },
    });
  };

  return (
    <Link href={`/products/${product._id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-cream-50">
          <img
            src={product.imageUrl || 'https://images.unsplash.com/photo-1599909533661-c8f07c3f9cb8?w=600&q=80'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            {product.featured && (
              <span className="bg-accent-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                🔥 Best Seller
              </span>
            )}
            {product.discount > 0 && (
              <span className="bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg ml-auto">
                {product.discount}% OFF
              </span>
            )}
          </div>
          
          {/* Stock Status */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">
                Sold Out
              </span>
            </div>
          )}

          {/* Quick Add Button - appears on hover */}
          {product.stock > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAddToCart}
                className="w-full bg-white text-primary-700 py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-50 transition-colors shadow-lg"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category */}
          <p className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-2">
            {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
            {product.name}
          </h3>
          
          {/* Rating (simulated) */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-accent-400 text-accent-400" />
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.8/5)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-xl font-bold text-gray-900">
              ₹{Math.round(discountedPrice)}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.price}
              </span>
            )}
          </div>
          
          {/* Stock Warning */}
          {product.stock > 0 && product.stock < 10 && (
            <p className="text-xs text-accent-600 mt-2 font-medium">
              Only {product.stock} left in stock
            </p>
          )}

          {/* Dispatch Tag */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              📦 Dispatch in 24 hrs
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
