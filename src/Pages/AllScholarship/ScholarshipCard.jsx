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

  // Calculate days left
  const getDaysLeft = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const daysLeft = getDaysLeft(applicationDeadline);

  return (
    <Link to={`/allScholarship/${_id}`}>
      <div className="group relative h-72 border-2 border-white overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl">
        {/* Image layer - slides up on hover */}
        <div className="absolute  inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          <img
            src={imageUrl}
            alt={universityName}
            className="h-full w-full p-5 bg-white  object-contain object-center"
          />
          {/* Subtle gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

          {/* Only show university name on image
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/70 to-transparent p-4">
            <h3 className="text-lg font-bold  text-black">{universityName}</h3>
          </div> */}
        </div>

        {/* Details layer - slides up from bottom on hover */}
        <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          <div className="flex h-full flex-col justify-between p-5">
            {/* Top section */}
            <div>
              {/* University name */}
              <h3 className="mb-3 text-xl font-bold text-black">
                {universityName}
              </h3>

              {/* Badges */}
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#4A40F7] px-3 py-1 text-xs font-bold text-white">
                  {scholarshipCategory}
                </span>
                {daysLeft > 0 && daysLeft <= 30 && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold text-white ${
                      daysLeft <= 7 ? "bg-red-500" : "bg-orange-500"
                    }`}
                  >
                    {daysLeft}d left
                  </span>
                )}
              </div>

              {/* Location & Subject */}
              <div className="mb-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#4A40F7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    {universityCity}, {universityCountry}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-[#4A40F7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span>{subjectCategory}</span>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Application Fee</p>
                  <p className="font-bold text-black">${applicationFees}</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">Rating</p>
                  <p className="font-bold text-black">3.0 ⭐</p>
                </div>
              </div>
            </div>

            {/* Bottom - CTA button */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {new Date(applicationDeadline).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <div className="flex items-center gap-1 font-semibold text-[#4A40F7]">
                <span className="text-sm">View Details</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hover border effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-inset ring-[#4A40F7] transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
    </Link>
  );
};

export default ScholarshipCard;
