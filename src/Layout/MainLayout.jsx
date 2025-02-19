import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';


const MainLayout = () => {
    return (
      <div>
        <div className="sticky top-0 z-50  ">
          <NavBar></NavBar>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;