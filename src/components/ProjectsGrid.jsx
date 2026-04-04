import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { projects } from "../data/projects";

const ITEMS_PER_PAGE = 6;

// Sort projects by descending id
const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

const ProjectsGrid = () => {
	const [page, setPage] = useState(0);
	const navigate = useNavigate();

	const totalPages = Math.ceil(sortedProjects.length / ITEMS_PER_PAGE);
	const startIdx = page * ITEMS_PER_PAGE;
	const currentProjects = sortedProjects.slice(
		startIdx,
		startIdx + ITEMS_PER_PAGE,
	);

	const goLeft = () => {
		setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
	};

	const goRight = () => {
		setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
	};

	const handleClickProject = (project) => {
		navigate("/project", { state: project });
	};

	return (
		<div className="w-full flex flex-col items-center mt-4">
			{/* Grid + Navigation */}
			<div className="flex items-center gap-3 w-full max-w-5xl">
				{/* Left Arrow */}
				{totalPages > 1 && (
					<motion.button
						onClick={goLeft}
						className="hover:cursor-pointer transition-transform flex-shrink-0"
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<CircleChevronLeft size={35} />
					</motion.button>
				)}

				{/* Projects Grid */}
				<div className="flex-1 overflow-hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={page}
							className="grid grid-cols-2 sm:grid-cols-3 gap-4"
							initial={{ opacity: 0, x: 60 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -60 }}
							transition={{ duration: 0.35, ease: "easeInOut" }}
						>
							{currentProjects.map((project, idx) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={idx}
									onClick={() => handleClickProject(project)}
								/>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Right Arrow */}
				{totalPages > 1 && (
					<motion.button
						onClick={goRight}
						className="hover:cursor-pointer transition-transform flex-shrink-0"
						whileHover={{ scale: 1.2 }}
						whileTap={{ scale: 0.9 }}
					>
						<CircleChevronRight size={35} />
					</motion.button>
				)}
			</div>

			{/* Page Dots */}
			{totalPages > 1 && (
				<div className="flex gap-2 mt-4">
					{Array.from({ length: totalPages }).map((_, i) => (
						<button
							key={i}
							onClick={() => setPage(i)}
							className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:cursor-pointer ${
								i === page
									? "bg-sky-300 scale-125"
									: "bg-gray-600 hover:bg-gray-400"
							}`}
						/>
					))}
				</div>
			)}
		</div>
	);
};

// Individual project card
const ProjectCard = ({ project, index, onClick }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<motion.div
			className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[16/10] bg-cover bg-center bg-no-repeat border border-gray-700/30"
			style={{ backgroundImage: `url(${project.thumbnail})` }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClick={onClick}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.08, duration: 0.4 }}
			whileHover={{ scale: 1.03 }}
		>
			{/* Always-visible bottom bar with name + tech */}
			<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
				<p className="text-white font-bold text-sm sm:text-base leading-tight">
					{project.name}
				</p>
				<div className="flex flex-wrap gap-1 mt-1">
					{project.tech
						.split(", ")
						.slice(0, 4)
						.map((t, i) => (
							<span
								key={i}
								className="text-[10px] sm:text-xs px-1.5 py-0.5 bg-sky-300/20 text-sky-300 rounded"
							>
								{t}
							</span>
						))}
				</div>
			</div>

			{/* Hover overlay */}
			<AnimatePresence>
				{hovered && (
					<motion.div
						className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<p className="text-white font-bold text-lg sm:text-xl mb-1 noselect">
							{project.name}
						</p>
						<p className="text-sky-300 text-xs sm:text-sm underline noselect">
							View Details →
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default ProjectsGrid;
