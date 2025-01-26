import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "Discover Available Scholarships",
      description:
        "Explore a wide range of scholarships tailored to your needs.",
    },
    {
      id: 2,
      title: "Stay Updated with New Opportunities",
      description: "Get notified about the latest scholarships and deadlines.",
    },
    {
      id: 3,
      title: "Streamline Your Application Process",
      description: "Easily manage and submit scholarship applications online.",
    },
    {
      id: 4,
      title: "Connect with Support Teams",
      description:
        "Reach out to scholarship coordinators for guidance and assistance.",
    },
  ];

  return (
    <div className="  px-6 md:px-0 ">
      <div className="w-full   py-0 mx-auto">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col  items-center 
                justify-center h-62  md:h-62 bg-gradient-to-r from-blue-700 
                 to-[#14fc92] text-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl text-black lg:text-5xl lg:pt-10 font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg text-black lg:text-2xl">
                {slide.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
