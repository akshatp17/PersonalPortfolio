import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = (props) => {
    return (
        <motion.div
            className="font-bold w-24 h-33 sm:w-32 sm:h-48 rounded-4xl flex flex-col justify-center items-center px-5 py-auto inset-ring-4 inset-ring-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <p className="text-3xl sm:text-5xl flex justify-center items-center">
                {props.expData.num}
                <span className="text-xl sm:text-4xl">+</span>
            </p>
            <p className="text-center text-[0.85em]">{props.expData.numContext}</p>
        </motion.div>
    );
};

export default ExperienceCard;
