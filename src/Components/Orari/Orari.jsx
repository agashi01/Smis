import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";

const Orari = () => {
  useEffect(() => {
    $('#datatablesSimple').DataTable({
      paging: true,
      searching: true,
      info: true
    });
  }, []);

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
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Home</div>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  Profili im
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  Lista e Studenteve
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  Orari
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  Salla
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-bars"></i>
                  </div>
                  Notimi
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Page Content */}
        <div id="layoutSidenav_content">
          <main className="container-fluid">
            


            <table className="table table-striped table-hover table-border mt-3 ml-1 mr-1">
                <thead>
                    <tr>
                    <th className="text-center" colSpan={6} scope="col" >Orari</th>
                    </tr>
                    <tr>
                    <th scope="col">Dita</th>
                    <th scope="col">Fillon</th>
                    <th scope="col">Mbaron</th>
                    <th scope="col">Salla</th>
                    <th scope="col">Lenda</th> 
                    <th scope="col">Grupi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">E Hene</th>
                    <td>9:00</td>
                    <td>10:30</td>
                    <td>D134</td>
                    <td>Lende Laboratorike 1</td>
                    <td>G3</td>
                    </tr>
                    <tr>
                    <th scope="row">E Marte</th>
                    <td>9:00</td>
                    <td>10:30</td>
                    <td>D134</td>
                    <td>Shkenca Kompjuterike 1</td>
                    <td>G2</td>
                    </tr>
                    <tr>
                    <th scope="row">E Merkure</th>
                    <td>9:00</td>
                    <td>10:30</td>
                    <td>D134</td>
                    <td>Lende Laboratorike 1</td>
                    <td>G1</td>
                    </tr>
                </tbody>
            </table>




          </main>
        </div>
      </div>

      <div className="footer">
        <h4>© 2012 - 2025 KOLEGJI UBT - Lagjja KALABRIA Nr.56., Prishtinë, Kosovë</h4>
        <h4>Tel:+383 38 541 400 | Fax:+383 38 542 138 | info@ubt-uni.net</h4>
        <a href="www.smis.education">www.smis.education</a>
      </div>
    </div>
  );
};

export default Orari;

