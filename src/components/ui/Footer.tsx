import React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { createPageUrl } from '@/utils/createPageUrl';

const navigationItems = [
  { name: 'Home', path: createPageUrl('Home') },
  { name: 'Services', path: createPageUrl('Services') },
  { name: 'About', path: createPageUrl('About') },
  { name: 'Contact', path: createPageUrl('Contact') },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              
              <h3 className="text-lg font-bold">Kantora Consulting</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering businesses with solutions.
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
              <p>Email: techkantora@gmail.com</p>
              <p>Phone: +1 (604) 644-3310</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Kantora Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
