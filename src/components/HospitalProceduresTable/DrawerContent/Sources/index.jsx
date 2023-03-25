import BoxIcon from "assets/box-icon.svg";
import SourceItem from "./SourceItem";

const Sources = () => {
    return (
        <div className="sources-container">
            <div className="sources-left-container">
                <img className="sources-icon" src={BoxIcon} alt="box" />
                <p className="sources-subtitle">
                    Sources Ranging between <span className="purple-bold">159</span> and{" "}
                    <span className="purple-bold">190</span>
                </p>
                <p className="sources-subtitle">
                    Last update data is from <span className="purple-bold">2016</span> scored{" "}
                    <span className="green-bold">A+</span>
                </p>
                <p className="sources-text">
                    Quomeda predictive algorithm 6% in 6 years with a margin of error of 8%Want to refine this datapoint
                    ?
                </p>
            </div>
            <div className="sources-right-container">
                <div className="sources-right-content-wrapper">
                    <p className="right-title">Main Source</p>
                    <SourceItem
                        company="Princo Palino"
                        subtitle="Self Reported by Panel"
                        year="2019"
                        title="20,089"
                        grade="A"
                        color="light-purple"
                    />
                </div>
                <div className="inner-tabs-wrapper">
                    <button type="button" className="selected">
                        All
                    </button>
                    <button type="button">
                        Panel <span className="tab-counter">27</span>
                    </button>
                    <button type="button">
                        HCOs <span className="tab-counter">4</span>
                    </button>
                    <button type="button">Organization</button>
                    <button type="button">Company</button>
                    <button type="button" className="source-btn">
                        + Source
                    </button>
                </div>
                <div className="sources-list">
                    <SourceItem
                        company="Hospital Saint Mary"
                        subtitle="Self Reported by Organization"
                        year="2019"
                        title="20,089"
                        color="green"
                    />
                    <SourceItem
                        company="OECD"
                        subtitle="Data published by"
                        year="2019"
                        title="20,089"
                        color="pink"
                    />
                    <SourceItem
                        company="Medical Company"
                        subtitle="Data Reported by"
                        year="2019"
                        title="20,089"
                        color="light-blue"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sources;
