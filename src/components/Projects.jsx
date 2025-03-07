import React from "react";

const Projects = ({ project }) => {
    return (
        <div
            className="flex flex-col w-50 h-40 bg-amber-200 rounded-4xl p-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.thumbnail})` }} // ✅ Now correctly references public assets
        >
            <h2 className="text-lg font-bold text-black">{project.name}</h2>
        </div>
    );
};

export default Projects;
