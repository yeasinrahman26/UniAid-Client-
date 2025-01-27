import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex flex-col py-52 justify-center items-center">
        <span className="loading  text-red-400 loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoutes;
