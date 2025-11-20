"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Import Variants type
import { Menu, X } from "lucide-react";
import Link from "next/link"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants: Variants = {
    hidden: { 
      opacity: 0, 
      height: 0 
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 cursor-pointer">
             <img src="/logo.png" alt="Logo" className="w-12 h-auto object-contain" /> 
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {["Mentors", "How It Works", "FAQ"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05, color: "#4B5563" }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 font-medium hover:text-black transition-colors"
              >
                {item}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-gray-600 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              Log In
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // 2. Fixed Typo: bg-linear-to-r -> bg-gradient-to-r
              className="px-4 py-2 text-white font-medium bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg"
            >
              Sign Up
            </motion.button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
              {["Mentors", "How It Works", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="block w-full text-center py-2 text-gray-600 font-medium hover:text-black hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <hr className="w-full border-gray-200" />
              <button className="w-full py-2 text-gray-600 font-medium border border-gray-300 rounded-lg">
                Log In
              </button>
              <button className="w-full py-2 text-white font-medium bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;