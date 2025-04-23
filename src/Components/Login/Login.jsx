import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import ubt_logo from "../Assets/ubt-logo-1.png";
const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <img className="ubt-logo" src={ubt_logo} alt="" />
          <div className="teksti-login">
            <h3>SMIS-Login</h3>
          </div>
          <div className="container">
            <button className="btn btn-primary custom-btn" type="button">
              Login with Microsoft
            </button>
            <button className="btn btn-danger custom-btn" type="button">
              Login with Google
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <h4>
          © 2012 - 2025 KOLEGJI UBT - Lagjja KALABRIA Nr.56., Prishtinë, Kosovë
        </h4>
        <h4>Tel:+383 38 541 400 | Fax:+383 38 542 138 | info@ubt-uni.net</h4>
        <a href="www.smis.education">www.smis.education</a>
      </div>
    </>
  );
};

export default Login;
