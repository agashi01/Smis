import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import DeleteStaff from './Components/Admin/Stafi/DeleteStaff';
import EditStaff from './Components/Admin/Stafi/EditStaff';
import DLenda from './Components/Admin/DLenda';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import Orari from './Components/Orari/Orari';
import DStudentet from './Components/Admin/DStudentet';
import DGrupi from './Components/Admin/DGrupi';
import Profili from './Components/Profili/Profili';
import AddStaff  from './Components/Admin/Stafi/AddStaff';
import DStafi from './Components/Admin/DStafi';
import  AddLenda  from './Components/Admin/Lenda/AddLenda';
import EditLenda from './Components/Admin/Lenda/EditLenda';
import DeleteLenda from './Components/Admin/Lenda/DeleteLenda';
function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Default page tani është DStudentet */}

        {/* Faqet tjera */}
        <Route path="/ggg" element={<DLenda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transkripta" element={<Transkripta />} />
        <Route path="/orari" element={<Orari />} />
        <Route path="/studentet" element={<DStudentet />} />
        <Route path="/grupi" element={<DGrupi />} />
        <Route path="/profili" element={<Profili />} />
        <Route path="/edit-staff" element={<EditStaff />} />
        <Route path="/delete-staff" element={<DeleteStaff />} />
       <Route path="/" element={<DStafi />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/add-lenda" element={<AddLenda />} />
        <Route path="/edit-lenda" element={<EditLenda />} />
        <Route path="/delete-lenda" element={<DeleteLenda />} />
      </Routes>
    </Router>
  );
}

export default App;
