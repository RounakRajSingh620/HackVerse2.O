import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import Details from "./Components/Details";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


        const App = () => {
  return (
    <Router>
            <Routes>
                      <Route path="/" element={<>  <Navbar/>  <Welcome/></>} />
                      <Route path="/owner" element={<>  <Navbar/>  <Details/></>  } />  
                      <Route path="/dashboard" element={<>  <Navbar/>  <Login/></> } />

            </Routes>
     
    </Router>
 );
};

export default App;