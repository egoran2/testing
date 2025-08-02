'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, X } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface QuizData {
  profession: string;
  education: string;
  experience: string;
  income: string;
  email: string;
  name: string;
}

const questions = [
  {
    id: 'profession',
    type: 'radio',
    options: [
      'Software Developer',
      'Data Scientist',
      'DevOps Engineer',
      'Product Manager',
      'UI/UX Designer',
      'QA Engineer',
      'Other IT'
    ]
  },
  {
    id: 'education',
    type: 'radio',
    options: ['Yes', 'No', 'Currently studying']
  },
  {
    id: 'experience',
    type: 'radio',
    options: ['Less than 2 years', '2-5 years', '5-10 years', 'More than 10 years']
  },
  {
    id: 'income',
    type: 'radio',
    options: ['Less than $2000', '$2000-$4000', '$4000-$7000', 'More than $7000']
  }
];

export default function QuizPage() {
  const t = useTranslations('quiz');
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [eligibilityScore, setEligibilityScore] = useState(0);
  
  const { register, handleSubmit, watch } = useForm<QuizData>();
  
  const watchedValues = watch();
  const isStepComplete = currentStep < questions.length ? 
    watchedValues[questions[currentStep].id as keyof QuizData] : 
    watchedValues.email && watchedValues.name;

  const calculateEligibility = (data: QuizData) => {
    let score = 0;
    
    // Profession scoring
    if (['Software Developer', 'Data Scientist', 'DevOps Engineer'].includes(data.profession)) {
      score += 30;
    } else if (['Product Manager', 'UI/UX Designer', 'QA Engineer'].includes(data.profession)) {
      score += 25;
    } else {
      score += 15;
    }
    
    // Education scoring
    if (data.education === 'Yes') score += 25;
    else if (data.education === 'Currently studying') score += 15;
    
    // Experience scoring
    if (data.experience === 'More than 10 years') score += 25;
    else if (data.experience === '5-10 years') score += 20;
    else if (data.experience === '2-5 years') score += 15;
    else score += 5;
    
    // Income scoring
    if (data.income === 'More than $7000') score += 20;
    else if (data.income === '$4000-$7000') score += 15;
    else if (data.income === '$2000-$4000') score += 10;
    else score += 5;
    
    return score;
  };

  const onSubmit = (data: QuizData) => {
    const score = calculateEligibility(data);
    setEligibilityScore(score);
    setShowResults(true);
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getEligibilityMessage = (score: number) => {
    if (score >= 80) {
      return {
        level: 'Excellent',
        message: 'You have excellent chances for EU residency!',
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      };
    } else if (score >= 60) {
      return {
        level: 'Good',
        message: 'You have good chances with proper preparation.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      };
    } else if (score >= 40) {
      return {
        level: 'Moderate',
        message: 'You may qualify with additional documentation.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100'
      };
    } else {
      return {
        level: 'Challenging',
        message: 'Consider improving your profile before applying.',
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      };
    }
  };

  if (showResults) {
    const result = getEligibilityMessage(eligibilityScore);
    
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className={`w-20 h-20 ${result.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <CheckCircle className={`w-10 h-10 ${result.color}`} />
            </div>
            
            <h1 className="font-heading font-bold text-3xl text-gray-900 mb-4">
              Your Eligibility Score: {eligibilityScore}/100
            </h1>
            
            <div className={`inline-block px-4 py-2 ${result.bgColor} ${result.color} rounded-full font-semibold mb-4`}>
              {result.level} Chances
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              {result.message}
            </p>
            
            <div className="space-y-4">
              <button className="btn-primary w-full">
                Get Free Consultation
              </button>
              <button 
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                }}
                className="btn-outline w-full"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-heading font-bold text-2xl">{t('title')}</h1>
              <button 
                onClick={() => window.history.back()}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-blue-100 mb-4">{t('subtitle')}</p>
            
            {/* Progress Bar */}
            <div className="w-full bg-blue-500 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / (questions.length + 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="text-sm text-blue-100 mt-2">
              Step {currentStep + 1} of {questions.length + 1}
            </div>
          </div>

          {/* Quiz Content */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <AnimatePresence mode="wait">
              {currentStep < questions.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-semibold text-xl text-gray-900 mb-6">
                    {t(`question${currentStep + 1}`)}
                  </h2>
                  
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                      >
                        <input
                          type="radio"
                          value={option}
                          {...register(questions[currentStep].id as keyof QuizData)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-semibold text-xl text-gray-900 mb-6">
                    Get Your Results
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        {...register('name', { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentStep < questions.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepComplete}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepComplete}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>{t('getResults')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}