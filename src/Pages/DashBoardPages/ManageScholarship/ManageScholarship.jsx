import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import useAllScholarship from "../../../Hooks/useAllScholarship";
import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

// Function to handle image upload (You will need to implement the image upload logic with a service)
const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post("/your-image-upload-endpoint", formData); // Update endpoint with your server API
  return response.data.imageUrl; // Assuming your server returns the URL of the uploaded image
};

const ManageScholarship = () => {
  const [scholarship, refetch] = useAllScholarship();
  const axios = useAxios();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Handle image upload
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];

      // Upload the file to a server or cloud storage
      try {
        const imageUrl = await uploadImage(file); // Replace with your upload logic
        setSelectedScholarship((prev) => ({
          ...prev,
          [name]: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedScholarship((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle delete action
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
        axios.delete(`/allScholarship/${id}`).then((res) => {
          refetch();
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Scholarship has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Handle modal open and edit action
  const handleEdit = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = {
      scholarshipName: selectedScholarship.scholarshipName,
      universityName: selectedScholarship.universityName,
      universityCountry: selectedScholarship.universityCountry,
      universityCity: selectedScholarship.universityCity,
      universityRank: selectedScholarship.universityRank,
      subjectCategory: selectedScholarship.subjectCategory,
      scholarshipCategory: selectedScholarship.scholarshipCategory,
      degree: selectedScholarship.degree,
      tuitionFees: selectedScholarship.tuitionFees,
      applicationFees: selectedScholarship.applicationFees,
      serviceCharge: selectedScholarship.serviceCharge,
      applicationDeadline: selectedScholarship.applicationDeadline,
      scholarshipPostDate: selectedScholarship.scholarshipPostDate,
      postedUserEmail: selectedScholarship.postedUserEmail,
      imageUrl: selectedScholarship.imageUrl, // Ensure image URL is passed
    };

    try {
      const response = await axios.patch(
        `/allScholarship/${selectedScholarship._id}`,
        updatedItem
      );
      refetch(); // Refetch the updated list of scholarships
      setIsModalOpen(false); // Close the modal after success
      Swal.fire("Success", "Scholarship updated successfully!", "success");
    } catch (error) {
      console.error("Error updating scholarship", error);
      Swal.fire(
        "Error",
        "There was an issue updating the scholarship.",
        "error"
      );
    }
  };

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        Manage Scholarship
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Scholarship</th>
              <th>University</th>
              <th>Category</th>
              <th>Degree</th>
              <th>Fees</th>
              <th>Details</th>
              <th>Edit</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {scholarship.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.imageUrl} alt="Scholarship Image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.scholarshipName}</td>
                <td>{item.universityName}</td>
                <td>{item.subjectCategory}</td>
                <td>{item.degree}</td>
                <td>{item.applicationFees}</td>
                <td>
                  <Link to={`/allScholarship/${item._id}`}>
                    <button className="btn text-green-600 mr-2">Details</button>
                  </Link>
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
                    className="btn text-red-600"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Editing Scholarship */}
      {isModalOpen && selectedScholarship && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white overflow-scroll p-6 rounded-xl max-w-3xl max-h-screen my-5 w-full">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Edit Scholarship: {selectedScholarship.scholarshipName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Scholarship Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Scholarship Name
                  </span>
                </label>
                <input
                  type="text"
                  name="scholarshipName"
                  value={selectedScholarship.scholarshipName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* University Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    University Name
                  </span>
                </label>
                <input
                  type="text"
                  name="universityName"
                  value={selectedScholarship.universityName}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    University Image
                  </span>
                </label>
                <input
                  type="file"
                  name="image"
                  accept=".jpg,.jpeg,.png"
                  className="file-input file-input-bordered file-input-primary w-full"
                  onChange={handleFileChange}
                />
              </div>

              {/* University Country */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    University Country
                  </span>
                </label>
                <input
                  type="text"
                  name="universityCountry"
                  value={selectedScholarship.universityCountry}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* University City */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    University City
                  </span>
                </label>
                <input
                  type="text"
                  name="universityCity"
                  value={selectedScholarship.universityCity}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* University World Rank */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    University World Rank
                  </span>
                </label>
                <input
                  type="number"
                  name="universityRank"
                  value={selectedScholarship.universityRank}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Subject Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Subject Category
                  </span>
                </label>
                <select
                  name="subjectCategory"
                  value={selectedScholarship.subjectCategory}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="Agriculture">Agriculture</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Doctor">Doctor</option>
                </select>
              </div>

              {/* Scholarship Category */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Scholarship Category
                  </span>
                </label>
                <select
                  name="scholarshipCategory"
                  value={selectedScholarship.scholarshipCategory}
                  onChange={handleInputChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="Full">Full</option>
                  <option value="Partial">Partial</option>
                </select>
              </div>

              {/* Degree */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Degree
                  </span>
                </label>
                <input
                  type="text"
                  name="degree"
                  value={selectedScholarship.degree}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Tuition Fees */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Tuition Fees
                  </span>
                </label>
                <input
                  type="number"
                  name="tuitionFees"
                  value={selectedScholarship.tuitionFees}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Application Fees */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Application Fees
                  </span>
                </label>
                <input
                  type="number"
                  name="applicationFees"
                  value={selectedScholarship.applicationFees}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Service Charge */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Service Charge
                  </span>
                </label>
                <input
                  type="number"
                  name="serviceCharge"
                  value={selectedScholarship.serviceCharge}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Application Deadline */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Application Deadline
                  </span>
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  value={selectedScholarship.applicationDeadline}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Scholarship Post Date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">
                    Scholarship Post Date
                  </span>
                </label>
                <input
                  type="date"
                  name="scholarshipPostDate"
                  value={selectedScholarship.scholarshipPostDate}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3 text-white font-semibold text-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageScholarship;
