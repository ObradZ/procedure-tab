import FilterIcon from "assets/filter.svg";
import TableIcon from "assets/table-icon.svg";
import ArrowDownIcon from "assets/arrow-down.svg";
import ActiveTag from "elements/ActiveTag";
const FilterOptions = ({ activeCountries, setIsCountryFilterOpen }) => {
    return (
        <div className="filter-options">
            <button type="button" className="filter-btn" onClick={setIsCountryFilterOpen}>
                <img src={FilterIcon} alt="filter" />
                <span>Country</span>
                <img src={ArrowDownIcon} alt="arrow" />
            </button>
            <input className="search-option" type="text" placeholder="Search" />
            <div className="active-tags-wrapper">
                <div className="active-tags">
                    {activeCountries.map((country) => (
                        <ActiveTag label={country.label} onClick={() => 1} />
                    ))}
                </div>
                <div className="tags-buttons-wrapper">
                    <button className="table-btn" type="button">
                        <img src={TableIcon} alt="table" />
                    </button>
                    <p className="filters-info">Filter: {activeCountries.length}</p>
                    <button type="button" className="clear-all-btn">
                        Clear all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;
