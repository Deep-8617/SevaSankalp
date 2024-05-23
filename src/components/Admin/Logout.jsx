import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

const AdminLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/");
    message.success('Successfully Logged out');
  }, []);
  return null;
};

export default AdminLogout;
