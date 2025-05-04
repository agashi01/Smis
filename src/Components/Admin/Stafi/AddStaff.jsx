import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const AddStaff = () => {
  const [staffData, setStaffData] = useState({
    emri: '',
    mbiemri: '',
    email: '',
    password: '',
    roli: '',
    datelindja: '',
    nrLeternjoftimit: '',
    vendLindja: '',
    gjinia: '',
    shteti: '',
    vendbanimi: '',
    adresa: '',
    zipKodi: '',
    telefoni: '',
    nenshtetesia: ''
  });

  const handleChange = (e) => {
    setStaffData({
      ...staffData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Të dhënat e stafit:", staffData);
    alert("Stafi u shtua me sukses!");
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
              <h2 className="mb-4">Shto Staff të Ri</h2>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Emri</label>
                    <input type="text" className="form-control" name="emri" value={staffData.emri} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mbiemri</label>
                    <input type="text" className="form-control" name="mbiemri" value={staffData.mbiemri} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={staffData.email} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={staffData.password} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Roli</label>
                    <input type="text" className="form-control" name="roli" value={staffData.roli} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Datëlindja</label>
                    <input type="date" className="form-control" name="datelindja" value={staffData.datelindja} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nr Leternjoftimit</label>
                    <input type="text" className="form-control" name="nrLeternjoftimit" value={staffData.nrLeternjoftimit} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">VendLindja</label>
                    <input type="text" className="form-control" name="vendLindja" value={staffData.vendLindja} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gjinia</label>
                    <select className="form-select" name="gjinia" value={staffData.gjinia} onChange={handleChange} required>
                      <option value="">Zgjedh Gjinine</option>
                      <option value="Mashkull">Mashkull</option>
                      <option value="Femer">Femer</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Shteti</label>
                    <input type="text" className="form-control" name="shteti" value={staffData.shteti} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Vendbanimi</label>
                    <input type="text" className="form-control" name="vendbanimi" value={staffData.vendbanimi} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Adresa</label>
                    <input type="text" className="form-control" name="adresa" value={staffData.adresa} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">ZIP Kodi</label>
                    <input type="text" className="form-control" name="zipKodi" value={staffData.zipKodi} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Telefoni</label>
                    <input type="text" className="form-control" name="telefoni" value={staffData.telefoni} onChange={handleChange} required />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nenshtetesia</label>
                    <input type="text" className="form-control" name="nenshtetesia" value={staffData.nenshtetesia} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Shto Staff</button>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
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

export default AddStaff;
