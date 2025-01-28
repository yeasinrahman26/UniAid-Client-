import { Helmet } from "react-helmet-async";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";
import UseMode from "../Hooks/UseMode";





const DashBoard = () => {



  const [isAdmin] = useAdmin();

  const [isMod] =UseMode();

  // console.log(isMod,isAdmin);
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
        <div className="p-8 ">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side overflow-y-auto">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="w-64 min-h-screen bg-blue-500 text-white overflow-y-auto">
          <div className="flex flex-col my-10 items-center justify-center">
            <Link to="/">
              <h1 className="text-4xl hover:text-black font-bold">UniAid</h1>
            </Link>
          </div>
          <ul className="menu text-lg font-medium">
            <li>
              <NavLink to="/dashboard">
              <span>MY Profile</span>
              </NavLink>
            </li>
            {/* Admin links */}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/users">
                    <span>Manage Users</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage">
                    <span>Manage Scholarships</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addScholarship">
                    <span>Add Scholarship</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allReviews">
                    <span>All reviews</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allAppliedScholarship
"
                  >
                    <span>All applied Scholarship</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Moderator links */}
            {isMod && !isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manage">
                    <span>Manage Scholarships</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addScholarship">
                    <span>Add Scholarship</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allReviews">
                    <span>All reviews</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allAppliedScholarship
"
                  >
                    <span>All applied Scholarship</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* User links */}
            {!isAdmin && !isMod && (
              <>
                <li>
                  <NavLink to="/dashboard/application">
                    <span>My Application</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myReviews">
                    <span>My reviews</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Shared links (available for everyone) */}
            <div className="border-b-2 border-black my-5"></div>
            <li>
              <NavLink to="/">
                <span>Home</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
