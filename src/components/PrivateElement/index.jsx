import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateElement = ({ allowedRoles = [], children }) => {
  const userInfo = useSelector((state) => state.auths.userData);
  if (!userInfo.token)
    return (
      <Navigate
        to={"/login"}
        replace={true}
        state={{ msg: "You have to login first", isRedirected: true }}
      />
    );
  if (allowedRoles.length > 0 && !allowedRoles.includes(userInfo.role))
    return (
      <Navigate
        to={"/"}
        replace={true}
        state={{ msg: "Forbidden", isRedirected: true }}
      />
    );
  return children;
};

export default PrivateElement;
