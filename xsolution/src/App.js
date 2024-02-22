import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login1 from "./pages/login/Login1";
import Login2 from './pages/login/Login2';


function App() {
  return (
    <div className="App">
        <Router>
            
            
            <Routes>
                <Route path="/" element={<Login1 />} />
                <Route path="/success" element={<Login2 />} />
                

              
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
