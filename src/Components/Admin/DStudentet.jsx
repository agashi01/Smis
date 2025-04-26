import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";

const DStudentet = () => {
  const [students, setStudents] = useState([]);

  // Simulojmë një API ose databazë me disa të dhëna fillestare
  useEffect(() => {
    const fetchStudents = async () => {
      // Normalisht këtu do bëje fetch në backend
      const data = [
        {
          id: 1,
          emri: 'Arlind',
          mbiemri: 'Berisha',
          email: 'arlind@example.com',
          gjinia: 'Mashkull',
          datelindja: '2000-05-10',
          nrLeternjoftimit: 'A1234567',
          vendbanimi: 'Prishtinë',
          telefoni: '+38344123456',
          statusi: 'Aktiv',
          vitiRegjistrimit: 2019
        },
        {
          id: 2,
          emri: 'Elira',
          mbiemri: 'Hoxha',
          email: 'elira@example.com',
          gjinia: 'Femer',
          datelindja: '2001-02-15',
          nrLeternjoftimit: 'B7654321',
          vendbanimi: 'Ferizaj',
          telefoni: '+38349123456',
          statusi: 'Aktiv',
          vitiRegjistrimit: 2020
        }
      ];
      setStudents(data);
    };

    fetchStudents();
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
              <h2 className="mb-4">Studentët e Fakultetit</h2>


              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="button" className="btn btn-primary">
                  ➕ Shto Student
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="button" className="btn btn-primary">
                  Edito Student
                </button>
              </div>

              <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>Emri</th>
                    <th>Mbiemri</th>
                    <th>Email</th>
                    <th>Gjinia</th>
                    <th>Datëlindja</th>
                    <th>Nr Leternjoftimit</th>
                    <th>Vendbanimi</th>
                    <th>Telefoni</th>
                    <th>Statusi</th>
                    <th>Viti i Regjistrimit</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.emri}</td>
                      <td>{student.mbiemri}</td>
                      <td>{student.email}</td>
                      <td>{student.gjinia}</td>
                      <td>{student.datelindja}</td>
                      <td>{student.nrLeternjoftimit}</td>
                      <td>{student.vendbanimi}</td>
                      <td>{student.telefoni}</td>
                      <td>{student.statusi}</td>
                      <td>{student.vitiRegjistrimit}</td>
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

export default DStudentet;
