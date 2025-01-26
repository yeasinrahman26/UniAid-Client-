import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Footer from '../Pages/Footer/Footer';


const MainLayout = () => {
    return (
      <div className="max-w-screen-xl mx-auto">
        <NavBar></NavBar>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;