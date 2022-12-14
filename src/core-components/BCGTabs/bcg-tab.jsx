import React from "react";
import './bcg-tab.css';

const Tab = (props) => {
    return (
        <li
            key={props.id}
            id={props.id}
            value={props.label}
            className={props.activeTab === props.id ?
                'tab-list-item tab-list-active' : 'tab-list-item'}
            onClick={(e) => {
                props.onClick(props.id);
                props.onTabChange({ id: props.id, label: props.label });
            }
            }
        >
            <div className="tab-label">
                <span>{props.label}</span>
                {props.childCount && <div className="tab-child-count">{props.childCount}</div>}
            </div>
        </li>
    );

}


export default Tab;