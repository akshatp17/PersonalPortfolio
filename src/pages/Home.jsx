import React, { lazy, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress } from "react-icons/si";
import ContactForm from "../components/Contact";
import ExperienceCard from "../components/ExperienceCard";
import ConfirmationPopup from "../components/ConfirmationPopup";
import Projects from "../components/Projects";
import ProjectsList from "../components/ProjectsList";

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
                <div className='flex justify-center h-full p-5'>
                    {/* Profile Photo */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end pr-2">
                        <div className="profileImg"></div>
                    </div>

                    {/* About me in short */}
                    <div className='w-1/2 flex flex-col gap-2 justify-center pt-2 pl-3'>
                        <p className='text-xl text-sky-300'>Hello👋, I am</p>
                        <p className='text-5xl font-bold'>Akshat Pratyush</p>
                        <p className='text-gray-300 text-xl'>I am a <span className='font-bold text-sky-300'>Developer</span> based in India. I strive to learn and build beautiful applications through carefully crafted code and user-centric design. I am also better known as my online alias <span className='text-white font-bold'>Armyth</span>.</p>

                        {/* Contact me button to navigate to contact form */}
                        <motion.button
                            onClick={scrollToContact}
                            className="px-3 py-0.5 bg-sky-300 text-black font-bold rounded-full hover:cursor-pointer w-fit"
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
                    </div>
                </div>

                {/* technology heading */}
                <div className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30'>
                    <p className=''>technologies</p> <hr className='w-full' />
                </div>
                {/* technology */}
                <div className='flex flex-col gap-5 p-3 items-center'>
                    {/* technology description */}
                    <div className='flex items-center justify-center text-center w-[80%]'>
                        <p className='text-gray-300 text-xl'>I am a full-stack developer with a keen interest in building scalable and performant applications. I have experience working with a wide range of technologies and frameworks.</p>
                    </div>
                    {/* technology icons */}
                    <div className="w-full max-w-4xl overflow-hidden relative">
                        <motion.div
                            className="flex gap-10 items-center flex-nowrap"
                            animate={{ x: ["0%", "-100%"] }} // Moves the container left
                            transition={{ ease: "linear", duration: 30, repeat: Infinity }} // Infinite looping animation
                        >
                            {duplicatedIcons.map((icon, index) => (
                                <div key={index} className="hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Projects Heading */}
                <div className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30'>
                    <p className=''>projects</p> <hr className='w-full' />
                </div>

                {/* Projects List with Horizontal Scroll */}
                <div className="w-[80%] flex flex-col justify-center items-center mx-auto mt-3">

                    {/* Web Dev Projectc */}
                    <div className="flex flex-col w-full">
                        <p className="font-bold text-xl text-center">Web Dev Projects:</p>
                        <ProjectsList domain={"Web Dev"} />
                    </div>

                    {/* Game Dev Projectc */}
                    <div className="flex flex-col w-full">
                        <p className="font-bold text-xl text-center">Game Dev Projects:</p>
                        <ProjectsList domain={"Game Dev"} />
                    </div>
                </div>


                {/* Experience heading */}
                <div className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30'>
                    <p className=''>exprecience</p> <hr className='w-full' />
                </div>
                {/* Experience Showcase */}
                <div className='flex flex-col w-80% mx-auto gap-5'>
                    <div className="w-full flex gap-5">
                        <ExperienceCard expData={{ num: 12, numContext: "Git Repos" }} />
                        <ExperienceCard expData={{ num: 5, numContext: "projects" }} />
                        <ExperienceCard expData={{ num: 3, numContext: "months on development" }} />
                    </div>
                    <div className="text-xl font-semibold text-center">
                        Current Position : <span className="text-sky-300">{curPosition}</span>
                    </div>
                </div>

                {/* Contact heading */}
                <div className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30' id="contactForm">
                    <p className=''>contact</p> <hr className='w-full' />
                </div>
                {/* Contact Form */}
                <div className=''>
                    <ContactForm popupFn={togglePopup} />
                </div>
            </div >
        </>
    )
}

export default Home