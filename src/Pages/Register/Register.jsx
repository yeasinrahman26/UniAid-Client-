import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Register = () => {

    const [error, setError] = useState({});

    const handleRegister=e=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photo, password, email);

      // password validation
      const regex = /^[A-Za-z]{6,}$/;
      if (!regex.test(password)) {
        setError({
          ...error,
          password:
            "Password must be 6 characters with uppercase, lowercase, and a number.",
        });
        return;
      }
    }
    return (
      <div className="hero bg-base-100 min-h-screen">
        <Helmet>
          <title>UniAid || Register</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl text-center pt-5 mx-4 md:mx-9 font-bold">
              Register now!
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered"
                  required
                />
              </div>
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
                {error.password && (
                  <label className="text-red-600">{error.password}</label>
                )}
              </div>
              <div className="form-control  mt-6">
                <button className="btn btn-full btn-primary text-white bg-[#046cf5]">
                  Register
                </button>
              </div>
            </form>
            <div className="divider">Or</div>
            <h1 className="text-center pb-5 font-semibold">
              Already have an Account?
              <Link to="/login" className="px-1 text-red-600 font-bold">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
};

export default Register;