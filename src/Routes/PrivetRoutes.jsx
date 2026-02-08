import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import UseMode from "../Hooks/UseMode";


// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();

  const [isMod, isModLoading] = UseMode();
  const { user, loading, } =
    useContext(AuthContext);

  if (loading || isAdminLoading || isModLoading) {
    return (
      <div className="flex flex-col py-52 justify-center items-center">
        <span className="loading  text-red-400 loading-bars loading-lg"></span>
      </div>
    );
  }

  if (  user && (isAdmin || isMod || !isAdmin)) {
    return children;
  }

  return <Navigate to={"/login"}></Navigate>;
};

export default PrivetRoutes;
