import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Home, Sparkles } from 'lucide-react';

const PackagesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const packages = [
    {
      id: 'standard',
      name: 'Standard Package',
      price: '$35',
      description: 'Perfect for regular maintenance cleaning with your own supplies',
      icon: <Home className="w-6 h-6" />,
      popular: false,
      features: [
        'Dusting all surfaces',
        'Vacuuming all carpets',
        'Mopping hard floors',
        'Bathroom cleaning',
        'Kitchen cleaning',
        'Trash removal'
      ],
      includes: 'You provide cleaning supplies'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: '$40',
      description: 'Complete service with professional-grade supplies included with every booking',
      icon: <Sparkles className="w-6 h-6" />,
      popular: true,
      features: [
        'Everything in Standard Package',
        'Professional cleaning supplies',
        'Deep cleaning solutions',
        'Eco-friendly products',
        'Interior window cleaning',
        'Inside oven & refrigerator'
      ],
      includes: 'All supplies & equipment included'
    }
  ];

  const scrollToBooking = (packageName) => {
    const bookingSection = document.getElementById('booknow');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-orange-50 via-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={cardVariant}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Cleaning
            <span className="text-orange-600"> Packages</span>
          </motion.h2>
          
          <motion.p 
            variants={cardVariant}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect cleaning package for your home with transparent pricing
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
          className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={cardVariant}
              className={`relative bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'border-orange-200 ring-1 ring-orange-200' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Package Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-orange-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-500 text-sm">per hour</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {pkg.description}
                </p>

                <div className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm font-medium mb-4">
                  {pkg.includes}
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-orange-600 stroke-[2]" />
                      </div>
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => scrollToBooking(pkg.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-md hover:shadow-lg'
                      : 'bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose {pkg.name.split(' ')[0]}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={cardVariant}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-orange-100 mb-4">
              Book your cleaning service today and get your free quote in minutes!
            </p>
            <motion.button
              onClick={() => scrollToBooking('Standard Package')}
              className="bg-white text-orange-700 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagesSection;