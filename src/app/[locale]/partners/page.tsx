'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  DollarSign, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const partnerBenefits = [
  {
    icon: DollarSign,
    title: 'High Commission Rates',
    description: 'Earn up to 30% commission on successful referrals'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track your performance with detailed dashboards'
  },
  {
    icon: Shield,
    title: 'Full Legal Support',
    description: 'We handle all legal compliance and documentation'
  },
  {
    icon: Zap,
    title: 'Fast Payouts',
    description: 'Monthly commission payments directly to your account'
  }
];

const whiteLabelFeatures = [
  'Custom branding and domain',
  'Personalized pricing structure',
  'Dedicated account manager',
  'Marketing materials and assets',
  'Technical integration support',
  'White-label documentation',
  'Priority customer support',
  'Revenue sharing model'
];

const referralFeatures = [
  'Simple referral tracking',
  'Automated commission calculation',
  'Marketing materials provided',
  'No upfront costs',
  'Flexible payment options',
  'Performance bonuses',
  'Partner training program',
  'Ongoing support'
];

export default function PartnersPage() {
  const t = useTranslations('partners');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl lg:text-6xl mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-secondary">
                Become a Partner
              </button>
              <button className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Download Partnership Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
            <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Choose Your Partnership Model
            </h2>
            <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* White Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    {t('whiteLabel.title')}
                  </h3>
                  <p className="text-gray-600">{t('whiteLabel.description')}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {whiteLabelFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="font-bold text-2xl text-purple-600 mb-1">40-60%</div>
                  <div className="text-sm text-purple-700">Revenue Share</div>
                </div>
              </div>

              <button className="btn-primary w-full flex items-center justify-center space-x-2">
                <span>Apply for White Label</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Referral Program */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    {t('referral.title')}
                  </h3>
                  <p className="text-gray-600">{t('referral.description')}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {referralFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="font-bold text-2xl text-green-600 mb-1">Up to 30%</div>
                  <div className="text-sm text-green-700">Commission per Sale</div>
                </div>
              </div>

              <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                <span>Join Referral Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Partner Success Stories
            </h2>
            <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">€50K+</h3>
              <p className="text-gray-600">Average annual partner earnings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Active partners worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-2xl text-gray-900 mb-2">15</h3>
              <p className="text-gray-600">Countries with active partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our partner network today and start building a profitable business helping IT professionals achieve their European dreams.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-secondary">
                Apply Now
              </button>
              <button className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}