import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AddLenda = () => {
  const [lendaData, setLendaData] = useState({
    emri: '',
    kredite: '',
    departamenti: '',
    semestri: ''
  });

  const handleChange = (e) => {
    setLendaData({
      ...lendaData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Të dhënat e lëndës:", lendaData);
    alert("Lënda u shtua me sukses!");
  };

  return (
    <div className="sb-nav-fixed">
      {/* Top Navbar */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark ">
        <a className="navbar-brand ps-3" href="index.html">
          KOLEGJI UBT-SMIS
        </a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {/* Sidebar and Page Content */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
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
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <main>
            <div className="container mt-5">
              <h2 className="mb-4">Shto Lëndë të Re</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  {Object.keys(lendaData).map((field, index) => (
                    <div className="col-md-6 mb-3" key={index}>
                      <label className="form-label">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name={field} 
                        value={lendaData[field]} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                  ))}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Shto Lëndë</button>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-dark text-white text-center py-3 mt-auto">
        <h4>© 2012 - 2025 KOLEGJI UBT - Lagjja KALABRIA Nr.56., Prishtinë, Kosovë</h4>
        <h4>Tel:+383 38 541 400 | Fax:+383 38 542 138 | info@ubt-uni.net</h4>
        <a href="https://www.smis.education" className="text-white" target="_blank" rel="noopener noreferrer">
          www.smis.education
        </a>
      </div>
    </div>
  );
};

export default AddLenda;
