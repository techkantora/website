"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";

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
      title: "Power Apps Development",
         icon: '/D365logo.webp',
      color: "from-blue-500 to-cyan-500",
      description: "Create custom applications without extensive coding. We build canvas and model-driven apps that streamline your business processes.",
      features: [
        "Canvas app development",
        "Model-driven app creation",
        "Custom connectors and integrations",
        "Mobile-responsive design",
        "User training and documentation",
        "Ongoing support and maintenance"
      ]
    },
    {
      title: "Power Automate Solutions",
        icon: '/D365logo.webp',
      color: "from-purple-500 to-pink-500",
      description: "Automate repetitive tasks and complex workflows. Connect your apps and services to streamline business processes.",
      features: [
        "Cloud flow automation",
        "Desktop flow (RPA) implementation",
        "Business process automation",
        "Integration with 500+ connectors",
        "Approval workflows",
        "Email and notification automation"
      ]
    },
    {
      title: "Power BI Analytics",
         icon: '/D365logo.webp',
      color: "from-amber-500 to-orange-500",
      description: "Transform your data into actionable insights. Build interactive dashboards and reports for data-driven decision making.",
      features: [
        "Custom dashboard development",
        "Data modeling and transformation",
        "Real-time analytics",
        "Embedded analytics solutions",
        "Power BI migration services",
        "Training and best practices"
      ]
    },
    {
      title: "Power Pages Websites",
        icon: '/D365logo.webp',
      color: "from-green-500 to-emerald-500",
      description: "Build secure, low-code business websites. Create external-facing portals that integrate with your existing systems.",
      features: [
        "Customer portals",
        "Partner portals",
        "Self-service websites",
        "Custom authentication",
        "Dataverse integration",
        "Responsive web design"
      ]
    }
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
            Comprehensive Microsoft Power Platform services to accelerate your digital transformation journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

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
              { step: "01", title: "Discovery", desc: "Understand your business needs and challenges" },
              { step: "02", title: "Strategy", desc: "Design the optimal Power Platform solution" },
              { step: "03", title: "Implementation", desc: "Build and deploy your custom solution" },
              { step: "04", title: "Support", desc: "Ongoing maintenance and optimization" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

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
            Ready to transform your business with Power Platform? Get in touch for a free consultation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 h-14">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}