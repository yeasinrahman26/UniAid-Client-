import { useState, useEffect, useContext } from "react";
import useAllScholarship from "../../Hooks/useAllScholarship";
import ScholarshipCard from "./ScholarshipCard";
import AuthContext from "../../Auth/AuthContext";

const AllScholarship = () => {
  const [scholarship] = useAllScholarship(); // This will always have the data
  const [allScholarships, setAllScholarships] = useState(scholarship); // Store all scholarships
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [filteredScholarships, setFilteredScholarships] = useState(scholarship); // Filtered scholarships for search

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Display 6 items per page

  // State for handling initial loading state
  const [initialLoading, setInitialLoading] = useState(true);

  // Get loading state from AuthContext (for fetching data)
  const { loading } = useContext(AuthContext);

  // Set initial loading to false once data has been fetched
  useEffect(() => {
    if (scholarship.length > 0) {
      setInitialLoading(false);
      setAllScholarships(scholarship); // Set fetched data as all scholarships
      setFilteredScholarships(scholarship); // Initially show all scholarships
    }
  }, [scholarship]);

  // Handle search button click (filter scholarships)
  const handleSearchClick = () => {
    if (searchQuery === "") {
      setFilteredScholarships(allScholarships); // If searchQuery is empty, show all scholarships
    } else {
      const filtered = allScholarships.filter((item) => {
        return (
          item.scholarshipName.includes(searchQuery) ||
          item.universityName.includes(searchQuery) ||
          item.degree.includes(searchQuery)
        );
      });
      setFilteredScholarships(filtered); // Filter based on search query
    }
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  // Calculate the scholarships to be displayed on the current page
  const indexOfLastScholarship = currentPage * itemsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - itemsPerPage;
  const currentScholarships = filteredScholarships.slice(
    indexOfFirstScholarship,
    indexOfLastScholarship
  );

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination control: calculate total pages
  const totalPages = Math.ceil(filteredScholarships.length / itemsPerPage);

  return (
    <div className="min-h-screen">
      {initialLoading || loading ? (
        <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
          <div className="spinner-border animate-spin w-16 h-16 border-4 border-blue-500 rounded-full"></div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl text-center pt-10 font-bold">
            All Scholarship: {filteredScholarships.length}
          </h1>

          {/* Search Section */}
          <div className="flex justify-center my-4">
            <input
              type="text"
              placeholder="Search by Scholarship, University, or Degree"
              className="input input-bordered w-1/2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery as the user types
            />
            <button
              onClick={handleSearchClick}
              className="btn btn-primary ml-2"
            >
              Search
            </button>
          </div>

          {/* Display filtered scholarships */}
          <div className="grid mx-4 py-10 md:mx-0 md:grid-cols-2 p-4 lg:grid-cols-3 gap-10">
            {currentScholarships.map((item) => (
              <ScholarshipCard key={item._id} item={item} />
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center my-4">
            <button
              className="btn btn-secondary mr-2"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1} // Disable previous button on the first page
            >
              Previous
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`btn btn-outline mr-2 ${
                  currentPage === index + 1 ? "btn-primary" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="btn btn-secondary ml-2"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages} // Disable next button on the last page
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllScholarship;
