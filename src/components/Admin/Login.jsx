import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import characterImage from '../../../src/images/doc/potrait.png';
import backgroundImage from '../../../src/images/doc/us_pro.jpg';


const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = "admin";
    const pass = "Admin@123";

    if (username === user && password === pass) {
      localStorage.setItem("adminAuthenticated", "true");
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

  return (
    <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'blur(8px)', zIndex: -1 }}></div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <img src={characterImage} alt="Character" style={{ position: 'absolute', bottom: '0', left: '0', height: '70%', zIndex: 1 }} />
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
        <div style={{ width: '300px', padding: '20px', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.3)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 123, 255, 0.5)' }}>
          <h2 className="text-center text-primary">Welcome to admin page</h2>
          <p className="text-center">Please enter your User namet and password</p>
          {error && <p className="text-danger text-center">{error}</p>}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User name"
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
              style={{ borderRadius: '50px', backgroundColor: '#007bff', borderColor: '#007bff', transition: 'background-color 0.3s, transform 0.3s' }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            >
              Login
            </button>
          </div>
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-primary">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
