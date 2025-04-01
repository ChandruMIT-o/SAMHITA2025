import React, { useEffect } from "react";
import Magnet from "./components/RegistrationButton";

import RegisterBtn from "/assets/button.png"; //+
import ShinyText from "./components/InstagramBtn";
// import AnimatedBackground from "./components/AnimatedBackground";

import "./HomeSection.css";
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/NavBar";
import insta_icon from "/assets/insta-icon.svg";
import Login from "./Login";
import { motion } from "framer-motion";

const HomeSection: React.FC = () => {
	useEffect(() => {
		const scrollY = sessionStorage.getItem("scrollPosition");
		if (scrollY) {
			window.scrollTo(0, parseInt(scrollY, 10)); // Restore scroll position
			sessionStorage.removeItem("scrollPosition"); // Clear after restoring
		}
	}, []);
	return (
		<div id="home" className="home-section-container">
			<NavBar></NavBar>
			<Login></Login>
			<VideoBackground videoSrc="/assets/BGVIDEO.mp4" />
			<img className="blendin" src="/assets/icons/Blendin.png"></img>
			<div className="top-home-subsection">
				<div className="ITA-text">ITA</div>
				<div className="logo-array">
					<img className="logo" src="/assets/logo/AU.png"></img>
					<img className="logo" src="/assets/logo/MIT.png"></img>
					<img className="logo" src="/assets/logo/MIT75.png"></img>
					<img className="logo" src="/assets/logo/ITA.png"></img>
				</div>
			</div>
			<div className="middle-home-subsection">
				<div className="super-title">
					<span className="hero">SAMHITA</span> '25
				</div>
				<div className="description">
					Intercollegiate tech symposium, hosted by MIT's Department
					of Information Technology.
				</div>
			</div>
			<div className="footer-home-subsection">
				<div className="month">APRIL</div>
				<div className="footer-home hero">
					<div className="dates">12 & 13</div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						className="insta-chip"
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -10, opacity: 0 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<img className="insta-icon" src={insta_icon}></img>
						<Magnet padding={50} magnetStrength={5}>
							{
								<div className="insta-number">
									<ShinyText text="Instagram ⤤"></ShinyText>
								</div>
							}
						</Magnet>
					</motion.div>

					<div>
						<Magnet padding={50} magnetStrength={5}>
							{
								<img
									className="RButton"
									src={RegisterBtn}
									draggable={false}
								/>
							}
						</Magnet>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSection;
