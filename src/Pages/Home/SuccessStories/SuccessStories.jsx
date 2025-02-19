import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const SuccessStories = () => {
  const stories = [
    {
      name: "John Doe",
      university: "Harvard University",
      quote:
        "Thanks to UniAid, I was able to receive a full scholarship for my graduate studies. It changed my life!",
    },
    {
      name: "Jane Smith",
      university: "University of Oxford",
      quote:
        "UniAid made my scholarship application process so much easier, and I couldn't be more grateful for this opportunity.",
    },
    {
      name: "Ali Khan",
      university: "MIT",
      quote:
        "I found the perfect scholarship for my program through UniAid. The support was amazing, and I’m now studying my dream course!",
    },
    
    {
      name: "Maria Garcia",
      university: "Stanford University",
      quote:
        "UniAid helped me find scholarships that I didn’t even know existed. It gave me the chance to pursue my dream degree!",
    },
  ];

  return (
    <section className="rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 py-20 mb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
          🎉 Success Stories
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={true}
          autoplaySpeed={3000}
          effect="fade"
          className="success-stories-swiper"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={index} className="text-center relative">
              <div className="bg-white p-8 border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500 ease-in-out">
                <h3 className="text-2xl font-bold text-blue-700 mt-">
                  {story.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{story.university}</p>
                <p className="mt-6 text-gray-700 italic text-lg leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStories;
