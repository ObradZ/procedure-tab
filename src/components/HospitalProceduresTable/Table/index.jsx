import InfoIcon from "assets/info.svg";
import SortingIcon from "assets/arrows-sorting.svg";
import { useState } from "react";
import Row from "./Row";

const Table = ({ tableData, setTableData, toggleDrawer }) => {
    const [isAddNewDataOpen, setIsAddNewDataOpen] = useState([false, null]);

    const [isSorted, setIsSorted] = useState(null);

    const sortData = (property) => {
        const sortedData = [...tableData];
        if (isSorted === "asc") {
            sortedData.sort((a, b) => b[property].localeCompare(a[property]));
            setIsSorted("desc");
        } else {
            sortedData.sort((a, b) => a[property].localeCompare(b[property]));
            setIsSorted("asc");
        }
        setTableData(sortedData);
    };

    return (
        <table className="hp-data-table">
            <thead>
                <tr className="header-row">
                    <th className="checkbox-wrapper">
                        <label className="item-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </th>
                    <th className="arrow-placeholder"></th>
                    <th className="procedureName procedureNameHeader">
                        <button className="sort-btn" onClick={() => sortData("procedureName")} type="button">
                            Procedure name <img src={SortingIcon} alt="sorting" />
                        </button>
                    </th>
                    <th className="availability">
                        availability <img src={InfoIcon} alt="info" />
                    </th>
                    <th className="year">
                        <button className="sort-btn" onClick={() => sortData("perYear")} type="button">
                            # Per year <img src={SortingIcon} alt="sorting" />
                        </button>
                    </th>
                    <th className="share-hospital">share (hospital)</th>
                    <th className="share-nation">share (nation)</th>
                    <th className="Projects">Projects</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((e) => (
                    <>
                        <Row
                            data={e}
                            isAddNewDataOpen={isAddNewDataOpen}
                            setIsAddNewDataOpen={setIsAddNewDataOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    </>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
