import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/");
  }, []);
  return null;
};

export default AdminLogout;
