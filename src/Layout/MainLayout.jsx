import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {

    const location = useLocation();

    const noLayoutRoutes = ["/login", "/register"];

    const hideLayout = noLayoutRoutes.includes(location.pathname);

    return (
      <div>
        {!hideLayout && (
          <div className="sticky top-0 z-50">
            <NavBar />
          </div>
        )}

          <Outlet />
        <div className="max-w-screen-xl mx-auto">
        </div>

        {!hideLayout && <Footer />}
      </div>
    );
};

export default MainLayout;
