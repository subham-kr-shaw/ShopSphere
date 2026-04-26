import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { jwt, role } = useSelector(store => store.auth);

    // ✅ not logged in
    if (!jwt) return <Navigate to="/signin" replace />;

    // ✅ admin can access ALL routes including customer routes
    if (role === "admin") return children;

    // ✅ route needs specific role but user doesn't have it
    if (requiredRole && role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;