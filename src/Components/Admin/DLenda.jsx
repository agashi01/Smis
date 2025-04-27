import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";

const DLenda = () => {
  const [lendet, setLendet] = useState([]);
  const [departamentiFilter, setDepartamentiFilter] = useState('');
  const [semestriFilter, setSemestriFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLendet = async () => {
      const data = [
        {
          id: 1,
          emri: 'Programimi në Java',
          kredite: 6,
          departamenti: 'Shkenca Kompjuterike',
          semestri: 'Semestri 3'
        },
        {
          id: 2,
          emri: 'Bazat e të Dhënave',
          kredite: 5,
          departamenti: 'Shkenca Kompjuterike',
          semestri: 'Semestri 4'
        },
        {
          id: 3,
          emri: 'Programimi në Web',
          kredite: 5,
          departamenti: 'Inxhinieri Softuerike',
          semestri: 'Semestri 3'
        }
      ];
      setLendet(data);
    };

    fetchLendet();
  }, []);

  const uniqueDepartamente = [...new Set(lendet.map(lenda => lenda.departamenti))];
  const uniqueSemestrat = [...new Set(lendet.map(lenda => lenda.semestri))];

  const filteredLendet = lendet.filter(lenda => {
    return (
      (departamentiFilter === '' || lenda.departamenti === departamentiFilter) &&
      (semestriFilter === '' || lenda.semestri === semestriFilter)
    );
  });

  return (
    <div className="sb-nav-fixed">
      {/* Navbar */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark">
        <a className="navbar-brand ps-3" href="#">KOLEGJI UBT-SMIS</a>
      </nav>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          {/* Sidebar */}
          <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Home</div>
                <a className="nav-link" href="#">
                  <div className="sb-nav-link-icon"><i className="fa-solid fa-user"></i></div>
                  Profili im
                </a>
                <a className="nav-link" href="#">
                  <div className="sb-nav-link-icon"><i className="fa-solid fa-bars"></i></div>
                  Lista e Lëndëve
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <main className="container-fluid p-4">
            <h2 className="mb-4">Lëndët e Fakultetit</h2>

            {/* Butoni për Add */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => navigate('/add-lenda')}
              >
                ➕ Add Subject
              </button>
            </div>

            {/* Filtrat */}
            <div className="row mb-4">
              <div className="col-md-6">
                <label>Filtro sipas Departamentit:</label>
                <select 
                  className="form-select"
                  value={departamentiFilter}
                  onChange={(e) => setDepartamentiFilter(e.target.value)}
                >
                  <option value="">Të gjitha departamentet</option>
                  {uniqueDepartamente.map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label>Filtro sipas Semestrit:</label>
                <select 
                  className="form-select"
                  value={semestriFilter}
                  onChange={(e) => setSemestriFilter(e.target.value)}
                >
                  <option value="">Të gjithë semestrat</option>
                  {uniqueSemestrat.map(sem => (
                    <option key={sem} value={sem}>{sem}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tabela */}
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Emri i Lëndës</th>
                  <th>Kreditet</th>
                  <th>Departamenti</th>
                  <th>Semestri</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredLendet.map(lenda => (
                  <tr key={lenda.id}>
                    <td>{lenda.emri}</td>
                    <td>{lenda.kredite}</td>
                    <td>{lenda.departamenti}</td>
                    <td>{lenda.semestri}</td>
                    <td>
                      <button 
                        className="btn btn-warning btn-sm me-2" 
                        onClick={() => navigate('/edit-lenda')}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => navigate('/delete-lenda')}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

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

export default DLenda;
