import React, { useEffect } from "react";
import "../Transkripta/Style.css";
import $ from "jquery";
import "datatables.net";

const ListaEGrupeve = () => {
  useEffect(() => {
    $("#datatablesSimple").DataTable({
      paging: false,
      searching: false,
      info: false,
    });
  }, []);

  const handleGroupChange = (e) => {
    const selectedGroup = e.target.value;
    if (selectedGroup) {
      window.location.href = `/${selectedGroup}`;
    }
  };

  return (
    <div className="sb-nav-fixed">
      {/* Top Navbar */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark">
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
                  Transkripta
                </a>

                <div className="sb-sidenav-menu-heading">Provimet</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-newspaper"></i>
                  </div>
                  Provimet e paraqitura
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-pen"></i>
                  </div>
                  Paraqit provimet
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i className="fa-solid fa-barcode"></i>
                  </div>
                  Pagesat
                </a>
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
            <div className="container-fluid px-4">
              <h2 className="mt-4">Lista e grupeve</h2>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Lista e Grupeve</li>
              </ol>

              <div className="card mb-4">
                <div className="card-header">
                  <h5>Zgjedh llojin e grupit</h5>
                </div>
                <div className="card-body">
                  <select
                    className="form-select"
                    aria-label="Zgjedh llojin e grupit"
                    onChange={handleGroupChange}
                  >
                    <option value="">Zgjedh grupin...</option>
                    <option value="Grupi1">Grupi 1</option>
                    <option value="Grupi2">Grupi 2</option>
                    <option value="Grupi3">Grupi 3</option>
                    <option value="Grupi4">Grupi 4</option>
                  </select>
                </div>
              </div>

            </div>
          </main>

          <div className="footer">
            <h4>
              © 2012 - 2025 KOLEGJI UBT - Lagjja KALABRIA Nr.56., Prishtinë, Kosovë
            </h4>
            <h4>
              Tel:+383 38 541 400 | Fax:+383 38 542 138 | info@ubt-uni.net
            </h4>
            <a href="https://www.smis.education">
              www.smis.education
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaEGrupeve;
