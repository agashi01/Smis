import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";
import { Link } from 'react-router-dom';

const DStafi = () => {
  const [staff, setStaff] = useState([]);
  const [departamentiFilter, setDepartamentiFilter] = useState('');
  const [roliFilter, setRoliFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStaff = async () => {
      const data = [
        {
          id: 1,
          emri: 'Arben',
          mbiemri: 'Gashi',
          email: 'arben.gashi@example.com',
          gjinia: 'Mashkull',
          datelindja: '1980-04-15',
          nrLeternjoftimit: 'C1234567',
          telefoni: '+38344111222',
          vitiRegjistrimit: 2005,
          roli: 'Profesor',
          titulli: 'Dr.',
          departamenti: 'Shkenca Kompjuterike' // e shtova edhe departamentin
        },
        {
          id: 2,
          emri: 'Alma',
          mbiemri: 'Krasniqi',
          email: 'alma.krasniqi@example.com',
          gjinia: 'Femer',
          datelindja: '1985-07-21',
          nrLeternjoftimit: 'C9876543',
          telefoni: '+38349123456',
          vitiRegjistrimit: 2008,
          roli: 'Asistent',
          titulli: 'MSc.',
          departamenti: 'Inxhinieri Softuerike'
        }
      ];
      setStaff(data);
    };

    fetchStaff();
  }, []);

  const uniqueDepartamente = [...new Set(staff.map(member => member.departamenti))];
  const uniqueRolet = [...new Set(staff.map(member => member.roli))];

  const filteredStaff = staff.filter(member => {
    return (
      (departamentiFilter === '' || member.departamenti === departamentiFilter) &&
      (roliFilter === '' || member.roli === roliFilter)
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
            <h2 className="mb-4">Stafi Akademik i Fakultetit</h2>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => navigate('/add-staff')}
              >
                ➕ Add Staff
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
                  <option value="">Të gjithë departamentet</option>
                  {uniqueDepartamente.map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-6">
                <label>Filtro sipas Rol-it:</label>
                <select 
                  className="form-select"
                  value={roliFilter}
                  onChange={(e) => setRoliFilter(e.target.value)}
                >
                  <option value="">Të gjitha rolet</option>
                  {uniqueRolet.map(rol => (
                    <option key={rol} value={rol}>{rol}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tabela */}
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Emri</th>
                  <th>Mbiemri</th>
                  <th>Email</th>
                  <th>Gjinia</th>
                  <th>Datëlindja</th>
                  <th>Nr Leternjoftimit</th>
                  <th>Telefoni</th>
                  <th>Viti i Regjistrimit</th>
                  <th>Roli</th>
                  <th>Titulli</th>
                  <th>Departamenti</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map(member => (
                  <tr key={member.id}>
                    <td>{member.emri}</td>
                    <td>{member.mbiemri}</td>
                    <td>{member.email}</td>
                    <td>{member.gjinia}</td>
                    <td>{member.datelindja}</td>
                    <td>{member.nrLeternjoftimit}</td>
                    <td>{member.telefoni}</td>
                    <td>{member.vitiRegjistrimit}</td>
                    <td>{member.roli}</td>
                    <td>{member.titulli}</td>
                    <td>{member.departamenti}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => navigate('/edit-staff')}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => navigate('/delete-staff')}>
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

export default DStafi;
