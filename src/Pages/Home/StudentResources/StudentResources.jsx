const StudentResources = () => {
  const resources = [
    {
      title: "How to Write a Strong Scholarship Essay",
      description:
        "Learn the key tips for writing an essay that will stand out to scholarship committees.",
      link: "/resources/essay-guide",
      type: "Article",
    },
    {
      title: "Interview Preparation Tips for Scholarship Applicants",
      description:
        "Get ready for your scholarship interviews with these essential tips from past winners.",
      link: "/resources/interview-guide",
      type: "Article",
    },
    {
      title: "Managing Your Scholarship Funds Effectively",
      description:
        "Tips on budgeting and managing your funds once you've received a scholarship.",
      link: "/resources/fund-management-guide",
      type: "Article",
    },
    {
      title: "Scholarship Application Checklist",
      description:
        "A downloadable checklist to keep track of all the documents and steps in your scholarship applications.",
      link: "/resources/checklist",
      type: "Downloadable",
    },
    {
      title: "Tips for Winning a Scholarship Interview",
      description:
        "Learn how to prepare and present yourself confidently in scholarship interviews, including common questions and strategies.",
      link: "/resources/interview-tips",
      type: "Article",
    },
    {
      title: "Scholarship Application Templates",
      description:
        "Downloadable templates for writing your scholarship essay and application form.",
      link: "/resources/templates",
      type: "Downloadable",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          📚 Student Resources and Tips
        </h2>

        <p className="text-xl text-gray-600 mb-12">
          Discover essential tips, guides, and resources to help you succeed in
          your scholarship journey!
        </p>

        {/* Resource List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-blue-600">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentResources;
