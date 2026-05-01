import React from 'react';
import { RefreshCcw } from 'lucide-react';

export const metadata = {
  title: 'Refund Policy | Pavanam',
  description: 'Refund and return policy for Pavanam ghee products.',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary-100 p-3 rounded-xl">
            <RefreshCcw className="w-7 h-7 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Refund Policy</h1>
            <p className="text-sm text-gray-500 mt-1">Last updated: 1 May 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

          {/* Quick Summary */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-5">
            <p className="font-semibold text-primary-800 text-base">Our promise to you</p>
            <p className="mt-1 text-primary-700 text-sm">
              If your order arrives damaged, leaking, or incorrect, we will replace it or refund you —
              no questions asked. Your satisfaction matters to us.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Eligible Refund / Replacement Cases</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Product received is damaged, leaking, or broken.</li>
              <li>Wrong product delivered (e.g. cow ghee sent instead of buffalo).</li>
              <li>Product is expired or visibly spoiled on arrival.</li>
              <li>Order not delivered within 14 business days of dispatch confirmation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Non-Refundable Cases</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Change of mind after the order has been dispatched.</li>
              <li>Product has been used or partially consumed (unless quality issue).</li>
              <li>Incorrect delivery address provided by the customer.</li>
              <li>Minor variation in ghee colour or texture — this is natural and expected in handmade products.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How to Raise a Request</h2>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>
                <span className="font-medium">Contact us within 48 hours</span> of delivery at{' '}
                <span className="text-primary-700 font-medium">hello@pavanam.in</span> or{' '}
                <span className="text-primary-700 font-medium">+91 98765 43210</span>.
              </li>
              <li>
                Share your <span className="font-medium">order ID</span> and a clear photo or short video
                of the issue with the product and its packaging.
              </li>
              <li>
                Our team will review and respond within <span className="font-medium">24 hours</span>.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Replacement vs. Refund</h2>
            <p>
              We will offer a <span className="font-medium">free replacement</span> as the first resolution.
              If a replacement is not feasible (e.g. out of stock), a full refund will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Refund Process & Timeline</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Approved refunds are processed within <span className="font-medium">3–5 business days</span>.</li>
              <li>Refunds are credited to the original payment method (UPI, card, or bank account).</li>
              <li>Bank processing time may add an additional 2–3 business days depending on your bank.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Returns & Shipping</h2>
            <p>
              In most damage or quality cases, we do <span className="font-medium">not require the product to be returned</span>.
              If we do request a return, we will arrange and bear the cost of the return pickup.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
            <div className="bg-primary-50 rounded-xl p-4 text-sm">
              <p className="font-medium text-primary-800">📧 hello@pavanam.in</p>
              <p className="font-medium text-primary-800 mt-1">📞 +91 98765 43210</p>
              <p className="font-medium text-primary-800 mt-1">🕘 Mon–Sat, 9 AM – 6 PM IST</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
