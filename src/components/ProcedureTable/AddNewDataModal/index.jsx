import Button from "elements/Button";
import ArrowIcon from "assets/arrow-down.svg";

const AddNewDataModal = ({ handleClose, isProjectVisible = true }) => {
    return (
        <div className="add-new-data-modal">
            <div className="header">
                <h2>Add new data</h2>
            </div>
            <div className="content">
                <label className="volue-year-label" htmlFor="add-modal-data-year">
                    Volume per year <span>*</span>
                </label>
                <div className="year-input-wrapper">
                    <input id="add-modal-data-year" type="text" placeholder="# per year" />
                    <label className="item-checkbox">
                        Number not available
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="source-type-wrapper">
                    <p className="source-title">Source type</p>
                    <div className="radio">
                        <input label="Panel" defaultChecked type="radio" id="panel" name="sourceType" value="panel" />
                        <input label="HCOs" type="radio" id="hcos" name="sourceType" value="hcos" />
                        <input label="Source List" type="radio" id="sourceList" name="sourceType" value="sourceList" />
                        <input label="Companies" type="radio" id="companies" name="sourceType" value="companies" />
                    </div>
                </div>
                {isProjectVisible && (
                    <div className="project-wrapper">
                        <p className="project-title">Project</p>
                        <input type="text" className="project-custom-input" placeholder="Custom" />
                        <input type="text" className="contact-input" placeholder="Contact" />
                        <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
                        <input type="text" className="last-update-input" placeholder="Last Update" />
                    </div>
                )}
                {!isProjectVisible && (
                    <div className="hyperlink-wrapper">
                        <p className="project-title">Hyperlink</p>
                        <input type="text" className="project-custom-input" placeholder="ex: www.hospital.com" />
                    </div>
                )}
            </div>
            <div className="buttons-wrapper">
                <Button text="Cancel" inverted onClick={handleClose} />
                <Button text="Apply" onClick={handleClose} />
            </div>
        </div>
    );
};

export default AddNewDataModal;
