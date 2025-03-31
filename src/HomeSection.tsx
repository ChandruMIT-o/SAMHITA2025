import React, { useEffect } from "react";
import AnimatedText from "./components/AnimatedText";
import Magnet from "./components/RegistrationButton";

import RegisterBtn from "/assets/button.png"; //+
import ShinyText from "./components/InstagramBtn";
// import AnimatedBackground from "./components/AnimatedBackground";

import "./HomeSection.css";
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/NavBar";
import insta_icon from "/assets/insta-icon.svg";
import Login from "./Login";

const HomeSection: React.FC = () => {
	useEffect(() => {
		const scrollY = sessionStorage.getItem("scrollPosition");
		if (scrollY) {
			window.scrollTo(0, parseInt(scrollY, 10)); // Restore scroll position
			sessionStorage.removeItem("scrollPosition"); // Clear after restoring
		}
	}, []);
	return (
		<div className="home-section-container">
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
				<AnimatedText
					text="SAMHITA '25"
					font_size="6rem"
					font_family="Saira Stencil One"
					font_weight="regular"
					letter_spacing="5px"
					animationType="letter"
				/>
				<div className="description">
					Intercollegiate tech symposium, hosted by MIT's Department
					of Information Technology.
				</div>
			</div>
			<div className="footer-home-subsection">
				<AnimatedText
					text="APRIL"
					font_size="1.6rem"
					font_family="Saira"
					font_weight="700"
					animationType="word"
					letter_spacing="2px"
				/>
				<div
					style={{
						marginTop: "-20px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
					}}
				>
					<AnimatedText
						text="12 & 13"
						font_size="2.8rem"
						font_family="Saira"
						font_weight="bold"
						animationType="word"
						letter_spacing="3px"
					/>
					<div className="insta-chip">
						<img className="insta-icon" src={insta_icon}></img>
						<div className="insta-number">
							<ShinyText
								text="INSTRAGRAM ⤤"
								disabled={false}
								speed={3}
								className="custom-class"
							/>
						</div>
					</div>

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
