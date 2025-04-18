import React from "react";
import "./AboutSection.css";
import ShinyText from "./components/InstagramBtn";
import ScrollReveal from "./components/ScrollReveal";
import { useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { ImageCarousel } from "./components/ImageCarousal";

const AboutSection: React.FC = () => {
	const controls = useAnimation();
	const { scrollY } = useScroll();

	useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			const threshold = window.innerHeight * 0.8;
			if (latest >= threshold) {
				controls.start({ opacity: 1, y: 0 });
			} else {
				controls.start({ opacity: 0, y: 50 });
			}
		});

		return () => unsubscribe(); // Clean up the listener
	}, [controls, scrollY]);

	const images = [
		"/assets/about_us_photos/P1.png",
		"/assets/about_us_photos/P2.png",
		"/assets/about_us_photos/P3.png",
		"/assets/about_us_photos/P4.png",
		"/assets/about_us_photos/P5.png",
		"/assets/about_us_photos/P6.png",
		"/assets/about_us_photos/P1.png",
		"/assets/about_us_photos/P2.png",
		"/assets/about_us_photos/P3.png",
		"/assets/about_us_photos/P4.png",
		"/assets/about_us_photos/P5.png",
		"/assets/about_us_photos/P6.png",
	];

	return (
		<div className="about-section" id="about">
			<div className="about-section-tag" id="about">
				<ShinyText text="✤ ABOUT US"></ShinyText>
			</div>

			<div className="about-text-container-container">
				<ScrollReveal
					baseOpacity={0.3}
					containerClassName="about-text-container"
					textClassName="about-text"
				>
					Founded in 2001, the Information Technology Association
					(ITA) empowers students with hands-on experience in emerging
					technologies while fostering innovation and collaboration.
					We proudly present to you SAMHITA: A tech fest where you can
					compete, create, and showcase your skills across a range of
					technical and non-technical events. Get ready to push your
					limits and be part of something extraordinary!
				</ScrollReveal>
			</div>

			<ImageCarousel images={images} velocity={100} numCopies={5} />
		</div>
	);
};

export default AboutSection;
