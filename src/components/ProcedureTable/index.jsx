import { useEffect, useState } from "react";
import FilterCountryModal from "./FilterCountryModal";
import FilterOptions from "./FilterOptions";
import Table from "./Table";
export const STATUS = {
    ON_HOLD: "On hold",
    ON_TRACK: "On track",
    UNKOWN: "",
};

export const defaultTableData = [
    {
        id: 0,
        country: "",
        hospital: "Gemini",
        status: STATUS.ON_TRACK,
        perYear: "3",
        lastUpdate: 2021,
        marketShare: 70,
        dataScore: "A+",
        cost: "US$ 10.5k",
        cagr: 5,
        checked: false,
    },
    {
        id: 1,
        country: "fr",
        hospital: "Hospital Saint Mary",
        status: STATUS.ON_HOLD,
        perYear: "2",
        lastUpdate: 2021,
        marketShare: 70,
        dataScore: "A+",
        cost: "US$ 10.5k",
        cagr: null,
        checked: false,
    },
    {
        id: 2,
        country: "fr",
        hospital: "Hospital May the 15th",
        status: STATUS.ON_HOLD,
        perYear: "",
        lastUpdate: 2021,
        marketShare: 70,
        dataScore: "A+",
        cost: "US$ 10.5k",
        cagr: null,
        checked: false,
    },
    {
        id: 3,
        country: "fr",
        hospital: "Tarius landing page",
        status: STATUS.UNKOWN,
        perYear: "",
        lastUpdate: 2021,
        marketShare: 50,
        dataScore: "B",
        cost: "",
        cagr: -5,
        checked: false,
    },
    {
        id: 4,
        country: "us",
        hospital: "USA hospital page",
        status: STATUS.UNKOWN,
        perYear: "",
        lastUpdate: 2021,
        marketShare: 50,
        dataScore: "B",
        cost: "",
        cagr: -5,
        checked: false,
    },
    {
        id: 5,
        country: "se",
        hospital: "Hospital name",
        status: STATUS.UNKOWN,
        perYear: "",
        lastUpdate: 2021,
        marketShare: 50,
        dataScore: "B",
        cost: "",
        cagr: 10,
        checked: false,
    },
];

const ProcedureTable = () => {
    const [tableData, setTableData] = useState(defaultTableData);
    const [activeCountries, setActiveCountries] = useState([]);
    const [isCountryFilterOpen, setIsCountryFilterOpen] = useState(false);
    const clearAll = () => {
        setActiveCountries([]);
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
            setTableData(defaultTableData);
        } else {
            const countryCodes = activeCountries.map((c) => c.code);
            const filteredData = defaultTableData.filter((e) => countryCodes.includes(e.country));

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
            {/* <TabsNav /> */}
            <FilterOptions
                filterName="Country"
                activeFilters={activeCountries}
                clearAll={clearAll}
                handleRemoveFilter={handleRemoveCountry}
                setIsFilterOpen={() => setIsCountryFilterOpen((prev) => !prev)}
            />
            <Table tableData={tableData} setTableData={setTableData} applyCountries={setActiveCountries} />
            <FilterCountryModal
                isOpen={isCountryFilterOpen}
                setIsOpen={setIsCountryFilterOpen}
                applyCountries={setActiveCountries}
            />
        </div>
    );
};

export default ProcedureTable;
