'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createPageUrl } from '@/utils/createPageUrl';
import Image from 'next/image';

const navigationItems = [
  { name: 'Home', path: createPageUrl('Home') },
  { name: 'Services', path: createPageUrl('Services') },
  { name: 'About', path: createPageUrl('About') },
  { name: 'Contact', path: createPageUrl('Contact') },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href={createPageUrl('Home')}
            className="flex items-center gap-3 group"
          >
            
            
            
            <div>
              <Image
                src={"/logo.png"}
                width={80}
                height={50}
                alt="Kantora Logo"/>

             
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-black hover:text-blue-600'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-black-600" />
                )}
              </Link>
            ))}
            <Link href={createPageUrl('Contact')}>
              <Button className="bg-blue-600 hover:blue-700 text-white shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={createPageUrl('Contact')}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
