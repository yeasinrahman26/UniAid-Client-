import { motion } from "framer-motion";
import {
  UserPlus,
  Search,
  FileText,
  CreditCard,
  BarChart3,
  Award,
} from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Auth/AuthContext";

const HowWeWork = () => {
  const { user } = useContext(AuthContext);

  const steps = [
    {
      id: 1,
      title: "Register an Account",
      description:
        "Sign up and create your profile to access scholarship opportunities tailored for you.",
      icon: UserPlus,
      color: "from-[#412ad5] to-[#5a3de8]",
    },
    {
      id: 2,
      title: "Browse Scholarships",
      description:
        "Explore and filter scholarships based on your preferences, field of study, and eligibility.",
      icon: Search,
      color: "from-[#5a3de8] to-[#7c5ff0]",
    },
    {
      id: 3,
      title: "Apply for Scholarships",
      description:
        "Submit your applications directly through our secure and user-friendly platform.",
      icon: FileText,
      color: "from-[#412ad5] to-[#5a3de8]",
    },
    {
      id: 4,
      title: "Make Payments (If Required)",
      description:
        "Complete any necessary payments securely through our encrypted payment portal.",
      icon: CreditCard,
      color: "from-[#5a3de8] to-[#7c5ff0]",
    },
    {
      id: 5,
      title: "Track Your Applications",
      description:
        "Stay updated on the status of your scholarship applications with real-time notifications.",
      icon: BarChart3,
      color: "from-[#412ad5] to-[#5a3de8]",
    },
    {
      id: 6,
      title: "Receive Scholarship Awards",
      description:
        "Get notified and receive your scholarship once approved by the committee.",
      icon: Award,
      color: "from-[#5a3de8] to-[#7c5ff0]",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className=" mx-auto">
        {/* Heading part */}
        <motion.div
          className="pl-6 text-start mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-3 text-4xl font-bold text-black">
            How <span className="text-[#412ad5]">UniAid Works</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your journey to securing a scholarship in six simple steps
          </p>
          {/* Decorative line */}
          <motion.div
            className="mt-4 h-1 w-52 rounded-full bg-gradient-to-r from-[#412ad5] to-[#7c5ff0]"
            animate={{
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#412ad5]/30 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#412ad5] to-[#7c5ff0] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">
                    {step.id}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Bottom Border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        {user ? (
          <></>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] p-10 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have successfully secured
              scholarships through UniAid
            </p>
            <Link to="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#412ad5] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Create Your Account
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HowWeWork;
