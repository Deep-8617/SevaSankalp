import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <style>
        {`
          .divider::before,
          .divider::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #eee;
          }
          .admin-login-heading {
            position: relative;
            top: 10px;
            left: 20px;
          }
          .login-card {
            position: relative;
            max-width: 600px;
            border: none; /* Remove the original border */
            
            background: linear-gradient(to right, #ffe0b2, #b2ebf2, #c5e1a5); /* Add a gradient background */
            background-size: 200% 100%; /* Double the width to create space for the wave */
            animation: wave 5s infinite alternate; /* Add animation for a wave effect */
          }
          
          @keyframes wave {
            0% {
              background-position: 0 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          
          /* Custom Button CSS */
          .custom-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .custom-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://cdn.pixabay.com/photo/2012/04/18/19/51/doctor-37707_1280.png" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <MDBCard className="login-card">
            <MDBCardBody>
              <h3 className="mb-4 admin-login-heading">Admin Login</h3>

              <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='text' size="md" style={{ width: '100%' }}
                onChange={(e) => setUsername(e.target.value)} />

              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type={passwordVisible ? 'text' : 'password'} size="md" style={{ width: '100%' }}
                onChange={(e) => setPassword(e.target.value)} />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Show' onChange={togglePasswordVisibility} />
              </div>

              {error && <p style={{ color: "red" }}>{error}</p>}

              {/* Manual Sign In Button */}
              <button className="custom-button" onClick={handleLogin}>Sign In</button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminLogin;
