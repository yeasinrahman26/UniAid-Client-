import { Helmet } from "react-helmet-async";
import AboutSection from "./About/About";
import Banner from "./Banner";
import HowWeWork from "./HowWeWork/HowWeWork";
import TopScholarship from "./TopScholarship/TopScholarship";
import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";
import FAQ from "./Faq/FAQ";
// import BlogSection from "./Blogs/BlogSection";
import SuccessStories from "./SuccessStories/SuccessStories";
import StudentResources from "./StudentResources/StudentResources";
import Gallery from "./Gallery/Gallery";
import { motion } from "framer-motion";

const Home = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="min-h-screen  ">
      <Helmet>
        <title>UniAid || Home</title>
      </Helmet>
      {loading ? (
        <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      ) : (
        <>
          <Banner></Banner>
          <TopScholarship></TopScholarship>
          <div className="max-w-screen-2xl mx-auto lg:px-6 space-y-16 pt-16 ">
            <AboutSection></AboutSection>
            <Gallery></Gallery>
            {/* <BlogSection></BlogSection> */}
            <HowWeWork></HowWeWork>
            <StudentResources></StudentResources>
            <FAQ></FAQ>
          </div>
          <div className="max-w-screen-2xl pt-16 mx-auto lg:px-6 bg-gradient-to-b from-gray-50 to-white">
            {/* Heading part */}
            <motion.div
              className="pl-6  text-start mb-12 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-3 text-4xl font-bold text-black">
                Success <span className="text-[#4A40F7]">Stories</span>
              </h1>
              <p className="text-lg text-gray-600">
                Hear from students who achieved their dreams with UniAid
                scholarships
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
          </div>
          <SuccessStories></SuccessStories>
        </>
      )}
    </div>
  );
};

export default Home;
