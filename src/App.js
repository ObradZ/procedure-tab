import Sidebar from "components/Sidebar";
import "./styles/main.scss";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Overview from "components/_pages/overview";
import HospitalProcedures from "components/_pages/hospital-procedures";
import 'react-modern-drawer/dist/index.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/projects" element={<HospitalProcedures />} />
            </Routes>
            <Sidebar />
        </div>
    );
}

export default App;
