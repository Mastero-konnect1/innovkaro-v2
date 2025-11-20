"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Award, 
  Cpu, 
  Building2, 
  ArrowRight 
} from "lucide-react";

const colleges = [
  { 
    title: "IIT Alumni", 
    subtitle: "From all 23 IITs", 
    icon: GraduationCap, 
    color: "text-blue-600", 
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200"
  },
  { 
    title: "IIM Alumni", 
    subtitle: "From all 20 IIMs", 
    icon: Briefcase, 
    color: "text-purple-600", 
    bg: "bg-purple-50",
    border: "group-hover:border-purple-200"
  },
  { 
    title: "BITS Pilani", 
    subtitle: "Alumni Network", 
    icon: BookOpen, 
    color: "text-orange-600", 
    bg: "bg-orange-50",
    border: "group-hover:border-orange-200"
  },
  { 
    title: "Top MBA Colleges", 
    subtitle: "FMS, XLRI, ISB & more", 
    icon: Award, 
    color: "text-pink-600", 
    bg: "bg-pink-50",
    border: "group-hover:border-pink-200"
  },
  { 
    title: "Top Engg Colleges", 
    subtitle: "DTU, NSUT, VIT & more", 
    icon: Cpu, 
    color: "text-cyan-600", 
    bg: "bg-cyan-50",
    border: "group-hover:border-cyan-200"
  },
  { 
    title: "NITs & IIITs", 
    subtitle: "Premier Tech Institutes", 
    icon: Building2, 
    color: "text-indigo-600", 
    bg: "bg-indigo-50",
    border: "group-hover:border-indigo-200"
  },
];

const ExploreByColleges = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Learn from India's Top Alumni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get guidance from graduates of premier institutions who have walked the path before you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((item, index) => (
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
                p-6 rounded-2xl 
                bg-white border border-gray-100 
                shadow-sm hover:shadow-xl 
                transition-all duration-300
                ${item.border}
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${item.bg}`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                <span>View Mentors</span>
                <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-r from-transparent to-${item.color.split('-')[1]}-500 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreByColleges;