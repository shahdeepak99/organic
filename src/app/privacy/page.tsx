import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Pavanam',
  description: 'Privacy Policy for Pavanam — how we collect, use and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary-100 p-3 rounded-xl">
            <Shield className="w-7 h-7 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mt-1">Last updated: 1 May 2026</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>
              Pavanam ("we", "our", "us") is a Delhi-based brand that sells pure cow and buffalo ghee
              made using the traditional bilona method. Our website is{' '}
              <span className="font-medium text-primary-700">pavanam.in</span>. This policy explains
              how we handle your personal information when you visit or shop with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-medium">Account & order details</span> — name, email address, phone number, and delivery address when you place an order.</li>
              <li><span className="font-medium">Payment information</span> — we use Razorpay for secure payment processing. We do not store your card or UPI details on our servers.</li>
              <li><span className="font-medium">Usage data</span> — pages visited, device type, and browser information collected automatically via cookies to improve your experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To process and deliver your orders.</li>
              <li>To send order confirmation and delivery updates via SMS or email.</li>
              <li>To respond to your enquiries and customer support requests.</li>
              <li>To improve our website and product offerings.</li>
              <li>We will never sell your personal data to third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
            <p>
              We use essential cookies to keep your cart active during your session and analytics cookies
              to understand how visitors use our site. You can disable non-essential cookies in your
              browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your order data for up to 3 years for accounting and legal compliance purposes.
              You may request deletion of your personal data at any time by emailing us, and we will
              action it within 30 days unless retention is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Services</h2>
            <p>
              We share only the minimum necessary data with trusted service providers:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-2">
              <li><span className="font-medium">Razorpay</span> — payment processing</li>
              <li><span className="font-medium">Delivery partners</span> — name, address, and phone number for order fulfilment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise any of these rights, contact us at:</p>
            <div className="mt-3 bg-primary-50 rounded-xl p-4 text-sm">
              <p className="font-medium text-primary-800">📧 hello@pavanam.in</p>
              <p className="font-medium text-primary-800 mt-1">📞 +91 98765 43210</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with
              a revised "last updated" date. Continued use of our website after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
