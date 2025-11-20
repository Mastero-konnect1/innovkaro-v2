"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is InnovKaro?",
    answer: "InnovKaro is a mentorship platform that connects you with experienced mentors from top companies, colleges, and industries. We help you get personalized guidance for your career, startup, or learning journey.",
  },
  {
    question: "How do I find the right mentor?",
    answer: "You can explore mentors by domain (Tech, Marketing, etc.) or by their college alumni network. View their profiles, read reviews, and select the one that aligns with your goals and schedule.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the mentor and the type of session. Many mentors offer free introductory sessions, while specific guidance calls or mock interviews may range from ₹200 to ₹2000.",
  },
  {
    question: "How are mentors verified?",
    answer: "We follow a strict 3-step verification process: LinkedIn profile verification, Work/College email authentication, and a manual review of their expertise and experience.",
  },
  {
    question: "Can I become a mentor on InnovKaro?",
    answer: "Absolutely! If you have expertise in your field and a passion for guiding others, you can apply to become a mentor. Click on 'Become a Mentor' in the footer to start.",
  },
  {
    question: "What kind of sessions can I book?",
    answer: "You can book 1:1 mentorship calls, resume reviews, mock interviews, startup pitch deck reviews, and long-term career roadmap planning sessions.",
  },
];

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-white relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">
            Have questions? We have answers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="grid gap-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  group rounded-2xl border-2 transition-all duration-300 overflow-hidden
                  ${isOpen 
                    ? "bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20" // Active State: Blue Border + Shadow
                    : "bg-white border-gray-100 hover:border-blue-200 hover:shadow-md" // Inactive State
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-blue-700" : "text-gray-800 group-hover:text-blue-600"}`}>
                    {item.question}
                  </span>
                  
                  <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300
                    ${isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"}
                  `}>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                         <p className="text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
                           {item.answer}
                         </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQS;