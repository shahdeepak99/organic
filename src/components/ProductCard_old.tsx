'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Tag, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountedPrice = product.discount > 0 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Link href={`/products/${product._id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-primary-100 h-full flex flex-col relative"
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary-50 to-amber-50">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            src={product.imageUrl || '/assets/placeholder.jpg'}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Badges */}
          {product.discount > 0 && (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="absolute top-3 right-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1.5 rounded-full font-bold text-sm z-10 flex items-center gap-1 shadow-lg"
            >
              <Tag className="w-4 h-4" />
              {product.discount}% OFF
            </motion.div>
          )}
          
          {product.featured && (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-3 py-1.5 rounded-full font-semibold text-sm shadow-lg flex items-center gap-1 z-10"
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </motion.div>
          )}
          
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
              <span className="bg-red-500 text-white px-5 py-2 rounded-xl font-bold shadow-xl">
                Out of Stock
              </span>
            </div>
          )}

          {/* Quick Add Overlay */}
          {product.stock > 0 && onAddToCart && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-xl hover:bg-primary-50 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Quick Add
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Category */}
          <p className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
            {product.category}
          </p>
          
          {/* Product Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
            {product.description}
          </p>
          
          {/* Weight/Unit */}
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-lg text-sm font-semibold">
              {product.weight} {product.unit}
            </div>
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-primary-700">
                  ₹{discountedPrice.toFixed(2)}
                </span>
                {product.discount > 0 && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.price.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Stock indicator */}
              {product.stock > 0 && product.stock < 10 && (
                <p className="text-xs text-accent-600 mt-1 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-accent-600 rounded-full animate-pulse"></span>
                  Only {product.stock} left!
                </p>
              )}
            </div>
            
            {product.stock > 0 && onAddToCart && (
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-3 rounded-full hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;