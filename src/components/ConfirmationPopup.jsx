import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ConfirmationPopup = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}  // Slide in from top
            animate={{ opacity: 1, y: 0 }}   // Visible
            exit={{ opacity: 0, y: -20 }}    // Slide out smoothly
            transition={{ duration: 0.3 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3"
        >
            <CheckCircle className="text-white w-6 h-6" />
            <p className="text-lg">{message}</p>
        </motion.div>
    );
};

export default ConfirmationPopup;
