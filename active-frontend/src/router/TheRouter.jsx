import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import DesignPage from "../pages/DesignPage";
import ConsultPage from "../pages/ConsultPage";
import PlanningPage from "../pages/PlanningPage";
import SurveyPlotPage from "../pages/SurveyPlotPage";
import ConstructionPage from "../pages/ConstructionPage";
import WorkInProgress from "../pages/WorkInProgress";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminPage from "../pages/AdminPage";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Users from "../components/specific-components/adminpage-components/Users";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/services", element: <Services /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/design", element: <DesignPage /> },
  { path: "/consult", element: <ConsultPage /> },
  { path: "/planning", element: <PlanningPage /> },
  { path: "/surveyplot", element: <SurveyPlotPage /> },
  { path: "/construction", element: <ConstructionPage /> },
  { path: "/workinprogress", element: <WorkInProgress /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:projectId", element: <ProjectDetails /> },
  { path: "/users", element: <Users /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/admin", element: <AdminPage /> },
];

export default function TheRouter() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
            
          ))}
        </Routes>
      </div>
    </div>
  );
}
