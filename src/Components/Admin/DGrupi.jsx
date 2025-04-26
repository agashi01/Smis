import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";

const DGrupi = () => {
    const [grupet, setGrupet] = useState([]);
  
    useEffect(() => {
      const fetchGrupet = async () => {
        const data = [
          {
            id: 1,
            emri: 'Grupi A',
            semestri: 'Semestri 1',
            departamenti: 'Shkenca Kompjuterike',
            orari: 'Orari A'
          },
          {
            id: 2,
            emri: 'Grupi B',
            semestri: 'Semestri 2',
            departamenti: 'Inxhinieri Softuerike',
            orari: 'Orari B'
          }
        ];
        setGrupet(data);
      };
  
      fetchGrupet();
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
            

            <div className="container mt-5">
                <h2 className="mb-4">Menaxhimi i Grupeve të Fakultetit</h2>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th>Emri i Grupit</th>
                        <th>Semestri</th>
                        <th>Departamenti</th>
                        <th>Orari</th>
                    </tr>
                    </thead>
                    <tbody>
                    {grupet.map(grupi => (
                        <tr key={grupi.id}>
                        <td>{grupi.emri}</td>
                        <td>{grupi.semestri}</td>
                        <td>{grupi.departamenti}</td>
                        <td>{grupi.orari}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


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

export default DGrupi;
