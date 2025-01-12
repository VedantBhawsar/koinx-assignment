import React from "react";

export type ActiveTabType =
  | "Overview"
  | "Fundamentals"
  | "News Insights"
  | "Sentiments"
  | "Team"
  | "Technicals"
  | "Tokenomics";

interface ISubSectionTabs {
  activeTab: ActiveTabType;
  setActiveTab: (activeTab: ActiveTabType) => void;
}

const SubSectionTabs = ({ activeTab, setActiveTab }: ISubSectionTabs) => {
  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className="">
      <nav className="flex overflow-x-scroll">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as ActiveTabType)}
            className={`
              px-4 py-2 font-semibold whitespace-nowrap focus:outline-none border-b-2
              ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SubSectionTabs;
