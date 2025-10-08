"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  index: number;
}

export default function TeamMember({ 
  name, 
  role, 
  bio, 
  image, 
  expertise, 
  index 
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <Image 
              src={image} 
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
            <p className="text-blue-600 font-medium mb-4">{role}</p>
            <p className="text-gray-600 mb-4 leading-relaxed">{bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}