import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import ProvimetEParaqitura from './Components/ProvimetEParaqitura/ProvimetEParaqitura';
import ParaqitjaEProvimeve from './Components/ParaqitjaEProvimeve/ParaqitjaEProvimeve';
import Profili from './Components/Profili/Profili';
import ProfiliStafiAkademik from './Components/ProfiliStafiAkademik/ProfiliStafiAkademik';
import ListaEGrupeve, { Grupi1, Grupi2, Grupi3, Grupi4 } from "./Components/ListaEGrupeve/ListaEGrupeve";



function App() {
  return (
    <div >
     {/* <Login/> */}
     {/* <Transkripta/> */}
     {/* <Profili/> */}
     {/*<ProfiliStafiAkademik/> */}
     {/*<ListaEGrupeve/>*/}
     
     <ListaEGrupeve/>
     {/* <Profili/> */}

    </div>
  );
}

export default App;
