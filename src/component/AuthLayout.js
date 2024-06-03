import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/AuthLayout.css";

const AuthLayout = ({ children, showBackground }) => {
  useEffect(() => {
    if (showBackground) {
      document.body.classList.add("auth-background");
    } else {
      document.body.classList.remove("auth-background");
    }
    return () => {
      document.body.classList.remove("auth-background");
    };
  }, [showBackground]);

  return <>{children}</>;
};

export default AuthLayout;
