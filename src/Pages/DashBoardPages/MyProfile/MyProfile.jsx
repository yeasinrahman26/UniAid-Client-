import { useContext } from "react";
import AuthContext from "../../../Auth/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext); 
  const { displayName, photoURL } = user || {}; 

  return (
    <div className="max-w-4xl md:mt-52 flex flex-col-reverse 
    md:flex-row justify-center items-center gap-5 mx-auto 
    md:p-16 p-5  rounded-xl shadow-2xl bg-base-300 space-y-6">
      <div className="flex-1 space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome, {displayName}
        </h1>
        <div className="text-lg font-medium text-gray-700">
          <p>
            <strong>Role:{user.role} </strong>
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
