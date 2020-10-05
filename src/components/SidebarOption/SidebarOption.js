import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebar-option ${active && 'sidebar-option--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;