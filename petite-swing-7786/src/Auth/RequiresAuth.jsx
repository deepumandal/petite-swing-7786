import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.data.isAuthenticated);

  const { pathname } = useLocation();
console.log("pathname", pathname)
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }
};

export default RequireAuth;
