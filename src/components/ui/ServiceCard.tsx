"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

export default function ServiceCard({ title, description, icon, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
        <CardContent className="p-8">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500`}
          >
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
