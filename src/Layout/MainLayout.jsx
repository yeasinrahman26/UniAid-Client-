import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';


const MainLayout = () => {
    return (
      <div>
        <NavBar></NavBar>
        <div className="max-w-screen-xl mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;