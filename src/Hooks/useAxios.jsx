import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  // for request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stop by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // for response
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function a(error) {
      const status = error.response.status;
      // console.log("status error in the interceptor", status);

      //  for 401 or 403 logout the user and move the user to the login page
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
