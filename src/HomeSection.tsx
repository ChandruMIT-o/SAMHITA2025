import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Magnet from "./components/RegistrationButton";
import RegisterBtn from "/assets/button.png";
import ShinyText from "./components/InstagramBtn";
import "./HomeSection.css";
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/NavBar";
import insta_icon from "/assets/insta-icon.svg";
import Login from "./Login";

const HomeSection: React.FC = () => {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

	return (
		<div id="home" className="home-section-container" ref={sectionRef}>
			<NavBar />
			<Login />
			<VideoBackground videoSrc="/assets/BGVIDEO.mp4" />
			<motion.img
				className="blendin"
				src="/assets/icons/Blendin.png"
				alt="Blend In"
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 1 }}
			/>
			<motion.div
				className="top-home-subsection"
				initial={{ y: -20, opacity: 0 }}
				animate={
					isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }
				}
				transition={{ duration: 0.6 }}
			>
				<div className="ITA-text">ITA</div>
				<div className="logo-array">
					{["AU.png", "MIT.png", "MIT75.png", "ITA.png"].map(
						(logo, index) => (
							<motion.img
								key={index}
								className="logo"
								src={`/assets/logo/${logo}`}
								alt={logo}
								initial={{ scale: 0.9, opacity: 0 }}
								animate={
									isInView
										? { scale: 1, opacity: 1 }
										: { scale: 0.9, opacity: 0 }
								}
								transition={{
									delay: 0.1 * index,
									duration: 0.5,
								}}
							/>
						)
					)}
				</div>
			</motion.div>
			<motion.div
				className="middle-home-subsection"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={
					isInView
						? { opacity: 1, scale: 1 }
						: { opacity: 0, scale: 0.95 }
				}
				transition={{ duration: 0.7 }}
			>
				<div className="super-title">
					<span className="hero">SAMHITA</span> '25
				</div>
				<div className="description">
					Intercollegiate tech symposium, hosted by MIT's Department
					of Information Technology.
				</div>
			</motion.div>
			<motion.div
				className="footer-home-subsection"
				initial={{ opacity: 0, y: 20 }}
				animate={
					isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
				}
				transition={{ duration: 0.6 }}
			>
				<div className="month">APRIL</div>
				<div className="footer-home hero">
					<div className="dates">12 & 13</div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="insta-chip"
						initial={{ opacity: 0, y: -10 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: -10 }
						}
						transition={{ duration: 0.5 }}
					>
						<img
							className="insta-icon"
							src={insta_icon}
							alt="Instagram"
						/>
						<Magnet padding={50} magnetStrength={5}>
							<a
								href="https://www.instagram.com/samhita_mit/?igsh=aWp6OTJyZWR5cDFs#"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="insta-number">
									<ShinyText text="Instagram ⤤" />
								</div>
							</a>
						</Magnet>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={
							isInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.9 }
						}
						transition={{ duration: 0.5 }}
					>
						<Magnet padding={50} magnetStrength={5}>
							<a href="#registration">
								<img
									className="RButton"
									src={RegisterBtn}
									draggable={false}
									alt="Register Button"
								/>
							</a>
						</Magnet>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default HomeSection;
