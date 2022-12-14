import React from 'react';
import Tab from './bcg-tab';

import './bcg-tabs.css';

const BCGTabs = ({ tabs, activeTabId, onTabChange }) => {

    const [activeTab, setActiveTab] = React.useState(activeTabId ? activeTabId : tabs[0].id);

    return (
        <>
            <div className="tabs-container">
                <ul>
                    {
                        tabs.map((tab) => {
                            return <Tab
                                onClick={setActiveTab}
                                activeTab={activeTab}
                                label={tab.label}
                                id={tab.id}
                                onTabChange={onTabChange}
                                key={tab.id}
                                childCount={tab.childCount}
                            />
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default BCGTabs;