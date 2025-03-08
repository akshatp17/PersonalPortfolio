import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ project }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleClickProject = () => {

    };

    return (
        <div
            className="relative flex flex-col min-w-[250px] max-w-[300px] h-[200px] rounded-3xl p-4 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
        >

            {/* Overlay Info */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        onClick={handleClickProject}
                        className="absolute inset-0 flex flex-col justify-center text-center bg-black/70 text-white p-4 rounded-3xl w-full underline cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}  // Start slightly below
                        animate={{ opacity: 1, y: 0 }}  // Slide up to position
                        exit={{ opacity: 0, y: 50 }}  // Slide down when exiting
                        transition={{ duration: 0.3, ease: "easeOut" }}  // Smooth effect
                    >
                        <p className="text-3xl font-bold leading-tight whitespace-normal break-words">
                            {project.name}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default Projects;
