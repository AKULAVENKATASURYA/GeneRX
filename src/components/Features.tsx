import React from 'react';
import { Brain, Shield, Dna, Users, Target, Zap } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze genetic data for precise drug recommendations.',
    icon: Brain,
  },
  {
    name: 'Privacy First',
    description: 'Enterprise-grade encryption and HIPAA-compliant data protection protocols.',
    icon: Shield,
  },
  {
    name: 'Genetic Profiling',
    description: 'Comprehensive analysis of individual genetic markers for personalized treatment.',
    icon: Dna,
  },
  {
    name: 'Inclusive Design',
    description: 'Accessible platform designed for patients and healthcare providers alike.',
    icon: Users,
  },
  {
    name: 'Targeted Therapy',
    description: 'Precise, personalized therapeutic solutions based on individual profiles.',
    icon: Target,
  },
  {
    name: 'Rapid Results',
    description: 'Quick turnaround times for analysis and drug recommendations.',
    icon: Zap,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Advanced Technology, Personalized Care
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines cutting-edge AI technology with comprehensive genetic analysis to deliver
            personalized medicine solutions.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}