import React, { useEffect, useRef } from "react";

const CursorGlow = () => {
	const dotRef = useRef(null);

	useEffect(() => {
		const dot = dotRef.current;
		let mouseX = 0;
		let mouseY = 0;
		let dotX = 0;
		let dotY = 0;
		let animationId;

		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		const handleMouseLeave = () => {
			if (dot) dot.style.opacity = "0";
		};

		const handleMouseEnter = () => {
			if (dot) dot.style.opacity = "1";
		};

		// Smooth lerp animation for the trailing effect
		const animate = () => {
			dotX += (mouseX - dotX) * 0.25;
			dotY += (mouseY - dotY) * 0.25;

			if (dot) {
				dot.style.left = `${dotX}px`;
				dot.style.top = `${dotY}px`;
			}

			animationId = requestAnimationFrame(animate);
		};

		window.addEventListener("mousemove", handleMouseMove);
		document.body.addEventListener("mouseleave", handleMouseLeave);
		document.body.addEventListener("mouseenter", handleMouseEnter);
		animationId = requestAnimationFrame(animate);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			document.body.removeEventListener("mouseleave", handleMouseLeave);
			document.body.removeEventListener("mouseenter", handleMouseEnter);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return <div ref={dotRef} className="cursor-dot" />;
};

export default CursorGlow;
