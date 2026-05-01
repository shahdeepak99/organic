'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { CheckCircle, ShoppingBag, Home, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  const shortId = orderId ? orderId.slice(-8).toUpperCase() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-amber-50 to-cream-100 flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>

        <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">
          Payment Successful!
        </h1>

        {shortId && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3 mb-4">
            <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider mb-1">Order ID</p>
            <p className="text-xl font-mono font-bold text-gray-900">#{shortId}</p>
          </div>
        )}

        <p className="text-gray-500 mb-4 leading-relaxed text-sm">
          Thank you for your order! Your ghee will be dispatched within 24 hours.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-primary-600 bg-primary-50 rounded-lg px-4 py-3 mb-8">
          <Mail className="w-4 h-4" />
          <span>A confirmation email with your invoice has been sent.</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              Continue Shopping
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 transition-all"
            >
              <Home className="w-4 h-4" />
              Go Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
