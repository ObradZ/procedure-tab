const navItems = [
    { label: "Overview", counter: 0, isSelected: true },
    { label: "Volumes", counter: 0 },
    { label: "People", counter: 4 },
    { label: "Projects", counter: 7 },
    { label: "Library", counter: 12, separator: true },
    { label: "Feedback", counter: 9 },
    { label: "Evidence", counter: 0 },
    { label: "Files", counter: 0 },
    { label: "Questions", counter: 0 },
    { label: "Coding", counter: 0 },
    { label: "Permission", counter: 0 },
];
const TabsNav = () => {
    return (
        <ul className="tabs-navigation">
            {navItems.map((item) => (
                <li className={item.separator ? "tab-separator" : ""} key={item.label}>
                    <button className={item.isSelected ? "selected" : ""}>
                        {item.label} {!!item.counter && <span>{item.counter}</span>}
                    </button>
                </li>
            ))}
        </ul>
    );
};
export default TabsNav;
