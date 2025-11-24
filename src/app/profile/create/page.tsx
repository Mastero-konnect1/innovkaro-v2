"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, MapPin, Briefcase, Upload, ArrowRight, ArrowLeft } from "lucide-react";

const CreateProfilePage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    profilePhoto: null as File | null,
    email: "",
    phoneNumber: "",
    gender: "",
    country: "India",
    state: "",
    city: "",
    userType: "",
    highestQualification: "",
    fieldOfStudy: "",
    currentOrganization: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, profilePhoto: "File size must be less than 5MB" }));
        return;
      }
      if (!file.type.match(/^image\/(png|jpg|jpeg)$/)) {
        setErrors((prev) => ({ ...prev, profilePhoto: "Only PNG and JPG files are allowed" }));
        return;
      }
      setFormData((prev) => ({ ...prev, profilePhoto: file }));
      setProfilePhotoPreview(URL.createObjectURL(file));
      if (errors.profilePhoto) {
        setErrors((prev) => ({ ...prev, profilePhoto: "" }));
      }
    }
  };

  const handleVerifyEmail = async () => {
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }));
      return;
    }
    // In a real app, you would send a verification email here
    // For now, we'll just mark it as verified
    setEmailVerified(true);
    setErrors((prev) => ({ ...prev, email: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!emailVerified) {
      newErrors.email = "Please verify your email";
    }

    if (formData.phoneNumber && !/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.userType) {
      newErrors.userType = "User type is required";
    }

    if (!formData.highestQualification) {
      newErrors.highestQualification = "Highest qualification is required";
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

    // Store profile data in localStorage
    const profileData = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber || null,
      gender: formData.gender || null,
      country: formData.country,
      state: formData.state || null,
      city: formData.city || null,
      userType: formData.userType,
      highestQualification: formData.highestQualification,
      fieldOfStudy: formData.fieldOfStudy || null,
      currentOrganization: formData.currentOrganization || null,
      profilePhotoPreview: profilePhotoPreview,
      step: 1,
    };

    localStorage.setItem("profileData", JSON.stringify(profileData));

    // Navigate to preferences page
    router.push("/profile/preferences");
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
              <span className="text-sm font-medium text-gray-600">Step 1 of 2</span>
              <span className="text-sm font-medium text-gray-600">Basic Details</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-linear-to-r from-purple-500 to-purple-600 rounded-full"></div>
            </div>
          </div>

          {/* Form Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Create Your Profile</h1>
            <p className="text-gray-600">Let's start with your basic information.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`block w-full pl-11 pr-4 py-3 bg-gray-50/50 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all ${
                    errors.fullName ? "border-red-300" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Profile Photo <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="profilePhoto"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="profilePhoto"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all group"
                >
                  {profilePhotoPreview ? (
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={profilePhotoPreview}
                        alt="Profile preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-gray-400 mb-2 group-hover:text-blue-500 transition-colors" />
                      <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
                    </>
                  )}
                </label>
              </div>
              {errors.profilePhoto && <p className="mt-1 text-sm text-red-500">{errors.profilePhoto}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="relative group flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`block w-full pl-11 pr-4 py-3 bg-gray-50/50 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all ${
                      errors.email ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    emailVerified
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  {emailVerified ? "Verified" : "Verify"}
                </button>
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Phone Number <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 1234567890"
                  className={`block w-full pl-11 pr-4 py-3 bg-gray-50/50 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all ${
                    errors.phoneNumber ? "border-red-300" : "border-gray-200"
                  }`}
                />
              </div>
              {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
            </div>

            {/* Gender */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Gender <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="block w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            {/* Location - Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">Country</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className="block w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1.5 block">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="block w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* User Type */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                I am a: <span className="text-red-500">*</span>
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className={`block w-full pl-4 pr-10 py-3 bg-gray-50/50 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all ${
                  errors.userType ? "border-red-300" : "border-gray-200"
                }`}
              >
                <option value="">Select user type</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="mentor">Mentor</option>
                <option value="other">Other</option>
              </select>
              {errors.userType && <p className="mt-1 text-sm text-red-500">{errors.userType}</p>}
            </div>

            {/* Highest Qualification */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Highest Qualification <span className="text-red-500">*</span>
              </label>
              <select
                name="highestQualification"
                value={formData.highestQualification}
                onChange={handleInputChange}
                className={`block w-full pl-4 pr-10 py-3 bg-gray-50/50 border rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all ${
                  errors.highestQualification ? "border-red-300" : "border-gray-200"
                }`}
              >
                <option value="">Select qualification</option>
                <option value="high-school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
              {errors.highestQualification && (
                <p className="mt-1 text-sm text-red-500">{errors.highestQualification}</p>
              )}
            </div>

            {/* Field of Study / Industry */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Field of Study / Industry
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  placeholder="e.g., Computer Science, Marketing"
                  className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Current Organization */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1.5 block">
                Current Organization / Institution{" "}
                <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="text"
                name="currentOrganization"
                value={formData.currentOrganization}
                onChange={handleInputChange}
                placeholder="Company or University name"
                className="block w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateProfilePage;

