import TabsNav from "components/ProcedureTable/TabsNav";
import { useState, useEffect } from "react";
import Table from "./Table";
import FilterOptions from "components/ProcedureTable/FilterOptions";
import Drawer from "react-modern-drawer";
import DrawerContent from "./DrawerContent";

export const AVAILABILITY = {
    YES: "yes",
    NO: "no",
    UNKNOWN: "?",
};

const defaultHPTableData = [
    {
        id: 0,
        procedureName: "Allosaurus web app",
        availability: AVAILABILITY.YES,
        perYear: "125",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 1,
        procedureName: "MicroRaptor website",
        availability: AVAILABILITY.NO,
        perYear: "1050",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 2,
        procedureName: "Tarius landing page",
        availability: AVAILABILITY.UNKNOWN,
        perYear: "125",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 3,
        procedureName: "Rugops App",
        availability: AVAILABILITY.YES,
        perYear: "",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 4,
        procedureName: "Capricorn",
        availability: AVAILABILITY.YES,
        perYear: "3",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 5,
        procedureName: "Gemini",
        availability: AVAILABILITY.YES,
        perYear: "150",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 6,
        procedureName: "Horus",
        availability: AVAILABILITY.YES,
        perYear: "1050",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 7,
        procedureName: "Hathor",
        availability: AVAILABILITY.YES,
        perYear: "3",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 8,
        procedureName: "Othello",
        availability: AVAILABILITY.YES,
        perYear: "",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
    {
        id: 9,
        procedureName: "Procedure Level 1",
        availability: AVAILABILITY.YES,
        perYear: "50",
        shareHospital: 70,
        shareNation: 70,
        projects: ["Open: 64%", "Mis: 10%", "Robotic: 5%"],
    },
];

const HospitalProceduresTable = () => {
    const [tableData, setTableData] = useState(defaultHPTableData);
    const [activeCountries, setActiveCountries] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isCountryFilterOpen, setIsCountryFilterOpen] = useState(false);
    const clearAll = () => {
        setActiveCountries([]);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen((prevState) => !prevState);
    };

    const handleRemoveCountry = (country) => {
        const currentIndex = activeCountries.findIndex((e) => e.id === country.id);
        const newChecked = [...activeCountries];

        if (currentIndex === -1) {
            newChecked.push(country);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setActiveCountries(newChecked);
    };

    useEffect(() => {
        if (activeCountries.length < 1) {
            setTableData(defaultHPTableData);
        } else {
            const countryCodes = activeCountries.map((c) => c.code);
            const filteredData = defaultHPTableData.filter((e) => countryCodes.includes(e.country));

            setTableData(filteredData);
        }
    }, [activeCountries]);
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
            <FilterOptions
                filterName="Speciality"
                activeFilters={activeCountries}
                clearAll={clearAll}
                handleRemoveFilter={handleRemoveCountry}
                setIsFilterOpen={() => setIsCountryFilterOpen((prev) => !prev)}
            />
            <Table toggleDrawer={toggleDrawer} tableData={tableData} setTableData={setTableData} />
            <Drawer open={isDrawerOpen} onClose={toggleDrawer} direction="right" className="drawer">
                <DrawerContent />
            </Drawer>
        </div>
    );
};

export default HospitalProceduresTable;
