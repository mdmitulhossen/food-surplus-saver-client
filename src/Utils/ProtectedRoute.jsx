
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <div>Spinar....</div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/login`} replace />
};

export default ProtectedRoute; 