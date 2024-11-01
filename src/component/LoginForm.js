// src/components/LoginForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import logo from "../Assets/Logo.png";
import logo2 from "../Assets/Illustrasi Login.png";
import "./LoginForm.css"; // Import CSS for styling

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      dispatch(login(formData));
    } else {
      alert("Silahkan isi data dahulu");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="header">
        <img src={logo} alt="SIMS PPOB" className="logo" />
        <h2>SIMS PPOB</h2>
      </div> {/* Add your logo path */}
        <h2>Masuk atau buat akun untuk memulai</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="masukan email anda"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="masukan password anda"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-button">Masuk</button>
        </form>
        <p>
          belum punya akun? <a href="/register">registrasi di sini</a>
        </p>
        {isLoggedIn && <p>Login sukses!</p>}
      </div>
      <div className="login-image">
        <img src={logo2} alt="Illustration" /> {/* Add your illustration path */}
      </div>
    </div>
  );
};

export default LoginForm;
