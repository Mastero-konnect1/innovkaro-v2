"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Target } from "lucide-react";

const MentorshipPreferencesPage = () => {
  const router = useRouter();

  const mentorshipAreas = [
    "Career Guidance",
    "Skill Development",
    "College Admissions",
    "Job Interview Preparation",
    "Entrepreneurship & Startup",
    "Technology Specialization (AI, Web Dev, etc.)",
    "Personal Growth / Leadership",
    "Networking Support",
  ];

  const mentorshipModes = [
    "Chat",
    "Video Sessions",
    "Group Sessions",
    "In-person (if location matches)",
  ];

  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [goals, setGoals] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
    if (errors.areas) {
      setErrors((prev) => ({ ...prev, areas: "" }));
    }
  };

  const toggleMode = (mode: string) => {
    setSelectedModes((prev) =>
      prev.includes(mode) ? prev.filter((m) => m !== mode) : [...prev, mode]
    );
    if (errors.modes) {
      setErrors((prev) => ({ ...prev, modes: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (selectedAreas.length === 0) {
      newErrors.areas = "Please select at least one mentorship area";
    }

    if (selectedModes.length === 0) {
      newErrors.modes = "Please select at least one mentorship mode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Store preferences data in localStorage
    const preferencesData = {
      mentorshipAreas: selectedAreas,
      preferredModes: selectedModes,
      goals: goals || null,
      step: 2,
    };

    localStorage.setItem("preferencesData", JSON.stringify(preferencesData));
    localStorage.setItem("profileComplete", "true");

    // Navigate to mentors page
    router.push("/mentors");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-y-auto bg-gray-50 py-10">
      <div className="absolute inset-0 w-full h-full bg-[radial-linear(ellipse_at_top,var(--tw-linear-stops))] from-blue-100 via-purple-50 to-white -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask:linear-linear(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl mx-4 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-900/10">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step 2 of 2</span>
              <span className="text-sm font-medium text-gray-600">Preferences</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full bg-linear-to-r from-purple-500 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
              Your Mentorship Preferences
            </h1>
            <p className="text-gray-600">Help us match you with the right mentors.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Mentorship Areas */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-4 block">
                I am looking for mentorship in: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mentorshipAreas.map((area) => (
                  <motion.button
                    key={area}
                    type="button"
                    onClick={() => toggleArea(area)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl border-2 text-left font-medium transition-all ${
                      selectedAreas.includes(area)
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {area}
                  </motion.button>
                ))}
              </div>
              {errors.areas && <p className="mt-2 text-sm text-red-500">{errors.areas}</p>}
            </div>

            {/* Preferred Mentorship Mode */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-4 block">
                Preferred Mentorship Mode: <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mentorshipModes.map((mode) => (
                  <motion.button
                    key={mode}
                    type="button"
                    onClick={() => toggleMode(mode)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-3 rounded-xl border-2 text-left font-medium transition-all ${
                      selectedModes.includes(mode)
                        ? "border-purple-500 bg-purple-50 text-purple-700"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {mode}
                  </motion.button>
                ))}
              </div>
              {errors.modes && <p className="mt-2 text-sm text-red-500">{errors.modes}</p>}
            </div>

            {/* Goals */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                What do you want to achieve through mentorship?
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 pt-3.5 pointer-events-none">
                  <Target className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <textarea
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Share your goals, aspirations, and what you hope to learn..."
                  rows={5}
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <motion.button
                type="button"
                onClick={() => router.back()}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> Back
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create Profile <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default MentorshipPreferencesPage;

