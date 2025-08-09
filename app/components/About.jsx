"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCheckCircle, FaCopy, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useToast } from "../hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const About = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [activeContact, setActiveContact] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const accordionVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("nnsparklingsolutions.ca@gmail.com");
      setCopied(true);
      toast({
        title: "Email Copied!",
        description: "nnsparklingsolutions.ca has been copied to clipboard",
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the email manually",
        variant: "destructive",
      });
    }
  };

  const contactMethods = [
    {
      id: "email",
      icon: FaEnvelope,
      label: "Email Us",
      value: "nnsparklingsolutions.ca@gmail.com",
      action: handleCopyEmail,
    },
    {
      id: "phone",
      icon: FaPhone,
      label: "Call Us",
      value: "+1 647-793-8153",
      action: () => window.open("tel:+1 647-793-8153"),
    },
    {
      id: "location",
      icon: FaMapMarkerAlt,
      label: "Visit Us",
      value: "Vancouver, BC",
      action: () => window.open("https://maps.google.com"),
    },
  ];

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 w-full h-auto overflow-hidden relative" id="about">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-200 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto py-14 md:py-[2rem] lg:py-[3.5rem] xl:py-[7rem] flex items-center relative z-10">
        <div className="flex flex-col lg:flex-row w-full md:gap-[4rem] lg:gap-[6rem] px-4 xl:px-8 lg:px-[2.5rem] md:px-[2.5rem]">
          
          {/* Left Section - Enhanced */}
          <motion.div
            className="textpart1 px-[1rem] space-y-8 flex-1"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariant}
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold text-sm shadow-lg">
                  About Us
                </span>
              </motion.div>
              
              <motion.h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                More than just a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  cleaning service
                </span>
              </motion.h2>
              
              <motion.p className="text-lg text-gray-600 leading-relaxed">
                Transforming spaces with precision, care, and unmatched dedication to excellence.
              </motion.p>

              {/* Stats Cards */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mt-8"
                variants={cardVariant}
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-orange-100">
                  <div className="text-2xl font-bold text-orange-600">1500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </motion.div>

      
              <motion.div 
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-orange-100"
                variants={cardVariant}
              >
                <p className="text-gray-700 leading-relaxed text-lg">
                  For over <span className="font-semibold text-orange-600">4 years</span>, NN Sparkling Solutions has been providing
                  top-notch cleaning services with a commitment to excellence. Our
                  experienced professionals ensure that every job is completed
                  with the highest standards of quality and care.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Enhanced */}
          <motion.div
            className="textpart2 flex-1 flex items-center justify-center md:px-0 px-[1rem]"
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={accordionVariant}
          >
            <div className="w-full flex flex-col space-y-10">

              {/* Enhanced Accordion */}
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-orange-100 overflow-hidden w-full"
                variants={accordionVariant}
              >
                <Accordion type="single" collapsible className="px-2 py-4">
                  <AccordionItem value="item-1" className="border-orange-100">
                    <AccordionTrigger className="hover:text-orange-600 px-4 py-5 text-left font-semibold">
                      🧹 What services do you offer?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-600">
                      We offer a comprehensive range of cleaning services including
                      residential, commercial, deep cleaning, and specialized
                      services such as carpet and upholstery cleaning.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-orange-100">
                    <AccordionTrigger className="hover:text-orange-600 px-4 py-5 text-left font-semibold">
                      📅 How do I book a service?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-600">
                      Booking is simple! Use our online system, contact us via chat widget, or email us at{" "}
                      <button
                        onClick={handleCopyEmail}
                        className="text-orange-600 underline hover:text-orange-700 font-medium"
                      >
                        nnsparklingsolutions.ca@gmail.com
                      </button>
                      .
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-orange-100">
                    <AccordionTrigger className="hover:text-orange-600 px-4 py-5 text-left font-semibold">
                      💰 How much does cleaning cost?
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-gray-600">
                      Costs vary based on size, frequency, and specific
                      requirements. Contact our team for a personalized quote
                      tailored to your needs.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>

              {/* Enhanced Contact Section */}
              <motion.div 
                className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl w-full shadow-xl text-white"
                variants={cardVariant}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {contactMethods.map((method, index) => {
                      const IconComponent = method.icon;
                      return (
                        <motion.button
                          key={method.id}
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-xl transition-all duration-300 group"
                          onClick={method.action}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="text-center">
                            <IconComponent className="mx-auto mb-2 text-lg group-hover:scale-110 transition-transform" />
                            <div className="text-xs font-medium">{method.label}</div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Main CTA Button */}
                  <motion.button
                    className="w-full mt-4 bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg group"
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-2">
                      {copied ? (
                        <>
                          <FaCheckCircle className="text-green-500" />
                          Email Copied!
                        </>
                      ) : (
                        <>
                          <FaCopy className="group-hover:rotate-12 transition-transform" />
                          Copy Email Address
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;