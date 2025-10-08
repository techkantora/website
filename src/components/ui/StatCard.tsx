"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  index: number;
}

export default function StatCard({ value, label, icon: Icon, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
        <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{value}</div>
        <div className="text-sm text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
