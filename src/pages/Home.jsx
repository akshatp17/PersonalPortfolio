import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGit, FaCpp, FaCsha } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiPostgresql } from "react-icons/si";

const Home = () => {

    const techIcons = [
        <FaReact className="text-blue-400 text-6xl" />,
        <FaNodeJs className="text-green-500 text-6xl" />,
        <FaPython className="text-yellow-400 text-6xl" />,
        <SiTypescript className="text-blue-600 text-6xl" />,
        <FaHtml5 className="text-orange-500 text-6xl" />,
        <FaCss3 className="text-blue-500 text-6xl" />,
        <FaJs className="text-yellow-300 text-6xl" />,
        <SiTailwindcss className="text-blue-400 text-6xl" />,
        <FaGit className="text-red-500 text-6xl" />,
        <SiMongodb className="text-green-400 text-6xl" />,
        <SiPostgresql className="text-blue-500 text-6xl" />,
        <FaDocker className="text-blue-400 text-6xl" />,
    ];

    // Duplicate the icons for a seamless infinite scroll effect
    const duplicatedIcons = [...techIcons, ...techIcons];


    return (
        <>
            <div className='flex flex-col'>
                {/* Basic Profile Info and Image */}
                <div className='flex w-full p-5 h-full'>
                    {/* Profile Photo */}
                    <div className='w-1/3 flex justify-end pr-2'>
                        <div className='profileImg' />
                    </div>
                    {/* About me in short */}
                    <div className='w-1/2 flex flex-col gap-2 justify-center pt-2 pl-3'>
                        <p className='text-xl text-sky-300'>Hello👋, I am</p>
                        <p className='text-5xl font-bold'>Akshat Pratyush</p>
                        <p className='text-gray-300 text-xl'>I am a <span className='font-bold text-sky-300'>Developer</span> based in India. I strive to learn and build beautiful applications through carefully crafted code and user-centric design. I am also better known as my online alias <span className='text-white font-bold'>Armyth</span>.</p>
                        <div className=''>
                            <button>Say Hi!</button>
                        </div>
                    </div>
                </div>

                {/* technology heading */}
                <div className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300'>
                    <p className=''>technologies</p> <hr className='w-[65%]' />
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
                            transition={{ ease: "linear", duration: 20, repeat: Infinity }} // Infinite looping animation
                        >
                            {duplicatedIcons.map((icon, index) => (
                                <div key={index} className="hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <div className=''>

                </div>
                <div className=''>

                </div>
            </div>
        </>
    )
}

export default Home