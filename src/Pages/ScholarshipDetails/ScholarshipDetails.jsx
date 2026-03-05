import { Link, useLoaderData } from "react-router-dom";
import { motion } from "motion/react";
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
  CheckCircle2,
  FileText,
  Globe,
  BadgeCheck,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

// eslint-disable-next-line react/prop-types
const SectionHeading = ({ title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
  </div>
);

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

  const eligibilityItems = [
    {
      icon: GraduationCap,
      title: "Academic Standing",
      desc: "Must have a minimum GPA of 3.0 or equivalent in previous studies.",
    },
    {
      icon: Globe,
      title: "Nationality",
      desc: "Open to international applicants. Check country-specific requirements.",
    },
    {
      icon: FileText,
      title: "Documents Required",
      desc: "Academic transcripts, recommendation letters, and a personal statement.",
    },
    {
      icon: BadgeCheck,
      title: "Language Proficiency",
      desc: "IELTS 6.5+ or TOEFL 90+ required for non-native English speakers.",
    },
    {
      icon: BookOpen,
      title: "Field of Study",
      desc: `Applicants must be enrolled in or applying for ${subjectCategory} programs.`,
    },
    {
      icon: CheckCircle2,
      title: "Degree Level",
      desc: `This scholarship is available for ${degree} level programs only.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-14 px-4">
      <div className="max-w-screen-2xl mx-auto space-y-8">
        {/* ── Hero Card (full width) ── */}
        <motion.div
          {...fadeUp(0)}
          className="bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-14 -left-10 w-48 h-48 rounded-full bg-white/5" />
          <motion.div
            className="absolute top-1/2 right-[20%] w-24 h-24 rounded-full bg-white/5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.06, rotate: 1 }}
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

          {/* Info */}
          <div className="relative z-10 text-center sm:text-left flex-1">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase"
            >
              {scholarshipCategory}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold text-white leading-tight"
            >
              {universityName}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-1.5 mt-2 justify-center sm:justify-start text-white/80"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {universityCity}, {universityCountry}
              </span>
            </motion.div>
          </div>

          {/* Deadline pill on hero */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="relative z-10 hidden lg:flex flex-col items-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center shrink-0"
          >
            <Clock className="w-5 h-5 text-red-200 mb-1" />
            <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">
              Deadline
            </p>
            <p className="text-white font-bold text-lg mt-0.5">
              {applicationDeadline}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* ════════════ LEFT ════════════ */}
          <div className="w-full xl:w-[62%] space-y-6">
            {/* Scholarship Details Grid */}
            <motion.div
              {...fadeLeft(0.1)}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              <SectionHeading title="Scholarship Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoItems.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.07 }}
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

            {/* Eligibility Requirements */}
            <motion.div
              {...fadeLeft(0.2)}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
            >
              <SectionHeading title="Eligibility Requirements" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eligibilityItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#412ad5]/20 hover:bg-[#412ad5]/5 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#412ad5]/10 to-[#7c5ff0]/10 flex items-center justify-center shrink-0 group-hover:from-[#412ad5]/20 group-hover:to-[#7c5ff0]/20 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-[#412ad5]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ════════════ RIGHT (sticky) ════════════ */}
          <motion.div
            {...fadeRight(0.15)}
            className="w-full xl:w-[38%] space-y-5 xl:sticky xl:top-8"
          >
            {/* Fees Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <SectionHeading title="Fees & Deadline" />
              <div className="space-y-3">
                {feeItems.map((fee, index) => (
                  <motion.div
                    key={fee.label}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300
                      ${
                        fee.highlight
                          ? "border-red-200 bg-red-50"
                          : "border-gray-100 bg-gray-50 hover:border-[#412ad5]/20 hover:bg-[#412ad5]/5"
                      }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                      ${fee.highlight ? "bg-red-100" : "bg-gradient-to-br from-[#412ad5]/10 to-[#7c5ff0]/10"}`}
                    >
                      <fee.icon
                        className={`w-5 h-5 ${fee.highlight ? "text-red-500" : "text-[#412ad5]"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        {fee.label}
                      </p>
                      <p
                        className={`text-lg font-bold mt-0.5 ${fee.highlight ? "text-red-600" : "text-gray-800"}`}
                      >
                        {fee.value}
                      </p>
                    </div>
                    {fee.highlight && (
                      <motion.span
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-[10px] font-bold text-red-500 bg-red-100 px-2 py-1 rounded-lg uppercase tracking-wide"
                      >
                        Urgent
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Apply CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-2xl p-7 relative overflow-hidden shadow-xl"
            >
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative z-10 mb-5">
                <h3 className="text-xl font-bold text-white">
                  Ready to Apply?
                </h3>
                <p className="text-white/75 text-sm mt-1">
                  Don&lsquo;t miss the deadline —{" "}
                  <span className="text-white font-semibold">
                    {applicationDeadline}
                  </span>
                </p>
              </div>

              <Link to={`/apply/${_id}`} className="relative z-10 block">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full overflow-hidden flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#412ad5] font-bold rounded-xl shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#412ad5]/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick checklist reminder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
                <h3 className="text-base font-bold text-gray-800">
                  Before You Apply
                </h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Prepare academic transcripts",
                  "Write your personal statement",
                  "Get recommendation letters",
                  "Check language proficiency requirements",
                  "Have your photo & ID ready",
                ].map((tip, i) => (
                  <motion.li
                    key={tip}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.65 + i * 0.06 }}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#412ad5] shrink-0" />
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
