
import { Link, useLoaderData,  } from "react-router-dom";


const ScholarshipDetails = () => {
  const item = useLoaderData();
  const {
    _id,
    scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    subjectCategory,
    scholarshipCategory,
    applicationFees,
    imageUrl,
  } = item;

  


  return (
    <div className="container min-h-screen mx-auto p-6 sm:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        {universityName}
      </h1>
      <div
        className="flex flex-col  bg-base-300 lg:flex-col items-center 
      lg:items-center  rounded-lg shadow-lg overflow-hidden"
      >
        <div className="lg:w-2/3 rounded-lg bg-white w-full p-4 m-5">
          <img
            src={imageUrl}
            alt={universityName}
            className="w-full h-full 
            object-cover rounded-lg shadow-lg transform 
            hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>

        <div className="lg:w-2/3 w-full p-6 space-y-4">
          <div className="text-lg text-gray-600 space-y-2">
            <p>
              <strong className="text-gray-900">Scholarship Name:</strong>{" "}
              {scholarshipName}
            </p>
            <p>
              <strong className="text-gray-900">Scholarship Category:</strong>{" "}
              {scholarshipCategory}
            </p>
            <p>
              <strong className="text-gray-900">Subject Category:</strong>{" "}
              {subjectCategory}
            </p>
            <p>
              <strong className="text-gray-900">Location:</strong>{" "}
              {universityCity}, {universityCountry}
            </p>
            <p>
              <strong className="text-gray-900">Application Fees:</strong> $
              {applicationFees}
            </p>
          </div>
          {/* Apply Button */}
          <div className="flex justify-center">
            <Link to={`/apply/${_id}`} >
              <button className="btn btn-primary w-full sm:w-48 py-2 mt-4 text-white rounded-full transition-all duration-300 hover:bg-blue-600">
                Apply for Scholarship
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
