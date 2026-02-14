import { useState, useEffect, useContext, useMemo } from "react";
import useAllScholarship from "../../Hooks/useAllScholarship";
import ScholarshipCard from "./ScholarshipCard";
import AuthContext from "../../Auth/AuthContext";
import ScholarshipBanner from "./ScholarshipBanner/ScholarshipBanner";
import { motion } from "framer-motion";

const AllScholarship = () => {
  const [scholarship] = useAllScholarship();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter states
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedScholarshipType, setSelectedScholarshipType] = useState("");

  const { loading } = useContext(AuthContext);

  const itemsPerPage = 6;

  // Extract unique values for filters
  const filterOptions = useMemo(() => {
    const subjects = [
      ...new Set(scholarship.map((item) => item.subjectCategory)),
    ];
    const degrees = [...new Set(scholarship.map((item) => item.degree))];
    const scholarshipTypes = [
      ...new Set(scholarship.map((item) => item.scholarshipCategory)),
    ];

    return {
      subjects: subjects.filter(Boolean).sort(),
      degrees: degrees.filter(Boolean).sort(),
      scholarshipTypes: scholarshipTypes.filter(Boolean).sort(),
    };
  }, [scholarship]);

  // Filter scholarships based on search query and filters
  const filteredScholarships = useMemo(() => {
    let filtered = scholarship;

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((item) => {
        return (
          item.scholarshipName?.toLowerCase().includes(query) ||
          item.universityName?.toLowerCase().includes(query) ||
          item.degree?.toLowerCase().includes(query) ||
          item.universityCountry?.toLowerCase().includes(query)
        );
      });
    }

    // Apply subject category filter
    if (selectedSubject) {
      filtered = filtered.filter(
        (item) => item.subjectCategory === selectedSubject,
      );
    }

    // Apply degree filter
    if (selectedDegree) {
      filtered = filtered.filter((item) => item.degree === selectedDegree);
    }

    // Apply scholarship type filter
    if (selectedScholarshipType) {
      filtered = filtered.filter(
        (item) => item.scholarshipCategory === selectedScholarshipType,
      );
    }

    return filtered;
  }, [
    scholarship,
    searchQuery,
    selectedSubject,
    selectedDegree,
    selectedScholarshipType,
  ]);

  // Reset to page 1 when filters or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredScholarships.length]);

  // Calculate current page scholarships
  const { currentScholarships, totalPages } = useMemo(() => {
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    return {
      currentScholarships: filteredScholarships.slice(
        indexOfFirst,
        indexOfLast,
      ),
      totalPages: Math.ceil(filteredScholarships.length / itemsPerPage),
    };
  }, [filteredScholarships, currentPage, itemsPerPage]);

  // Handle search with Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCurrentPage(1);
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedSubject("");
    setSelectedDegree("");
    setSelectedScholarshipType("");
    setSearchQuery("");
  };

  const isLoading = scholarship.length === 0 && loading;

  return (
    <div>
      <ScholarshipBanner />
      <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-10">
        {isLoading ? (
          <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
            <span className="loading loading-bars loading-xl text-blue-500"></span>
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              {/* Heading part */}
              <motion.div
                className="pl-6  text-start mb- "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="mb-3 text-4xl font-bold text-black">
                  All <span className="text-[#4A40F7]">Scholarships</span>
                </h1>

                {/* Decorative line */}
                <motion.div
                  className=" mt-4 h-1 w-52 rounded-full
             bg-gradient-to-r from-[#4A40F7] to-purple-500"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Search and Filter Section - All in One Row */}
              <div className="flex flex-wrap items-center md:justify-center lg:justify-between gap-4 my-6 px-4">
                {/* Search Box */}
                <input
                  type="text"
                  placeholder="Search by Scholarship,  University, or Country"
                  className="input text-gray-500 input-bordered w-full max-w-xs focus:border-blue-500 focus:border-2 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />

                {/* Subject Category Filter */}
                <select
                  className="select focus:border-blue-500 focus:border-2 focus:outline-none text-gray-500 select-bordered w-full max-w-xs"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                >
                  <option value="">All Subjects</option>
                  {filterOptions.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>

                {/* Degree Filter */}
                <select
                  className="select select-bordered text-gray-500 w-full max-w-xs focus:border-blue-500 focus:border-2 focus:outline-none"
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                >
                  <option value="">All Degrees</option>
                  {filterOptions.degrees.map((degree) => (
                    <option key={degree} value={degree}>
                      {degree}
                    </option>
                  ))}
                </select>

                {/* Scholarship Category Filter */}
                <select
                  className="select text-gray-500  select-bordered w-full max-w-xs focus:border-blue-500 focus:border-2 focus:outline-none"
                  value={selectedScholarshipType}
                  onChange={(e) => setSelectedScholarshipType(e.target.value)}
                >
                  <option value="">All Scholarship Types</option>
                  {filterOptions.scholarshipTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Clear Filters Button */}
                {(selectedSubject ||
                  selectedDegree ||
                  selectedScholarshipType ||
                  searchQuery) && (
                  <button
                    onClick={handleClearFilters}
                    className="btn btn-outline bg-red-500  text-white hover:bg-red-600"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* No Results Message */}
              {currentScholarships.length === 0 ? (
                <div className="text-center py-20 min-h-[600px]">
                  <p className="text-2xl text-gray-500">
                    No scholarships found matching your criteria
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="btn btn-primary mt-4"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Grid Container with fixed minimum height */}
                  <div className="min-h-[700px]">
                    <div
                      className="grid mx-4 py-10 md:mx-0 md:grid-cols-2
                     p-4 lg:grid-cols-3 gap-10 "
                    >
                      {currentScholarships.map((item) => (
                        <ScholarshipCard key={item._id} item={item} />
                      ))}
                    </div>
                  </div>

                  {/* Pagination controls - fixed position */}
                  {totalPages > 1 && (
                    <div className="flex justify-end my-4 px-4">
                      <button
                        className="btn btn-primary mr-2"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>

                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`btn btn-outline mr-2 ${
                            currentPage === index + 1
                              ? "btn-outline-primary"
                              : ""
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}

                      <button
                        className="btn btn-primary ml-2"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllScholarship;
