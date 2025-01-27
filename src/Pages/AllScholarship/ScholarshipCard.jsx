import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ScholarshipCard = ({ item }) => {
  const {
    _id,
    scholarshipName,
    universityName,
    universityCountry,
    universityCity,
    universityRank,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    scholarshipPostDate,
    postedUserEmail,
    imageUrl,
  } = item;

  return (
    <div className="card bg-base-300 hover:shadow-none border-2 border-gray-300 shadow-2xl">
      {/* University Logo or Image */}
      <figure className="bg-white border-b-2 ">
        <img
          src={imageUrl}
          alt="University Logo"
          className="w-full p-2 h-48 object-contain"
        />
      </figure>
      <div className="card-body">
        {/* University Name */}
        <p className="text-xl uppercase font-semibold">{universityName}</p>
        {/* Scholarship Category */}

        <p className=" text-gray-500">{scholarshipCategory}</p>

        {/* University Location */}
        <p className="text-sm text-gray-500">
          {universityCity}, {universityCountry}
        </p>
        {/* Application Deadline */}
        <p className="text-sm text-gray-500">{applicationDeadline}</p>

        {/* Subject Category */}
        <p className="text-sm text-gray-500"> {subjectCategory}</p>

        {/* Application Fees */}
        <p className="text-sm text-gray-500">${applicationFees}</p>
        <p className="text-sm text-gray-500"> 3/5</p>

        {/* Scholarship Details Button */}
        <div className="card-actions justify-start mt-2">
          <Link to={`/allScholarship/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
