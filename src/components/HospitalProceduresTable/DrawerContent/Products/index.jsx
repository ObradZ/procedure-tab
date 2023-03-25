import FilterOptions from "components/ProcedureTable/FilterOptions";
import Avatar from "assets/source-items/Avatar.png";
import Avatar2 from "assets/source-items/Avatar-2.png";
import Avatar3 from "assets/source-items/Avatar-3.png";
import Avatar4 from "assets/source-items/Avatar-4.png";
import Avatar5 from "assets/source-items/Avatar-5.png";
import Avatar6 from "assets/source-items/Avatar-6.png";
import Avatar7 from "assets/source-items/Avatar-7.png";
import Product from "./Product";

const products = [
    {
        name: "Apple",
        model: "Iphone 12 pro Max",
        type: "Product Designer",
        unit: 3,
        price: "US$ 10.5k",
        purchaseDate: "Jan 6, 2022",
        share: 60,
        image: Avatar,
    },
    {
        name: "Circooles",
        model: "getcircooles.com",
        type: "Product Manager",
        unit: null,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 70,
        image: Avatar2,
    },
    {
        name: "Command+R",
        model: "cmdr.ai",
        type: "Fronted Developer",
        unit: undefined,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 60,
        image: Avatar3,
    },
    {
        name: "Hourglass",
        model: "hourglass.app",
        type: "Backend Developer",
        unit: null,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 30,
        image: Avatar4,
    },
    {
        name: "Layers",
        model: "getlayers.io",
        type: "Fullstack Developer",
        unit: null,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 20,
        image: Avatar5,
    },
    {
        name: "Quotient",
        model: "quotient.co",
        type: "UX Designer",
        unit: null,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 10,
        image: Avatar6,
    },
    {
        name: "Sisyphus",
        model: "sisyphus.com",
        type: "UX Designer",
        unit: null,
        price: "",
        purchaseDate: "Jan 6, 2022",
        share: 40,
        image: Avatar7,
    },
];
const Products = () => {
    return (
        <div className="products-list">
            <FilterOptions filterName="Client" />
            <div className="header-product-wrapper">
                <label className="item-checkbox">
                    <input type="checkbox" id={`item-products`} />
                    <span className="checkmark"></span>
                </label>
                <div className="model">Model</div>
                <p className="type">Device Type</p>
                <div className="unit">Unit</div>
                <p className="price">Price</p>
                <p className="date">Purchase date</p>
                <div className="share">Market share</div>
            </div>
            {products.map((p) => (
                <Product product={p} />
            ))}
        </div>
    );
};

export default Products;
