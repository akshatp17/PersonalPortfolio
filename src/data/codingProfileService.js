// Coding profile API service
// Fetches live stats from LeetCode, Codeforces, and GitHub

const USERNAMES = {
	leetcode: "akshatpratyush",
	codeforces: "axhatp",
	github: "akshatp17",
};

export const fetchLeetCodeStats = async () => {
	try {
		const res = await fetch(
			`https://leetcode-api-faisalshohag.vercel.app/${USERNAMES.leetcode}`,
		);
		const data = await res.json();
		if (data && data.totalSolved !== undefined) {
			return `${data.totalSolved} Problems Solved`;
		}
	} catch (err) {
		console.warn("LeetCode fetch failed", err);
	}
	return null;
};

export const fetchCodeforcesStats = async () => {
	try {
		const res = await fetch(
			`https://codeforces.com/api/user.info?handles=${USERNAMES.codeforces}`,
		);
		const data = await res.json();
		if (data.status === "OK" && data.result?.[0]) {
			const user = data.result[0];
			let rank = user.rank || user.maxRank || "Active";
			rank = rank.charAt(0).toUpperCase() + rank.slice(1);

			if (user.rating) {
				return `${rank} (${user.rating})`;
			}
			return rank;
		}
	} catch (err) {
		console.warn("Codeforces fetch failed", err);
	}
	return null;
};

export const fetchGitHubStats = async () => {
	try {
		const res = await fetch(
			`https://github-contributions-api.deno.dev/${USERNAMES.github}.json`,
		);
		const data = await res.json();
		if (data && data.totalContributions !== undefined) {
			return `${data.totalContributions} Contributions`;
		}
	} catch (err) {
		console.warn("GitHub fetch failed", err);
	}
	return null;
};
