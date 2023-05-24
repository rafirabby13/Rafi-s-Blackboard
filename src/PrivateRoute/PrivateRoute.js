import React, { Children, useContext } from 'react';
import { AuthContext } from '../Pages/ContextProvider/ContextProvider.js';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
        
    }
    return children;
};

export default PrivateRoute;