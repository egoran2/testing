'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

export default function QuizCTA() {
  const t = useTranslations('quiz');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Content */}
            <div className="p-8 lg:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">2 minutes</span>
                </div>

                <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
                  {t('title')}
                </h2>
                
                <p className="text-xl text-blue-100 mb-8">
                  {t('subtitle')}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Instant results</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Personalized recommendations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-100">Free consultation if eligible</span>
                  </div>
                </div>

                <Link href="/quiz" className="btn-secondary inline-flex items-center space-x-2">
                  <span>{t('startQuiz')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-12"
            >
              <div className="relative">
                {/* Quiz Preview */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Eligibility Quiz</h3>
                    <div className="text-sm text-gray-500">1/4</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium">What is your current profession?</p>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="radio" className="text-blue-600" />
                        <span className="text-gray-600">Software Developer</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" className="text-blue-600" />
                        <span className="text-gray-600">Data Scientist</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" className="text-blue-600" />
                        <span className="text-gray-600">DevOps Engineer</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🎯</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}