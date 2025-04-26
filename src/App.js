import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import ProvimetEParaqitura from './Components/ProvimetEParaqitura/ProvimetEParaqitura';
import Orari from './Components/Orari/Orari';
import DStudentet from './Components/Admin/DStudentet';
import DStafi from './Components/Admin/DStafi';
import DLenda from './Components/Admin/DLenda';
import DGrupi from './Components/Admin/DGrupi';

function App() {
  return (
    <div >
      {/* <Login/> */}
     {/* <Transkripta/> */}
     {/*<ProvimetEParaqitura/>*/}
     <DGrupi/>
    </div>
  );
}

export default App;
