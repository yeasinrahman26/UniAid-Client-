import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  BookOpen,
  GraduationCap,
  DollarSign,
  Clock,
  Tag,
  Award,
  ArrowRight,
  Building2,
} from "lucide-react";

const ScholarshipDetails = () => {
  const item = useLoaderData();
  const {
    _id,
    scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    subjectCategory,
    scholarshipCategory,
    applicationFees,
    scholarshipPostDate,
    serviceCharge,
    applicationDeadline,
    degree,
    imageUrl,
  } = item;

  const infoItems = [
    { icon: Award, label: "Scholarship Name", value: scholarshipName },
    { icon: Tag, label: "Scholarship Category", value: scholarshipCategory },
    { icon: BookOpen, label: "Subject Category", value: subjectCategory },
    { icon: GraduationCap, label: "Degree", value: degree },
    {
      icon: MapPin,
      label: "Location",
      value: `${universityCity}, ${universityCountry}`,
    },
    { icon: Calendar, label: "Posted On", value: scholarshipPostDate },
  ];

  const feeItems = [
    {
      icon: DollarSign,
      label: "Application Fee",
      value: `$${applicationFees}`,
    },
    { icon: DollarSign, label: "Service Charge", value: `$${serviceCharge}` },
    {
      icon: Clock,
      label: "Deadline",
      value: applicationDeadline,
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-14 px-4">
      <div className="max-w-screen-2xl mx-auto space-y-6">
        {/* ── Top Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-white/5" />

          {/* University Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center p-3 relative z-10"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={universityName}
                className="w-full h-full object-contain"
              />
            ) : (
              <Building2 className="w-14 h-14 text-[#412ad5]" />
            )}
          </motion.div>

          {/* University Info */}
          <div className="relative z-10 text-center sm:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
              {scholarshipCategory}
            </span>
            <h1 className="text-3xl font-bold text-white leading-tight">
              {universityName}
            </h1>
            <div className="flex items-center gap-1.5 mt-2 justify-center sm:justify-start text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {universityCity}, {universityCountry}
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Info Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
            <h2 className="text-xl font-bold text-gray-800">
              Scholarship Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.07 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#412ad5]/5 hover:border-[#412ad5]/20 border border-transparent transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#412ad5]/10 to-[#7c5ff0]/10 flex items-center justify-center shrink-0 group-hover:from-[#412ad5]/20 group-hover:to-[#7c5ff0]/20 transition-all duration-300">
                  <info.icon className="w-5 h-5 text-[#412ad5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {info.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mt-0.5">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Fees & Deadline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
            <h2 className="text-xl font-bold text-gray-800">Fees & Deadline</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {feeItems.map((fee, index) => (
              <motion.div
                key={fee.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                className={`flex flex-col items-center justify-center text-center p-5 rounded-xl border transition-all duration-300
                  ${
                    fee.highlight
                      ? "border-red-200 bg-red-50"
                      : "border-gray-100 bg-gray-50 hover:border-[#412ad5]/20 hover:bg-[#412ad5]/5"
                  }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3
                  ${
                    fee.highlight
                      ? "bg-red-100"
                      : "bg-gradient-to-br from-[#412ad5]/10 to-[#7c5ff0]/10"
                  }`}
                >
                  <fee.icon
                    className={`w-5 h-5 ${fee.highlight ? "text-red-500" : "text-[#412ad5]"}`}
                  />
                </div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {fee.label}
                </p>
                <p
                  className={`text-lg font-bold mt-1 ${fee.highlight ? "text-red-600" : "text-gray-800"}`}
                >
                  {fee.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Apply CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-xl font-bold text-white">Ready to Apply?</h3>
            <p className="text-white/75 text-sm mt-1">
              Don&apos;t miss the deadline —{" "}
              <span className="text-white font-semibold">
                {applicationDeadline}
              </span>
            </p>
          </div>

          <Link to={`/apply/${_id}`} className="relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-3.5 bg-white text-[#412ad5] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
