
import { Outlet } from 'react-router-dom';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div className='max-w-[2400px] mx-auto relative'>
            <Navbar />
            <Outlet />
            <Footer />

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;