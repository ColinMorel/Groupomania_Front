import React, { useContext } from 'react';
import Auth from '../contexts/Auth';
import { Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const AuthenticatedRoute = ({path, element}) => {
    const {isAuthenticated} = useContext(Auth);
    let navigate = useNavigate();

    return isAuthenticated ? (
        <Route exact path={path} element={element}/>
    ) : ( navigate('/login', { replace: true }))
}
export default AuthenticatedRoute; 