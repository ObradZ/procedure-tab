import FlagIcon from "assets/flag.svg";
import InfoIcon from "assets/info.svg";
import SortingIcon from "assets/arrows-sorting.svg";
import NotesIcon from "assets/notes.svg";
import ReactCountryFlag from "react-country-flag";
import { STATUS } from "..";
import { useState } from "react";
import AddNewDataModal from "../AddNewDataModal";
import ChangeStatusModal from "../ChangeStatusModal";

const Table = ({ tableData, setTableData }) => {
    const [isAddNewDataOpen, setIsAddNewDataOpen] = useState([false, null]);
    const [isStatusModalOpen, setIsStatusModalOpen] = useState([false, null]);
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
        <table className="data-table">
            <thead>
                <tr className="header-row">
                    <th className="checkbox-wrapper">
                        <label className="item-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </th>
                    <th className="flag">
                        <img src={FlagIcon} alt="flag" />
                    </th>
                    <th className="hospital">
                        <button className="sort-btn" onClick={() => sortData("hospital")} type="button">
                            Hospital name <img src={SortingIcon} alt="sorting" />
                        </button>
                    </th>
                    <th className="status">
                        status <img src={InfoIcon} alt="info" />
                    </th>
                    <th className="year">
                        <button className="sort-btn" onClick={() => sortData("perYear")} type="button">
                            # Per year <img src={SortingIcon} alt="sorting" />
                        </button>
                    </th>
                    <th className="update">Last update</th>
                    <th className="share">
                        Market share
                        <img src={InfoIcon} alt="info" />
                    </th>
                    <th className="score">score</th>
                    <th className="cost">cost</th>
                    <th className="cagr">cagr</th>
                    <th style={{ backgroundColor: "white" }}>+</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((e) => (
                    <tr key={e.id}>
                        <td className="checkbox-wrapper">
                            <label className="item-checkbox">
                                <input type="checkbox" id={`item-${e.hospital}`} />
                                <span className="checkmark"></span>
                            </label>
                        </td>
                        <td className="flag">
                            {e.country ? (
                                <ReactCountryFlag
                                    countryCode={e.country.toUpperCase()}
                                    svg
                                    style={{
                                        fontSize: "2em",
                                        lineHeight: "2em",
                                    }}
                                    aria-label={`country ${e.country}`}
                                />
                            ) : (
                                <span>RV</span>
                            )}
                        </td>
                        <td className="hospital">{e.hospital}</td>
                        <td>
                            <div className="status-wrapper">
                                <button
                                    onClick={() => setIsStatusModalOpen((prev) => [!prev[0], e.id])}
                                    className={[
                                        "status",
                                        e.status === STATUS.ON_HOLD ? "on-hold" : "",
                                        e.status === STATUS.ON_TRACK ? "on-track" : "",
                                    ].join(" ")}
                                >
                                    {e.status}
                                </button>
                                {isStatusModalOpen[0] && isStatusModalOpen[1] === e.id && (
                                    <ChangeStatusModal handleClose={() => setIsStatusModalOpen([false, null])} />
                                )}
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
                                        <AddNewDataModal handleClose={() => setIsAddNewDataOpen([false, null])} />
                                    )}
                                </div>
                            )}
                        </td>
                        <td className="update">
                            {e.lastUpdate ? (
                                <div>
                                    <img src={NotesIcon} alt="icon" />
                                    {e.lastUpdate}
                                </div>
                            ) : (
                                ""
                            )}
                        </td>
                        <td className="share">
                            <div>
                                <div className="fill" style={{ width: `${e.marketShare}%` }} />
                            </div>
                            {e.marketShare}%
                        </td>
                        <td className="score">
                            <span>{e.dataScore}</span>
                        </td>
                        <td className="cost">{e.cost}</td>
                        <td className={[e.cagr > 0 ? "positive" : "negative", "cagr"].join(" ")}>
                            {e.cagr > 0 ? "+" : ""}
                            {e.cagr}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
