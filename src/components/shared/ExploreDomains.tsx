"use client";

import { motion } from "framer-motion";
import { 
  Code, Box, Megaphone, TrendingUp, Users, 
  Palette, DollarSign, GraduationCap, Scale, Rocket 
} from "lucide-react";

const domains = [
  { name: "Tech", icon: Code, color: "text-blue-600", bg: "bg-blue-100/50", border: "hover:border-blue-200" },
  { name: "Product", icon: Box, color: "text-orange-600", bg: "bg-orange-100/50", border: "hover:border-orange-200" },
  { name: "Marketing", icon: Megaphone, color: "text-pink-600", bg: "bg-pink-100/50", border: "hover:border-pink-200" },
  { name: "Sales", icon: TrendingUp, color: "text-green-600", bg: "bg-green-100/50", border: "hover:border-green-200" },
  { name: "HR", icon: Users, color: "text-purple-600", bg: "bg-purple-100/50", border: "hover:border-purple-200" },
  { name: "UI/UX", icon: Palette, color: "text-indigo-600", bg: "bg-indigo-100/50", border: "hover:border-indigo-200" },
  { name: "Finance", icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-100/50", border: "hover:border-emerald-200" },
  { name: "EdTech", icon: GraduationCap, color: "text-yellow-600", bg: "bg-yellow-100/50", border: "hover:border-yellow-200" },
  { name: "Law", icon: Scale, color: "text-slate-600", bg: "bg-slate-100/50", border: "hover:border-slate-200" },
  { name: "StartUp", icon: Rocket, color: "text-red-600", bg: "bg-red-100/50", border: "hover:border-red-200" },
];

const ExploreDomains = () => {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Find Your Perfect Mentor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore mentors across diverse fields and expertise to accelerate your growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {domains.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`
                group cursor-pointer 
                flex flex-col items-center justify-center 
                p-6 rounded-2xl 
                bg-white/60 backdrop-blur-lg border border-white/50
                shadow-sm hover:shadow-xl 
                transition-all duration-300 
                ${item.border}
              `}
            >
              <div className={`p-4 rounded-full ${item.bg} mb-4 transition-transform group-hover:scale-110`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <span className="font-semibold text-gray-800 group-hover:text-gray-900">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreDomains;