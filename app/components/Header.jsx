"use client";
import { motion } from "framer-motion";
import TypingEffect from "../components/ui/TypeEffect";
import Image from "next/image";
import heroimg from "../assets/heroimage.png";
import { FaPlay, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion variants
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const textVariant = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 bg-orange-200 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-orange-300 rounded-full opacity-15 blur-2xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-400 rounded-full opacity-10 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      {/* Left Side - Properly Sized */}
      <motion.div
        className="flex flex-col items-start gap-6 max-w-xl z-10 relative"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Badge - Smaller */}
        <motion.div
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-orange-100"
          variants={textVariant}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-orange-600 font-medium text-xs">
            #1 Cleaning Service in Vancouver
          </span>
          <div className="flex text-orange-400 text-[10px]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </motion.div>

        {/* Main Heading - Much Smaller */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 leading-tight"
          variants={textVariant}
        >
          Relax.{" "}
          <br />
          We'll Handle
          <br />
          <span className="text-orange-600">the Mess.</span>
        </motion.h1>

        {/* Typing Effect - Smaller */}
        <motion.div
          className="text-lg md:text-xl font-semibold text-orange-600 min-h-[2rem]"
          variants={textVariant}
        >
          <TypingEffect />
        </motion.div>

        {/* Description - Normal Size */}
        <motion.p
          className="text-gray-700 text-base leading-relaxed max-w-md"
          variants={textVariant}
        >
          Experience <span className="font-semibold text-orange-600">hassle-free</span>, top-quality home cleaning by trusted local professionals.
        </motion.p>

        {/* Trust indicators - Smaller */}
        <motion.div
          className="flex flex-wrap items-center gap-4 text-xs text-gray-600"
          variants={textVariant}
        >
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span>4+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span>1500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="text-green-500 text-sm" />
            <span>100% Satisfaction</span>
          </div>
        </motion.div>

        {/* CTA Buttons - Normal Size */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          variants={textVariant}
        >
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold text-base shadow-lg overflow-hidden"
            onClick={() => window.location.href = "#booknow"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-700 to-orange-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative flex items-center gap-2">
              Book Your Clean Now
              <motion.div
                animate={{ x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaArrowRight className="text-sm" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="group px-6 py-3 bg-white/80 backdrop-blur-sm text-orange-600 rounded-xl font-semibold text-base border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = "#testimonials"}
            onMouseEnter={() => setIsHovered(true)}
          >
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
              <FaPlay className="ml-0.5 text-orange-600 text-xs" />
            </div>
            See Testimonials
          </motion.button>
        </motion.div>

        {/* Stats - Smaller */}
        <motion.div
          className="flex gap-6 mt-2"
          variants={textVariant}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">1500+</div>
            <div className="text-xs text-gray-600">Appointments Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">4.9</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-xs text-gray-600">Support</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side - Properly Sized */}
      <motion.div
        className="relative mt-12 md:-mt-8 z-10"
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Image container */}
        <div className="relative">
          {/* Subtle glow effect */}
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-15 blur-xl"
            variants={pulseVariants}
            animate="animate"
          />
          
          {/* Main image - Smaller */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src={heroimg}
              alt="Professional Cleaning Service"
              width={500}
              height={500}
              className="object-cover"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent" />
          </motion.div>

          {/* Floating badges - Smaller */}
          <motion.div
            className="absolute -top-4 -left-4 bg-white rounded-xl p-2 shadow-lg border border-orange-100"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-gray-700">Available Now</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-orange-100"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          >
            <div className="text-center">
              <div className="text-lg font-bold text-orange-600">4.9★</div>
              <div className="text-[10px] text-gray-600">Customer Rating</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-6 bg-orange-600 text-white rounded-xl p-2 shadow-lg"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
          >
            <div className="text-center">
              <span className="block text-sm">✨</span>
              <div className="text-[10px] font-medium">Eco-Friendly</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Header;