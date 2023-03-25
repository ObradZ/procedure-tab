import DeleteIcon from "assets/delete-icon.svg";
import EditIcon from "assets/edit-icon.svg";

const Person = ({ person }) => {
    const { image, name, share, perYear, username, description, personImage } = person;
    return (
        <div className="product-wrapper hospital-wrapper person-wrapper">
            <label className="item-checkbox">
                <input type="checkbox" id={`item-${name}`} />
                <span className="checkmark"></span>
            </label>
            <div className="image-container">
                <img src={personImage} alt="avatar" />
                <div>
                    <p className="name">{username}</p>
                    <p className="model">{description}</p>
                </div>
            </div>
            <div className="unit">{perYear && <span>{perYear}</span>}</div>
            <div className="image-container">
                <img src={image} alt="company logo" />
                <div>
                    <p className="name">{name}</p>
                </div>
            </div>

            <div className="share">
                <div>
                    <div className="fill" style={{ width: `${share}%` }} />
                </div>
                {share}%
            </div>
            <div className="source-item-buttons-wrapper">
                <button type="button">
                    <img src={DeleteIcon} alt="delete" />
                </button>
                <button type="button">
                    <img src={EditIcon} alt="edit" />
                </button>
            </div>
        </div>
    );
};

export default Person;
