import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/register"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div>
      {!hideLayout && (
        <div className="sticky shadow-lg top-0 left-0 right-0  z-50 bg-black backdrop-blur-2xl">
          <NavBar />
        </div>
      )}

      <Outlet />
      

      {!hideLayout && <Footer />}
    </div>
  );
};

export default MainLayout;
