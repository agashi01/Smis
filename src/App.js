import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Transkripta from './Components/Transkripta/Transkripta';
import ProvimetEParaqitura from './Components/ProvimetEParaqitura/ProvimetEParaqitura';
import ParaqitjaEProvimeve from './Components/ParaqitjaEProvimeve/ParaqitjaEProvimeve';
import Profili from './Components/Profili/Profili';

function App() {
  return (
    <div >
     {/* <Login/> */}
     {/* <Transkripta/> */}
     {/* <ProvimetEParaqitura/> */}
     <ParaqitjaEProvimeve/>
     {/* <Profili/> */}
    </div>
  );
}

export default App;
