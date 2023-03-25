import FilterIcon from "assets/filter.svg";
import TableIcon from "assets/table-icon.svg";
import ArrowDownIcon from "assets/arrow-down.svg";
import ActiveTag from "elements/ActiveTag";
const FilterOptions = ({ activeFilters, setIsFilterOpen, clearAll, handleRemoveFilter, filterName }) => {
    return (
        <div className="filter-options">
            <button type="button" className="filter-btn" onClick={setIsFilterOpen}>
                <img src={FilterIcon} alt="filter" />
                <span>{filterName}</span>
                <img src={ArrowDownIcon} alt="arrow" />
            </button>
            <input className="search-option" type="text" placeholder="Search" />
            <div className="active-tags-wrapper">
                <div className="active-tags">
                    {activeFilters?.map((filter) => (
                        <ActiveTag key={filter.id} label={filter.label} onClick={() => handleRemoveFilter(filter)} />
                    ))}
                </div>
                <div className="tags-buttons-wrapper">
                    <button className="table-btn" type="button">
                        <img src={TableIcon} alt="table" />
                    </button>
                    <p className="filters-info">Filter: {activeFilters?.length}</p>
                    <button type="button" className="clear-all-btn" onClick={clearAll}>
                        Clear all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterOptions;
