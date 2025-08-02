'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// This would typically come from a CMS or API
const getArticle = (id: string) => {
  const articles = {
    '1': {
      id: 1,
      title: 'Complete Guide to Czech Republic Residency for IT Professionals',
      content: `
        <h2>Introduction</h2>
        <p>The Czech Republic has become one of the most attractive destinations for IT professionals seeking EU residency. With its thriving tech scene, competitive salaries, and high quality of life, it's no wonder that thousands of developers, designers, and tech entrepreneurs are making Prague their new home.</p>
        
        <h2>Why Choose Czech Republic?</h2>
        <p>The Czech Republic offers several advantages for IT professionals:</p>
        <ul>
          <li><strong>Thriving Tech Ecosystem:</strong> Prague is home to major tech companies and startups</li>
          <li><strong>Competitive Salaries:</strong> IT salaries are among the highest in the region</li>
          <li><strong>Quality of Life:</strong> Excellent healthcare, education, and infrastructure</li>
          <li><strong>Strategic Location:</strong> Easy access to other EU countries</li>
          <li><strong>English-Friendly:</strong> Many companies operate in English</li>
        </ul>
        
        <h2>Residency Options</h2>
        <p>There are several pathways to Czech residency for IT professionals:</p>
        
        <h3>1. Employee Card</h3>
        <p>The Employee Card combines work and residence permits into a single document. It's ideal for IT professionals who have a job offer from a Czech company.</p>
        
        <h3>2. EU Blue Card</h3>
        <p>For highly skilled professionals with university degrees and job offers meeting salary thresholds.</p>
        
        <h3>3. Business Visa</h3>
        <p>For entrepreneurs and freelancers who want to start their own business in Czech Republic.</p>
        
        <h2>Requirements</h2>
        <p>General requirements include:</p>
        <ul>
          <li>Valid passport</li>
          <li>Clean criminal record</li>
          <li>Health insurance</li>
          <li>Proof of accommodation</li>
          <li>Financial means</li>
          <li>Job offer or business plan</li>
        </ul>
        
        <h2>Timeline and Process</h2>
        <p>The typical timeline for Czech residency is:</p>
        <ul>
          <li><strong>Preparation:</strong> 2-4 weeks</li>
          <li><strong>Application:</strong> 1-2 weeks</li>
          <li><strong>Processing:</strong> 2-4 months</li>
          <li><strong>Decision:</strong> 1-2 weeks</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Obtaining Czech residency as an IT professional is a straightforward process when you have the right guidance and preparation. With proper documentation and expert support, you can be living and working in Prague within 6 months.</p>
      `,
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Czech Republic',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      author: 'Legal Team'
    }
  };
  
  return articles[id as keyof typeof articles] || null;
};

export default function ArticlePage() {
  const params = useParams();
  const id = params.id as string;
  const article = getArticle(id);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/articles" className="btn-primary">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                href="/articles"
                className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Articles</span>
              </Link>
              
              <div className="flex items-center space-x-4 text-sm mb-4">
                <span className="bg-blue-600 px-3 py-1 rounded-full">{article.category}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h1 className="font-heading font-bold text-3xl lg:text-5xl leading-tight">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            {/* Article Meta */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">By {article.author}</p>
                  <p className="text-sm text-gray-500">Legal Expert</p>
                </div>
              </div>
              
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl">
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalized guidance for your EU residency application.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Link href="/quiz" className="btn-primary">
                  Check Eligibility
                </Link>
                <Link href="/contact" className="btn-outline">
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}