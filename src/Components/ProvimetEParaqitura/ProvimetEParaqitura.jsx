import React from "react";
import "../Transkripta/Style.css";
import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

const ProvimetEParaqitura = () => {
  useEffect(() => {
    $("#datatablesSimple").DataTable({
      paging: false,
      searching: false,
      info: false,
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
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Home</div>
                <a className="nav-link" href="index.html">
                  <div className="sb-nav-link-icon">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  Profili im
                </a>

                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i class="fa-solid fa-bars"></i>
                  </div>
                  Transkripta
                </a>

                <div className="sb-sidenav-menu-heading">Provimet</div>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i class="fa-solid fa-newspaper"></i>
                  </div>
                  Provimet e paraqitura
                </a>
                <a className="nav-link" href="tables.html">
                  <div className="sb-nav-link-icon">
                    <i class="fa-solid fa-pen"></i>
                  </div>
                  Paraqit provimet
                </a>
                <a className="nav-link" href="charts.html">
                  <div className="sb-nav-link-icon">
                    <i class="fa-solid fa-barcode"></i>
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
              <h2 className="mt-4">Provimet e paraqitura</h2>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  Provimet e paraqitura
                </li>
              </ol>
              <div className="card mb-4"></div>
            </div>

            <div className="card-body">
              <table
                id="datatablesSimple"
                className="table table-bordered table-striped table-hover table-compact force-border thin-cells tab-1"
              >
                <thead>
                  <tr>
                    <th className="kodi-lendes">Kodi</th>
                    <th>Lenda</th>
                    <th>Kategoria</th>
                    <th>Profesori</th>
                    <th>Nota</th>
                    <th>Statusi i notes</th>
                    <th>Data vendosjes</th>
                    <th className="cell-button">Anulo paraqitjen e provimit</th>
                    <th className="cell-button">Refuzo noten</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>40DS201</td>
                    <td>Bachelor</td>
                    <td>I rregullt</td>

                    <td>Blerim Zylfiu</td>
                    <td>10</td>
                    <td>Vendosur</td>
                    <td>10.05.2025</td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary btn-sm butoni-transkriptes"
                      >
                        Anulo paraqitjen
                      </button>
                    </td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary btn-sm butoni-transkriptes"
                      >
                        Refuzo noten
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default ProvimetEParaqitura;
