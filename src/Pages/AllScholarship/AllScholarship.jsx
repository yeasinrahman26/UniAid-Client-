import { useState, useEffect, useContext } from "react";
// import { useAuth } from "../../context/AuthContext"; // Import the custom hook for AuthContext
import useAllScholarship from "../../Hooks/useAllScholarship";
import ScholarshipCard from "./ScholarshipCard";
import AuthContext from "../../Auth/AuthContext";

const AllScholarship = () => {
  const [scholarship] = useAllScholarship();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [filteredScholarships, setFilteredScholarships] = useState(scholarship);

  // State for handling initial loading state
  const [initialLoading, setInitialLoading] = useState(true);

  // Get loading state from AuthContext (for fetching data)
  const { loading } = useContext(AuthContext)

  // Filter scholarships based on the search query whenever searchQuery changes
  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = scholarship.filter((item) => {
      return (
        item.scholarshipName.toLowerCase().includes(lowerQuery) ||
        item.universityName.toLowerCase().includes(lowerQuery) ||
        item.degree.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredScholarships(filtered);
  }, [searchQuery, scholarship]); // Re-run the filter when searchQuery or scholarship changes

  // Handle search button click
  const handleSearchClick = () => {
    const lowerQuery = searchQuery.toLowerCase();
    const filtered = scholarship.filter((item) => {
      return (
        item.scholarshipName.toLowerCase().includes(lowerQuery) ||
        item.universityName.toLowerCase().includes(lowerQuery) ||
        item.degree.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredScholarships(filtered);
  };

  // Set initial loading to false once data has been fetched
  useEffect(() => {
    if (scholarship.length > 0) {
      setInitialLoading(false); // Once data is available, stop the loading screen
    }
  }, [scholarship]);

  return (
    <div className="min-h-screen">
      {/* Display the initial loading screen */}
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
          <div className="grid mx-4 py-10 md:mx-0 md:grid-cols-2 p-4 lg:grid-cols-4 gap-10">
            {filteredScholarships.map((item) => (
              <ScholarshipCard key={item._id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllScholarship;
