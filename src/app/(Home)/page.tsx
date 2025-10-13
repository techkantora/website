'use client';

import Link from 'next/link';
import { createPageUrl } from '@/utils/createPageUrl';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';

import ServiceCard from '@/components/ui/ServiceCard';
import StatCard from '@/components/ui/StatCard';

export default function Home() {
  const services = [
    {
      title: 'Application Development & AI Agents',
      description:
        'Custom low-code applications tailored to your business processes',
      icon: '/powerappslogo.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Customer Relationship Management (CRM) ',
      description: 'Streamline workflows and automate repetitive tasks',
      icon: '/D365logo.jpg',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Analytics & BI',
      description:
        'Transform data into actionable insights with stunning dashboards',
      icon: '/powerbilogo.png',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Process Automation',
      description: 'Build intelligent automation',
      icon: '/processautomationlogo.jpg',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { value: '15+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '98%', label: 'Client Satisfaction', icon: Users },
    { value: '10+', label: 'Years Experience', icon: TrendingUp },
    { value: '24/7', label: 'Client Support', icon: Clock },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business
              <br />
              <span className="text-blue-900">With Power Platform</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We help organizations unlock the full potential of Microsoft Power
              Platform through expert consulting, strategic implementation, and
              AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-teal-500 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl text-lg px-8 h-14"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href={createPageUrl('Services')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-2"
                >
                  Explore our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 bg-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scalable solutions designed to drive your digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Consulting Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery',
              desc: 'Understand your business needs and challenges',
            },
            {
              step: '02',
              title: 'Strategy',
              desc: 'Design and document the optimal solution',
            },
            {
              step: '03',
              title: 'Implementation',
              desc: 'Build, Test, and deploy your solution',
            },
            {
              step: '04',
              title: 'Support',
              desc: 'Ongoing maintenance and optimization',
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {phase.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
      {/* CTA Section */}
      
      <section className="py-20 mx-20 my-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how Power Platform can transform your business
              operations
            </p>
            <Link href={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 h-14 shadow-xl"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
