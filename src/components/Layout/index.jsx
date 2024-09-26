import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import styles from './layout.module.css';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowWidth < 768) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const breadcrumbs = location.pathname.split('/').filter(x => x).map((segment, index) => {
    const path = `/${segment}`;
    return (
      <Breadcrumb.Item
        key={index}
        linkAs={Link}
        linkProps={{ to: path, style: { color: '#999', textDecoration: 'none' } }}
        className={styles.breadcrumbLink} 
        style={{
          color: '#999',
          textDecoration: 'none'
        }}
      >
        {segment}
      </Breadcrumb.Item>
    );
  });

  return (
    <>
      <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />

      <div className={styles.layoutContainer}>
        <Sidebar className={styles.sidebar} isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
        <div className={styles.contentContainer}>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/dashboard', style: { color: '#999', textDecoration: 'none', fontWeight: '600' } }} className={styles.breadcrumbLink} >
              Home
            </Breadcrumb.Item>
            {breadcrumbs}
          </Breadcrumb>
          <hr />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
