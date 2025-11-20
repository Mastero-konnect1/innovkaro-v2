"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  CloudLightning,
  Compass,
  Gem,
  Briefcase,
  ArrowRight,
  TrendingUp,
  Landmark,
} from "lucide-react";

const founderCategories = [
  {
    title: "D2C Founders",
    subtitle: "Consumer Brand Experts",
    icon: ShoppingBag,
    color: "text-pink-600",
    hoverText: "group-hover:text-pink-600",
    bg: "bg-pink-50",
    hoverBg: "group-hover:bg-pink-50",
    border: "group-hover:border-pink-200",
  },
  {
    title: "B2B SaaS Founders",
    subtitle: "Enterprise Software Leaders",
    icon: CloudLightning,
    color: "text-blue-600",
    hoverText: "group-hover:text-blue-600",
    bg: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  {
    title: "Startup Advisors",
    subtitle: "Strategic Guidance",
    icon: Compass,
    color: "text-purple-600",
    hoverText: "group-hover:text-purple-600",
    bg: "bg-purple-50",
    hoverBg: "group-hover:bg-purple-50",
    border: "group-hover:border-purple-200",
  },
  {
    title: "Angel Investors",
    subtitle: "Early Stage Funding",
    icon: Gem,
    color: "text-amber-600",
    hoverText: "group-hover:text-amber-600",
    bg: "bg-amber-50",
    hoverBg: "group-hover:bg-amber-50",
    border: "group-hover:border-amber-200",
  },
  {
    title: "VC Partners",
    subtitle: "Growth & Scale Experts",
    icon: Briefcase,
    color: "text-emerald-600",
    hoverText: "group-hover:text-emerald-600",
    bg: "bg-emerald-50",
    hoverBg: "group-hover:bg-emerald-50",
    border: "group-hover:border-emerald-200",
  },
  {
    title: "Fintech Innovators",
    subtitle: "Finance & Tech Leaders",
    icon: Landmark,
    color: "text-cyan-600",
    hoverText: "group-hover:text-cyan-600",
    bg: "bg-cyan-50",
    hoverBg: "group-hover:bg-cyan-50",
    border: "group-hover:border-cyan-200",
  },
];

const FounderNetwork = () => {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 relative z-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6"
          >
            <TrendingUp size={16} />
            <span>Build & Scale</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 sm:text-5xl mb-6"
          >
            Connect with{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Founders & Investors
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Learn directly from those who have built, scaled, and funded
            successful ventures.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {founderCategories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`
                group cursor-pointer relative overflow-hidden
                flex flex-col justify-between
                p-8 rounded-3xl 
                bg-white border border-gray-100 
                shadow-sm hover:shadow-xl 
                transition-all duration-300
                ${item.border}
              `}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`p-3.5 rounded-2xl ${item.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div>
                  <h3
                    className={`font-bold text-gray-900 text-xl transition-colors duration-300 ${item.hoverText}`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <span
                  className={`text-sm font-bold text-gray-400 transition-colors duration-300 ${item.hoverText}`}
                >
                  Let's connect
                </span>
                <div
                  className={`p-2 rounded-full bg-gray-50 ${item.hoverBg} transition-colors`}
                >
                  <ArrowRight
                    className={`w-4 h-4 text-gray-400 group-hover:text-white transform transition-transform duration-300 group-hover:translate-x-1`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderNetwork;
