import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Hospitals from "./Hospitals";
import People from "./People";
import Products from "./Products";
import Sources from "./Sources";

const DrawerContent = () => {
    return (
        <div className="drawer-content-wrapper">
            <p className="drawer-title">
                Procedure 1 at <span>Hospital Saint Mary</span>
            </p>
            <Tabs className="drawer-tabs">
                <TabList>
                    <Tab>Sources</Tab>
                    <Tab>Products</Tab>
                    <Tab>
                        Hospitals<span className="tab-counter">4</span>
                    </Tab>
                    <Tab>
                        People<span className="tab-counter">12</span>
                    </Tab>
                    <Tab>Files</Tab>
                </TabList>
                <TabPanel>
                    <Sources />
                </TabPanel>
                <TabPanel>
                    <Products />
                </TabPanel>
                <TabPanel>
                    <Hospitals />
                </TabPanel>
                <TabPanel>
                    <People />
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default DrawerContent;
