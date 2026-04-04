import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode, SiCodeforces } from "react-icons/si";
import {
	fetchLeetCodeStats,
	fetchCodeforcesStats,
	fetchGitHubStats,
} from "../data/codingProfileService";

const defaultProfiles = [
	{
		platform: "CodeChef",
		subtitle: "2-Star Developer",
		icon: <SiCodechef size={40} className="text-amber-500" />,
		url: "https://www.codechef.com/users/akshatp17",
	},
	{
		platform: "LeetCode",
		subtitle: "Problems Solved",
		icon: <SiLeetcode size={40} className="text-orange-500" />,
		url: "https://leetcode.com/u/akshatpratyush/",
	},
	{
		platform: "Codeforces",
		subtitle: "Active",
		icon: <SiCodeforces size={40} className="text-sky-400" />,
		url: "https://codeforces.com/profile/axhatp",
	},
	{
		platform: "GitHub",
		subtitle: "Contributions",
		icon: <FaGithub size={40} className="text-white" />,
		url: "https://github.com/akshatp17",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

const CodingSection = () => {
	const [profiles, setProfiles] = useState(defaultProfiles);

	useEffect(() => {
		let isMounted = true;

		const updateProfile = (platform, newSubtitle) => {
			if (!isMounted) return;
			setProfiles((prev) =>
				prev.map((p) =>
					p.platform === platform
						? { ...p, subtitle: newSubtitle }
						: p,
				),
			);
		};

		// Fetch live stats from each platform
		fetchLeetCodeStats().then((result) => {
			if (result) updateProfile("LeetCode", result);
		});

		fetchCodeforcesStats().then((result) => {
			if (result) updateProfile("Codeforces", result);
		});

		fetchGitHubStats().then((result) => {
			if (result) updateProfile("GitHub", result);
		});

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<motion.div
			className="w-full flex flex-col items-center mt-4 mb-2"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			{/* Profile Cards */}
			<div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-3xl">
				{profiles.map((profile, index) => (
					<motion.a
						key={profile.platform}
						href={profile.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col items-center gap-2 px-6 py-5 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-lg hover:border-sky-400/30 hover:bg-white/[0.05] transition-all duration-300 min-w-[140px] sm:min-w-[160px] cursor-pointer"
						custom={index}
						variants={cardVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						whileHover={{ scale: 1.05, y: -5 }}
						whileTap={{ scale: 0.97 }}
					>
						{/* Icon */}
						<div className="mb-1">{profile.icon}</div>

						{/* Name */}
						<p className="text-white font-semibold text-sm sm:text-base">
							{profile.platform}
						</p>

						{/* Live Subtitle */}
						<p className="text-gray-400 text-xs sm:text-sm">
							{profile.subtitle}
						</p>
					</motion.a>
				))}
			</div>
		</motion.div>
	);
};

export default CodingSection;
