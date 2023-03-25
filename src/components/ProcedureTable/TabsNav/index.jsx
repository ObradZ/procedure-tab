import { Link } from "react-router-dom";

const navItems = [
    { label: "Overview", counter: 0, isSelected: true, link: "/" },
    { label: "Volumes", counter: 0, link: "/" },
    { label: "People", counter: 4, link: "/" },
    { label: "Projects", counter: 7, link: "/projects" },
    { label: "Library", counter: 12, separator: true, link: "/" },
    { label: "Feedback", counter: 9, link: "/" },
    { label: "Evidence", counter: 0, link: "/" },
    { label: "Files", counter: 0, link: "/" },
    { label: "Questions", counter: 0, link: "/" },
    { label: "Coding", counter: 0, link: "/" },
    { label: "Permission", counter: 0, link: "/" },
];

// const navItems = [
//     { label: "Overview", counter: 0, isSelected: true, link: "/" },
//     { label: "Purchases", counter: 0, link: "/" },
//     { label: "People", counter: 4, link: "/" },
//     { label: "Procedures", counter: 7, link: "/projects" },
//     { label: "Library", counter: 12, separator: true, link: "/" },
//     { label: "Feedback", counter: 9, link: "/" },
// ];

const TabsNav = () => {
    return (
        <ul className="tabs-navigation">
            {navItems.map((item) => (
                <li className={item.separator ? "tab-separator" : ""} key={item.label}>
                    <Link to={item.link} className={item.isSelected ? "selected" : ""}>
                        {item.label} {!!item.counter && <span>{item.counter}</span>}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default TabsNav;
