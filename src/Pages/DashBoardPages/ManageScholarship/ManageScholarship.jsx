import {  MdDeleteForever } from "react-icons/md";
import useAllScholarship from "../../../Hooks/useAllScholarship";
import { FaEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const ManageScholarship = () => {
  const [scholarship, refetch] = useAllScholarship();
  const axios = useAxios();

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
            console.log(res.data);
            if (res.data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "scholarship has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        Manage Scholarship
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Scholarship </th>
              <th>University </th>
              <th>Category</th>
              <th>Degree</th>
              <th>Fees</th>
              <th>Details</th>
              <th> Edit</th>
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
                    <button className="btn  text-green-600 mr-2">
                      Details
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    // onClick={() => handleEdit(item._id)}
                    className="btn  text-blue-700 mr-2"
                  >
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn  text-red-600"
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
  );
};

export default ManageScholarship;
