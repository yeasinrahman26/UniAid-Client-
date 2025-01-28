import { useContext, useState } from "react";
import AuthContext from "../../../Auth/AuthContext";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdRateReview } from "react-icons/md";
import Swal from "sweetalert2";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const axios = useAxios();
  const { refetch, data: items = [] } = useQuery({
    queryKey: ["scholarship", user?.email],
    queryFn: async () => {
      const res = await axios.get(`myApply?email=${email}`);
      return res.data;
    },
  });

  // State to manage modal visibility and form data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleEdit = (item) => {
    setSelectedApplication(item);
    setIsModalOpen(true); // Open the modal when Edit is clicked
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/apply/${id}`).then((res) => {
          refetch();
          console.log(res.data);
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Application has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);

    // Perform the update request (example POST request to an endpoint)
    try {
      const res = await axios.patch(
        `/apply/${selectedApplication._id}`,
        formValues
      );
      console.log(res.data);
      Swal.fire({
        title: "Updated!",
        text: "Your Application has been updated.",
        icon: "success",
      });
      setIsModalOpen(false); // Close modal after successful update
      refetch(); // Refetch to update the displayed data
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "Error!",
        text: "There was an error updating your application.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        My Applications : {items.length}
      </h2>
      {/* Table */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* Table head */}
            <thead>
              <tr className="bg-base-300">
                <th>No</th>
                <th>University</th>
                <th>Location</th>
                <th>Subject</th>
                <th>Degree</th>
                <th>Charge</th>
                <th>feedBack</th>
                <th>Status</th>
                <th>Details</th>
                <th>Review</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td className="font-bold">{item.universityName}</td>
                  <td>
                    {item.universityCity}, {item.universityCountry}
                  </td>
                  <td>{item.subjectCategory}</td>
                  <td>{item.applyingDegree}</td>
                  <td>{item.serviceCharge} $</td>
                  <td>{item.feedback ? item.feedback : "N/A"}</td>
                  <td>{item.status ? "Rejected" : "N/A"}</td>
                  <td>
                    <Link to={`/allScholarship/${item.scholarship_id}`}>
                      <button className="btn text-green-600 mr-2">
                        Details
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn text-lg bg-[#FDE359] mr-2">
                      <MdRateReview />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleEdit(item)}
                      className="btn text-blue-700 mr-2"
                    >
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-red-600 text-white"
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-200 bg-opacity-50">
          <div className="bg-white p-6 rounded-md max-w-96">
            <h2 className="text-2xl mb-4 text-center">Edit Application</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    SSC Result
                  </span>
                </label>
                <input
                  type="text"
                  name="sscResult"
                  maxLength={3}
                  placeholder="Out of 5.00"
                  className="input input-bordered w-full"
                  defaultValue={selectedApplication.sscResult}
                  required
                />
              </div>

              {/* HSC Result */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    HSC Result
                  </span>
                </label>
                <input
                  type="text"
                  name="hscResult"
                  maxLength={3}
                  placeholder="Out of 5.00"
                  className="input input-bordered w-full"
                  defaultValue={selectedApplication.hscResult}
                  required
                />
              </div>

              {/* Gender */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Gender
                  </span>
                </label>
                <select
                  name="gender"
                  className="select select-bordered w-full"
                  required
                  defaultValue={selectedApplication.gender}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  maxLength={11}
                  placeholder="0177"
                  className="input input-bordered w-full"
                  defaultValue={selectedApplication.phoneNumber}
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyApplication;
