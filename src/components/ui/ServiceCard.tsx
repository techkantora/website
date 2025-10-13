'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 👈 Import this

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon: string;
  color: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  color,
  index,
}: ServiceCardProps) {
  const pathname = usePathname(); // 👈 Get current route

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
        <CardContent className="p-8">
          <div>
            <Image src={icon} width={100} height={100} alt="image" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
            {description}
          </p>

          {features?.length ? (
            <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          ) : null}

          {/* ✅ Only show Learn more if NOT on /services route */}
          {pathname !== '/services' && (
            <Link href="/services" className="group">
              <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
