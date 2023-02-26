import Sidebar from "components/Sidebar";
import ProcedureTable from "./components/ProcedureTable";
import "./styles/main.scss";

function App() {
    return (
        <div className="App">
            <ProcedureTable />
            <Sidebar />
        </div>
    );
}

export default App;
