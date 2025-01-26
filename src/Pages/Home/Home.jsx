import AboutSection from "./About/About";
import Banner from "./Banner";
import HowWeWork from "./HowWeWork/HowWeWork";
import TopScholarship from "./TopScholarship/TopScholarship";

const Home = () => {
    return (
        <div className="min-h-screen mt-16  space-y-16">
            <Banner></Banner>
            <TopScholarship></TopScholarship>
            <AboutSection></AboutSection>
            <HowWeWork></HowWeWork>
        </div>
    );
};

export default Home;