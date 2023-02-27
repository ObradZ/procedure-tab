import Button from "elements/Button";
import ArrowIcon from "assets/arrow-down.svg";

const ChangeStatusModal = ({ handleClose }) => {
    return (
        <div className="status-modal add-new-data-modal">
            <div className="status-options">
                <p className="status-options-title">Change status</p>
                <div className="radio-status">
                    <div className="input-wrapper green">
                        <input
                            label="Perform"
                            type="radio"
                            id="perform"
                            name="radio-status"
                            value="perform"
                        />
                    </div>
                    <div className="input-wrapper gray">
                        <input label="Unknown" type="radio" id="unknown" name="radio-status" value="unknown" />
                    </div>
                    <div className="input-wrapper red">
                        <input
                            label="Not Perform"
                            type="radio"
                            id="notPerform"
                            name="radio-status"
                            value="notPerform"
                        />
                    </div>
                </div>
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
                    </div>
                    <p className="companies">Companies</p>
                </div>
                <div className="project-wrapper">
                    <p className="project-title">Project</p>
                    <input type="text" className="project-custom-input" placeholder="Custom" />
                    <input type="text" className="contact-input" placeholder="Contact" />
                    <img className="arrow-icon" src={ArrowIcon} alt="arrow" />
                    <input type="text" className="last-update-input" placeholder="Last Update" />
                </div>
            </div>
            <div className="buttons-wrapper">
                <Button text="Cancel" inverted onClick={handleClose} />
                <Button text="Apply" onClick={handleClose} />
            </div>
        </div>
    );
};

export default ChangeStatusModal;
