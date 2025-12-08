//Template for the projects object
// {
//     id: 1,
//     name: '',
//     description: "",
//     domain: '',
//     tech: '',
//     thumbnail: '/public/projects/',
//     github: '',
//     projectLink: ''
//   },

export const projects = [
	{
		id: 3,
		name: "Block-Carnate",
		description: `Developed a single-player 2D platformer in Godot as an experiment to explore game development principles, physics interactions, and level design. This project served as a hands-on learning experience, focusing on scene management, collision handling, and player mechanics within the engine.
    
    The development process involved working with Godot’s scripting language (GDScript) to implement core mechanics, experimenting with tilemaps, object instantiation, and physics-based interactions. Debugging and refining the mechanics provided deeper insights into game state management and optimization.
    
    This project was an important step in understanding Godot’s workflow, reinforcing key concepts in game logic, UI integration, and structured development practices.`,
		domain: "Game Dev",
		tech: "GDScript",
		thumbnail: "/projects/blockcarnate.png",
		github: "https://github.com/akshatp17/block-carnate",
		projectLink: "https://infamix-studios.itch.io/blockcarnate",
	},
	{
		id: 4,
		name: "Blood Bank Management",
		description: `Developed the frontend of a Blood Bank Management System as a first-year mini-project, aimed at streamlining blood donations and improving accessibility. The prototype provides an intuitive interface where users can:\n
    🔹 Check blood stock availability in real-time  
    🔹 Track donor details and their donation history  
    🔹 Locate nearby blood banks with ease  
    🔹 Schedule blood donations through an interactive booking system  

    Built using HTML, CSS, and JavaScript, the project prioritizes usability and accessibility, ensuring a seamless experience for both donors and medical staff. This project served as a learning experience in frontend development, focusing on responsive design and user-friendly interfaces.`,
		domain: "Web Dev",
		tech: "HTML, CSS, JS",
		thumbnail: "/projects/bloodbank.png",
		github: "https://github.com/akshatp17/BloodBankMiniProject",
		projectLink: "https://akshatp17.github.io/BloodBankMiniProject/",
	},
	{
		id: 5,
		name: "Tic-Tac-Toe",
		description: `Developed an interactive web-based Tic-Tac-Toe game in React.js, allowing players to compete locally in a classic turn-based battle of strategy. The game features a smooth and responsive interface, making it an enjoyable experience for both casual and competitive players.
    
    This game was built as an exploration into React.js, serving as a hands-on learning experience to understand the fundamentals of React components, hooks, and event handling.`,
		domain: "Web Dev",
		tech: "Reactjs, TailwindCSS",
		thumbnail: "/projects/tictactoe.png",
		github: "https://github.com/akshatp17/TicTacToe",
		projectLink: "https://akshatp17.github.io/TicTacToe/",
	},
	{
		id: 2,
		name: "Scribble Golf",
		description: `Developed a single-player 2D mini-golf game in Godot, designed as a casual yet engaging experience. The game consists of 10 levels, each requiring precise aim, strategy, and a bit of luck to progress. Players must carefully navigate obstacles, avoid deceptive lava puddles, and determine the real portal hole among multiple fakes to advance. 
    
    This project was an exploration into the Godot engine, developed as an experiment to understand game physics, level design, and interactive mechanics.`,
		domain: "Game Dev",
		tech: "GDScript",
		thumbnail: "/projects/scribblegolf.jpeg",
		github: "",
		projectLink: "https://infamix-studios.itch.io/scribble-golf",
	},
	{
		id: 1,
		name: "Two-Me",
		description: `Developed a single-player 2D puzzle platformer in Godot, designed to challenge players with a unique mirrored movement mechanic. The game follows a protagonist trapped in a mysterious mirror world, where they must synchronize their movements with their mirror counterpart to reach the dimension barrier and escape. 
    
    This project was an exploration into the Godot engine, developed as an experiment to understand advanced game mechanics, level design, and interactive physics.`,
		domain: "Game Dev",
		tech: "GDScript",
		thumbnail: "/projects/twome.png",
		github: "",
		projectLink: "https://infamix-studios.itch.io/twome",
	},
	{
		id: 0,
		name: "Odd-Eve",
		description: `Developed a single-player cricket-inspired game in Python, designed as a nostalgic tribute to childhood memories. Inspired by the classic "Odd-Eve" game, this project was an early programming challenge, focusing on fundamental game development concepts.

    As our first-ever game development attempt, this project introduced key aspects of programming logic, user interaction, and game flow. The development process involved learning Python's event handling, conditional logic, and basic UI implementation, reinforcing essential coding skills.

    This project served as a stepping stone in understanding game structure, player inputs, and interactive mechanics, providing a strong foundation for future development endeavors.`,
		domain: "Game Dev",
		tech: "Python (Pygame)",
		thumbnail: "/projects/oddeve.png",
		github: "",
		projectLink: "https://infamix-studios.itch.io/oddeve",
	},
	{
		id: 6,
		name: "Pomotive",
		description: `Developed a Pomodoro Timer application to assist users in managing their work and break intervals effectively. The application offers an intuitive interface where users can:

    🔹 Initiate, pause, and reset timers for work sessions and breaks
    🔹 Customize durations for work sessions, short breaks, and long breaks
    🔹 Monitor progress through a dynamic visual representation
    🔹 Switch between different modes (Pomodoro, Short Break, Long Break) seamlessly

    Built using React.js and Tailwind CSS, the project emphasizes performance, accessibility, and a modern user experience. This endeavor served as a practical exercise in frontend development, focusing on state management, responsive design, and user-centric interfaces.`,
		domain: "Web Dev",
		tech: "Reactjs, TailwindCSS",
		thumbnail: "/projects/pomodoro.png",
		github: "https://github.com/akshatp17/PomodoroTimer",
		projectLink: "https://akshatp17.github.io/PomodoroTimer/",
	},
	{
		id: 7,
		name: "CalibreCops",
		description: `Developed CalibreCops, a comprehensive cyber security suite that acts as a proactive layer of protection for users, ensuring a safer online experience. The platform offers a range of tools and features designed to protect against various cyber threats:
  
    🔹 Detects if an email or password has been breached by scanning against known databases of leaked credentials from the dark web
    🔹 Alerts users immediately if a breach is detected, helping them change compromised passwords before they can be misused
    🔹 Identifies phishing emails and malicious URLs to prevent users from falling victim to scams, protecting sensitive data like login credentials and banking information
    🔹 Chrome extension provides real-time protection by automatically analyzing URLs in the current tab and warning users about unsafe or phishing sites
    🔹 Safeguards users' sensitive information and ensures safe browsing, so they can navigate the web with confidence
  
    Built with a focus on user security and ease of use, CalibreCops helps users stay ahead of cyber threats, providing peace of mind while online.`,
		domain: "Web Dev",
		tech: "Reactjs, Nodejs, Express, MongoDB, Chrome Extensions API, Third-Party breach check APIs",
		thumbnail: "/projects/CalibreCops.jpeg",
		github: "https://github.com/akshatp17/CalibreCops",
	},
	{
		id: 8,
		name: "MediPal",
		description: `Developed MediPal, a healthcare platform designed to bridge the gap between patients and medical professionals. The application offers a seamless and secure experience where users can:

    🔹 Book appointments with verified doctors and get clinic directions via Google Maps integration
    🔹 Store, manage, and access medical history securely with industry-standard encryption
    🔹 Receive instant health guidance through an AI-powered medical assistant
    🔹 Benefit from appointment acceptance/rejection functionality for doctors and efficient scheduling management
    🔹 Enjoy enhanced security with Two-Factor Authentication (2FA) at login

    Built using modern web technologies, MediPal emphasizes data security, user experience, and AI integration, addressing complex challenges like AI model optimization, secure data storage, and cloud-based image management.`,
		domain: "Web Dev",
		tech: "Reactjs, TailwindCSS, Nodejs, Express, MongoDB, Gemini AI",
		thumbnail: "/projects/MediPal.jpeg",
		github: "https://github.com/akshatp17/MediPal",
	},
	{
		id: 9,
		name: "Aquagenesis",
		description: `Developed an AI-driven pipeline for analyzing deep-sea environmental DNA (eDNA) to identify and classify eukaryotic taxa with minimal reliance on reference databases.

    🔹 Built the full-stack web platform — designed and implemented a responsive React and TypeScript frontend, integrated the AI-powered Python pipeline with a Flask backend, and managed data flow between the client and server.
    🔹 Enabled real-time visualization of biodiversity metrics and sequence classification results, improving accessibility for marine researchers and conservation teams.`,
		domain: "Web Dev",
		tech: "React, TypeScript, Flask, Python, TensorFlow, MySQL",
		thumbnail: "/projects/aquagenesis.jpg",
		github: "https://github.com/Hack2A/eDNA-sih25",
	},
];
