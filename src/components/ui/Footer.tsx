import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { createPageUrl } from '@/utils/createPageUrl';

const navigationItems = [
  { name: 'Home', path: createPageUrl('Home') },
  { name: 'Services', path: createPageUrl('Services') },
  { name: 'Contact', path: createPageUrl('Contact') },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold">PowerPro Consulting</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with Microsoft Power Platform solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: contact@powerproconsulting.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 PowerPro Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
