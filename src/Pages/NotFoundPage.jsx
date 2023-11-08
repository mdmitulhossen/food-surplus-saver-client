import { useNavigate } from 'react-router-dom';
import notFoundImg from '../assets/404.svg';
import { Helmet } from 'react-helmet';
const NotFoundPage = () => {
    const navigate = useNavigate()  
    return (
        <div className="foodContainer relative">
            <Helmet><title>Food-Saver | Not-found</title></Helmet>
            <button onClick={()=>navigate('/')} className='px-4 py-2 font-semibold text-sm text-white bg-[#25D3B5] absolute top-5 lg:top-10 xl:top-20 rounded hover:bg-[#0C4428] duration-200 flex justify-center items-center'>
                <i className='bx bx-left-arrow-alt bx-fade-left' ></i>
                Back Home
            </button>
            <div className="h-screen flex justify-center items-center">
                <img src={notFoundImg} className='w-3/5 full mx-auto object-fill' alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;