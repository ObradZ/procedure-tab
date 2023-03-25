import AvatarImg from "assets/source-items/Avatar.png";
import CalendarIcon from "assets/source-items/source-calendar.svg";
const SourceItem = ({ title, subtitle, company, year, color, grade }) => {
    return (
        <div className="source-item-wrapper">
            <div className={`source-item-color ${color}`}></div>
            <p className="source-item-title">{title}</p>
            {grade && <span className="grade">{grade}</span>}
            <div className="content-wrapper">
                <div>
                    <img src={AvatarImg} alt="avatar" />
                </div>
                <div className="content">
                    <div>
                        <p className="subtitle">{subtitle}</p>
                        <p className="company">{company}</p>
                    </div>
                    <div className="calendar-wrapper">
                        <img src={CalendarIcon} alt="calendar" />
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SourceItem;
