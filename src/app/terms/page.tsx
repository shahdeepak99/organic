import React from 'react';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Pavanam',
  description: 'Terms and conditions for using the Pavanam website and purchasing our products.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary-100 p-3 rounded-xl">
            <FileText className="w-7 h-7 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Terms of Service</h1>
            <p className="text-sm text-gray-500 mt-1">Last updated: 1 May 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or placing an order on the Pavanam website, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Products</h2>
            <p>
              All our ghee products — Pure Cow Ghee and Pure Buffalo Ghee — are made in small batches
              using traditional methods. Product images are representative; actual colour and texture
              may vary slightly between batches due to the natural, additive-free nature of our ghee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Pricing & Payment</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes.</li>
              <li>We reserve the right to change prices at any time without prior notice. Orders placed before a price change will be honoured at the original price.</li>
              <li>Payments are processed securely through Razorpay. We accept UPI, debit/credit cards, and net banking.</li>
              <li>Orders are confirmed only after successful payment. You will receive a confirmation email/SMS.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Delivery</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>We dispatch orders within 24–48 hours of payment confirmation.</li>
              <li>Estimated delivery is 3–7 business days depending on your location.</li>
              <li>We are not liable for delays caused by courier partners, natural events, or incorrect addresses provided by the customer.</li>
              <li>Currently we deliver within India only.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Order Cancellation</h2>
            <p>
              Orders can be cancelled within <span className="font-medium">12 hours of placement</span> by
              contacting us at hello@pavanam.in or +91 98765 43210. Once dispatched, cancellations are
              not possible. Please refer to our Refund Policy for returns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Intellectual Property</h2>
            <p>
              All content on this website — including product images, text, logos, and design — is the
              property of Pavanam and may not be reproduced or used without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              Pavanam's liability is limited to the value of the product(s) purchased. We are not
              liable for any indirect or consequential loss arising from the use of our products or
              website. Our products are food items — please consult a health professional before use if
              you have specific dietary conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of the courts in New Delhi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <div className="bg-primary-50 rounded-xl p-4 text-sm">
              <p className="font-medium text-primary-800">📧 hello@pavanam.in</p>
              <p className="font-medium text-primary-800 mt-1">📞 +91 98765 43210</p>
              <p className="font-medium text-primary-800 mt-1">📍 Dwarka, New Delhi, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
