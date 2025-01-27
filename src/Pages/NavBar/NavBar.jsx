import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";


const NavBar = () => {
  const { logout, user } = useContext(AuthContext);

  const links = (
    <>
      <li className="font-semibold">
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink className="font-semibold" to={"/allScholarship"}>
          All Scholarship
        </NavLink>
      </li>
      <li>
        <Link className="font-semibold" to={"/dashBoard"}>
          User Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-300 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-gray-300 dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="ml-4 font-bold text-2xl">
          UniAid
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-4">
        {user ? (
          <>
            {/* Avatar with name on hover */}
            <div className="relative group">
              <div className="avatar ">
                <div className="ring-primary ring-offset-base-100 w-10 mt-1 mx-3 rounded-full ring ring-offset-1">
                  <img src={user.photoURL}></img>
                </div>
              </div>
              <div className="absolute -bottom-12 md:-bottom-1 w-40 -left-12 md:-left-40 right-0 px-0 pb-3  text-black font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName}
              </div>
            </div>
            <button onClick={logout} className="btn btn-error">
              Logout
            </button>
          </>
        ) : (
          <div className="space-x-1">
            <Link to={"register"}>
              <button className="btn text-lg hover:text-blue-700 font-normal text-black btn-link">
                Register
              </button>
            </Link>
            <Link to={"login"}>
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
