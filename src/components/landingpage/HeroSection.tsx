"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Rocket,
  DollarSign,
  GraduationCap,
  TrendingUp,
  Target,
  Briefcase,
  Megaphone,
  Users,
  Lightbulb,
} from "lucide-react";

const HeroSection = () => {
  const router = useRouter();
  const headlines = [
    "Stuck in something?",
    "Looking for the right mentor?",
    "Want to grow your career?",
    "Want to scale your startup?",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  const floatingIcons = [
    {
      Icon: DollarSign,
      color: "text-green-600",
      bg: "bg-green-50",
      top: "10%",
      left: "10%",
      delay: 0,
    },
    {
      Icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50",
      top: "35%",
      left: "5%",
      delay: 1.5,
    },
    {
      Icon: TrendingUp,
      color: "text-purple-600",
      bg: "bg-purple-50",
      top: "60%",
      left: "8%",
      delay: 0.5,
    },
    {
      Icon: Target,
      color: "text-red-600",
      bg: "bg-red-50",
      top: "82%",
      left: "15%",
      delay: 2,
    },
    {
      Icon: Briefcase,
      color: "text-orange-600",
      bg: "bg-orange-50",
      top: "12%",
      right: "10%",
      delay: 1,
    },
    {
      Icon: Megaphone,
      color: "text-pink-600",
      bg: "bg-pink-50",
      top: "38%",
      right: "5%",
      delay: 0.2,
    },
    {
      Icon: Users,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      top: "65%",
      right: "8%",
      delay: 1.8,
    },
    {
      Icon: Lightbulb,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      top: "85%",
      right: "15%",
      delay: 0.8,
    },
  ];

  return (
    <section className="relative w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={`absolute p-3.5 rounded-2xl shadow-sm border border-white/60 backdrop-blur-md ${item.bg}`}
            style={{ top: item.top, left: item.left, right: item.right }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [-10, 10, -10], opacity: 1 }}
            transition={{
              y: {
                duration: 3 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.5, delay: item.delay },
            }}
          >
            <item.Icon className={`w-7 h-7 ${item.color}`} />
          </motion.div>
        ))}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50/80 backdrop-blur-sm text-blue-600 border border-blue-100 shadow-sm flex items-center gap-2">
            <Rocket size={16} />
            Join the Innovation Revolution
          </span>
        </motion.div>

        <div className="h-24 md:h-32 flex items-center justify-center w-full mb-4">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 text-center max-w-5xl"
            >
              <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight py-2 block">
                {headlines[index]}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Connect with top mentors, build your startup team, and launch your
          project. InnovKaro is the platform where student developers become
          founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <button 
            onClick={() => router.push("/profile/create")}
            className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get Mentorship <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => router.push("/profile/create")}
            className="px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 font-bold text-lg hover:border-gray-300 hover:bg-white transition-all duration-300 hover:scale-105"
          >
            Explore Mentors
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
