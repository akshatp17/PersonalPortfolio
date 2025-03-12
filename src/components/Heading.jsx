import React from "react";
import { motion } from "framer-motion";

const Heading = (props) => {
    return (
        <motion.div
            className="flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30 flex-col sm:flex-row mt-5"
            id={props.id}
            initial={{ opacity: 0, y: 20 }} // Fade in & slide-up effect
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Heading Text */}
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                {props.content}
            </motion.p>

            {/* Expanding Line */}
            <motion.hr
                className="w-full border-none bg-sky-300 h-1 my-auto sm:h-[1px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                style={{ transformOrigin: "center" }}
            />
        </motion.div>
    );
};

export default Heading;
