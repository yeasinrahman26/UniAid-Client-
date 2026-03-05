/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import {
  Phone,
  Image,
  MapPin,
  User,
  GraduationCap,
  BookOpen,
  Tag,
  Building2,
  ArrowRight,
  ClipboardList,
  DollarSign,
  Clock,
  Calendar,
} from "lucide-react";

const FieldWrapper = ({ label, icon: Icon, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    className="flex flex-col gap-1.5"
  >
    <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
      {Icon && <Icon className="w-3.5 h-3.5 text-[#412ad5]" />}
      {label}
    </label>
    {children}
  </motion.div>
);

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition-all duration-300 focus:border-[#412ad5]/50 focus:bg-white focus:ring-2 focus:ring-[#412ad5]/10";

const selectClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800 outline-none transition-all duration-300 focus:border-[#412ad5]/50 focus:bg-white focus:ring-2 focus:ring-[#412ad5]/10 appearance-none cursor-pointer";

const readOnlyClass =
  "w-full rounded-xl border border-gray-100 bg-[#412ad5]/5 px-4 py-3 text-sm font-semibold text-[#412ad5] outline-none cursor-not-allowed";

const ApplyScholarShip = () => {
  const {
    _id,
    universityName,
    applicationDeadline,
    serviceCharge,
    applicationFees,
    universityCountry,
    universityCity,
    degree,
    subjectCategory,
    scholarshipCategory,
    scholarshipName,
    imageUrl,
    scholarshipPostDate,
  } = useLoaderData();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const items = {
    User_name: user.displayName,
    User_email: user.email,
    scholarship_id: _id,
    applicationDeadline,
    serviceCharge,
    universityCity,
    universityCountry,
  };

  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    const dataSend = { ...items, ...formValues };
    const res = await axios.post("/apply", dataSend);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Applied Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/allScholarship");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-14 px-4">
      <div className="max-w-screen-2xl mx-auto">
        {/* ── Page Title ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 pl-1"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Scholarship <span className="text-[#412ad5]">Application</span>
          </h1>
          <div className="mt-3 h-1 w-48 rounded-full bg-gradient-to-r from-[#412ad5] to-[#7c5ff0]" />
        </motion.div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* ════════════ LEFT — Form ════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full xl:w-[60%] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
              <h2 className="text-xl font-bold text-gray-800">
                Personal Information
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <FieldWrapper label="Phone Number" icon={Phone} delay={0.2}>
                <input
                  type="text"
                  name="phoneNumber"
                  maxLength={11}
                  placeholder="e.g. 01712345678"
                  className={inputClass}
                  required
                />
              </FieldWrapper>

              <FieldWrapper
                label="Applicant Photo URL"
                icon={Image}
                delay={0.25}
              >
                <input
                  type="url"
                  name="applicantPhoto"
                  defaultValue={user.photoURL}
                  className={inputClass}
                  required
                />
              </FieldWrapper>

              <FieldWrapper label="Address" icon={MapPin} delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    name="address.village"
                    placeholder="Village"
                    className={inputClass}
                    required
                  />
                  <input
                    type="text"
                    name="address.district"
                    placeholder="District"
                    className={inputClass}
                    required
                  />
                  <input
                    type="text"
                    name="address.country"
                    placeholder="Country"
                    className={inputClass}
                    required
                  />
                </div>
              </FieldWrapper>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldWrapper label="Gender" icon={User} delay={0.35}>
                  <div className="relative">
                    <select name="gender" className={selectClass} required>
                      <option value="" disabled defaultValue>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ▾
                    </div>
                  </div>
                </FieldWrapper>

                <FieldWrapper
                  label="Applying Degree"
                  icon={GraduationCap}
                  delay={0.38}
                >
                  <div className="relative">
                    <select
                      name="applyingDegree"
                      className={selectClass}
                      required
                    >
                      <option value="" disabled defaultValue>
                        {degree}
                      </option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Masters">Masters</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ▾
                    </div>
                  </div>
                </FieldWrapper>
              </div>

              {/* Academic Section */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
                <h2 className="text-xl font-bold text-gray-800">
                  Academic Results
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FieldWrapper label="SSC Result" icon={BookOpen} delay={0.42}>
                  <input
                    type="text"
                    name="sscResult"
                    maxLength={3}
                    placeholder="Out of 5.00"
                    className={inputClass}
                    required
                  />
                </FieldWrapper>
                <FieldWrapper label="HSC Result" icon={BookOpen} delay={0.45}>
                  <input
                    type="text"
                    name="hscResult"
                    maxLength={3}
                    placeholder="Out of 5.00"
                    className={inputClass}
                    required
                  />
                </FieldWrapper>
                <FieldWrapper
                  label="Study Gap (optional)"
                  icon={Tag}
                  delay={0.48}
                >
                  <div className="relative">
                    <select name="studyGap" className={selectClass}>
                      <option value="" disabled defaultValue>
                        Select
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      ▾
                    </div>
                  </div>
                </FieldWrapper>
              </div>

              {/* Scholarship Info Section */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
                <h2 className="text-xl font-bold text-gray-800">
                  Scholarship Info
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FieldWrapper label="University" icon={Building2} delay={0.52}>
                  <input
                    type="text"
                    name="universityName"
                    value={universityName}
                    readOnly
                    className={readOnlyClass}
                  />
                </FieldWrapper>
                <FieldWrapper
                  label="Scholarship Category"
                  icon={Tag}
                  delay={0.55}
                >
                  <input
                    type="text"
                    name="scholarshipCategory"
                    value={scholarshipCategory}
                    readOnly
                    className={readOnlyClass}
                  />
                </FieldWrapper>
                <FieldWrapper
                  label="Subject Category"
                  icon={BookOpen}
                  delay={0.58}
                >
                  <input
                    type="text"
                    name="subjectCategory"
                    value={subjectCategory}
                    readOnly
                    className={readOnlyClass}
                  />
                </FieldWrapper>
              </div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 }}
                className="pt-2"
              >
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(65, 42, 213, 0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] px-8 py-4 font-bold text-white shadow-lg flex items-center justify-center gap-2 text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* ════════════ RIGHT — University Info ════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-[40%] space-y-5 xl:sticky xl:top-8"
          >
            {/* University Hero */}
            <div className="bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-2xl p-7 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-8 w-36 h-36 rounded-full bg-white/5" />

              <div className="relative z-10 flex items-center gap-5 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={universityName}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Building2 className="w-10 h-10 text-[#412ad5]" />
                  )}
                </motion.div>

                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 tracking-wide uppercase">
                    {scholarshipCategory}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {universityName}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-white/75">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs">
                      {universityCity}, {universityCountry}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="relative z-10 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: DollarSign,
                    label: "App Fee",
                    value: `$${applicationFees ?? 0}`,
                  },
                  {
                    icon: DollarSign,
                    label: "Service",
                    value: `$${serviceCharge}`,
                  },
                  {
                    icon: Clock,
                    label: "Deadline",
                    value: applicationDeadline,
                    red: true,
                  },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center justify-center text-center p-3 rounded-xl ${s.red ? "bg-red-500/20" : "bg-white/10"}`}
                  >
                    <s.icon
                      className={`w-4 h-4 mb-1 ${s.red ? "text-red-200" : "text-white/70"}`}
                    />
                    <p className="text-white/60 text-[10px] font-semibold uppercase tracking-wide">
                      {s.label}
                    </p>
                    <p
                      className={`text-xs font-bold mt-0.5 ${s.red ? "text-red-200" : "text-white"}`}
                    >
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#412ad5] to-[#7c5ff0]" />
                <h3 className="text-lg font-bold text-gray-800">
                  Scholarship Details
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: ClipboardList,
                    label: "Scholarship Name",
                    value: scholarshipName,
                  },
                  { icon: GraduationCap, label: "Degree", value: degree },
                  { icon: BookOpen, label: "Subject", value: subjectCategory },
                  { icon: Tag, label: "Category", value: scholarshipCategory },
                  {
                    icon: Calendar,
                    label: "Posted On",
                    value: scholarshipPostDate,
                  },
                ].map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-[#412ad5]/5 hover:border-[#412ad5]/20 border border-transparent transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#412ad5]/10 to-[#7c5ff0]/10 flex items-center justify-center shrink-0 group-hover:from-[#412ad5]/20 group-hover:to-[#7c5ff0]/20 transition-all duration-300">
                      <detail.icon className="w-4 h-4 text-[#412ad5]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                        {detail.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-800">
                        {detail.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Deadline Warning */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                  Application Deadline
                </p>
                <p className="text-base font-bold text-red-600">
                  {applicationDeadline}
                </p>
                <p className="text-xs text-red-400 mt-0.5">
                  Don&lsquo;t miss your chance to apply!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ApplyScholarShip;
