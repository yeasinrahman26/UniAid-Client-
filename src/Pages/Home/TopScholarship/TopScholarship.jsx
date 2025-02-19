import { Link } from "react-router-dom";
import ScholarshipCard from "../../AllScholarship/ScholarshipCard";
import { useEffect, useState } from "react";

const TopScholarship = () => {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetch("https://uni-aid-server-site.vercel.app/latestScholarship")
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array if you're using .map()
        setTop(Array.isArray(data) ? data : [data]); // In case it's a single object, wrap it in an array
      })
      .catch((error) => {
        console.error("Error fetching latest scholarship:", error);
        // Optionally, handle the error state here (e.g., show an error message)
      });
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl">
      <h1 className="text-4xl text-center pt-10 font-bold">Top Scholarship</h1>

      <div className="grid mx-4 py-10 md:mx-0 md:grid-cols-3 p-4 gap-10">
        {/* Check if top is an array with data */}
        {top.length > 0 ? (
          top.map((item) => <ScholarshipCard key={item._id} item={item} />)
        ) : (
          <div>No scholarships found</div>
        )}
      </div>

      <div className="flex justify-center items-center pb-10">
        <Link to="/allScholarship">
          <button className="btn btn-primary">View All Scholarships</button>
        </Link>
      </div>
    </div>
  );
};

export default TopScholarship;
