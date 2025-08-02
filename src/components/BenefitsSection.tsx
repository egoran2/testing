'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Clock, Shield, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    key: 'speed',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Shield,
    key: 'expertise',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Users,
    key: 'support',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: TrendingUp,
    key: 'success',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
];

export default function BenefitsSection() {
  const t = useTranslations('benefits');

  return (
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
            {t('title')}
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                  {t(`${benefit.key}.title`)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(`${benefit.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="font-heading font-bold text-3xl lg:text-4xl text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Successful Applications</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl lg:text-4xl text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Approval Rate</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl lg:text-4xl text-blue-600 mb-2">3-6</div>
            <div className="text-gray-600">Months Average</div>
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-3xl lg:text-4xl text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}