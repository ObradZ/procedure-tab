import { AVAILABILITY } from "components/HospitalProceduresTable";
import AddNewDataModal from "components/ProcedureTable/AddNewDataModal";
import ArrowIcon from "assets/arrow-right.svg";
import { useState } from "react";

const Row = ({ data, isAddNewDataOpen, setIsAddNewDataOpen, toggleDrawer }) => {
    const [isAccordionOpen, setisAccordionOpen] = useState(false);
    return (
        <>
            <tr key={data.id}>
                <td className="checkbox-wrapper">
                    <label className="item-checkbox">
                        <input type="checkbox" id={`item-${data.procedureName}`} />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td>
                    <button
                        className={`arrow-btn transition ${isAccordionOpen ? " accordion-open" : ""}`}
                        onClick={() => setisAccordionOpen((prev) => !prev)}
                    >
                        <img src={ArrowIcon} alt="arrow" />
                    </button>
                </td>
                <td className="procedureName">
                    <button type="button" onClick={toggleDrawer}>
                        {data.procedureName}
                    </button>
                </td>
                <td>
                    <div className="status-wrapper">
                        <button
                            className={[
                                "status",
                                data.availability === AVAILABILITY.UNKNOWN ? "unknown" : "",
                                data.availability === AVAILABILITY.YES ? "yes" : "",
                            ].join(" ")}
                        >
                            {data.availability}
                        </button>
                    </div>
                </td>
                <td className="year">
                    {data.perYear ? (
                        <div>{data.perYear}</div>
                    ) : (
                        <div className="add-new-data-btn-wrapper">
                            <button type="button" onClick={() => setIsAddNewDataOpen((prev) => [!prev[0], data.id])}>
                                +
                            </button>
                            {isAddNewDataOpen[0] && isAddNewDataOpen[1] === data.id && (
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
                        <div className="fill" style={{ width: `${data.shareHospital}%` }} />
                    </div>
                    {data.shareHospital}%
                </td>
                <td className="share">
                    <div>
                        <div className="share-nation-fill" style={{ width: `${data.shareNation}%` }} />
                    </div>
                    {data.shareNation}%
                </td>
                <td className="projects">
                    {data.projects.map((p, index) => (
                        <span key={index} className={index === 0 ? "purple" : ""}>
                            {p}
                        </span>
                    ))}
                </td>
            </tr>

            <div className={`accordion ${isAccordionOpen ? "" : "closed"}`}>
                <tr key={data.id}>
                    <td className="checkbox-wrapper">
                        <label className="item-checkbox">
                            <input type="checkbox" id={`item-${data.procedureName}`} />
                            <span className="checkmark"></span>
                        </label>
                    </td>
                    <td>
                        <button className="arrow-btn arrow-down-background">
                            <img src={ArrowIcon} alt="arrow" />
                        </button>
                    </td>
                    <td className="procedureName">
                        <button className="procedure2" type="button" onClick={toggleDrawer}>
                            Procedure Level 2
                        </button>
                    </td>
                    <td>
                        <div className="status-wrapper">
                            <button
                                className={[
                                    "status",
                                    data.availability === AVAILABILITY.UNKNOWN ? "unknown" : "",
                                    data.availability === AVAILABILITY.YES ? "yes" : "",
                                ].join(" ")}
                            >
                                {data.availability}
                            </button>
                        </div>
                    </td>
                    <td className="year">
                        <div className="add-new-data-btn-wrapper">
                            <button type="button" onClick={() => setIsAddNewDataOpen((prev) => [!prev[0], data.id])}>
                                +
                            </button>
                        </div>
                    </td>
                    <td className="share">
                        <div>
                            <div className="fill" style={{ width: `${data.shareHospital}%` }} />
                        </div>
                        {data.shareHospital}%
                    </td>
                    <td className="share">
                        <div>
                            <div className="share-nation-fill" style={{ width: `${data.shareNation}%` }} />
                        </div>
                        {data.shareNation}%
                    </td>
                    <td className="projects">
                        {data.projects.map((p, index) => (
                            <span key={index} className={index === 0 ? "purple" : ""}>
                                {p}
                            </span>
                        ))}
                    </td>
                </tr>
                <tr key={data.id}>
                    <td className="checkbox-wrapper">
                        <label className="item-checkbox">
                            <input type="checkbox" id={`item-${data.procedureName}`} />
                            <span className="checkmark"></span>
                        </label>
                    </td>
                    <td>
                        <button className="arrow-btn arrow-down-background">
                            <img src={ArrowIcon} alt="arrow" />
                        </button>
                    </td>
                    <td className="procedureName">
                        <button className="procedure3" type="button" onClick={toggleDrawer}>
                            Procedure Level 3
                        </button>
                    </td>
                    <td>
                        <div className="status-wrapper">
                            <button
                                className={[
                                    "status",
                                    data.availability === AVAILABILITY.UNKNOWN ? "unknown" : "",
                                    data.availability === AVAILABILITY.YES ? "yes" : "",
                                ].join(" ")}
                            >
                                {data.availability}
                            </button>
                        </div>
                    </td>
                    <td className="year">
                        <div className="add-new-data-btn-wrapper">
                            <button type="button" onClick={() => setIsAddNewDataOpen((prev) => [!prev[0], data.id])}>
                                +
                            </button>
                        </div>
                    </td>
                    <td className="share">
                        <div>
                            <div className="fill" style={{ width: `${data.shareHospital}%` }} />
                        </div>
                        {data.shareHospital}%
                    </td>
                    <td className="share">
                        <div>
                            <div className="share-nation-fill" style={{ width: `${data.shareNation}%` }} />
                        </div>
                        {data.shareNation}%
                    </td>
                    <td className="projects">
                        {data.projects.map((p, index) => (
                            <span key={index} className={index === 0 ? "purple" : ""}>
                                {p}
                            </span>
                        ))}
                    </td>
                </tr>
            </div>
        </>
    );
};

export default Row;
