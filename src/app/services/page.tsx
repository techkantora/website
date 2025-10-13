'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';

interface Service {
  title: string;
  icon: string;
  color: string;
  description: string;
  features: string[];
}

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: 'Application Development',
      icon: '/powerappslogo.png',
      color: 'from-blue-500 to-cyan-500',
      description:
        ' Your organization is built on the applications and platforms you rely on every day. Our Application Development services have been designed specifically to accelerate growth, boost internal operations and collaboration, and improve your ability to engage with customers, so you have exactly what you need to succeed. \n\n Our experienced team uses leading platforms and frameworks, like Microsoft Azure, NextJS, and Power Platform, to complement our custom development, helping you implement, modernize, and deploy the right solutions for your organization. Because there is no one-size-fits-all approach to innovation.',
      features: [
        'Canvas app development',
        'Model-driven app creation',
        'Custom connectors and integrations',
        'Mobile-responsive design',
        'User training and documentation',
        'Ongoing support and maintenance',
      ],
    },
    {
      title: 'Customer Relationship Management (CRM)',
      icon: '/D365logo.jpg',
      color: 'from-purple-500 to-pink-500',
      description:
        'Seamlessly integrating a suite of intelligent applications across sales, marketing, finance, and more, Dynamics 365 breaks down silos and enhances collaboration. Driven by AI, Dynamics 365’s intelligent CRM and ERP business applications will empower your teams with predictive insights and data-driven decision-making. Whether you’re a startup or an enterprise, Dynamics 365 scales to fit your needs, allowing customization, extension, and innovation.',
      features: [
        'Unified platform for CRM and ERP capabilities',
        'AI-driven insights for sales, marketing, and customer service',
        'Seamless integration with Microsoft 365, Teams, and Power Platform',
        'Scalable cloud-based architecture built on Microsoft Azure',
        'Enhanced data security and compliance management',
      ],
    },
    {
      title: 'Power BI Analytics',
      icon: '/powerbilogo.png',
      color: 'from-amber-500 to-orange-500',
      description:
        'Transform your data into actionable insights. Build interactive dashboards and reports for data-driven decision making.',
      features: [
        'Custom dashboard development',
        'Data modeling and transformation',
        'Real-time analytics',
        'Embedded analytics solutions',
        'Power BI migration services',
        'Training and best practices',
      ],
    },
    {
      title: 'Process Automation',
      icon: '/processautomationlogo.jpg',
      color: 'from-green-500 to-emerald-500',
      description:
        'Efficiency starts with automation. Our Process Automation services are designed to eliminate repetitive manual work and streamline your organization’s most critical workflows — from invoicing and billing to quote generation, approvals, and customer notifications. Whether it’s connecting systems, automating document workflows, or setting up real-time alerts, we deliver automation solutions that are reliable, scalable, and built for your business.',
      features: [
        'Automated invoice and billing workflows',
        'Dynamic quote and proposal generation',
        'Email and in-app notification systems for approvals and updates',
        'Approval workflows with real-time tracking and audit trails',
        'Data synchronization between CRM, ERP, and finance systems',
        'Scheduled reporting and document generation',
      ],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Microsoft Power Platform services to accelerate your
            digital transformation journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with Power Platform? Get in touch
            for a free consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 h-14"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
