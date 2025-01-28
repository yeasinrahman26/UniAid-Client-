import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { TbFlagCancel } from "react-icons/tb";

const AppliedScholarship = () => {
  const axios = useAxios();
  const { data: scholarships = [] } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axios.get("/apply");
      return res.data;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const handleOpenModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        All Applied Scholarship
      </h2>
      {/* table */}
      <div>
        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* Table head */}
              <thead>
                <tr className="bg-base-300">
                  <th>No</th>
                  <th>Applicant Photo </th>
                  <th>Applicant Name</th>
                  <th>University</th>
                  <th>Subject</th>
                  <th>Contact</th>
                  <th>Details</th>
                  <th>Feedback</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-300 rounded-2xl p-1 h-12 w-12">
                            <img
                              src={item.applicantPhoto}
                              alt={item.User_name}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.User_name}</td>
                    <td className="font-bold">{item.universityName}</td>
                    <td>{item.subjectCategory}</td>
                    <td>{item.phoneNumber}</td>
                    <td>
                      <button
                        onClick={() => handleOpenModal(item)}
                        className="btn text-green-600 mr-2"
                      >
                        Details
                      </button>
                    </td>
                    <td>
                      <button className="btn text-blue-700 mr-2">
                        Feedback
                      </button>
                    </td>
                    <td>
                      <button className="btn text-red-600 ">
                       Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for scholarship details */}
      {isModalOpen && selectedScholarship && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <div className="  text-[#27C398] bg-[#15191E] p-6 rounded-lg shadow-lg max-w-2xl md:w-full ">
            <h2 className="text-2xl font-bold text-center mb-4">
              Scholarship Details
            </h2>
            <div className="space-y-4 flex flex-col justify-center items-center">
              <div>
                <strong>University:</strong>{" "}
                {selectedScholarship.universityName}
              </div>
              <div>
                <strong>Degree:</strong> {selectedScholarship.applyingDegree}
              </div>
              <div>
                <strong>Scholarship Category:</strong>{" "}
                {selectedScholarship.scholarshipCategory}
              </div>
              <div>
                <strong>Subject:</strong> {selectedScholarship.subjectCategory}
              </div>
              <div>
                <strong>Application Deadline:</strong>{" "}
                {selectedScholarship.applicationDeadline}
              </div>
              <div>
                <strong>Service Charge:</strong> $
                {selectedScholarship.serviceCharge}
              </div>
              <div>
                <strong>University Location:</strong>{" "}
                {selectedScholarship.universityCity},{" "}
                {selectedScholarship.universityCountry}
              </div>
              <div>
                <strong>Phone Number:</strong> {selectedScholarship.phoneNumber}
              </div>

              <div>
                <strong>Gender:</strong> {selectedScholarship.gender}
              </div>
              <div>
                <strong>SSC Result:</strong> {selectedScholarship.sscResult}
              </div>
              <div>
                <strong>HSC Result:</strong> {selectedScholarship.hscResult}
              </div>
              <div>
                <strong>Study Gap:</strong> {selectedScholarship.studyGap}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-black text-[#27C398] px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedScholarship;
