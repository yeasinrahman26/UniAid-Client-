import { motion } from "framer-motion";
import {
  BookOpen,
  Video,
  Download,
  FileText,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const StudentResources = () => {
  const resources = [
    {
      id: 1,
      title: "How to Write a Strong Scholarship Essay",
      description:
        "Master the art of crafting compelling scholarship essays that capture attention. Learn structure, storytelling techniques, and what scholarship committees really look for in winning applications.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      icon: BookOpen,
      type: "Article",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Interview Preparation Guide for Scholarship Applicants",
      description:
        "Get ready for your scholarship interviews with insider tips from past winners. Discover common questions, best practices for answering, and how to present yourself confidently.",
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: Video,
      type: "Video Guide",
      readTime: "15 min watch",
    },
    {
      id: 3,
      title: "Managing Your Scholarship Funds Effectively",
      description:
        "Learn smart budgeting strategies and financial management tips to make the most of your scholarship funds. Includes practical tools and templates for tracking expenses.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      icon: Lightbulb,
      type: "Article",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Complete Scholarship Application Checklist",
      description:
        "Never miss a deadline or document again! Download our comprehensive checklist to stay organized throughout your scholarship application journey. Track every requirement with ease.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      icon: CheckCircle,
      type: "Downloadable PDF",
      readTime: "Free Download",
    },
    {
      id: 5,
      title: "Winning Scholarship Application Templates",
      description:
        "Access professionally designed templates for essays, personal statements, and application forms. Customize them to match your unique story and increase your chances of success.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      icon: FileText,
      type: "Template Pack",
      readTime: "Free Download",
    },
    {
      id: 6,
      title: "Financial Aid and FAFSA Completion Guide",
      description:
        "Navigate the financial aid process with confidence. Step-by-step instructions for completing FAFSA, understanding aid packages, and maximizing your financial support options.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      icon: Download,
      type: "Interactive Guide",
      readTime: "12 min read",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="">
        {/* Heading part */}
        <motion.div
          className="pl-6 text-start mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-3 text-4xl font-bold text-black">
            Student Resources <span className="text-[#412ad5]">& Tips</span>
          </h1>
          <p className="text-lg text-gray-600">
            Essential guides, templates, and expert advice to help you succeed
            in your scholarship journey
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

        {/* Resources List - Alternating Layout */}
        <div className="space-y-16">
          {resources.map((resource, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = resource.icon;

            return (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center  bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#412ad5]/30`}
              >
                {/* Image Section */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full lg:w-1/2 h-64  lg:h-80 relative overflow-hidden group"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#412ad5]/80 to-[#7c5ff0]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <IconComponent className="w-20 h-20 text-white" />
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-[#412ad5]">
                      {resource.type}
                    </span>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-8 lg:p-12">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#412ad5] to-[#7c5ff0] flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-gray-500 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {resource.readTime}
                    </span>
                  </div>

                  {/* CTA Button */}
                  {/* <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#412ad5] to-[#7c5ff0] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    {resource.type.includes("Download")
                      ? "Download Now"
                      : "Read More"}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button> */}
                </div>
              </motion.div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
};

export default StudentResources;
