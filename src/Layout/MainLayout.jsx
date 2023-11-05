
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
const MainLayout = () => {
    return (
        <div className='max-w-[2400px] mx-auto'>
           <Navbar/>
           <Outlet/>
        </div>
    );
};

export default MainLayout;