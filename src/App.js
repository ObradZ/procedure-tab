import Sidebar from "components/Sidebar";
import "./styles/main.scss";
import "react-modern-drawer/dist/index.css";
import TabsNav from "components/ProcedureTable/TabsNav";

function App() {
    return (
        <div className="App">
            <Sidebar />
            <TabsNav />
        </div>
    );
}

export default App;
