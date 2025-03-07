import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <>
            <div className="relative flex flex-col md:flex-row items-center gap-5 bg-transparent p-5 w-3/5 mx-auto">
                {/* Thumbnail Section */}
                <div className="relative z-10 w-[250px] h-[200px] bg-amber-950 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg md:-mr-12 md:-ml-6">
                    Thumbnail
                </div>
                {/* Project Content Section */}
                <div className="relative bg-sky-900 p-6 rounded-2xl text-white shadow-lg flex-1 px-10">
                    {/* Project Name and GitHub Link */}
                    <div className="text-2xl flex items-center gap-3 mb-3">
                        <span className="font-black">Project Name</span>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaGithub size={24} />
                        </a>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-200 text-sm mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam, sunt, id nisi alias, nulla adipisci voluptatem voluptates magni quidem cumque. Commodi doloremque dicta inventore nam placeat doloribus qui explicabo.
                    </p>

                    {/* Tech Stack, Domain, and GitHub Link */}
                    <div className="flex flex-wrap gap-3">
                        <p className="bg-gray-600 px-3 py-1 rounded-full text-sm">Domain</p>
                        <p className="bg-gray-600 px-3 py-1 rounded-full text-sm">Tech Stacks Used</p>
                        <p className="bg-gray-600 px-3 py-1 rounded-full text-sm">GitHub Link</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects