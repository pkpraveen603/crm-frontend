import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {Entry} from "./pages/entry/Entry.page"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route
                        path='/'
                        element={<Entry/>}
                    />
                    <Route
                        path='/home'
                        element={<Home/>}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;