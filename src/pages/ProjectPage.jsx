import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CodeXml } from "lucide-react";
import { motion } from "framer-motion";

const ProjectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <p className="text-center text-red-500">Project not found.</p>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-[90%] sm:w-[80%] mx-auto py-6 px-2 relative"
        >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(-1)}
                className="bg-sky-300 text-black font-bold px-4 py-2 rounded-full hover:bg-sky-600 transition duration-250 hover:cursor-pointer absolute invisible sm:visible"
            >
                ← Back
            </motion.button>
            <div className="flex flex-col">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-bold mt-4 text-center"
                >
                    {project.name}
                </motion.h1>
                <div className="flex flex-col lg:flex-row gap-5 py-5">
                    <div className="flex flex-col gap-5 min-w-fit">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            src={project.thumbnail}
                            alt={project.name}
                            className="w-full sm:w-[320px] h-auto object-cover rounded-4xl mt-4 mx-auto"
                        />
                        <div className="flex gap-5 w-full justify-center flex-col sm:flex-row">
                            {project.projectLink && (
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-sky-300 rounded-full text-sky-300 hover:bg-sky-300 hover:text-black transition duration-300 justify-center text-md"
                                >
                                    <CodeXml size={18} />
                                    <span>Project Link</span>
                                </motion.a>
                            )}
                            {project.github && (
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-sky-300 rounded-full text-sky-300 hover:bg-sky-300 hover:text-black transition duration-300 justify-center text-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                    <span>GitHub Repo</span>
                                </motion.a>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mt-2 text-xl whitespace-pre-line text-center lg:text-start"
                        >
                            {project.description || "No description available."}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="flex flex-wrap gap-3 items-center py-5 justify-center lg:justify-start"
                        >
                            <p className="text-lg">Technology:</p>
                            {project.tech.split(', ').map((item, index) => (
                                <motion.span
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-2 py-0.5 bg-sky-300 text-black rounded-md text-sm font-semibold"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectPage;
