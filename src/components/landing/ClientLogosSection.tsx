"use client";
import React from 'react';
import Image from 'next/image';
import { Star, Users } from 'lucide-react';

const clientSchools = [
  {
    name: 'Northgate Schools',
    logo: '/client_logos/northgate-schools.svg',
    students: '400+',
    director: 'Ngobi Peter'
  },
  {
    name: 'Albayan Quran Center',
    logo: '/client_logos/albayan-center.svg',
    students: '300+',
    director: 'Wagogo Husama'
  },
  {
    name: 'Excel Islamic School',
    logo: '/client_logos/excel-islamic.svg',
    students: '250+',
    director: 'Shk Hassan Mwaita'
  },
  {
    name: 'Ibun Baz School',
    logo: '/client_logos/ibun-baz.svg',
    students: '350+',
    director: 'Mr Mwondha Hassan'
  },
  // Additional placeholder schools
  {
    name: 'Heritage Academy',
    logo: null,
    students: '200+',
    director: 'Dr. Sarah Ahmed'
  },
  {
    name: 'Green Valley School',
    logo: null,
    students: '180+',
    director: 'Prof. David Ochieng'
  }
];

export default function ClientLogosSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            30+ Schools Trust DRAIS
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Trusted by Leading Schools Across East Africa
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From small Islamic centers to large secondary schools — DRAIS powers attendance monitoring for thousands of students every day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">30+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Schools Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">8,500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.8%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Uptime Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">&lt; 2s</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scan Speed</div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientSchools.map((school, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 px-4 py-8 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                {school.logo ? (
                  <div className="mb-4 flex items-center justify-center">
                    <Image
                      src={school.logo}
                      alt={`${school.name} logo`}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="text-white font-bold text-lg">
                        {school.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                    </div>
                  </div>
                )}
                
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-2 leading-tight">
                  {school.name}
                </h3>
                
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <Users className="w-3 h-3" />
                  <span>{school.students} students</span>
                </div>
                
                <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                  {school.director}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Logo Band */}
        <div className="overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-2xl px-8 py-6 border border-indigo-200 dark:border-indigo-800">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Join the Growing Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Schools of all sizes choose DRAIS for reliable attendance monitoring
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>• Islamic Schools</span>
                  <span>• Primary Schools</span>
                  <span>• Secondary Schools</span>
                  <span>• Nursery Schools</span>
                  <span>• Colleges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}