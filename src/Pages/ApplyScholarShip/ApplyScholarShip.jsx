import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const ApplyScholarShip = () => {
  const {
    _id,
    universityName,
    applicationDeadline,
    serviceCharge,
    universityCountry,
    universityCity,
    degree,
    subjectCategory,
    scholarshipCategory,
  } = useLoaderData();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const name = user.displayName;
  const email = user.email;
  console.log(email, name, _id);
  const items = {
    User_name: name,
    User_email: email,
    scholarship_id: _id,
    applicationDeadline:  applicationDeadline,
    serviceCharge:  serviceCharge,
    universityCity: universityCity ,
    universityCountry:  universityCountry ,
  };

  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);

    const dataSend = {
      ...items,
      ...formValues,
    };

    const res = await axios.post("/apply", dataSend);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "applied Successful  ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/allScholarship");
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-4xl text-center mt-10  font-bold">
        Apply to <span className="text-blue-500">{universityName}</span>
      </h1>
      <div className="bg-base-300 max-w-3xl mx-auto p-6 mt-10 rounded-2xl shadow-xl">
        <form
          onSubmit={handleSubmit}
          // onSubmit={handleSubmit}
          className=""
        >
          {/* Applicant Phone Number */}
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
              required
            />
          </div>

          {/* Applicant Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Applicant Photo
              </span>
            </label>
            <input
              type="url"
              name="applicantPhoto"
              value={user.photoURL}
              accept=".jpg,.jpeg,.png"
              className="file-input file-input-bordered bg-white pl-2 w-full"
              required
            />
          </div>

          {/* Applicant Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Address</span>
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="address.village"
                placeholder="Village"
                className="input input-bordered w-full capitalize"
                required
              />
              <input
                type="text"
                name="address.district"
                placeholder="District"
                className="input input-bordered w-full capitalize"
                required
              />
              <input
                type="text"
                name="address.country"
                placeholder="Country"
                className="input input-bordered w-full capitalize"
                required
              />
            </div>
          </div>

          {/* Applicant Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Gender</span>
            </label>
            <select
              name="gender"
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Applying Degree */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Applying Degree
              </span>
            </label>
            <select
              name="applyingDegree"
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                {degree}
              </option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          {/* SSC Result */}
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
              required
            />
          </div>

          {/* Study Gap */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Study Gap <small>(optional)</small>
              </span>
            </label>
            <select name="studyGap" className="select select-bordered w-full">
              <option value="" disabled>
                Select if applicable
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Read-only Fields */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                University Name
              </span>
            </label>
            <input
              type="text"
              name="universityName"
              value={universityName}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Scholarship Category
              </span>
            </label>
            <input
              type="text"
              name="scholarshipCategory"
              value={scholarshipCategory}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">
                Subject Category
              </span>
            </label>
            <input
              type="text"
              name="subjectCategory"
              value={subjectCategory}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-white font-semibold text-lg"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyScholarShip;
