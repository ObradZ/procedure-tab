import FilterOptions from "components/ProcedureTable/FilterOptions";
import Avatar from "assets/source-items/Avatar.png";
import Avatar2 from "assets/source-items/Avatar-2.png";
import Avatar3 from "assets/source-items/Avatar-3.png";
import Avatar4 from "assets/source-items/Avatar-4.png";
import Avatar5 from "assets/source-items/Avatar-5.png";
import Avatar6 from "assets/source-items/Avatar-6.png";
import Avatar7 from "assets/source-items/Avatar-7.png";
import Person1 from "assets/source-items/Person1.png";
import Person2 from "assets/source-items/Person2.png";
import Person3 from "assets/source-items/Person3.png";
import Person4 from "assets/source-items/Person4.png";
import Person5 from "assets/source-items/Person5.png";
import Person6 from "assets/source-items/Person6.png";
import Person7 from "assets/source-items/Person7.png";
import Person from "./Person";

const people = [
    {
        name: "Hospital Saint Mary",
        perYear: 3,
        share: 60,
        image: Avatar,
        username: "Olivia Rhye",
        description: "Interventional Cardiologist",
        personImage: Person1,
    },
    {
        name: "Circooles",
        perYear: 3,
        share: 60,
        image: Avatar2,
        username: "Phoenix Baker",
        description: "@phoenix",
        personImage: Person2,

    },
    {
        name: "Command+R",
        perYear: 3,
        share: 60,
        image: Avatar3,
        username: "Lana Steiner",
        description: "@lana",
        personImage: Person3,

    },
    {
        name: "Hourglass",
        perYear: null,
        share: 60,
        image: Avatar4,
        username: "Demi Willkinson",
        description: "@demi",
        personImage: Person4,

    },
    {
        name: "Layers",
        perYear: null,
        share: 60,
        image: Avatar5,
        username: "Candice WU",
        description: "@candince",
        personImage: Person5,

    },
    {
        name: "Quotient",
        perYear: null,
        share: 60,
        image: Avatar6,
        username: "Natali Craig",
        description: "@natali",
        personImage: Person6,

    },
    {
        name: "Sisyphus",
        perYear: null,
        share: 60,
        image: Avatar7,
        username: "Drew Cano",
        description: "@drew",
        personImage: Person7,

    },
];
const People = () => {
    return (
        <div className="products-list">
            <FilterOptions filterName="Client" />
            <div className="header-product-wrapper hospital-wrapper person-wrapper">
                <label className="item-checkbox">
                    <input type="checkbox" id={`item-products`} />
                    <span className="checkmark"></span>
                </label>
                <div className="model username">Username</div>
                <div className="unit"># per year</div>
                <div className="model name-header">Model</div>
                <div className="share">Market share</div>
            </div>
            {people.map((p) => (
                <Person person={p} />
            ))}
        </div>
    );
};

export default People;
