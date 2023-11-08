
import Spinner from '../components/spinner/Spinner';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <div className='w-full h-[200px] bg-[#8DC53E]/30 flex justify-center items-center'><Spinner/></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace />
};

export default ProtectedRoute; 