import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useContext, useState } from "react";
import AuthContext from "../../Auth/AuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // login validation
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: user?.name,
          email: user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `welcome ${user.displayName}`,
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `welcome back ${user.displayName}`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });

        navigate(from);
      })
      .catch((error) => {
        const email = error.customData.email;
        Swal.fire({
          icon: "error",
          title: `${email}  Email / Password`,
          text: `check Email & Password try again `,
        });
      });
  };

  const handleAdminLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("Iamadmin");
  };

  const handleModeratorLogin = () => {
    setEmail("mod@gmail.com");
    setPassword("Iammod");
  };

  return (
    <div className="hero bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen">
      <Helmet>
        <title>UniAid || Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center pt-5 mx-9 font-bold">
            Login now!
          </h1>
          {/* Admin and Moderator Buttons */}
          
          <div className="flex mt-10 justify-center items-center gap-2">
            <h1 className="text-xl font-medium">Use As a</h1>
            <button onClick={handleAdminLogin} className="badge badge-primary ">
              Admin
            </button>
            OR
            <button
              onClick={handleModeratorLogin}
              className="badge badge-accent"
            >
              Moderator
            </button>
          </div>

          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-block btn-primary text-white bg-[#046cf5]">
                Login
              </button>
            </div>
          </form>
          <h1 className="text-center pb-5 font-semibold">
            {" "}
            Don`t have an Account ?{" "}
            <Link to={"/register"} className="px-1 text-red-600 font-bold">
              Register
            </Link>
          </h1>
          <div className="divider">Or</div>

          <div className="mx-auto pb-5">
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
