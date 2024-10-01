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
import ProtectedRoute from './ProtectedRoute.js'
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

                <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
                <Route path="/allNotifications" element={ <ProtectedRoute> <AllNotifications /> </ProtectedRoute> } />
                <Route path="/manageUserRole" element={ <ProtectedRoute> <ManageUserRole /> </ProtectedRoute> } />
                <Route path="/manageUser" element={ <ProtectedRoute> <ManageUser /> </ProtectedRoute> } />
                <Route path="/manageProjects" element={ <ProtectedRoute> <ManageProjects /> </ProtectedRoute> } />
                <Route path="/activities" element={ <ProtectedRoute> <ManageActivities /> </ProtectedRoute> } />
                <Route path="/area" element={ <ProtectedRoute> <ManageArea /> </ProtectedRoute> } />
                <Route path="/subarea" element={ <ProtectedRoute> <ManageSubArea /> </ProtectedRoute> } />
                <Route path="/manageSnapBlock" element={ <ProtectedRoute> <ManageSnapBlock /> </ProtectedRoute> } />
                <Route path="/uploadAPK" element={ <ProtectedRoute> <UploadApk /> </ProtectedRoute> } />
                <Route path="/uploadKMZ" element={ <ProtectedRoute> <UploadKMZ /> </ProtectedRoute> } />
                <Route path="/projectSites" element={ <ProtectedRoute> <ProjectSites /> </ProtectedRoute> } />
                <Route path="/geoMapping" element={ <ProtectedRoute> <GeoMapping /> </ProtectedRoute> } />
                <Route path="/dayWise" element={ <ProtectedRoute> <DayWiseProject /> </ProtectedRoute> } />
                <Route path="/dailyProjects" element={ <ProtectedRoute> <DailyProject /> </ProtectedRoute> } />
                <Route path="/processedImages" element={ <ProtectedRoute> <ProcessedImage /> </ProtectedRoute> } />
                <Route path="/userReport" element={ <ProtectedRoute> <UserReport /> </ProtectedRoute> } />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
