import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import Orari from './Components/Orari/Orari';
import DStudentet from './Components/Admin/DStudentet';
import DGrupi from './Components/Admin/DGrupi';
import ParaqitjaEProvimeve from './Components/ParaqitjaEProvimeve/ParaqitjaEProvimeve';
import Profili from './Components/Profili/Profili';

function App() {
  return (
    <div >
      {/* <Login/> */}
     {/* <Transkripta/> */}

     {/*<ProvimetEParaqitura/>*/}
     <DGrupi/>

     {/* <ProvimetEParaqitura/> */}
     <ParaqitjaEProvimeve/>
     {/* <Profili/> */}

    </div>
  );
}

export default App;