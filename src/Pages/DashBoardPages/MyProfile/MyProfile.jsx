import { useContext } from "react";
import AuthContext from "../../../Auth/AuthContext";
import useAdmin from "../../../Hooks/useAdmin";
import UseMode from "../../../Hooks/UseMode";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user || {};

  const [isAdmin] = useAdmin(); 
  const [isMod] = UseMode();


  let role = "User"; 
  if (isAdmin) {
    role = "Admin";
  } else if (isMod) {
    role = "Moderator";
  }

  return (
    <div
      className="max-w-4xl md:mt-52 flex flex-col-reverse 
    md:flex-row justify-center items-center gap-5 mx-auto 
    md:p-16 p-5  rounded-xl shadow-2xl bg-base-300 space-y-6"
    >
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome, {displayName}
        </h1>
        <div className="text-lg font-medium text-gray-700">
          <p>
            <strong>Role: </strong>
            {role}
          </p>
        </div>
      </div>

      <div className="">
        {/* User's photo */}
        {photoURL && (
          <div className="flex justify-center">
            <img
              src={photoURL}
              alt="User Avatar"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
