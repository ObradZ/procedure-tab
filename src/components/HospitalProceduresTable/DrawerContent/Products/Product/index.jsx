import DeleteIcon from "assets/delete-icon.svg";
import EditIcon from "assets/edit-icon.svg";

const Product = ({ product }) => {
    const { image, name, model, share, type, purchaseDate, price, unit } = product;
    return (
        <div className="product-wrapper">
            <label className="item-checkbox">
                <input type="checkbox" id={`item-${name}`} />
                <span className="checkmark"></span>
            </label>
            <div className="image-container">
                <img src={image} alt="company logo" />
                <div>
                    <p className="name">{name}</p>
                    <p className="model">{model}</p>
                </div>
            </div>
            <p className="type">{type}</p>
            <div className="unit">{unit && <span>{unit}</span>}</div>
            <p className="price">{price}</p>
            <p className="date">{purchaseDate}</p>
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

export default Product;
