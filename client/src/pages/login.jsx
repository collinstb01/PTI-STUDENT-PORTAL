import React, { useEffect, useState } from "react";
import "../styles/login.css";
import cuate from "../images/cuate.png";
import oyinlogo from "../images/oyinLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getIp, loginUser } from "../features/AuthSlice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const Login = () => {
  const { IP_ADDRESS, user } = useSelector((state) => state.auth);
  const [errorMessage, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    IP: "",
  });
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    dispatch(getIp());
  }, []);
  console.log(IP_ADDRESS);
  useEffect(() => {
    setFormData({ ...formData, IP: IP_ADDRESS });
  }, [IP_ADDRESS]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(loginUser({ ...formData, navigate, setError }));
  };
  return (
    <section>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mt-5">
            <img src={cuate} alt="" width="100%" />
          </div>
          <div class="col-md-6 text-center">
            <img src={oyinlogo} alt="" width="90px" class="mb-5 oyin" />
            <h1 class="welcome">Welcome Back</h1>
            <p class="please">Please sign in to your staff account</p>
            <div class="row justify-content-center">
              <div class="col-md-8">
                <form action="" onSubmit={handleLogin}>
                  <div class="input-group mb-3 gh">
                    <div class="input-group-prepend pend">
                      <span class="input-group-text">
                        {" "}
                        <i class="fa fa-envelope lope"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control navinput"
                      placeholder="Email Address"
                      onChange={handleChange}
                      value={formData.email}
                      name="email"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend pend">
                      <span class="input-group-text">
                        <i class="fa fa-lock lock"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control navinput"
                      placeholder="Password"
                      onChange={handleChange}
                      value={formData.password}
                      name="password"
                    />
                  </div>
                  <a href="#">
                    <input
                      type="submit"
                      class="form-control navinput"
                      value="Login"
                    />
                  </a>
                  <a href="/"> Go back</a>
                  {errorMessage && (
                    <Alert severity="error">{errorMessage}</Alert>
                  )}
                </form>
              </div>
            </div>
            <div class="pt-3">
              <span class="got">
                <a href="#" class="text-dark">
                  {" "}
                  Forgot Password?{" "}
                </a>{" "}
                Contact the IT department
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
