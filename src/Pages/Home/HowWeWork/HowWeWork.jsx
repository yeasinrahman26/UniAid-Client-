const HowWeWork = () => {
  const steps = [
    {
      id: 1,
      title: "Register an Account",
      description:
        "Sign up and create your profile to access scholarship opportunities.",
      icon: "👤",
    },
    {
      id: 2,
      title: "Browse Scholarships",
      description:
        "Explore and filter scholarships based on your preferences and needs.",
      icon: "🔍",
    },
    {
      id: 3,
      title: "Apply for Scholarships",
      description: "Submit your applications directly through our platform.",
      icon: "✍️",
    },
    {
      id: 4,
      title: "Make Payments (If Required)",
      description:
        "Complete any necessary payments securely through our portal.",
      icon: "💳",
    },
    {
      id: 5,
      title: "Track Your Applications",
      description:
        "Stay updated on the status of your scholarship applications.",
      icon: "📊",
    },
    {
      id: 6,
      title: "Receive Scholarship Awards",
      description: "Get notified and receive your scholarship once approved.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-12 mb-16  px-6 md:px-12 bg-gray-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          How UniAid Works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col hover:pt-2 items-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
