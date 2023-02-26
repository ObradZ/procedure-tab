import FlagIcon from "assets/flag.svg";
import InfoIcon from "assets/info.svg";
import NotesIcon from "assets/notes.svg";
import ReactCountryFlag from "react-country-flag";
import { STATUS } from "..";

const Table = ({ tableData }) => {
    return (
        <table className="data-table">
            <tr className="header-row">
                <th className="checkbox-wrapper">
                    <label className="item-checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>{" "}
                </th>
                <th className="flag">
                    <img src={FlagIcon} alt="flag" />
                </th>
                <th className="hospital">Hospital name</th>
                <th className="status">
                    status <img src={InfoIcon} alt="info" />
                </th>
                <th className="year">Per year</th>
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
                    <td
                        className={[
                            "status",
                            e.status === STATUS.ON_HOLD ? "on-hold" : "",
                            e.status === STATUS.ON_TRACK ? "on-track" : "",
                        ].join(" ")}
                    >
                        {e.status}
                    </td>
                    <td className="year">{e.perYear ? <div>{e.perYear}</div> : <button type="button">+</button>} </td>
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
                            <div class="fill" style={{ width: `${e.marketShare}%` }} />
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
        </table>
    );
};

export default Table;
