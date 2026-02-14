import banner from "../../../assets/banner01.jpg";
export default function ScholarshipBanner() {
  return (
    <div className="">
      {/* Banner - 50vh (half of viewport height) */}
      <div className="relative h-[60vh] overflow-hidden ">
        {/* Background Image */}
        <img
          src={banner}
          alt="Banner background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Text Content */}
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Discover Available Scholarships
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
               Find the perfect opportunity to fund your studies and
              achieve your academic goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
