import InfoIcon from "assets/info.svg";
import SortingIcon from "assets/arrows-sorting.svg";
import { useState } from "react";
import AddNewDataModal from "components/ProcedureTable/AddNewDataModal";
import { AVAILABILITY } from "..";
import ArrowIcon from "assets/arrow-right.svg";

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
                    <th></th>
                    <th className="procedureName">
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
                    <tr key={e.id}>
                        <td className="checkbox-wrapper">
                            <label className="item-checkbox">
                                <input type="checkbox" id={`item-${e.procedureName}`} />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td>
                            <button className="arrow-btn">
                                <img src={ArrowIcon} alt="arrow" />
                            </button>
                        </td>
                        <td className="procedureName">
                            <button type="button" onClick={toggleDrawer}>
                                {e.procedureName}
                            </button>
                        </td>
                        <td>
                            <div className="status-wrapper">
                                <button
                                    className={[
                                        "status",
                                        e.availability === AVAILABILITY.UNKNOWN ? "unknown" : "",
                                        e.availability === AVAILABILITY.YES ? "yes" : "",
                                    ].join(" ")}
                                >
                                    {e.availability}
                                </button>
                            </div>
                        </td>
                        <td className="year">
                            {e.perYear ? (
                                <div>{e.perYear}</div>
                            ) : (
                                <div className="add-new-data-btn-wrapper">
                                    <button
                                        type="button"
                                        onClick={() => setIsAddNewDataOpen((prev) => [!prev[0], e.id])}
                                    >
                                        +
                                    </button>
                                    {isAddNewDataOpen[0] && isAddNewDataOpen[1] === e.id && (
                                        <AddNewDataModal
                                            isProjectVisible={false}
                                            handleClose={() => setIsAddNewDataOpen([false, null])}
                                        />
                                    )}
                                </div>
                            )}
                        </td>
                        <td className="share">
                            <div>
                                <div className="fill" style={{ width: `${e.shareHospital}%` }} />
                            </div>
                            {e.shareHospital}%
                        </td>
                        <td className="share">
                            <div>
                                <div className="share-nation-fill" style={{ width: `${e.shareNation}%` }} />
                            </div>
                            {e.shareNation}%
                        </td>
                        <td className="projects">
                            {e.projects.map((p, index) => (
                                <span key={index} className={index === 0 ? "purple" : ""}>
                                    {p}
                                </span>
                            ))}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
