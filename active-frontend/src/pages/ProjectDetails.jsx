import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reveal from "../animation/Reveal";
import Gallery from "./Gallery";
import CustomCarousel from "../components/sharedComponents/CustomCarousel";
import { planImages } from "../components/data/planImages";
import { designImages } from "../components/data/designImages";

import axios from "axios";

function ProjectDetails() {
  const { projectId } = useParams(); 
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const jwtToken =
    "asdsakjdwnjnsd$%@nsjdnakd&^%%kasdmmiakmcnsjiawyhfnskxnfhsamsmdb";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/projects",
          {
            headers: {
              Authorization: jwtToken,
            },
          }
        );

        setProjects(response.data);
      } catch (error) {
        setError("Error fetching projects");
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const projectDetails = {
    1: {
      name: "Banasthali Site",
    },
        
  };

  const selectedProject = projectDetails[projectId];

  if (!selectedProject) {
    // Handle case when projectId is not found
    return <div className="flex flex-col items-center justify-center font-jost h-[20vh] text-neutral-500 text-4xl animate-ping">
      Project not found</div>;
  }

  return (
    <div className="mt-10">
      {error ? (
      <Reveal>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="flex justify-center font-jost text-4xl text-neutral-700 mb-10">
              Planning
            </h1>
            <CustomCarousel images={planImages} />
          </div>
          <div>
            <h1 className="flex justify-center font-jost text-4xl text-neutral-700 mt-10 mb-10">
              Design Process
            </h1>
            <CustomCarousel images={designImages} />
          </div>
        </div>
        <Gallery />
      </Reveal>
      ) : (
        projects.map((project) => (
          <Link key={project.id} to={`/project-details/${project.id}`}>
            {/* Assuming /project-details/:id is the route for ProjectDetails */}
            <ProjectCard
              projectName={project.name}
              establishedDate={project.date}
              images={project.images}
            />
          </Link>
        ))
      )}
      
    </div>
  );
}

export default ProjectDetails;
