import React from 'react';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-full">
                <Leaf className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-display font-bold">Pure Organic</h3>
            </div>
            <p className="text-primary-100 text-sm">
              Your trusted source for 100% organic and natural products, 
              delivered fresh from farm to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-100 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-100 hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-primary-100 hover:text-white transition">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-100 hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=ghee" className="text-primary-100 hover:text-white transition">
                  Pure Ghee
                </Link>
              </li>
              <li>
                <Link href="/products?category=gud" className="text-primary-100 hover:text-white transition">
                  Jaggery (Gud)
                </Link>
              </li>
              <li>
                <Link href="/products?category=pulses" className="text-primary-100 hover:text-white transition">
                  Organic Pulses
                </Link>
              </li>
              <li>
                <Link href="/products?category=oils" className="text-primary-100 hover:text-white transition">
                  Cold-Pressed Oils
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-100 text-sm">
                  123 Organic Street, Green Valley, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-100 text-sm">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-100 text-sm">
                  info@pureorganic.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-200 text-sm">
              &copy; {new Date().getFullYear()} Pure Organic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-primary-200 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-200 hover:text-white text-sm transition">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-primary-200 hover:text-white text-sm transition">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;