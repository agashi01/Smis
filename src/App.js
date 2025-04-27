import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import Orari from './Components/Orari/Orari';
import DStudentet from './Components/Admin/DStudentet';
import DGrupi from './Components/Admin/DGrupi';
import Profili from './Components/Profili/Profili';
import ProvimetEParaqitura from './Components/ProvimetEParaqitura/ProvimetEParaqitura';
import ParaqitjaEProvimeve from './Components/ParaqitjaEProvimeve/ParaqitjaEProvimeve';
import AddStudent from './Components/Admin/Studenti/AddStudent';
import EditStudent from './Components/Admin/Studenti/EditStudent';
import DeleteStudent from './Components/Admin/Studenti/DeleteStudent';
import AddGrup from './Components/Admin/Grupi/AddGrup';
import EditGrup from './Components/Admin/Grupi/EditGrup';
import DeleteGrup from './Components/Admin/Grupi/DeleteGrup';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Default page tani është DStudentet */}
        <Route path="/" element={<DStudentet />} />
        {/* Faqet tjera */}
        <Route path="/login" element={<Login />} />
        <Route path="/transkripta" element={<Transkripta />} />
        <Route path="/orari" element={<Orari />} />
        <Route path="/studentet" element={<DStudentet />} />
        <Route path="/grupi" element={<DGrupi />} />
        <Route path="/profili" element={<Profili />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/delete-student" element={<DeleteStudent />} />
        <Route path="/add-grup" element={<AddGrup />} />
        <Route path="/edit-grup" element={<EditGrup />} />
        <Route path="/delete-grup" element={<DeleteGrup />} />

      </Routes>
    </Router>
  );
}

export default App;