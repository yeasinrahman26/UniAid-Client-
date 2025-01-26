const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Empowering Students Through Scholarships
          </h2>
          <p className="text-lg leading-relaxed">
            Every year, thousands of students apply for scholarships, while many
            eligible students miss out due to a lack of awareness or complicated
            processes. UniAid bridges this gap by offering a seamless platform
            that connects deserving students with the right opportunities.
            <br />
            <br />
            Our system integrates effortlessly with other EduTech solutions,
            simplifies application workflows, eliminates redundancies, and
            ensures transparency. By enabling direct disbursement of funds to
            students' accounts, UniAid guarantees secure and efficient
            scholarship management.
          </p>
        </div>

        {/* Right Side: UniAid Info */}
        <div className="md:w-1/3 bg-red-500   rounded-lg shadow-lg p-6 md:ml-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-bold mb-1 "> UniAid</h3>
          <p className="text-base">UniAid Scholarship System</p>
          <p className="text-base">
            Making scholarships accessible to all. Transparent scholarship
            management for students, universities, and governments. Since 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
