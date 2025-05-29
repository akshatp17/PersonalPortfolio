import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import ContactForm from "../components/Contact";
import ExperienceCard from "../components/ExperienceCard";
import ConfirmationPopup from "../components/ConfirmationPopup";
import Heading from "../components/Heading";
import ProjectSection from "../components/ProjectSection";

const Home = () => {

    const techIcons = [
        <FaHtml5 className="text-5xl" />,
        <FaCss3 className="text-5xl" />,
        <FaJs className="text-5xl" />,
        <FaReact className="text-5xl" />,
        <SiTypescript className="text-5xl" />,
        <FaNodeJs className="text-5xl" />,
        <SiTailwindcss className="text-5xl" />,
        <SiExpress className="text-5xl" />,
        <SiMongodb className="text-5xl" />,
        <FaGit className="text-5xl" />,
        <FaGithub className="text-5xl" />,
        <FaPython className="text-5xl" />,
        <TbBrandCpp className="text-5xl" />,
        <TbBrandCSharp className="text-5xl" />,
        <FaJava className="text-5xl" />,
    ];

    // Duplicate the icons for a seamless infinite scroll effect
    const duplicatedIcons = [...techIcons, ...techIcons];

    const [showPopup, setShowPopup] = useState(false);
    const [curPosition, setcurPosition] = useState("Open to opportunities")

    const webDevRef = useRef(null);
    const gameDevRef = useRef(null);
    const experienceRef = useRef(null);
    const [showWebNav, setShowWebNav] = useState(false);
    const [showGameNav, setShowGameNav] = useState(false);
    const [showExperienceNav, setShowExperienceNav] = useState(false)
    const [scrollSpeed, setScrollSpeed] = useState(-150); // Default speed for large screens
    const [navScrollSpeed, setnavScrollSpeed] = useState(300); // Default speed for large screens

    const checkOverflow = (ref, setShowNav) => {
        if (ref.current) {
            setShowNav(ref.current.scrollWidth > ref.current.clientWidth);
        }
    };

    // Checking the div size to show scroll buttons
    useEffect(() => {
        checkOverflow(webDevRef, setShowWebNav);
        checkOverflow(gameDevRef, setShowGameNav);
        checkOverflow(experienceRef, setShowExperienceNav); // 👈 Add this

        const handleResize = () => {
            checkOverflow(webDevRef, setShowWebNav);
            checkOverflow(gameDevRef, setShowGameNav);
            checkOverflow(experienceRef, setShowExperienceNav); // 👈 Add this
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    // Changing the speed for technology scrolling
    useEffect(() => {
        const updateSpeed = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setScrollSpeed(-400); // Faster on small screens
                setnavScrollSpeed(100);
            } else if (width < 1024) {
                setScrollSpeed(-200); // Medium speed on tablets
                setnavScrollSpeed(200);
            } else {
                setScrollSpeed(-100); // Default speed on large screens
                setnavScrollSpeed(300);
            }
        };

        updateSpeed(); // Set initial speed
        window.addEventListener("resize", updateSpeed);
        return () => window.removeEventListener("resize", updateSpeed);
    }, []);

    const scroll = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollBy({ left: direction === "left" ? -navScrollSpeed : navScrollSpeed, behavior: "smooth" });
        }
    };

    const togglePopup = () => {
        setShowPopup(!showPopup)
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    }

    const scrollToContact = () => {
        document.getElementById("contactForm").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            {
                <AnimatePresence>
                    {showPopup && <ConfirmationPopup message="Message sent successfully!" onClose={() => setShowPopup(false)} />}
                </AnimatePresence>
            }
            <div className='flex flex-col w-[80%] mx-auto'>
                {/* Basic Profile Info and Image */}
                <div className="flex flex-col md:flex-row justify-center items-center p-5 max-h-[50%]">
                    {/* Profile Photo */}
                    <motion.div
                        className="w-full md:w-1/3 flex justify-center md:justify-end pr-2 flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="profileImg"></div>
                    </motion.div>

                    {/* About Me Section */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col gap-2 justify-center pt-2 px-3 text-center md:text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <p className="text-xl text-sky-300">Hello👋, I am</p>
                        <p className="text-5xl font-bold">Akshat Pratyush</p>
                        <p className="text-gray-300 text-xl">
                            I am a <span className="font-bold text-sky-300">Developer</span> based in India. I strive to learn and build beautiful applications through carefully crafted code and user-centric design. I am also better known as my online alias <span className="text-white font-bold">Armyth</span>.
                        </p>

                        {/* Contact Me Button */}
                        <motion.button
                            onClick={scrollToContact}
                            className="px-4 py-2 mt-4 bg-sky-300 text-black font-bold rounded-full hover:cursor-pointer w-fit self-center md:self-start"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </div>

                {/*Technology heading */}
                <Heading content="Technologies" />
                {/* technology */}
                <motion.div
                    className='flex flex-col gap-5 p-3 items-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* technology description */}
                    <div className='flex items-center justify-center text-center w-[80%]'>
                        <p className='text-gray-300 text-xl'>I am a full-stack developer with a keen interest in building scalable and performant applications. I have experience working with a wide range of technologies and frameworks.</p>
                    </div>
                    {/* technology icons */}
                    <div className="w-full max-w-4xl overflow-hidden relative">
                        <motion.div
                            className="flex gap-10 items-center flex-nowrap"
                            animate={{ x: ["0%", `${scrollSpeed}%`] }} // Moves the container left
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }} // Infinite looping animation
                        >
                            {duplicatedIcons.map((icon, index) => (
                                <div key={index} className="hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/*Experience experience heading*/}
                <Heading content="Experience" />
                {/* Experience Showcase */}
                <motion.div
                    className="w-[90%] sm:w-[80%] flex flex-col justify-center items-center mx-auto mt-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <ExperienceCard
                        showNav={showExperienceNav}
                        ref={experienceRef}
                        onScroll={scroll}
                    />
                </motion.div>


                {/* Projects Heading */}
                <Heading content="Projects" />
                {/* Projects List with Horizontal Scroll */}
                <div className="w-[90%] sm:w-[80%] flex flex-col justify-center items-center mx-auto mt-3">
                    {/* Web Dev Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <ProjectSection domain="Web Dev" showNav={showWebNav} ref={webDevRef} onScroll={scroll} />
                    </motion.div>

                    {/* Game Dev Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="w-full"
                    >
                        <ProjectSection domain="Game Dev" showNav={showGameNav} ref={gameDevRef} onScroll={scroll} />
                    </motion.div>
                </div>

                {/* Contact heading */}
                <Heading content="Contact" id="contactForm" />
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <ContactForm popupFn={togglePopup} />
                </motion.div>
            </div >
        </>
    )
}

export default Home