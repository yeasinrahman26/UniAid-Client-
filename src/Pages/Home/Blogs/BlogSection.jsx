

const BlogSection = () => {
      const blogPosts = [
        {
          title: "Top 10 Scholarships for International Students",
          description:
            "Discover the top scholarships for students pursuing studies abroad, with detailed eligibility criteria and application tips.",
          link: "#", // Link to full article
          date: "Feb 15, 2025",
        },
        {
          title: "How to Write an Effective Scholarship Application Essay",
          description:
            "Learn tips and tricks for crafting a winning scholarship essay that stands out to selection committees.",
          link: "#", // Link to full article
          date: "Feb 10, 2025",
        },
        {
          title: "5 Common Mistakes in Scholarship Applications to Avoid",
          description:
            "Find out the most common mistakes applicants make in scholarship applications and how to avoid them.",
          link: "#", // Link to full article
          date: "Feb 5, 2025",
        },
      ];
    return (
      <section className="bg-gray-50 py-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            📝 Scholarship & Study Abroad Resources
          </h2>

          {/* Blog Posts List */}
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 border border-gray-300 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-700">{post.description}</p>
                <p className="mt-4 text-sm text-gray-500">
                  Published on {post.date}
                </p>
               
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default BlogSection;