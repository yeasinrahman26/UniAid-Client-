import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Auth/AuthContext";
import { RiLogoutBoxRLine } from "react-icons/ri";


const NavBar = () => {
  const { logout, user } = useContext(AuthContext);

  const links = (
    <>
      <li
        className="font-semibold
       hover:bg-gray-100 hover:text-black rounded-lg lg:hover:bg-transparent  lg:hover:border-white lg:border-b border-black lg:rounded-none lg:hover:text-white "
      >
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li
        className="font-semibold
       hover:bg-gray-100 hover:text-black rounded-lg lg:hover:bg-transparent lg:hover:border-b lg:rounded-none lg:hover:text-white "
      >
        <NavLink className="font-semibold" to={"/allScholarship"}>
          All Scholarship
        </NavLink>
      </li>
      <li
        className="font-semibold
       hover:bg-gray-100 hover:text-black rounded-lg lg:hover:bg-transparent lg:hover:border-b lg:rounded-none lg:hover:text-white "
      >
        <Link className="font-semibold" to={"/gallery"}>
          Gallery
        </Link>
      </li>

      <li
        className="font-semibold
       hover:bg-gray-100 hover:text-black rounded-lg lg:hover:bg-transparent lg:hover:border-b lg:rounded-none lg:hover:text-white "
      >
        <NavLink className="font-semibold" to={"/faq"}>
          FAQ
        </NavLink>
      </li>
      <li
        className="font-semibold
       hover:bg-gray-100 hover:text-black rounded-lg lg:hover:bg-transparent lg:hover:border-b lg:rounded-none lg:hover:text-white "
      >
        <NavLink className="font-semibold" to={"/contact&support"}>
          Contact & Support
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar text-white  max-w-screen-2xl mx-auto  ">
      <div className="navbar-start ">
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
            className="menu menu-sm bg-black dropdown-content   rounded-box z-1 mt-5 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="ml-4 text-white hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300 font-bold text-2xl"
        >
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
                  <Link to={"/dashBoard"}>
                    <img src={user.photoURL}></img>
                  </Link>
                </div>
              </div>
              {/* <div className="absolute -bottom-12 md:-bottom-1 w-40 -left-12 md:-left-40 right-0 px-0 pb-3  text-black font-bold  opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName}
              </div> */}
            </div>
            <button
              onClick={logout}
              className="btn shadow-none border-none bg-red-500 hover:bg-red-600 text-white"
            >
              <RiLogoutBoxRLine className="text-2xl " />
              Logout
            </button>
          </>
        ) : (
          <div className="space-x-1">
            <Link to={"register"}>
              <button className="btn text-lg hover:text-gray-300 font-normal text-white btn-link">
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
