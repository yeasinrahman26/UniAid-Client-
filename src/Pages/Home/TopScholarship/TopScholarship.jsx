import { Link } from "react-router-dom";
import ScholarshipCard from "../../AllScholarship/ScholarshipCard";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AuthContext from "../../../Auth/AuthContext";

const TopScholarship = () => {
  const [top, setTop] = useState([]);
  const { loading } = useContext(AuthContext);

  console.log(top);

  useEffect(() => {
    fetch("https://uni-aid-server-site.vercel.app/latestScholarship")
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array if you're using .map()
        setTop(Array.isArray(data) ? data : [data]); // In case it's a single object, wrap it in an array
      })
      .catch((error) => {
        console.error("Error fetching latest scholarship:", error);
        // Optionally, handle the error state here (e.g., show an error message)
      });
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-100 rounded-xl">
      {/* Animated Background Layer with Framer Motion - now visible */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-gradient-to-br from-[#4A40F7]/30 to-purple-400/30 blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[15%] top-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/25 to-pink-400/25 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/25 to-[#4A40F7]/30 blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [-10, 10, -10],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-[5%] top-[15%] h-3 w-3 rounded-full bg-[#4A40F7]/60"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-[25%] top-[45%] h-4 w-4 rounded-full bg-purple-400/50"
          animate={{
            y: [0, -80, 0],
            x: [0, -40, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[10%] top-[25%] h-3 w-3 rounded-full bg-pink-400/60"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-[30%] top-[60%] h-4 w-4 rounded-full bg-[#4A40F7]/50"
          animate={{
            y: [0, -120, 0],
            x: [0, 30, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[30%] left-[40%] h-3 w-3 rounded-full bg-purple-400/60"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[20%] h-4 w-4 rounded-full bg-blue-400/50"
          animate={{
            y: [0, -90, 0],
            x: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* more */}
        {/* Additional Floating particles (Double Amount) */}
        <motion.div
          className="absolute left-[10%] bottom-[10%] h-2 w-2 rounded-full bg-pink-400/60"
          animate={{
            y: [0, -70, 0],
            x: [0, 40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[5%] bottom-[40%] h-5 w-5 rounded-full bg-purple-500/40"
          animate={{
            y: [0, -110, 0],
            x: [0, -60, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[50%] top-[10%] h-3 w-3 rounded-full bg-blue-400/50"
          animate={{
            y: [0, -90, 0],
            x: [0, 70, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[40%] top-[15%] h-4 w-4 rounded-full bg-[#4A40F7]/60"
          animate={{
            y: [0, -60, 0],
            x: [0, -50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[35%] bottom-[5%] h-3 w-3 rounded-full bg-cyan-400/50"
          animate={{
            y: [0, -130, 0],
            x: [0, 30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[15%] top-[55%] h-2 w-2 rounded-full bg-indigo-400/60"
          animate={{
            y: [0, -75, 0],
            x: [0, 45, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content - relative positioning so it appears above background */}
      <div className="relative pt-10">
        {/* Header Section  */}
        <div
          className="max-w-screen-2xl mx-auto md:gap-2  flex flex-col md:flex-row
        items-center justify-between"
        >
          {/* Heading part */}
          <motion.div
            className="pl-6  text-start "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-3 text-4xl font-bold text-black">
              Top <span className="text-[#4A40F7]">Scholarships</span>
            </h1>
            <p className="text-lg text-gray-600">
              Discover the best scholarship opportunities for your future
            </p>
            {/* Decorative line */}
            <motion.div
              className=" mt-4 h-1 w-52 rounded-full
             bg-gradient-to-r from-[#4A40F7] to-purple-500"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          {/* View All Button */}
          <motion.div
            className="md:flex  hidden justify-end items-center pr-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/allScholarship">
              <motion.button
                className="group relative overflow-hidden rounded-xl bg-[#4A40F7] px-8 py-4 font-bold text-white shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(74, 64, 247, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Scholarships
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </span>
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scholarship Cards Grid */}
        <motion.div
          className="max-w-screen-2xl mx-auto lg:px-6  grid py-10 md:pb-24  md:grid-cols-3 lg:grid-cols-4 p-4 gap-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Check if top is an array with data */}
          {loading ? (
            <>
              <span className="loading loading-bars loading-xl text-blue-500"></span>
            </>
          ) : top.length > 0 ? (
            top.slice(0, 4).map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ScholarshipCard item={item} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex min-h-[300px] items-center justify-center">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="mb-4 text-6xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🎓
                </motion.div>
                <p className="text-xl font-semibold text-gray-700">
                  No scholarships found
                </p>
                <p className="mt-2 text-gray-500">
                  Check back soon for new opportunities!
                </p>
              </motion.div>
            </div>
          )}
        </motion.div>
        {/* View All Button */}
        <motion.div
          className="  md:hidden flex justify-center items-center pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/allScholarship">
            <motion.button
              className="group relative overflow-hidden rounded-xl bg-[#4A40F7] px-8 py-4 font-bold text-white shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(74, 64, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View All Scholarships
                <motion.svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </motion.svg>
              </span>
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TopScholarship;
