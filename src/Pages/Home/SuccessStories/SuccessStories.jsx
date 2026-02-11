import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Quote } from "lucide-react";


const SuccessStories = () => {
 const stories = [
   {
     id: 1,
     name: "Sarah Johnson",
     university: "Harvard University",
     program: "Master's in Computer Science",
     image: "https://randomuser.me/api/portraits/women/44.jpg",
     quote:
       "UniAid helped me secure a full scholarship and made the application process simple, smooth, and completely stress-free for my future.",
     scholarship: "$50,000 Full Scholarship",
     year: "2024",
   },
   {
     id: 2,
     name: "Michael Chen",
     university: "University of Oxford",
     program: "PhD in Physics",
     image: "https://randomuser.me/api/portraits/men/32.jpg",
     quote:
       "UniAid showed me many scholarships and guided me clearly to achieve my dream of studying at Oxford with confidence happily.",
     scholarship: "$75,000 Research Grant",
     year: "2024",
   },
   {
     id: 3,
     name: "Aisha Patel",
     university: "MIT",
     program: "Bachelor's in Engineering",
     image: "https://randomuser.me/api/portraits/women/68.jpg",
     quote:
       "Through UniAid I discovered the perfect scholarship and received amazing support during my entire application journey with clear helpful guidance.",
     scholarship: "$60,000 Merit Scholarship",
     year: "2023",
   },
   {
     id: 4,
     name: "Carlos Rodriguez",
     university: "Stanford University",
     program: "MBA",
     image: "https://randomuser.me/api/portraits/men/46.jpg",
     quote:
       "UniAid filters and recommendations helped me find hidden scholarships and completely changed my educational and professional future for the better.",
     scholarship: "$80,000 Leadership Award",
     year: "2024",
   },
   {
     id: 5,
     name: "Emily Nguyen",
     university: "Cambridge University",
     program: "Master's in Medicine",
     image: "https://randomuser.me/api/portraits/women/28.jpg",
     quote:
       "Thanks to UniAid I earned a life-changing medical scholarship and can now study at Cambridge without financial pressure or worry.",
     scholarship: "$70,000 Medical Scholarship",
     year: "2023",
   },
   {
     id: 6,
     name: "David Okonkwo",
     university: "Yale University",
     program: "Master's in Public Policy",
     image: "https://randomuser.me/api/portraits/men/52.jpg",
     quote:
       "UniAid gave me clear direction and easy tools to find the right can now study scholarship so I can focus on studies confidently.",
     scholarship: "$55,000 Policy Fellowship",
     year: "2024",
   },
 ];


  return (
    <section className="py-20 px-4 relative overflow-hidden">
     

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 "></div>
        
      </div>
      

      <div className="max-w-screen-2xl px-8 mx-auto relative z-10">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="success-stories-swiper pb-12"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="bg-white/80 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-[#4A40F7] opacity-20" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 italic text-base leading-relaxed mb-6 flex-grow">
                  {story.quote}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                {/* Student Info */}
                <div className="flex items-center gap-4">
                  {/* Profile Image */}
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-[#4A40F7] border-opacity-20"
                  />

                  {/* Details */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-600">{story.program}</p>
                    <p className="text-sm font-semibold text-[#4A40F7]">
                      {story.university}
                    </p>
                  </div>
                </div>

                {/* Scholarship Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      <span className="font-semibold text-[#4A40F7]">
                        {story.scholarship}
                      </span>
                    </span>
                    <span className="text-gray-500">{story.year}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-black/40 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
            <p className="text-white text-opacity-90">Success Stories</p>
          </div>
          <div className="bg-black/40 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold text-white mb-2">$10M+</h3>
            <p className="text-white text-opacity-90">Scholarships Awarded</p>
          </div>
          <div className="bg-black/40 bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
            <p className="text-white text-opacity-90">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .success-stories-swiper .swiper-button-next,
        .success-stories-swiper .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .success-stories-swiper .swiper-button-next:hover,
        .success-stories-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .success-stories-swiper .swiper-button-next::after,
        .success-stories-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }

        .success-stories-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .success-stories-swiper .swiper-pagination-bullet-active-custom {
          opacity: 1;
          background: white;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
