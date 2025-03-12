import React from "react";
import { motion } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import ProjectsList from "./ProjectsList";

const ProjectSection = ({ domain, showNav, onScroll, ref }) => {
    return (
        <motion.div
            className="flex flex-col w-full px-2 sm:px-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Section Title */}
            <motion.p
                className="font-bold text-xl sm:text-2xl text-center mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {domain} Projects:
            </motion.p>

            {/* Projects List with Navigation */}
            <div className="flex items-center gap-3">
                {showNav && (
                    <motion.button
                        onClick={() => onScroll(ref, "left")}
                        className="hover:cursor-pointer transition-transform"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CircleChevronLeft size={35} />
                    </motion.button>
                )}

                <ProjectsList domain={domain} scrollRef={ref} />

                {showNav && (
                    <motion.button
                        onClick={() => onScroll(ref, "right")}
                        className="hover:cursor-pointer transition-transform"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CircleChevronRight size={35} />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectSection;
