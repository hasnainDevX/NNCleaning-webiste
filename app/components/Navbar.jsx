"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNav } from "./ui/MobileNav";
import heroimg from "../assets/heroimage.png";
import { FaPhone, FaStar } from "react-icons/fa";

const NavLinks = [
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Services", url: "#services" },
  { id: 4, name: "Testimonials", url: "#testimonials" },
  { id: 5, name: "Book Now", url: "#booknow" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100"
          : "bg-transparent"
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-md"></div>
              <Image
                src={heroimg}
                alt="NN Sparkling Solutions"
                className="relative h-12 w-12 rounded-full object-cover border-2 border-orange-200"
                height={48}
                width={48}
              />
            </div>
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 leading-tight">
                NN Sparkling
              </span>
              <span className="text-sm text-orange-600 font-medium -mt-1">
                Solutions
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            variants={itemVariants}
          >
            {NavLinks.map(({ id, url, name }) => (
              <motion.div key={id} className="relative">
                <Link
                  href={url}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    activeLink === url
                      ? "text-orange-600 bg-orange-50"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/50"
                  }`}
                  onMouseEnter={() => setActiveLink(url)}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {name}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-200"
                    whileHover={{ width: "2rem" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side Actions */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            variants={itemVariants}
          >
            {/* Rating Badge */}
            <div className="flex items-center space-x-1 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              <div className="flex text-orange-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-xs font-medium text-orange-600">4.9</span>
            </div>

            {/* Phone Number */}
            <motion.a
              href="tel:+1 647-793-8153"
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 bg-orange-100 rounded-full">
                <FaPhone className="text-orange-600 text-xs" />
              </div>
              <span className="text-sm font-medium hidden lg:block">
                +1 647-793-8153
              </span>
            </motion.a>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "#booknow"}
            >
              Get Quote
            </motion.button>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <FloatingNav />
          </div>
        </div>
      </div>

      {/* Animated border bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;