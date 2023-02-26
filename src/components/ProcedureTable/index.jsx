import { useState } from "react";
import FilterCountryModal from "./FilterCountryModal";
import FilterOptions from "./FilterOptions";
import TabsNav from "./TabsNav";

const ProcedureTable = () => {
    const [activeCountries, setActiveCountries] = useState([]);
    const [isCountryFilterOpen, setIsCountryFilterOpen] = useState(false);
    const clearAll = () => {
        setActiveCountries([]);
    };
    return (
        <div className="procedure-table">
            <div className="procedure-table-header">
                <h1>Procedure 1</h1>
                <h2>
                    Level 1 <span>Procedure</span>
                </h2>
                <input type="text" placeholder="SEARCH" />
            </div>
            <TabsNav />
            <FilterOptions activeCountries={activeCountries} setIsCountryFilterOpen={() => setIsCountryFilterOpen((prev) => !prev)} />
            <FilterCountryModal
                isOpen={isCountryFilterOpen}
                setIsOpen={setIsCountryFilterOpen}
                applyCountries={setActiveCountries}
            />
        </div>
    );
};

export default ProcedureTable;
