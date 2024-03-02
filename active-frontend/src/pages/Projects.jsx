import React, { useEffect, useState } from "react";
import Reveal from "../animation/Reveal";
import ProjectCard from "../components/sharedComponents/ProjectCard";
import images from "../components/data/wip_sliderImgs";
import { Link } from "react-router-dom";
import axios from "axios";

function Projects() {
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

  const values = {
    id: 1,
    name: "Banasthali Site",
    date: "2020 - Ongoing",
    images: images,
  };

  return (
    <div className="mt-10">
      <Reveal>
        <div className="flex justify-between mx-10 mb-2">
          <h1 className="mx-10 font-jost text-2xl">Projects</h1>
          <Link to="/admin/add-project">
            {/* Assuming "/create-project" is the route to create a new project */}
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold font-jost py-2 px-4 rounded-md">
              Add Project
            </button>
          </Link>
        </div>
        {error ? (
          <Reveal>
            <div>
              <Link to={`/projects/${values.id}`}>
                <ProjectCard
                  projectName={values.name}
                  establishedDate={values.date}
                  images={values.images}
                />
              </Link>
            </div>
          </Reveal>
        ) : (
          projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ProjectCard
                projectName={project.name}
                establishedDate={project.date}
                images={project.images}
              />
            </Link>
          ))
        )}
      </Reveal>
    </div>
  );
}

export default Projects;
