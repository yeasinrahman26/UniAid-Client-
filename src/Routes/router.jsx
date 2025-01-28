import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard";
import MyProfile from "../Pages/DashBoardPages/MyProfile/MyProfile";
import AddScholarship from "../Pages/DashBoardPages/AddScholarship/AddScholarship";
import AllScholarship from "../Pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../Pages/ScholarshipDetails/ScholarshipDetails";
import PrivetRoutes from "./PrivetRoutes";
import AllUsers from "../Pages/DashBoardPages/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import ManageScholarship from "../Pages/DashBoardPages/ManageScholarship/ManageScholarship";
import ApplyScholarShip from "../Pages/ApplyScholarShip/ApplyScholarShip";
import MyApplication from "../Pages/DashBoardPages/MyApplication/MyApplication";
import MyReview from "../Pages/DashBoardPages/MyReview/MyReview";
import AllReview from "../Pages/DashBoardPages/AllReview/AllReview";
import AppliedScholarship from "../Pages/DashBoardPages/AppliedScholarship/AppliedScholarship";

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
        path: "allScholarship",
        element: <AllScholarship></AllScholarship>,
      },
      {
        path: "allScholarship/:id",
        element: (
          <PrivetRoutes>
            <ScholarshipDetails></ScholarshipDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://uni-aid-server-site.vercel.app/allScholarship/${params.id}`
          ),
      },
      {
        path: "apply/:id",
        element: (
          <PrivetRoutes>
            <ApplyScholarShip></ApplyScholarShip>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://uni-aid-server-site.vercel.app/allScholarship/${params.id}`
          ),
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
      <div className="bg-[#8C52FE]">
        {" "}
        <img
          className="w-full h-screen object-none"
          src="https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp"
          alt=""
        />
      </div>
    ),
  },
  {
    path: "/dashBoard",
    element: (
      <PrivetRoutes>
        <DashBoard></DashBoard>
      </PrivetRoutes>
    ),
    errorElement: (
      <div>
        <h1 className="bg-red-600 p-20 text-center">Error page</h1>
      </div>
    ),
    children: [
      {
        path: "/dashBoard",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "myReviews",
        element: <MyReview></MyReview>,
      },
      // admin and mod only
      {
        path: "allReviews",
        element: (
          <AdminRoutes>
            <AllReview></AllReview>
          </AdminRoutes>
        ),
      },
      {
        path: "allAppliedScholarship",
        element: (
          <AdminRoutes>
            <AppliedScholarship></AppliedScholarship>
          </AdminRoutes>
        ),
      },

      {
        path: "addScholarship",
        element: (
          <AdminRoutes>
            <AddScholarship></AddScholarship>
          </AdminRoutes>
        ),
      },
      {
        path: "manage",
        element: (
          <AdminRoutes>
            <ManageScholarship />
          </AdminRoutes>
        ),
      },

      {
        path: "users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
