import React, { useContext } from "react";
import { LoginInfo } from "../../Usecontext/UseContext";
import { Outlet, Navigate } from "react-router-dom";

const Protectedroutes = () => {
  const {
    state: { userInfo },
  } = useContext(LoginInfo);
  return <>{userInfo ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default Protectedroutes;
