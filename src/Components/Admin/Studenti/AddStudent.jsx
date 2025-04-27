import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    emri: '',
    mbiemri: '',
    email: '',
    password: '',
    roli: '',
    datelindja: '',
    nrLeternjoftimi: '',
    vendLindja: '',
    gjinia: '',
    shteti: '',
    vendbanimi: '',
    adresa: '',
    zipKodi: '',
    telefoni: '',
    nenshtetesia: '',
    vitiRegjistrimit: '',
    statusi: '',
    uniID: '',
    departamenti: '',
    grupiID: ''
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Të dhënat e studentit:", studentData);
    alert("Studenti u shtua me sukses!");
  };

  return (
    
<div className="sb-nav-fixed">
{/* Top Navbar */}
<nav className="sb-topnav navbar navbar-expand navbar-dark ">
  {/* Navbar Brand */}
  <a className="navbar-brand ps-3" href="index.html">
    KOLEGJI UBT-SMIS
  </a>

  {/* Sidebar Toggle */}
  <button
    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
    id="sidebarToggle"
  >
    <i className="fas fa-bars"></i>
  </button>

  {/* Navbar User Dropdown */}
  <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdown"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-user fa-fw"></i>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdown"
      >
        <li>
          <a className="dropdown-item" href="#!">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#!">
            Activity Log
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#!">
            Logout
          </a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

{/* Sidebar and Page Content */}
<div id="layoutSidenav">
  <div id="layoutSidenav_nav">
    <nav
      className="sb-sidenav accordion sb-sidenav-dark"
      id="sidenavAccordion"
    >
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Home</div>
          <Link className="nav-link" to="/profili-im">
              <div className="sb-nav-link-icon"><i className="fa-solid fa-user"></i></div>
              Profili im
            </Link>

            <Link className="nav-link" to="/studentet">
              <div className="sb-nav-link-icon"><i className="fa-solid fa-bars"></i></div>
              Studentet
            </Link>

            <Link className="nav-link" to="/stafiakademik">
              <div className="sb-nav-link-icon"><i className="fa-solid fa-bars"></i></div>
              Stafi Akademik
            </Link>

            <Link className="nav-link" to="/grupi">
              <div className="sb-nav-link-icon"><i className="fa-solid fa-bars"></i></div>
              Grupi
            </Link>

            <Link className="nav-link" to="/lenda">
              <div className="sb-nav-link-icon"><i className="fa-solid fa-bars"></i></div>
              Lenda
            </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>

  {/* Main Page Content */}
  <div id="layoutSidenav_content">
    <main>
      <div className="container mt-5 ml-3">
      <h2 className="mb-4">Shto Student të Ri</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {Object.keys(studentData).map((field, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              {field === 'gjinia' ? (
                <select className="form-select" name={field} value={studentData[field]} onChange={handleChange} required>
                  <option value="">Zgjedh Gjinine</option>
                  <option value="Mashkull">Mashkull</option>
                  <option value="Femer">Femer</option>
                </select>
              ) : field === 'datelindja' ? (
                <input type="date" className="form-control" name={field} value={studentData[field]} onChange={handleChange} required />
              ) : field === 'password' ? (
                <input type="password" className="form-control" name={field} value={studentData[field]} onChange={handleChange} required />
              ) : (
                <input type="text" className="form-control" name={field} value={studentData[field]} onChange={handleChange} required />
              )}
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary mt-3">Shto Student</button>
      </form>
      </div>
    </main>


  </div>
</div>
<div class="footer">
  <h4>
    © 2012 - 2025 KOLEGJI UBT - Lagjja KALABRIA Nr.56., Prishtinë, Kosovë
  </h4>
  <h4>Tel:+383 38 541 400 | Fax:+383 38 542 138 | info@ubt-uni.net</h4>
  <a href="www.smis.education">www.smis.education</a>
</div>
</div>

  );
};

export default AddStudent;
