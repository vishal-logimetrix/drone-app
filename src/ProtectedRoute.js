import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const user = JSON.parse(localStorage.getItem("user"));

    // If user is not logged in, redirect to login page
    if (!user || !user.isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

  return children;
}

export default ProtectedRoute;
