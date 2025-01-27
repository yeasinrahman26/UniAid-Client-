import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard";
import MyProfile from "../Pages/DashBoardPages/MyProfile/MyProfile";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allScholarship",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
    errorElement: (
      <div>
        {" "}
        <h1 className="bg-red-600 p-20 text-center">Error page</h1>{" "}
      </div>
    ),
  },
  {
    path: "/dashBoard",
    element: <DashBoard></DashBoard>,
    errorElement: (
      <div>
        {" "}
        <h1 className="bg-red-600 p-20 text-center">Error page</h1>{" "}
      </div>
    ),
    children: [
      {
        path: "/dashBoard",
        element:<MyProfile></MyProfile>
      },
    ],
  },
]);

export default router ;