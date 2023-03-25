import FilterOptions from "components/ProcedureTable/FilterOptions";
import Avatar from "assets/source-items/Avatar.png";
import Avatar2 from "assets/source-items/Avatar-2.png";
import Avatar3 from "assets/source-items/Avatar-3.png";
import Avatar4 from "assets/source-items/Avatar-4.png";
import Avatar5 from "assets/source-items/Avatar-5.png";
import Avatar6 from "assets/source-items/Avatar-6.png";
import Avatar7 from "assets/source-items/Avatar-7.png";
import Hospital from "./Hospital";

const hospitals = [
    {
        name: "Hospital Saint Mary",
        perYear: 3,
        share: 60,
        image: Avatar,
    },
    {
        name: "Circooles",
        perYear: 3,
        share: 60,
        image: Avatar2,
    },
    {
        name: "Command+R",
        perYear: 3,
        share: 60,
        image: Avatar3,
    },
    {
        name: "Hourglass",
        perYear: null,
        share: 60,
        image: Avatar4,
    },
    {
        name: "Layers",
        perYear: null,
        share: 60,
        image: Avatar5,
    },
    {
        name: "Quotient",
        perYear: null,
        share: 60,
        image: Avatar6,
    },
    {
        name: "Sisyphus",
        perYear: null,
        share: 60,
        image: Avatar7,
    },
];
const Hospitals = () => {
    return (
        <div className="products-list">
            <FilterOptions filterName="Client" />
            <div className="header-product-wrapper hospital-wrapper">
                <label className="item-checkbox">
                    <input type="checkbox" id={`item-products`} />
                    <span className="checkmark"></span>
                </label>
                <div className="model name-header">Model</div>
                <div className="unit"># per year</div>
                <div className="share">Market share</div>
            </div>
            {hospitals.map((h) => (
                <Hospital hospital={h} />
            ))}
        </div>
    );
};

export default Hospitals;
