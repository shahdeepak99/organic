'use client';

import React from 'react';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';

interface CartItemProps {
  item: CartItemType;
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  const { product, quantity } = item;
  const itemTotal = product.price * quantity;

  const handleIncrease = () => {
    if (quantity < product.stock) {
      onUpdateQuantity(product._id, quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(product._id, quantity - 1);
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-sm border border-primary-100 hover:shadow-md hover:border-primary-200 transition-all duration-300">
      {/* Product Image */}
      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-primary-50 ring-2 ring-primary-100">
        <img
          src={product.imageUrl || '/assets/placeholder.jpg'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {product.weight} {product.unit} | {product.category}
          </p>
          <p className="text-lg font-bold text-primary-600">
            ₹{product.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => onRemove(product._id)}
          className="text-red-500 hover:text-red-700 transition-colors p-1 hover:bg-red-50 rounded-lg"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className="p-1 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          
          <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
          
          <button
            onClick={handleIncrease}
            disabled={quantity >= product.stock}
            className="p-1 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-xl font-bold text-gray-900">
            ₹{itemTotal.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;