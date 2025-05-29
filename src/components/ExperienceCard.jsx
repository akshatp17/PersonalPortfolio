import React, { forwardRef, useEffect, useState } from "react";
import { experience } from "../data/experience";
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const primaryColor = "#7DD3FC"; // Sky Blue

// Helper to format date as "Mon,YYYY"
function formatMonthYear(dateStr) {
    if (!dateStr || dateStr === "Present") return "Present";
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;
    return date.toLocaleString("default", { month: "short", year: "numeric" });
}

const ExperienceCard = forwardRef(({ showNav, onScroll }, ref) => {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 768);
        };

        // Set initial screen size on mount
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <Box className="w-full text-white px-2 sm:px-5">
            <div className="flex items-center gap-3">
                {((isWideScreen && experience.length > 3) || (!isWideScreen && experience.length > 1)) && (
                    <motion.button
                        onClick={() => onScroll(ref, "left")}
                        className="hover:cursor-pointer transition-transform"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <CircleChevronLeft size={35} />
                    </motion.button>
                )}

                <div
                    ref={ref}
                    className="w-full overflow-x-auto scrollbar-hide py-8"
                    style={{ flex: 1 }}
                >
                    <div
                        className={`relative flex items-center px-8 ${experience.length < 3 ? "min-w-max lg:justify-center lg:w-full" : "min-w-max"
                            }`}
                    >
                        {/* Horizontal line */}
                        <div
                            className={`absolute left-0 right-0 top-1/2 h-1`}
                            style={{ background: primaryColor, zIndex: 0 }}
                        />
                        {experience.map((exp, idx) => {
                            const isOngoing = !exp.end_date || exp.end_date === "Present";
                            const dateRange = `${formatMonthYear(exp.join_date)} - ${formatMonthYear(exp.end_date)}`;
                            const isSingle = experience.length === 1;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ scale: isOngoing ? 1.05 : 0.9 }}
                                    animate={{ scale: isOngoing ? 1.05 : 0.9 }}
                                    whileHover={{ scale: isOngoing ? 1.2 : 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative flex flex-col items-center min-w-[150px] md:min-w-[250px] mx-6"
                                    style={{ zIndex: 1 }}
                                >
                                    {/* Top content for even index */}
                                    {idx % 2 === 0 ? (
                                        <div className="mb-5 flex flex-col items-center">
                                            <span className="text-sm text-gray-400 font-medium mb-1">{dateRange}</span>
                                            <span className="text-lg font-semibold">{exp.name}</span>
                                            <span className="text-sm text-gray-300 italic">{exp.role}</span>
                                        </div>
                                    ) : (
                                        isSingle ? <div className="h-12 mb-10" /> : <div className="h-px mb-20" /> // Spacer for alignment
                                    )}

                                    {/* Dot */}
                                    <span
                                        className="w-6 h-6 rounded-full border-4 flex items-center justify-center bg-sky-300"
                                        style={{ borderColor: primaryColor }}
                                    />

                                    {/* Bottom content for odd index */}
                                    {idx % 2 === 1 ? (
                                        <div className="mt-4 flex flex-col items-center">
                                            <span className="text-sm text-gray-400 font-medium mb-1">{dateRange}</span>
                                            <span className="text-lg font-semibold">{exp.name}</span>
                                            <span className="text-sm text-gray-300 italic">{exp.role}</span>
                                        </div>
                                    ) : (
                                        isSingle ? <div className="h-px mt-22" /> : <div className="h-12 mt-10" /> // Spacer for alignment
                                    )}
                                </motion.div>
                            );
                        })}

                    </div>
                </div>

                {((isWideScreen && experience.length > 3) || (!isWideScreen && experience.length > 1)) && (
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
        </Box>
    );
});

export default ExperienceCard;
