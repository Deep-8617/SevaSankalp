import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    const user = "admin";
    const pass = "Admin@123";

    if (username === user && password === pass) {
      localStorage.setItem("adminAuthenticated", "true");

      // Navigate to the admin dashboard
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
    padding: "20px",
  };

  const cardStyle = {
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    borderRadius: "50px",
    transition: "background-color 0.3s, transform 0.3s",
  };

  const buttonPrimaryStyle = {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  };

  const buttonPrimaryHoverStyle = {
    backgroundColor: "#0056b3",
    transform: "scale(1.05)",
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center" style={containerStyle}>
      <div className="row w-100">
        <div className="col-md-6 offset-md-3">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
                <h2 className="text-center text-primary">Admin Login</h2>
              </div>
              {error && <p className="text-danger text-center">{error}</p>}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  onKeyDown={handleKeyDown}
                />
              </div>
              <div className="mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control pr-5"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  onKeyDown={handleKeyDown}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="position-absolute end-0 top-50 translate-middle-y"
                  style={{ cursor: "pointer", right: "10px" }}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-block"
                  onClick={handleLogin}
                  style={buttonStyle}
                  onMouseOver={(e) => (e.currentTarget.style = { ...buttonStyle, ...buttonPrimaryHoverStyle })}
                  onMouseOut={(e) => (e.currentTarget.style = { ...buttonStyle, ...buttonPrimaryStyle })}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
