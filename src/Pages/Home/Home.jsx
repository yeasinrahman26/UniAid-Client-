import { Helmet } from "react-helmet-async";
import AboutSection from "./About/About";
import Banner from "./Banner";
import HowWeWork from "./HowWeWork/HowWeWork";
import TopScholarship from "./TopScholarship/TopScholarship";
import { useContext } from "react";
import AuthContext from "../../Auth/AuthContext";
import FAQ from "./Faq/FAQ";
import BlogSection from "./Blogs/BlogSection";
import SuccessStories from "./SuccessStories/SuccessStories";
import StudentResources from "./StudentResources/StudentResources";


const Home = () => {
  const {loading}=useContext(AuthContext)
  return (
    <div className="min-h-screen mt-16  space-y-16">
      <Helmet>
        <title>UniAid || Home</title>
      </Helmet>
      {loading ? (
        <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
          <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 rounded-full"></div>
        </div>
      ) : (
        <>
          <Banner></Banner>
          <TopScholarship></TopScholarship>
          <AboutSection></AboutSection>
          <BlogSection></BlogSection>
          <HowWeWork></HowWeWork>
          <StudentResources></StudentResources>
          <FAQ></FAQ>
          <SuccessStories></SuccessStories>
        </>
      )}
    </div>
  );
};

export default Home;
