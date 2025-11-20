"use client";

import { motion } from "framer-motion";
import { Send, Rocket } from "lucide-react";

// Custom SVG Icon Component
const SocialIcon = ({ name, d, viewBox = "0 0 24 24" }: { name: string, d: string, viewBox?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox={viewBox} fill="currentColor" stroke="none" className="w-5 h-5">
    <path d={d} />
  </svg>
);

const Footer = () => {
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { name: "Twitter (X)", path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z", href: "#", color: "hover:text-black" },
    { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", href: "#", color: "hover:text-blue-700" },
    { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z", href: "#", color: "hover:text-pink-600" },
    { name: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", href: "#", color: "hover:text-red-600" },
  ];

  const footerLinks = {
    company: ["About Us", "Blog", "Careers", "Contact"],
    resources: ["Pricing", "Help Center", "Become a Mentor", "Success Stories"],
    legal: ["Privacy", "Terms", "Cookies", "Refunds"],
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-8 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10 mb-12"
        >
          
          {/* Brand & Newsletter Section */}
          <motion.div variants={itemVariants} className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* REMOVED: The bg-blue-50 wrapper that was creating the 'Seattle Rectangle' */}
              <Rocket className="w-6 h-6 text-blue-600" />
              
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InnovKaro
              </span>
            </div>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed max-w-xs">
              Connect with mentors, build teams, and launch your startup journey.
            </p>
            <div className="relative max-w-xs">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-2.5 text-sm rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg text-white shadow-sm">
                <Send size={14} />
              </button>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants} className="col-span-1">
              <h3 className="text-gray-900 font-bold mb-4 capitalize text-sm">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <motion.li key={link} variants={itemVariants}> 
                    <a href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="col-span-1">
             <h3 className="text-gray-900 font-bold mb-4 text-sm">Contact</h3>
             <p className="text-gray-500 text-sm mb-2">Hyderabad, IN</p>
             <p className="text-gray-500 text-sm mb-2">hi@innovkaro.com</p>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-400 text-center md:text-left">© 2025 InnovKaro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href} 
                aria-label={social.name}
                variants={itemVariants} 
                className={`text-gray-400 transition-all hover:scale-110 ${social.color}`}
              >
                <SocialIcon name={social.name} d={social.path} />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;