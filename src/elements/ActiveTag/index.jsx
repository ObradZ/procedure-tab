import XIcon from "assets/x.svg";

const ActiveTag = ({ label, onClick }) => (
    <div className="active-tag">
        {label}
        <button type="button" onClick={onClick}>
            <img src={XIcon} alt="x" />
        </button>
    </div>
);

export default ActiveTag;
