"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Fingerprint, BarChart3, Users, FileText, Building2 } from 'lucide-react';

const demoFeatures = [
  {
    id: 'dashboard',
    title: 'Real-time Attendance Dashboard',
    description: 'Monitor student arrivals, departures, and attendance patterns in real-time.',
    image: '/screenshots/attendance-dashboard.svg',
    icon: BarChart3,
    highlights: ['Live updates', '312 students present', 'Instant notifications']
  },
  {
    id: 'biometric',
    title: 'Biometric Device Integration',
    description: 'Seamless integration with Dahua, ZKTeco, and other fingerprint scanners.',
    image: '/screenshots/biometric-integration.svg',
    icon: Fingerprint,
    highlights: ['< 2 second scan', 'Multiple devices', 'Auto-sync']
  },
  {
    id: 'reporting',
    title: 'Automated Report Generation',
    description: 'Generate comprehensive attendance reports automatically for parents and administrators.',
    image: '/screenshots/automated-reporting.svg',
    icon: FileText,
    highlights: ['Daily reports', 'SMS alerts', 'PDF exports']
  },
  {
    id: 'management',
    title: 'Student Management System',
    description: 'Complete student information system with enrollment, profiles, and academic tracking.',
    image: '/screenshots/learner-management.svg',
    icon: Users,
    highlights: ['Complete profiles', 'Academic tracking', 'Parent portal']
  },
  {
    id: 'analytics',
    title: 'Multi-School Analytics',
    description: 'Advanced analytics and insights across multiple school locations.',
    image: '/screenshots/multi-school-analytics.svg',
    icon: Building2,
    highlights: ['Cross-school data', 'Trend analysis', 'Performance metrics']
  }
];

export default function MicroDemoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % demoFeatures.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % demoFeatures.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + demoFeatures.length) % demoFeatures.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentFeature = demoFeatures[currentIndex];
  const Icon = currentFeature.icon;

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
            <Fingerprint className="w-4 h-4" />
            Live System Demo
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            See DRAIS in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience our attendance-first school management system through interactive demos from real deployments.
          </p>
        </div>

        {/* Demo Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Screen */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 text-xs text-gray-600 dark:text-gray-300">
                      drais.edu/dashboard
                    </div>
                  </div>
                </div>
                
                {/* Demo Image */}
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <Image
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  
                  {/* Interactive Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {currentFeature.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-white text-xs font-medium"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Description */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {currentFeature.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {currentFeature.description}
              </p>
              
              {/* Feature Points */}
              <div className="space-y-3 mb-8">
                {currentFeature.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex gap-2">
              {demoFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-indigo-600 dark:bg-indigo-400 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Feature Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {demoFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => goToSlide(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <FeatureIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">{feature.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}