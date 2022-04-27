import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// eta akta higher order component eikhne route er vitor props diea take return kora hocce 
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? (
        <div>
            <Routes><Route {...rest}>{(props) => <Component {...props} />}</Route></Routes>
        </div>
        //eikhne render props use kora hoice//karon jdi passing component er vitor jdi props thake tahle seta sudu render props er maddhome jabe
    ) : (
        <Navigate to="/login" />
    );


}

// export const PrivateRoute = ({ children, element: Component, ...rest }) => {
//     const { currentUser } = useAuth();
//     return currentUser ? (
//         <div>
//             <Routes><Route {...rest}>{(props) => <Component {...props} />}</Route></Routes>
//         </div>
//     ) : (
//         <Navigate to="/login" />
//     );
// };