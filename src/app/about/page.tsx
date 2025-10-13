'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Award,
  Users,
  Lightbulb,
  Shield,
  TrendingUp,
  Heart,
  LucideIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TeamMember from '@/components/ui/TeamMember';

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
      title: 'Excellence',
      description:
        "We're committed to delivering exceptional quality in every project we undertake",
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace cutting-edge technologies and creative solutions to solve complex challenges',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'Transparency, honesty, and ethical practices guide everything we do',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description:
        'We build lasting relationships with our clients, acting as trusted advisors',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const team: TeamMemberType[] = [
    {
      name: 'Brandon Kan',
      role: 'Principle',
      bio: '10+ years of Microsoft technology leadership with a passion for digital transformation',
      image:
        '/BrandonHeadshot.jpg',
      expertise: [
        'Dynamics 365',
        'Web Development',
        'Power Platform',
        'Digital Strategy',
        'Enterprise Architecture',
      ],
    },
  ];

  const stats: Stat[] = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '98%', label: 'Client Retention' },
    { number: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Founded on the belief that innovation should move at the speed
                  of technology, Kantora Consulting was created to help
                  businesses build, launch, and scale faster—without
                  compromising on quality. In today’s era of rapid AI
                  advancements, we believe that starting a business or
                  developing an MVP should happen in the fastest time possible,
                  with exceptional precision and craftsmanship.
                </p>

                <p>
                  Great consulting is rooted in transparency, adaptability, and
                  expertise. We embrace the newest technologies to deliver the
                  most effective, scalable, and future-ready solutions for every
                  client. Efficiency, quality, and documentation are the
                  foundation of everything we do—ensuring every project not only
                  works seamlessly today but continues to evolve tomorrow.
                </p>

                <p>
                  With over a decade of experience in top-tier firms, our team
                  has mastered best practices across industries including
                  finance, banking, real estate, and healthcare. Our mission is
                  simple: to help you leverage best-in-class technologies,
                  accelerate your go-live, and achieve long-term success with
                  solutions built for growth and innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        ></motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals passionate about Power Platform
              excellence
            </p>
          </div>

          <div
            className={`grid gap-8 ${
              team.length === 1
                ? 'md:grid-cols-1 place-items-center' // ✅ Center single member
                : 'md:grid-cols-2' // ✅ Default two-column layout
            }`}
          >
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
            Let's discuss how our expertise can help transform your business
            with Power Platform
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 h-14"
            >
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
