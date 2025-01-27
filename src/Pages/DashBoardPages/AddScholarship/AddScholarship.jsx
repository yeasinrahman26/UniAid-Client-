import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useContext } from "react";
import AuthContext from '../../../Auth/AuthContext'


const AddScholarship = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const axios = useAxios();

  const {user}=useContext(AuthContext)
  const email=user.email

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const imgFile = formData.get("image");
    const formValues = Object.fromEntries(formData.entries());
    delete formValues.image; // We don't need the file in the form data for now
    
      // Upload image to imgbb
      const imgFormData = new FormData();
      imgFormData.append("image", imgFile);
      const res = await axios.post(image_hosting_api, imgFormData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const imageUrl = res.data.data.url;
      console.log("Image uploaded, URL:", imageUrl);
      formValues.imageUrl = imageUrl;
      console.log("Form Values with Image URL:", formValues);
      const add=await axios.post('/allScholarship', formValues)
      if (add.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Scholarship Added Successfully ",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    
    
  };

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        Add A New Scholarship
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-base-300 max-w-3xl mx-auto p-6 rounded-2xl shadow-xl"
      >
        {/* Scholarship Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Scholarship Name
            </span>
          </label>
          <input
            type="text"
            name="scholarshipName"
            placeholder="Enter scholarship name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* University Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              University Name
            </span>
          </label>
          <input
            type="text"
            name="universityName"
            placeholder="Enter university name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="form-control mb-6">
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
            required
          />
        </div>

        {/* University Country */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              University Country
            </span>
          </label>
          <input
            type="text"
            name="universityCountry"
            placeholder="Enter university country"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* University City */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              University City
            </span>
          </label>
          <input
            type="text"
            name="universityCity"
            placeholder="Enter university city"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* University World Rank */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              University World Rank
            </span>
          </label>
          <input
            type="number"
            name="universityRank"
            placeholder="Enter university rank"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Subject Category */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Subject Category
            </span>
          </label>
          <select
            name="subjectCategory"
            className="select select-bordered w-full"
            required
          >
            <option value="Agriculture">Agriculture</option>
            <option value="Engineering">Engineering</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {/* Scholarship Category */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Scholarship Category
            </span>
          </label>
          <select
            name="scholarshipCategory"
            className="select select-bordered w-full"
            required
          >
            <option value="Full fund">Full fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        {/* Degree */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">Degree</span>
          </label>
          <select
            name="degree"
            className="select select-bordered w-full"
            required
          >
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>

        {/* Tuition Fees */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Tuition Fees (Optional)
            </span>
          </label>
          <input
            type="number"
            name="tuitionFees"
            placeholder="Enter tuition fees"
            className="input input-bordered w-full"
          />
        </div>

        {/* Application Fees */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Application Fees
            </span>
          </label>
          <input
            type="number"
            name="applicationFees"
            placeholder="Enter application fees"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Service Charge */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Service Charge
            </span>
          </label>
          <input
            type="number"
            name="serviceCharge"
            placeholder="Enter service charge"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Application Deadline */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Application Deadline
            </span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Scholarship Post Date */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Scholarship Post Date
            </span>
          </label>
          <input
            type="date"
            value={new Date().toISOString().split("T")[0]}
            name="scholarshipPostDate"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Posted User Email */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text text-lg font-semibold">
              Posted User Email
            </span>
          </label>
          <input
            type="email"
            name="postedUserEmail"
            placeholder="Enter email"
            value={email}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full py-3 text-white font-semibold text-lg">
            Add Scholarship
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScholarship;
