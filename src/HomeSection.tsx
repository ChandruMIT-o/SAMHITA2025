import React from "react";
import AnimatedText from "./components/AnimatedText";
import Magnet from "./components/RegistrationButton";

import RegisterBtn from "./assets/button.png"; //+
import ShinyText from "./components/InstagramBtn";
// import AnimatedBackground from "./components/AnimatedBackground";

import "./HomeSection.css";
import VideoBackground from "./components/VideoBackground";

const HomeSection: React.FC = () => {
	return (
		<div className="home-section-container">
			<VideoBackground videoSrc="src/assets/BGVIDEO.mp4" />
			<div className="top-home-subsection">
				<div className="ITA-text">ITA</div>
				<div className="logo-array">
					<img className="logo" src="src/assets/logo/AU.png"></img>
					<img className="logo" src="src/assets/logo/MIT.png"></img>
					<img className="logo" src="src/assets/logo/MIT75.png"></img>
					<img className="logo" src="src/assets/logo/ITA.png"></img>
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
					<ShinyText
						text="INSTRAGRAM ⤤"
						disabled={false}
						speed={3}
						className="custom-class"
					/>
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
