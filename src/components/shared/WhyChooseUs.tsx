"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Layers, XCircle, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const comparisonData = [
    {
      feature: "Mentorship Format",
      others: "Pre-recorded generic courses",
      innovkaro: "Live 1:1 personalized sessions",
    },
    {
      feature: "Feedback Loop",
      others: "No feedback or automated quizzes",
      innovkaro: "Real-time code reviews & guidance",
    },
    {
      feature: "Networking",
      others: "Limited to comment sections",
      innovkaro: "Exclusive alumni community access",
    },
    {
      feature: "Career Support",
      others: "Generic job boards",
      innovkaro: "Direct referrals & resume vetting",
    },
    {
      feature: "Focus Area",
      others: "Theory-heavy curriculum",
      innovkaro: "Project-based practical learning",
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 sm:text-5xl mb-6"
          >
            Why choose <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">InnovKaro?</span>
          </motion.h2>
        </div>

        {/* Comparison Grid 
            - items-stretch: Forces both children to be equal height
        */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT CARD: Standard 
              - h-full: Fills the grid cell height
              - flex flex-col: Allows content to space out evenly
          */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full flex flex-col bg-white p-8 rounded-3xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Layers className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700">Other Platforms</h3>
            </div>

            <ul className="space-y-8 flex-1">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    {/* Darkened text for better readability */}
                    <p className="font-medium text-gray-800 text-lg decoration-gray-300 decoration-2">
                      {item.others}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-bold">
                      {item.feature}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT CARD: InnovKaro 
              - h-full: Matches left card height
              - Removed 'md:scale-105' to keep heights identical
          */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-full flex flex-col bg-white p-8 rounded-3xl shadow-2xl shadow-blue-900/10 border border-blue-100 overflow-hidden z-10"
          >
            {/* Top linear Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-blue-600 to-purple-600" />

            <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">InnovKaro Experience</h3>
            </div>

            <ul className="space-y-8 flex-1">
              {comparisonData.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-50" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {item.innovkaro}
                    </p>
                    <p className="text-xs text-blue-600 font-bold mt-1 uppercase tracking-wider">
                      {item.feature}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Call to Action */}
            <div className="mt-10 pt-6 border-t border-gray-50">
              <button className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
                Start Your Journey
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;