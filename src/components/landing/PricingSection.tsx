"use client";
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Professional',
      setup: '1,000,000',
      annual: '200,000',
      desc: 'Ideal for small to medium schools getting started with biometric attendance.',
      icon: Sparkles,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        'Fingerprint attendance system',
        'Real-time parent SMS alerts',
        'Student information system',
        'Up to 500 students',
        'Basic reporting & dashboards',
        'Email & phone support'
      ]
    },
    {
      name: 'Premium',
      setup: '1,800,000',
      annual: '350,000',
      desc: 'Complete school management for growing institutions that need more power.',
      icon: Zap,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
      popular: true,
      features: [
        'Everything in Professional',
        'Full exam & report card system',
        'Advanced analytics & dashboards',
        'Up to 2,000 students',
        'Mobile app access',
        'Priority support',
        'SMS broadcast messaging',
        'Parent communication portal'
      ]
    },
    {
      name: 'Gold',
      setup: '2,500,000',
      annual: '500,000',
      desc: 'Enterprise-grade solution for large schools and multi-campus institutions.',
      icon: Crown,
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      features: [
        'Everything in Premium',
        'Unlimited students',
        'Multi-campus support',
        'Custom integrations',
        'Dedicated account manager',
        'On-site setup assistance',
        'Custom reporting',
        '24/7 dedicated support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Choose the plan that fits your school. One-time installation fee + affordable annual subscription.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            All prices in Ugandan Shillings (UGX)
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className={`px-6 py-2 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-sm font-bold shadow-xl`}>
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className={`
                relative h-full p-8 rounded-3xl bg-white dark:bg-gray-900 
                ${plan.popular 
                  ? 'ring-4 ring-indigo-500 ring-offset-4 ring-offset-gray-50 dark:ring-offset-gray-950 shadow-2xl' 
                  : 'border-2 border-gray-200 dark:border-gray-800 shadow-xl'
                }
                hover:shadow-2xl transition-all duration-300 group
              `}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.desc}
                </p>

                {/* Pricing */}
                <div className="mb-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50">
                  {/* Installation Fee */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      Installation Fee (one-time)
                    </div>
                    <div className={`text-4xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      UGX {plan.setup}
                    </div>
                  </div>

                  {/* Annual Subscription */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      UGX {plan.annual}
                    </span>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">
                      / year
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="#contact">
                  <button className={`
                    w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2
                    ${plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white shadow-xl hover:shadow-2xl`
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                    }
                  `}>
                    {plan.popular ? 'Get Started' : 'Contact Us'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 text-gray-600 dark:text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>Free data migration</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-emerald-500" />
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
