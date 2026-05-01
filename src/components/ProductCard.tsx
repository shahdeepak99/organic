'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Star, Leaf, Droplet } from 'lucide-react';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

// Returns theme tokens based on category
const getCategoryTheme = (category: string) => {
  const cat = (category || '').toLowerCase();
  if (cat.includes('buffalo')) {
    return {
      bgFrom: 'from-sky-50',
      bgVia: 'via-slate-50',
      bgTo: 'to-blue-50',
      accentBg: 'bg-sky-100',
      accentText: 'text-sky-700',
      accentBorder: 'border-sky-200',
      badgeBg: 'bg-sky-600/90',
      icon: Droplet,
      iconColor: 'text-sky-600',
      label: 'Buffalo Ghee',
    };
  }
  // default: cow ghee — warm amber-green
  return {
    bgFrom: 'from-amber-50',
    bgVia: 'via-cream-100',
    bgTo: 'to-primary-50',
    accentBg: 'bg-amber-100',
    accentText: 'text-amber-700',
    accentBorder: 'border-amber-200',
    badgeBg: 'bg-accent-500/90',
    icon: Leaf,
    iconColor: 'text-primary-600',
    label: 'Cow Ghee',
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const theme = getCategoryTheme(product.category);
  const CategoryIcon = theme.icon;

  const discountedPrice = product.discount > 0
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link href={`/products/${product._id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.22 }}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col shadow-sm"
      >
        {/* Image Container with warm themed gradient background */}
        <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${theme.bgFrom} ${theme.bgVia} ${theme.bgTo}`}>
          {/* Decorative radial glow behind the jar */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3/4 h-3/4 rounded-full bg-white/60 blur-2xl" />
          </div>

          <img
            src={product.imageUrl || '/banner.jpg'}
            alt={product.name}
            className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-20">
            {product.featured && (
              <span className="bg-accent-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                🔥 Best Seller
              </span>
            )}
            {product.discount > 0 && (
              <span className="bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md ml-auto">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Sold-out overlay */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">
                Sold Out
              </span>
            </div>
          )}

          {/* Quick Add — slides up on hover */}
          {product.stock > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
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

        {/* Card Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category pill */}
          <div className={`inline-flex items-center gap-1.5 self-start ${theme.accentBg} ${theme.accentText} border ${theme.accentBorder} text-xs font-semibold px-2.5 py-1 rounded-full mb-3`}>
            <CategoryIcon className={`w-3 h-3 ${theme.iconColor}`} />
            {theme.label}
          </div>

          {/* Product Name */}
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-3 h-3 fill-accent-400 text-accent-400" />
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.8)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-2xl font-bold text-gray-900">
              ₹{Math.round(discountedPrice).toLocaleString('en-IN')}
            </span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Low stock warning */}
          {product.stock > 0 && product.stock < 10 && (
            <p className="text-xs text-accent-600 mt-1.5 font-medium">
              ⚡ Only {product.stock} left
            </p>
          )}

          {/* Dispatch info */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-400">📦 Dispatch in 24 hrs</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
