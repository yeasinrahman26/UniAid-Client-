import { useState } from "react";
import useAllScholarship from "../../Hooks/useAllScholarship";
import ScholarshipCard from "./ScholarshipCard";

const AllScholarship = () => {
  const [scholarship] = useAllScholarship();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
  const [filteredScholarships, setFilteredScholarships] = useState(scholarship);

  const handleSearch = () => {
    // Filter scholarships based on the search query
    const filtered = scholarship.filter((item) => {
      const lowerQuery = searchQuery.toLowerCase();
      return (
        item.scholarshipName.toLowerCase().includes(lowerQuery) ||
        item.universityName.toLowerCase().includes(lowerQuery) ||
        item.degree.toLowerCase().includes(lowerQuery)
      );
    });
    setFilteredScholarships(filtered); // Update the filtered scholarships
  };

  return (
    <div className="min-h-screen">
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
        <button onClick={handleSearch} className="btn btn-primary ml-2">
          Search
        </button>
      </div>

      {/* Display filtered scholarships */}
      <div className="grid mx-4 py-10 md:mx-0 md:grid-cols-2 p-4 lg:grid-cols-4 gap-10">
        {filteredScholarships.map((item) => (
          <ScholarshipCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
