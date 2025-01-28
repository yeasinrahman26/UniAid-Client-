import  { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import AuthContext from '../Auth/AuthContext';

import UseMode from '../Hooks/UseMode';

// eslint-disable-next-line react/prop-types
const AdminRoutes = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isMod]=UseMode()
  const { user, loading, logout } = useContext(AuthContext);

  if (loading || isAdminLoading) {
    return (
      <div className="flex flex-col py-52 justify-center items-center">
        <span className="loading  text-red-400 loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  if (user && isAdmin || user && isMod) {
    return children;
  }

  return logout() ;
};

export default AdminRoutes;