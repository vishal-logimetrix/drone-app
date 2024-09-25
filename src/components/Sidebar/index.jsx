import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaTachometerAlt, FaUserCog, FaCog, FaPowerOff, FaUsers, FaUserEdit, FaClipboardList,  
  FaTasks, FaMapMarkedAlt, FaFolderOpen, FaUpload, FaLock, FaFileAlt, FaImage, FaCalendarAlt, FaCalendarDay } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <>
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <ul className={styles.sidebarItems}>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
          >
            <FaTachometerAlt className={styles.icon} />
            {!isCollapsed && <span>Dashboard</span>}
          </NavLink>
        </li>

        <li>
          <div onClick={() => toggleMenu("master")} className={styles.menuItem}>
            <div className={styles.menuItemContent}>
              <FaUserCog className={styles.icon} />
              <span>{!isCollapsed ? "Master" : null}</span>
            </div>
            <div className={styles.arrow}>
              {openMenu === "master" ? <FaChevronDown /> : <FaChevronRight />}{" "}
            </div>
          </div>
          <ul
            className={`${styles.subMenu} ${
              openMenu === "master" ? styles.open : ""
            }`}
          >
            <li>
              <NavLink
                to="/manageUserRole"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaUsers className={styles.icon} />
                {!isCollapsed && <span>Manage User Role</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageUser"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaUserEdit className={styles.icon} />
                {!isCollapsed && <span>Manage Users</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageProjects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaClipboardList className={styles.icon} />
                {!isCollapsed && <span>Manage Project</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/activities"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaTasks className={styles.icon} />
                {!isCollapsed && <span>Manage Activities</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/area"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaMapMarkedAlt className={styles.icon} />
                {!isCollapsed && <span>Manage Area</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subarea"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaFolderOpen className={styles.icon} />
                {!isCollapsed && <span>Manage Sub Area</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manageSnapBlock"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaUpload className={styles.icon} />
                {!isCollapsed && <span>Manage Snap Block Update</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uploadAPK"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaUpload className={styles.icon} />
                {!isCollapsed && <span>Upload APK</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/uploadKMZ"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaUpload className={styles.icon} />
                {!isCollapsed && <span>Upload KMZ File</span>}
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <div
            onClick={() => toggleMenu("settings")}
            className={styles.menuItem}
          >
            <div className={styles.menuItemContent}>
              <FaCog className={styles.icon} />
              <span>{!isCollapsed ? "Settings" : null}</span>
            </div>
            <div className={styles.arrow}>
              {openMenu === "settings" ? <FaChevronDown /> : <FaChevronRight />}{" "}
            </div>
          </div>
          <ul
            className={`${styles.subMenu} ${
              openMenu === "settings" ? styles.open : ""
            }`}
          >
            <li>
              <NavLink
                to="/projectSites"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaMapMarkedAlt className={styles.icon} /> {/* Updated Icon */}
                {!isCollapsed && <span>View Project Sites</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/geomapping"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaLock className={styles.icon} />
                {!isCollapsed && <span>Sites Geomapping</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dailyProjects"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaCalendarDay className={styles.icon} /> {/* Updated Icon */}
                {!isCollapsed && <span>Daily Project Sites</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/daywise"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaCalendarAlt className={styles.icon} /> {/* Updated Icon */}
                {!isCollapsed && <span>Daywise Project Sites</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/processedImages"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaImage className={styles.icon} /> {/* Updated Icon */}
                {!isCollapsed && <span>Processed Images</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/userreport"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subMenuLink} ${styles.activeLink}`
                    : styles.subMenuLink
                }
              >
                <FaFileAlt className={styles.icon} /> {/* Updated Icon */}
                {!isCollapsed && <span>User Report</span>}
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Logout */}
        <li>
          <NavLink to="/logout" className={styles.navLink}>
            <FaPowerOff className={styles.icon} /> {/* Logout Icon */}
            {!isCollapsed && <span>Logout</span>}
          </NavLink>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
