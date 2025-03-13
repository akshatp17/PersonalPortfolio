import React from "react";
import { projects } from "../data/projects";
import Projects from "./Projects";

const ProjectsList = ({ domain, scrollRef }) => {
    // Filter projects based on the received domain prop
    const filteredProjects = projects
        .filter((project) => domain === "All" || project.domain === domain)
        .sort((a, b) => b.id - a.id); // Sorting in descending order by ID

    return (
        <div ref={scrollRef} className="w-full overflow-x-auto whitespace-nowrap py-4 scrollbar-hide">
            <div className="flex gap-6 px-3">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => <Projects key={project.id} project={project} />)
                ) : (
                    <p className="text-white text-center">No projects found.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectsList;
