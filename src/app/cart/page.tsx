'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ArrowRight, Plus, Minus, Trash2, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

  const subtotal = cartTotal;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <ShoppingBag className="w-16 h-16 text-primary-600" />
            </motion.div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Your cart is empty
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Start shopping to add products to your cart
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Package className="w-5 h-5" />
                Browse Products
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Shopping <span className="gradient-text">Cart</span>
          </h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2 transition"
          >
            <Trash2 className="w-5 h-5" />
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item, index) => {
                const discountedPrice = item.discount > 0
                  ? item.price * (1 - item.discount / 100)
                  : item.price;

                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 premium-card"
                  >
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-primary-50 to-amber-50">
                        <img
                          src={item.imageUrl || '/assets/placeholder.jpg'}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {item.discount > 0 && (
                          <div className="absolute top-2 right-2 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {item.discount}% OFF
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Link href={`/products/${item._id}`}>
                              <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600 transition">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-primary-600 font-semibold mt-1">
                              {item.category} • {item.weight} {item.unit}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item._id)}
                            className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-600">Quantity:</span>
                            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                              >
                                <Minus className="w-4 h-4 text-primary-600" />
                              </motion.button>
                              <span className="w-12 text-center font-bold text-gray-900">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                disabled={item.quantity >= item.stock}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
                              >
                                <Plus className="w-4 h-4 text-primary-600" />
                              </motion.button>
                            </div>
                            {item.quantity >= item.stock && (
                              <span className="text-xs text-red-600 font-semibold">
                                Max stock reached
                              </span>
                            )}
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary-700">
                              ₹{(discountedPrice * item.quantity).toFixed(2)}
                            </div>
                            {item.discount > 0 && (
                              <div className="text-sm text-gray-400 line-through">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.length} items)</span>
                  <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-accent-600">FREE</span>
                    ) : (
                      `₹${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && subtotal < 500 && (
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
                    <p className="text-sm text-accent-700 font-semibold">
                      Add ₹{(500 - subtotal).toFixed(2)} more for <span className="text-accent-600">FREE shipping!</span>
                    </p>
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-primary-700">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/products">
                <button className="w-full text-primary-600 hover:text-primary-700 font-semibold py-3 rounded-xl hover:bg-primary-50 transition">
                  Continue Shopping
                </button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>100% Secure Checkout</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Easy Returns & Refunds</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Quality Guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;