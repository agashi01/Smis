import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import "./Style.css";
import $ from "jquery";
import "datatables.net";
import { Link } from 'react-router-dom';

const DGrupi = () => {
    
  const navigate = useNavigate(); 

  const [grupet, setGrupet] = useState([]);
  const [semestriFilter, setSemestriFilter] = useState('');
  const [departamentiFilter, setDepartamentiFilter] = useState('');
  const [emriGrupitFilter, setEmriGrupitFilter] = useState('');

  useEffect(() => {
    const fetchGrupet = async () => {
      const data = [
        {
          id: 1,
          emri: 'Grupi 1',
          semestri: 'Semestri 1',
          departamenti: 'Shkenca Kompjuterike',
          kapaciteti: '100'
        },
        {
          id: 2,
          emri: 'Grupi 2',
          semestri: 'Semestri 2',
          departamenti: 'Inxhinieri Softuerike',
          kapaciteti: '110'
        },
        {
          id: 3,
          emri: 'Grupi 3',
          semestri: 'Semestri 1',
          departamenti: 'Shkenca Kompjuterike',
          kapaciteti: '90'
        }
      ];
      setGrupet(data);
    };

    fetchGrupet();
  }, []);

  const uniqueSemestrat = [...new Set(grupet.map(grupi => grupi.semestri))];
  const uniqueDepartamentet = [...new Set(grupet.map(grupi => grupi.departamenti))];
  const uniqueEmratGrupit = [...new Set(grupet.map(grupi => grupi.emri))];

  const filteredGrupet = grupet.filter(grupi => {
    return (
      (semestriFilter === '' || grupi.semestri === semestriFilter) &&
      (departamentiFilter === '' || grupi.departamenti === departamentiFilter) &&
      (emriGrupitFilter === '' || grupi.emri === emriGrupitFilter)
    );
  });

  return (
    <div className="sb-nav-fixed">
      {/* Top Navbar */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark ">
        <a className="navbar-brand ps-3" href="#">KOLEGJI UBT-SMIS</a>
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
          <main className="container-fluid p-4">
            <h2 className="mb-4">Menaxhimi i Grupeve të Fakultetit</h2>

            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => navigate('/add-grup')} // 🧠 Këtu
            >
              ➕ Add Group 
            </button>


            {/* Filtrat */}
            <div className="row mb-4">
              <div className="col-md-4 mb-2">
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

              <div className="col-md-4 mb-2">
                <label>Filtro sipas Departamentit:</label>
                <select 
                  className="form-select"
                  value={departamentiFilter}
                  onChange={(e) => setDepartamentiFilter(e.target.value)}
                >
                  <option value="">Të gjithë departamentet</option>
                  {uniqueDepartamentet.map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>


              <div className="col-md-4 mb-2">
                <label>Filtro sipas Emrit të Grupit:</label>
                <select 
                  className="form-select"
                  value={emriGrupitFilter}
                  onChange={(e) => setEmriGrupitFilter(e.target.value)}
                >
                  <option value="">Të gjithë grupet</option>
                  {uniqueEmratGrupit.map(emri => (
                    <option key={emri} value={emri}>{emri}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tabela */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered tabel-hover">
                <thead className="">
                  <tr>
                    <th>Emri i Grupit</th>
                    <th>Semestri</th>
                    <th>Departamenti</th>
                    <th>Kapaciteti</th>
                    <th>Numri i Studentëve</th>
                    <th>Edit</th>
                    <th>Delete</th>

                  </tr>
                </thead>
                <tbody>
                  {filteredGrupet.map(grupi => (
                    <tr 
                      key={grupi.id}
                      onClick={() => navigate(`/view-grupi/${grupi.id}`)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>{grupi.emri}</td>
                      <td>{grupi.semestri}</td>
                      <td>{grupi.departamenti}</td>
                      <td>{grupi.kapaciteti}</td>
                      <td>{grupi.nrstudentave}</td>
                      <td>
                        <button 
                          className="btn btn-warning btn-sm me-2"  
                          onClick={(e) => {
                            e.stopPropagation(); // 🧠 Mos lejo që klikimi të shkojë në tr
                            navigate(`/edit-grup/${grupi.id}`);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button 
                          className="btn btn-danger btn-sm"  
                          onClick={(e) => {
                            e.stopPropagation(); // 🧠 Mos lejo që klikimi të shkojë në tr
                            navigate(`/delete-grup/${grupi.id}`);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
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

export default DGrupi;
