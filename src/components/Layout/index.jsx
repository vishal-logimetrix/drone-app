import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import './layout.css'; 

const Layout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Detect screen width and auto-collapse sidebar on small screens
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Automatically collapse sidebar if window width is less than 768px
        if (windowWidth < 768) {
            setIsCollapsed(true);
        }else{
            setIsCollapsed(false);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    // Generate breadcrumb items based on the current path
    const breadcrumbs = location.pathname.split('/').filter(x => x).map((segment, index) => {
        const path = `/${segment}`;
        return (
            <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: path }}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Breadcrumb.Item>
        );
    });

    return (
        <>
            <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
            <div style={{ display: 'flex', height: '100vh' }}>
                <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

                <div style={{ flex: 1, padding: '20px' }}>

                <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/dashboard' }}>
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
