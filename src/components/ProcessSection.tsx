'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Send, Award } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    key: 'step1',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: FileText,
    key: 'step2',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Send,
    key: 'step3',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Award,
    key: 'step4',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
];

export default function ProcessSection() {
  const t = useTranslations('process');

  return (
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
            {t('title')}
          </h2>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-yellow-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="card pt-8 group hover:scale-105 transition-transform duration-300">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">
                      {t(`${step.key}.title`)}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {t(`${step.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of IT professionals who have successfully obtained their EU residency with our expert guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Get Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}