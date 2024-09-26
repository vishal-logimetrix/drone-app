import Context from './Context';
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
import ProjectSites from "./components/reportComponents/ProjectSites";
import GeoMapping from "./components/reportComponents/GeoMapping";
import DayWiseProject from "./components/reportComponents/DayWiseProject";
import DailyProject from "./components/reportComponents/DailyProject";
import ProcessedImage from "./components/reportComponents/ProcessedImage";
import ManageSnapBlock from "./components/masterComponents/ManageSnapBlock";
import UserReport from "./components/reportComponents/UserReport";
import PageNotFound from './components/PageNotFound';
import UploadApk from './components/masterComponents/UploadAPK';
import UploadKMZ from './components/masterComponents/UploadKMZ';
import AllNotifications from './components/AllNotifications';
// import React, { useState } from "react";

function App() {

    // const [ products, setProducts ] = useState(null)
    // const [ session, setSession ] = useState(null)
    return (

        

        <Context.Provider>    
            {/* in these context tag add the value attribute of the state for example 
            <Context.Provider value={{products, setProducts, session, setSession}}> 
            like these and from which component you want to store the value in context store using setProduct and use using product state like these.
            */}
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />} >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="/allNotifications" element={<AllNotifications />} />
                    <Route path="/manageUserRole" element={<ManageUserRole />} />
                    <Route path="/manageUser" element={<ManageUser />} />
                    <Route path="/manageProjects" element={<ManageProjects />} />
                    <Route path="/activities" element={<ManageActivities />} />
                    <Route path="/area" element={<ManageArea />} />
                    <Route path="/subarea" element={<ManageSubArea />} />
                    <Route path="/manageSnapBlock" element={<ManageSnapBlock />} />
                    <Route path="/uploadAPK" element={<UploadApk />} />
                    <Route path="/uploadKMZ" element={<UploadKMZ />} />
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
        </Context.Provider>
    );
}

export default App;
