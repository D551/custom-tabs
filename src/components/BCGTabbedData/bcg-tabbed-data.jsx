import React from 'react';
import BCGTabs from '../../core-components/BCGTabs/bcg-tabs';
import BCGItemCards from '../../core-components/BCGItemCard/bcg-item-card';
import { MOCK_BCG_TAB_DATA } from '../../constants/appConstants';

import './bcg-tabbed-data.css'

const BCGTabbedData = () => {

    const [selectedTab, setSelectedTab] = React.useState(MOCK_BCG_TAB_DATA[0].heading)

    const _getTabs = () => {
        return MOCK_BCG_TAB_DATA.map((item, index) => {
            return { id: index, label: item.heading, ...(item.data.length > 2 && { childCount: item.data.length }) }
        })
    }

    return (
        <>
            <BCGTabs
                tabs={_getTabs()}
                onTabChange={(event) => { setSelectedTab(event.label) }}
            />
            <div className='tab-content'>
                {MOCK_BCG_TAB_DATA.find((item) => {
                    return item.heading === selectedTab
                }).data.map((item) => {
                    return <BCGItemCards {...item} key={item.email} />
                })}
            </div>
        </>

    )
}

export default BCGTabbedData;