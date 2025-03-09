import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state; // ✅ Get the project data

    if (!project) {
        return <p className="text-center text-red-500">Project not found.</p>; // Handle missing data
    }

    return (
        <div className="w-[80%] mx-auto py-6 px-2">
            <button onClick={() => navigate(-1)} className="bg-sky-300 text-black font-bold px-4 py-2 rounded-md hover:bg-sky-600 transition duration-250 hover:cursor-pointer">
                ← Back
            </button>
            <h1 className="text-3xl font-bold mt-4">{project.name}</h1>
            <img src={project.thumbnail} alt={project.name} className="w-full max-w-lg rounded-lg mt-4" />
            <p className="mt-2">{project.description || "No description available."}</p>
        </div>
    );
};

export default ProjectPage;
