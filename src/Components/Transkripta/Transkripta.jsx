import React from "react";
import "./Style.css";
import { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

const Transkripta = () => {
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
              <h2 className="mt-4">Transkripta e notave</h2>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">Transkripta</li>
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
                    <th className="cell-drejtimi">Drejtimi</th>
                    <th>Niveli</th>
                    <th>Statusi</th>
                    <th>Transkripta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Shkenca Kompjuterike dhe Inxhinieri</td>
                    <td>Bachelor</td>
                    <td>I rregullt</td>
                    <td>
                      <button
                        type="submit"
                        class="btn btn-primary btn-sm butoni-transkriptes"
                      >
                        Gjenero Transkripten
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table
                id="datatablesSimple"
                className="table table-bordered table-striped table-hover table-compact force-border thin-cells"
              >
                <thead>
                  <tr>
                    <th className="kodi-lendes">#</th>
                    <th>Kodi</th>
                    <th>Lenda</th>
                    <th>ECTS</th>
                    <th>Kategoria</th>
                    <th>Nota Shkronje</th>
                    <th>Statusi i Notes</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>2</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
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

export default Transkripta;
