import React from "react";
import backgroundVideo from "/bg.mp4";

const BackgroundVideo = () => {
    return (
        <video
            className="fixed top-0 left-0 w-full h-full object-cover -z-50"
            autoPlay
            loop
            muted
        >
            <source src={backgroundVideo} type="video/mp4" />
        </video>
    );
};

export default BackgroundVideo;
