import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGlobeAmericas,
  FaMailBulk,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/heroimage.png";

const Footer = () => {
  const links = [
    { id: 2, name: "About", url: "#about" },
    { id: 3, name: "Services", url: "#services" },
    { id: 4, name: "Testimonials", url: "#testimonials" },
    { id: 5, name: "Get a Quote", url: "#booknow" },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-orange-600" />,
      text: "+1 647-793-8153",
      href: "tel:+16477938153"
    },
    {
      icon: <FaMailBulk className="text-orange-600" />,
      text: "nnsparklingsolutions.ca@gmail.com",
      href: "mailto:nnsparklingsolutions.ca@gmail.com"
    },
    {
      icon: <FaGlobeAmericas className="text-orange-600" />,
      text: "nnsparklingsolutions.ca.com",
      href: "https://nnsparklingsolutions.ca.com"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-2 shadow-lg">
                <Image 
                  width={60} 
                  height={60} 
                  src={logo} 
                  alt="NN Sparkling Solutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  NN Sparkling Solutions
                </h2>
                <p className="text-orange-400 font-medium">
                  Shine Brighter with Us
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional cleaning services for your home and office. We provide 
              reliable, eco-friendly cleaning solutions with attention to detail 
              and customer satisfaction guaranteed.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/nnsparklingsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
                >
                  <div className="mt-1 group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </div>
                  <span className="text-sm leading-relaxed break-words">
                    {contact.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} NN Sparkling Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-orange-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;