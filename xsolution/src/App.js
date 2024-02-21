import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login1 from "./pages/login/Login1";
import Login2 from './pages/login/Login2';

import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
        <Router>
            
            
            <Routes>
                <Route path="/" element={<Login1 />} />
                <Route path="/success" element={<Login2 />} />


                
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
