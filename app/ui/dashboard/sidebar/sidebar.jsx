import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMony,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutLineSettings,
  MdHelpCenter,
} from "react-icons/md";
const menuItem = [
  {
    titel: "Pages",
    list: [
      {
        titel: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        titel: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        titel: "Products",
        path: "/dashboard/product",
        icon: <MdShoppingBag />,
      },
      {
        titel: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMony />,
      },
    ],
  },
  {
    titel: "Analytics",
    list: [
      {
        titel: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        titel: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        titel: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    titel: "User",
    list: [
      {
        titel: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutLineSettings />,
      },
      {
        titel: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul>
        {menuItem.map((cat) => (
          <li key={cat.titel}>{cat.titel}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
