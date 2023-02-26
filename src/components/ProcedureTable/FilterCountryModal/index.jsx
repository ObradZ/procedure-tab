import Button from "elements/Button";
import { useEffect, useState } from "react";
import Select from "react-select";
import useDebounce from "hooks/useDebounce";
import Switch from "react-switch";
import ActiveTag from "elements/ActiveTag";

const defaultCountries = [
    { value: "usa", label: "USA", id: 0 },
    { value: "france", label: "France", id: 1 },
    { value: "germany", label: "Germany", id: 2 },
    { value: "italy", label: "Italy", id: 3 },
    { value: "belgium", label: "Belgium", id: 4 },
    { value: "spain", label: "Spain", id: 5 },
    { value: "netherlands", label: "Netherlands", id: 6 },
    { value: "switzerland", label: "Switzerland", id: 7 },
    { value: "sweden", label: "Sweden", id: 8 },
    { value: "portugal", label: "Portugal", id: 9 },
];

const FilterCountry = ({ isOpen, setIsOpen, applyCountries }) => {
    const [isExcludeActive, setIsExcludeActive] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [countries, setCountries] = useState(defaultCountries);
    const debouncedSearch = useDebounce(searchTerm, 350);

    const [checkedCountries, setCheckedCountries] = useState([]);

    const handleCancle = () => {
        setIsOpen(false);
    };

    const handleApply = () => {
        if (isExcludeActive) {
            const activeCountries = defaultCountries.filter((c) => !checkedCountries.find((e) => e.id === c.id));
            applyCountries(activeCountries);
        } else {
            applyCountries(checkedCountries);
        }
        setIsOpen(false);
    };

    const handleToggle = (country) => {
        const currentIndex = checkedCountries.findIndex((e) => e.id === country.id);
        const newChecked = [...checkedCountries];

        if (currentIndex === -1) {
            newChecked.push(country);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedCountries(newChecked);
    };

    useEffect(() => {
        if (debouncedSearch.length > 1) {
            const searchQuery = debouncedSearch.toLowerCase();
            const updated = defaultCountries.filter((c) => c.label.toLowerCase().includes(searchQuery));
            setCountries(updated);
        } else {
            setCountries(defaultCountries);
        }
    }, [debouncedSearch]);

    return (
        <div className={["filter-country-modal", isOpen ? "" : "d-none"].join(" ")}>
            <div className="header-wrapper">
                <div className="title">
                    <button type="button" className="back-arrow" onClick={handleCancle}></button>Filter country
                </div>
                {/* <Select className="select-country" options={countries} placeholder="Select country" isMulti /> */}
                <input
                    className="country-search"
                    type="text"
                    placeholder="Select country"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="active-countries-wrapper">
                {checkedCountries.map((c) => (
                    <ActiveTag label={c.label} onClick={() => handleToggle(c)} />
                ))}
            </div>
            <div className="exclude-wrapper">
                <p>Exclude</p>
                <label>
                    <Switch
                        onChange={() => setIsExcludeActive(!isExcludeActive)}
                        checked={isExcludeActive}
                        offColor="#CDCED9"
                        uncheckedIcon={false}
                        checkedIcon={false}
                        onColor="#5E5ADB"
                        width={42}
                        height={24}
                        handleDiameter={16}
                    />
                </label>
            </div>
            <div className="exclude-list-wrapper">
                <ul>
                    {countries.map((item) => {
                        const isChecked = !!checkedCountries.find((c) => c.id === item.id);
                        return (
                            <li key={item.id} className={isChecked ? "checked" : ""}>
                                <label className="country-checkbox">
                                    {item.label}
                                    <input
                                        onChange={() => handleToggle(item)}
                                        type="checkbox"
                                        id={`country-${item.value}`}
                                        value={item.value}
                                        checked={isChecked}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="buttons-wrapper">
                <Button text="Cancel" inverted onClick={handleCancle} />
                <Button text="Apply" onClick={handleApply} />
            </div>
        </div>
    );
};
export default FilterCountry;
