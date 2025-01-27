import { Helmet } from "react-helmet-async";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  const isAdmin = true; // Set to true if the user is an admin
  const isMod = false;
  return (
    <div className="drawer md:drawer-open">
      <Helmet>
        <title>UniAid || DashBoard</title>
      </Helmet>
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Main Content */}
        <div className="navbar bg-base-100 md:hidden">
          <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
            <IoMenu className="text-2xl" />
          </label>
          <h1 className="text-2xl font-bold">UniAid</h1>
        </div>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side overflow-y-auto">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="w-64 min-h-screen bg-blue-500 text-white overflow-y-auto">
          <div className="flex flex-col my-10 items-center justify-center">
            <Link to="/">
              <h1 className="text-4xl font-bold">UniAid</h1>
            </Link>
          </div>
          <ul className="menu text-xl font-medium">
            <li>
              <NavLink to="/dashboard">
                <span>MY Profile</span>
              </NavLink>
            </li>
            {/* Admin links */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/adminDashboard">
                    <span>Admin Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addScholarship">
                    <span>Add Scholarship</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Moderator links */}
            {isMod && !isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/modDashboard">
                    <span>Moderator Dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addScholarship">
                    <span>Add Scholarship</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* User links */}
            {!isAdmin && !isMod && (
              <>
                <li>
                  <NavLink to="/dashboard/userDashboard">
                    <span>User Dashboard</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Shared links (available for everyone) */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allScholarship">
                <span>All Scholarship</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
