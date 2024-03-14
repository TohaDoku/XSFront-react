import "./styles/main.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login1 from "./pages/login/Login1";
import Login2 from './pages/login/Login2';
import Main from './pages/main/Main';
import NewOrder from "./pages/NewOrder/NewOrder";
import NewOrder2 from "./pages/NewOrder/NewOrder2";
import NewOrders from "./pages/NewOrders/NewOrders";
import Chats from "./pages/Chats/Chats";
import Bonus from "./pages/Bonus/Bonus";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
        <Router> 
            <Routes>
                <Route path="/" element={<Login1 />} />
                <Route path="/success" element={<Login2 />} />
                <Route path="/main-page" element={<Main />} />
                <Route path="/new-order" element={<NewOrder />} />
                <Route path="/new-order-next" element={<NewOrder2 />} />
                <Route path="/new-orders" element={<NewOrders />} />
                <Route path="/chats" element={<Chats />} />
                <Route path="/bonus" element={<Bonus />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
