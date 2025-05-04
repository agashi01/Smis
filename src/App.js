import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DeleteStaff from './Components/Admin/Stafi/DeleteStaff';
import EditStaff from './Components/Admin/Stafi/EditStaff';
import DLenda from './Components/Admin/DLenda';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import Orari from './Components/Orari/Orari';
import DStudentet from './Components/Admin/DStudentet';
import DGrupi from './Components/Admin/DGrupi';
import Profili from './Components/Profili/Profili';
import ParaqitjaEProvimeve from './Components/ParaqitjaEProvimeve/ParaqitjaEProvimeve';



import ProfiliStafiAkademik from './Components/ProfiliStafiAkademik/ProfiliStafiAkademik';
import ListaEGrupeve, { Grupi1, Grupi2, Grupi3, Grupi4 } from "./Components/ListaEGrupeve/ListaEGrupeve";

import AddStaff  from './Components/Admin/Stafi/AddStaff';
import DStafi from './Components/Admin/DStafi';
import  AddLenda  from './Components/Admin/Lenda/AddLenda';
import EditLenda from './Components/Admin/Lenda/EditLenda';
import DeleteLenda from './Components/Admin/Lenda/DeleteLenda';
import AddGroup from './Components/Admin/Grupi/AddGrup';
import EditGroup from './Components/Admin/Grupi/EditGrup';
import DeleteGroup from './Components/Admin/Grupi/DeleteGrup';
import AddStudent from './Components/Admin/Studenti/AddStudent';
import EditStudent from './Components/Admin/Studenti/EditStudent';
import DeleteStudent from './Components/Admin/Studenti/DeleteStudent';
import ProfiliAdmin from './Components/Admin/ProfiliAdmin';
import TabbedForm from './Components/Profili/TabbedForm';




function App() {
  return (
    <div >
     {/* <Login/> */}
     {/* <Transkripta/> */}
     {/* <ProvimetEParaqitura/> */}
     <ProfiliStafiAkademik/>
     {/* <Profili/> */}
    </div>
  );
}

export default App;
