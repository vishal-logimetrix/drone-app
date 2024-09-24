
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import ManageUserRole from "./components/masterComponents/ManageUserRole";
import ManageUser from "./components/masterComponents/ManageUser";
import ManageProjects from "./components/masterComponents/ManageProjects";
import ManageActivities from "./components/masterComponents/ManageActivities";
import ManageArea from "./components/masterComponents/ManageArea";
import ManageSubArea from "./components/masterComponents/ManageSubArea";
import ProjectSites from "./components/settingComponents/ProjectSites";
import GeoMapping from "./components/settingComponents/GeoMapping";
import DayWiseProject from "./components/settingComponents/DayWiseProject";
import DailyProject from "./components/settingComponents/DailyProject";
import ProcessedImage from "./components/settingComponents/ProcessedImage";
import ManageSnapBlock from "./components/masterComponents/ManageSnapBlock";
import UserReport from "./components/settingComponents/UserReport";
import PageNotFound from './components/PageNotFound'
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="/manageUserRole" element={<ManageUserRole />} />
                    <Route path="/manageUser" element={<ManageUser />} />
                    <Route path="/manageProjects" element={<ManageProjects />} />
                    <Route path="/activities" element={<ManageActivities />} />
                    <Route path="/area" element={<ManageArea />} />
                    <Route path="/subarea" element={<ManageSubArea />} />
                    <Route path="/manageSnapBlock" element={<ManageSnapBlock />} />
                    <Route path="/projectSites" element={<ProjectSites />} />
                    <Route path="/geoMapping" element={<GeoMapping />} />
                    <Route path="/dayWise" element={<DayWiseProject />} />
                    <Route path="/dailyProjects" element={<DailyProject />} />
                    <Route path="/processedImages" element={<ProcessedImage />} />
                    <Route path="/userReport" element={<UserReport />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
