import { useContext } from "react";
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

  return (
    <div className="mx-4 md:mx-10 my-10">
      <h2 className="text-4xl mb-5 text-center font-bold text-primary">
        My Applications : {items.length}
      </h2>
      {/* table */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="bg-base-300">
                <th>No</th>
                <th>University</th>
                <th>Location</th>
                <th>Subject</th>
                <th>Degree</th>
                <th>Charge</th>
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
                  <td>
                    <Link to={`/allScholarship/${item.scholarship_id}`}>
                      <button className="btn text-green-600 mr-2">
                        Details
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      // onClick={() => handleEdit(item)}
                      className="btn  text-lg bg-[#FDE359] mr-2"
                    >
                      <MdRateReview />
                    </button>
                  </td>
                  <td>
                    <button
                      // onClick={() => handleEdit(item)}
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
    </div>
  );
};

export default MyApplication;
