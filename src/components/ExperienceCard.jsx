import React from "react";
import { experience } from "../data/experience";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

function formatMonthYear(dateStr) {
	if (!dateStr || dateStr === "Present") return "Present";
	const date = new Date(dateStr);
	if (isNaN(date)) return dateStr;
	return date.toLocaleString("default", { month: "short", year: "numeric" });
}

const ExperienceCard = () => {
	return (
		<div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
			{[...experience]
				.sort((a, b) => b.id - a.id)
				.map((exp, idx) => {
					const dateRange = `${formatMonthYear(exp.join_date)} — ${formatMonthYear(exp.end_date)}`;

					return (
						<motion.div
							key={idx}
							className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-sky-400/30 transition-colors duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: idx * 0.15 }}
							whileHover={{ scale: 1.01 }}
						>
							{/* Header row */}
							<div className="flex justify-between items-start mb-2">
								<div>
									<h3 className="text-white font-bold text-base sm:text-lg leading-tight">
										{exp.role}
									</h3>
									<p className="text-sky-300 text-sm font-medium">
										{exp.name}
									</p>
								</div>
								<span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap ml-4">
									{dateRange}
								</span>
							</div>

							{/* Location */}
							{exp.location && (
								<div className="flex items-center gap-1 mb-3">
									<MapPin
										size={12}
										className="text-gray-500"
									/>
									<span className="text-gray-500 text-xs">
										{exp.location}
									</span>
								</div>
							)}

							{/* Contributions */}
							{exp.contributions && (
								<ul className="space-y-1.5 mb-3">
									{exp.contributions.map((item, i) => (
										<li
											key={i}
											className="flex gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
										>
											<span className="text-sky-300 mt-0.5 flex-shrink-0">
												▸
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							)}

							{/* Tech tags */}
							{exp.tech && (
								<div className="flex flex-wrap gap-1.5">
									{exp.tech.map((t, i) => (
										<span
											key={i}
											className="text-[10px] sm:text-xs px-2 py-0.5 bg-sky-300/10 text-sky-300 rounded"
										>
											{t}
										</span>
									))}
								</div>
							)}
						</motion.div>
					);
				})}
		</div>
	);
};

export default ExperienceCard;
