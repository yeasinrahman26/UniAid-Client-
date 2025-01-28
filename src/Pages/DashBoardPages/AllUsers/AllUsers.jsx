import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axios = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });

  const handleOnChange = (user, selectedRole) => {
    axios
      .patch(`/users/role/${user._id}`, { role: selectedRole })
      .then((res) => {
        console.log(res.data);
        refetch(); // Refetch data after role update
      })
      .catch((error) => {
        console.error("Error updating role:", error);
      });
  };

  const handleDeleteUser = (user) => {
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
        console.log(user._id);
        axios.delete(`/users/${user._id}`).then((res) => {
          refetch();
          if (res.data.deleteCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex bg-blue-600 py-2 text-white justify-evenly my-4 ">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <select
                      onChange={(e) => handleOnChange(user, e.target.value)} // Pass selected role
                      name="role"
                      className="select select-bordered w-full"
                      value={user.role}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderator</option>
                    </select>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost bg-red-600 text-white text-2xl"
                  >
                    <MdDelete />
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

export default AllUsers;
