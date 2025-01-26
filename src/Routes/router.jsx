import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";


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
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register> ,
      },
    ],
    errorElement: (
      <div>
        {" "}
        <h1 className="bg-red-600 p-20 text-center">Error page</h1>{" "}
      </div>
    ),
  },
]);

export default router ;