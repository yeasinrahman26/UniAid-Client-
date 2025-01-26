import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";


const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

    }
    return (
      <div className="hero bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen">
        <Helmet>
          <title>UniAid || Login</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center "></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center pt-5 mx-9 font-bold">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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