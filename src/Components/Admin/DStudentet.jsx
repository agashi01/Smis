import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";
import { Link } from 'react-router-dom';


const DStudentet = () => {

  const navigate = useNavigate(); 

  const [students, setStudents] = useState([]);
  const [departamentiFilter, setDepartamentiFilter] = useState('');
  const [vitiFilter, setVitiFilter] = useState('');
  const [statusiFilter, setStatusiFilter] = useState('');
  const [semestriFilter, setSemestriFilter] = useState('');



  useEffect(() => {
    const fetchStudents = async () => {
      const data = [
        {
          id: 1,
          emri: 'Arlind',
          mbiemri: 'Berisha',
          email: 'arlind@example.com',
          gjinia: 'Mashkull',
          datelindja: '2000-05-10',
          nrpersonal: 'A1234567',
          telefoni: '+38344123456',
          statusi: 'Aktiv',
          departamenti: 'Shkenca Kompjuterike',
          vitiRegjistrimit: 2019,
          semestri: 'Semestri 1'
        },
        {
          id: 2,
          emri: 'Elira',
          mbiemri: 'Hoxha',
          email: 'elira@example.com',
          gjinia: 'Femer',
          datelindja: '2001-02-15',
          nrpersonal: 'B7654321',
          telefoni: '+38349123456',
          statusi: 'Aktiv',
          vitiRegjistrimit: 2020,
          departamenti: 'Inxhinieri Softuerike',
          semestri: 'Semestri 1'

        },
        {
          id: 3,
          emri: 'Era',
          mbiemri: 'Hema',
          email: 'elira@example.com',
          gjinia: 'Femer',
          datelindja: '2001-02-15',
          nrpersonal: 'B7654321',
          telefoni: '+38349123456',
          statusi: 'Pasiv',
          vitiRegjistrimit: 2020,
          departamenti: 'Inxhinieri Softuerike',
          semestri: 'Semestri 1'
        }
      ];
      setStudents(data);
    };

    fetchStudents();
  }, []);

  const uniqueDepartamente = [...new Set(students.map(student => student.departamenti))];
  const uniqueVitet = [...new Set(students.map(student => student.vitiRegjistrimit))];
  const uniqueStatuset = [...new Set(students.map(student => student.statusi))];
  const uniqueSemestrat = [...new Set(students.map(student => student.semestri))];
  const filteredStudents = students.filter(student => {
    return (
      (departamentiFilter === '' || student.departamenti === departamentiFilter) &&
      (vitiFilter === '' || student.vitiRegjistrimit.toString() === vitiFilter) &&
      (statusiFilter === '' || student.statusi === statusiFilter) &&
      (semestriFilter === '' || student.semestri === semestriFilter)
    );
  });

  return (
    <div className="sb-nav-fixed">
      {/* Top Navbar */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark ">
        <a className="navbar-brand ps-3" href="#">KOLEGJI UBT-SMIS</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {/* Sidebar and Content */}
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
          <main className="container-fluid p-4">
            <h2 className="mb-4">Studentët e Fakultetit</h2>

            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => navigate('/add-student')} // 🧠 Këtu
            >
              ➕ Add Student
            </button>

            {/* Filtrat */}
            <div className="row mb-3">
              <div className="col-md-3">
                <label>Filtro sipas Departamentit:</label>
                <select 
                  className="form-select"
                  value={departamentiFilter}
                  onChange={(e) => setDepartamentiFilter(e.target.value)}
                >
                  <option value="">Të gjithë departamentet</option>
                  {uniqueDepartamente.map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Filtro sipas Vitit të Regjistrimit:</label>
                <select 
                  className="form-select"
                  value={vitiFilter}
                  onChange={(e) => setVitiFilter(e.target.value)}
                >
                  <option value="">Të gjithë vitet</option>
                  {uniqueVitet.map(vit => (
                    <option key={vit} value={vit}>{vit}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Filtro sipas Statusit:</label>
                <select 
                  className="form-select"
                  value={statusiFilter}
                  onChange={(e) => setStatusiFilter(e.target.value)}
                >
                  <option value="">Të gjithë statuset</option>
                  {uniqueStatuset.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3">
                <label>Filtro sipas Semestrit:</label>
                <select
                  className="form-select"
                  value={semestriFilter}
                  onChange={(e) => setSemestriFilter(e.target.value)}
                >
                  <option value="">Të gjithë semestrat</option>
                  {uniqueSemestrat.map(semestri => (
                    <option key={semestri} value={semestri}>{semestri}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tabela */}
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Emri</th>
                  <th>Mbiemri</th>
                  <th>Email</th>
                  <th>Nr Peronsal</th>
                  <th>Gjinia</th>
                  <th>Ditelinja</th>
                  <th>Telefoni</th>
                  <th>Statusi</th>
                  <th>Departamenti</th>
                  <th>Semestri</th>
                  <th>Viti i Regjistrimit</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td>{student.emri}</td>
                    <td>{student.mbiemri}</td>
                    <td>{student.email}</td>
                    <td>{student.nrpersonal}</td>
                    <td>{student.gjinia}</td>
                    <td>{student.datelindja}</td>
                    <td>{student.telefoni}</td>
                    <td>{student.statusi}</td>
                    <td>{student.departamenti}</td>
                    <td>{student.semestri}</td>
                    <td>{student.vitiRegjistrimit}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2"  onClick={() => navigate('/edit-student')}>Edit</button>
                      </td>
                      <td>
                      <button className="btn btn-danger btn-sm"  onClick={() => navigate('/delete-student')}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </main>
        </div>
      </div>

      {/* Footer */}
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

export default DStudentet;
