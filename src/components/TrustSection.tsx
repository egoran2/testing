'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe } from 'lucide-react';


const trustLogos = [
  { name: 'Czech Ministry', logo: '/images/czech-ministry.svg' },
  { name: 'EU Commission', logo: '/images/eu-commission.svg' },
  { name: 'Legal Association', logo: '/images/legal-assoc.svg' },
  { name: 'IT Chamber', logo: '/images/it-chamber.svg' },
];

const certifications = [
  {
    icon: Shield,
    title: 'Licensed Immigration Lawyers',
    description: 'Certified by Czech Bar Association',
  },
  {
    icon: Award,
    title: 'ISO 9001 Certified',
    description: 'Quality management system',
  },
  {
    icon: Users,
    title: 'Member of AILA',
    description: 'American Immigration Lawyers Association',
  },
  {
    icon: Globe,
    title: 'EU Compliance',
    description: 'GDPR and EU regulations compliant',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-gray-500 mb-6">
            Trusted by government agencies and professional organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-12 w-24 bg-gray-200 rounded flex items-center justify-center"
              >
                <span className="text-xs text-gray-500 font-medium">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900">{cert.title}</h4>
                  <p className="text-xs text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}