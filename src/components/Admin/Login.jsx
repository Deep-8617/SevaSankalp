import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2 class="text-center text-dark mt-5">Admin Login</h2>
          <div class="card my-5" style={{ backgroundColor: "aliceblue" }}>
            <div class="card-body cardbody-color p-lg-5" action="">
              <div class="text-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div class="mb-3">
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                  type="text"
                  class="form-control"
                  id="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
              <div class="text-center">
                <button
                  class="btn btn-dark px-5 mb-5 w-100"
                  onClick={handleLogin}
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
