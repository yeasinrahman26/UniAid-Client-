import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Fake FAQ data array
  const faqData = [
    {
      id: 1,
      question: "Who is eligible to apply for scholarships on UniAid?",
      answer:
        "Each scholarship has specific eligibility criteria, such as academic performance, financial need, or extracurricular achievements. Check the eligibility requirements on each scholarship's details page.",
    },
    {
      id: 2,
      question: "What documents are required for a scholarship application?",
      answer:
        "Required documents vary but often include academic transcripts, proof of financial need, identification, recommendation letters, and a personal statement. Check each scholarship's details page for specific requirements.",
    },
    {
      id: 3,
      question: "When is the deadline to apply for scholarships?",
      answer:
        "Each scholarship has a different deadline, which is displayed on the scholarship details page. Be sure to submit your application before the specified deadline.",
    },
    {
      id: 4,
      question: "How are scholarship recipients selected?",
      answer:
        "Selection is based on academic merit, financial need, extracurricular activities, and the quality of the application. Some scholarships may also require an interview or additional evaluation.",
    },
    {
      id: 5,
      question: "How will I receive the scholarship funds if I am selected?",
      answer:
        "The scholarship provider determines the disbursement method, which can include direct payment to your university, bank transfer, or monthly stipends for education-related expenses.",
    },
    {
      id: 6,
      question: "Can I apply for multiple scholarships at once?",
      answer:
        "Yes! You can apply for as many scholarships as you qualify for. We encourage students to explore all available opportunities to maximize their chances of receiving financial aid.",
    },
    {
      id: 7,
      question: "Is there an application fee?",
      answer:
        "No, applying for scholarships through UniAid is completely free. We believe that financial barriers should not prevent students from accessing educational opportunities.",
    },
    {
      id: 8,
      question: "How long does the application review process take?",
      answer:
        "The review process typically takes 4-8 weeks after the application deadline. You will be notified via email once a decision has been made regarding your application.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="">
        {/* Section Header */}

        {/* Heading part */}
        <motion.div
          className="pl-6  text-start mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-3 text-4xl font-bold text-black">
            Frequently <span className="text-[#4A40F7]">Questions</span>
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about scholarships and applications
          </p>
          {/* Decorative line */}
          <motion.div
            className=" mt-4 h-1 w-52 rounded-full
             bg-gradient-to-r from-[#4A40F7] to-purple-500"
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

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 w-6 h-6 text-[#412ad5] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Section with Smooth Animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
