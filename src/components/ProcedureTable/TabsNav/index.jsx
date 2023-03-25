import HospitalProcedures from "components/_pages/hospital-procedures";
import Overview from "components/_pages/overview";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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

const TabsNav = () => {
    return (
        <div className="main-nav">
            <Tabs className="drawer-tabs">
                <TabList>
                    {navItems.map((item) => (
                        <Tab>
                            {item.label}
                            {!!item.counter && <span className="tab-counter">{item.counter}</span>}
                        </Tab>
                    ))}
                </TabList>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <HospitalProcedures />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <Overview />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsNav;
