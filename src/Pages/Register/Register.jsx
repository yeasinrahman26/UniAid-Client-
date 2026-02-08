import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import AuthContext from "../../Auth/AuthContext";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const axiosPublic = useAxiosPublic();

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const { createUser, setUser, updateProfileUser, loading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, photo, password, email);

    // password validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      setError({
        ...error,
        password:
          "Password must be 6 characters with uppercase, lowercase, and a number.",
      });
      setIsLoading(false);
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        updateProfileUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          //
          const userInfo = {
            name: name,
            email: email,
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
            }
          });

          setUser(user);

          loading(true);
        });
        navigate("/");

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: `${error.message}`,
          text: "Something went wrong!",
        });
        // //console.log(error);
      });
  };
  return (
    <div className="min-h-screen max-w-screen-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <Helmet>
        <title>UniAid || Register</title>
      </Helmet>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blue-200 opacity-10 text-6xl animate-float">
          🎓
        </div>
        <div className="absolute top-1/3 right-1/4 text-indigo-200 opacity-10 text-5xl animate-float animation-delay-2000">
          📚
        </div>
        <div className="absolute bottom-1/4 left-1/3 text-purple-200 opacity-10 text-7xl animate-float animation-delay-4000">
          ✨
        </div>
        <div className="absolute top-2/3 right-1/3 text-blue-300 opacity-10 text-6xl animate-float animation-delay-3000">
          🌟
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Register Form */}
            <div className="w-full">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">Join UniAid!</h2>
                  <p className="text-blue-100">
                    Create your account and start your scholarship journey
                  </p>
                </div>

                {/* Register Form */}
                <form onSubmit={handleRegister} className="px-8 py-8 space-y-5">
                  <div className="flex flex-col md:flex-row md:gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 block">
                        Photo URL
                      </label>
                      <input
                        type="url"
                        name="photo"
                        placeholder="https://example.com/photo.jpg"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 block">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Create a strong password"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    {error.password && (
                      <p className="text-red-600 text-sm mt-1">
                        {error.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                {/* Login Link */}
                <div className="px-8 pb-6">
                  <p className="text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>

                {/* Divider */}
                <div className="px-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>

                {/* Google Login */}
                <div className="px-8 py-6 flex justify-center">
                  <GoogleLogin />
                </div>
              </div>

              {/* Privacy Note */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  We protect your privacy and never share your data
                </p>
              </div>
            </div>

            {/* Right Side - Quotes & Information */}
            <div className="text-center lg:text-left space-y-4">
              {/* Logo/Brand */}
              <div className="space-y-3">
                <Link to="/" className="inline-block">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    UniAid
                  </h1>
                </Link>
                <p className="text-xl text-gray-600 font-medium">
                  Your Gateway to Success
                </p>
              </div>

              {/* Motivational Quote */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl py-4 px-8  shadow-lg border border-white/50">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-2xl lg:text-3xl text-gray-800 font-serif italic leading-relaxed mb-4">
                  &quot;The future belongs to those who believe in the beauty of
                  their dreams.&quot;
                </p>
                <p className="text-right text-gray-600 font-semibold">
                  — Eleanor Roosevelt
                </p>
              </div>

              {/* Benefits List */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Why Join UniAid?
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Access 200+ Scholarships
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Browse and apply to hundreds of opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Personalized Matching
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Find scholarships tailored to your profile
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Application Tracking
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Monitor your progress in one place
                    </p>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="hidden lg:block">
                <p className="text-lg text-gray-700 font-medium italic">
                  &quot;Join 50,000+ students who have found their perfect
                  scholarship match with UniAid.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Register;
