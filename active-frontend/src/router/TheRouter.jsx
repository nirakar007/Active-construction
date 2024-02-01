import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Gallery from "../pages/Gallery";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import WhyUs from "../pages/WhyUs";
import DesignPage from "../pages/DesignPage";
import ConsultPage from "../pages/ConsultPage";
import PlanningPage from "../pages/PlanningPage";
import SurveyPlotPage from "../pages/SurveyPlotPage";
import ConstructionPage from "../pages/ConstructionPage";
import WorkInProgress from "../pages/WorkInProgress";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/services", element:<Services />},
  { path: "/gallery", element:<Gallery />},
  { path: "/whyus", element:<WhyUs />},
  { path: "/contact", element:<Contact />},
  {path:"/design", element:<DesignPage />},
  {path:"/consult", element:<ConsultPage />},
  {path:"/planning", element:<PlanningPage />},
  {path:"/surveyplot", element:<SurveyPlotPage />},
  {path:"/construction", element:<ConstructionPage />},
  {path:"/workinprogress", element:<WorkInProgress />}



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
