"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Lightbulb, Shield, TrendingUp, Heart, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TeamMember from "@/components/ui/TeamMember";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface TeamMemberType {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
}

interface Stat {
  number: string;
  label: string;
}

export default function AboutPage() {
  const values: Value[] = [
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in every project we undertake",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide everything we do",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We build lasting relationships with our clients, acting as trusted advisors",
      color: "from-orange-500 to-red-500"
    }
  ];

  const team: TeamMemberType[] = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "15+ years of Microsoft technology leadership with a passion for digital transformation",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      expertise: ["Power Platform", "Digital Strategy", "Enterprise Architecture"]
    },
    {
      name: "Michael Chen",
      role: "Lead Solutions Architect",
      bio: "Power Platform MVP with expertise in complex enterprise implementations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      expertise: ["Power Apps", "Power Automate", "Azure Integration"]
    },
    {
      name: "Emily Rodriguez",
      role: "Power BI Practice Lead",
      bio: "Data visualization expert helping organizations unlock insights from their data",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      expertise: ["Power BI", "Data Analytics", "DAX & Power Query"]
    },
    {
      name: "David Thompson",
      role: "Senior Consultant",
      bio: "Automation specialist focused on process optimization and efficiency",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: ["Power Automate", "RPA", "Process Design"]
    }
  ];

  const stats: Stat[] = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "98%", label: "Client Retention" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
       
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  To empower businesses of all sizes to achieve digital transformation through 
                  expert guidance, innovative solutions, and the power of Microsoft's low-code platform. 
                  We believe technology should enable, not complicate, your business goals.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  To be the most trusted Power Platform consulting partner, recognized for our 
                  expertise, innovation, and commitment to client success. We envision a world where 
                  every organization can harness the power of low-code technology to drive growth.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2014, PowerPro Consulting began with a simple belief: that powerful business 
                  applications shouldn't require extensive coding expertise or massive IT budgets. Our founder, 
                  Sarah Johnson, saw firsthand how traditional development was holding businesses back from 
                  innovation.
                </p>
                <p>
                  When Microsoft launched the Power Platform, we recognized it as a game-changer. We pivoted 
                  our entire practice to focus exclusively on these transformative tools, becoming early adopters 
                  and experts in the platform.
                </p>
                <p>
                  Today, we're proud to have helped over 500 organizations across industries—from startups to 
                  Fortune 500 companies—transform their operations, automate processes, and unlock insights 
                  from their data. Our team of certified experts continues to push the boundaries of what's 
                  possible with Power Platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
         

        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals passionate about Power Platform excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business with Power Platform
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 h-14">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}