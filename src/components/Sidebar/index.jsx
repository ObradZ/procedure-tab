import LogoIcon from "assets/Logo.svg";
import FolderIcon from "assets/folder.svg";
import SettingsIcon from "assets/Settings.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <button type="button" className="logo-button">
                <img src={LogoIcon} alt="logo" />
            </button>
            <button type="button">
                <img src={FolderIcon} alt="folder" />
            </button>

            <button type="button">
                <img src={SettingsIcon} alt="settings" />
            </button>
        </div>
    );
};

export default Sidebar;
