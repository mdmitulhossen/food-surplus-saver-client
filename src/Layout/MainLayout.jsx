
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Navbar2 from '../components/header/Navbar2';
const MainLayout = () => {
    return (
        <div>
           <Navbar/>
            {/* <Navbar2/> */}
           <Outlet/>
        </div>
    );
};

export default MainLayout;