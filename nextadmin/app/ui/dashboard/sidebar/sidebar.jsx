import React from 'react';
import styles from './sidebar.module.css'

const menuItem=[
    {
        title:"Pages",
        list:[
            {
                titel:"Dashboard",
                path:"/dashboard",
                icon:<MdDashboard/>
            }
        ]
    }
]
const Sidebar = () => {
    return (
        <div className={styles.container}>
            Sidebar
        </div>
    );
}

export default Sidebar;
