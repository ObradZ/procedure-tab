import Button from "elements/Button";
const AddNewDataModal = () => {
    return (
        <div>
            <div className="header">
                <h2>Add new data</h2>
            </div>
            <div className="content"></div>
            <div className="buttons-wrapper">
                <Button text="Cancel" inverted onClick={handleCancle} />
                <Button text="Apply" onClick={handleApply} />
            </div>
        </div>
    );
};

export default AddNewDataModal;
