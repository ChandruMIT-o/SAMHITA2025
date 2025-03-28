import React from "react";
import AnimatedText from "./components/AnimatedText";
import Magnet from "./components/RegistrationButton";
import { motion } from "framer-motion";

import RegisterBtn from "./assets/button.png"; //+
import ShinyText from "./components/InstagramBtn";
// import AnimatedBackground from "./components/AnimatedBackground";

import "./Page.css";

const Page: React.FC = () => {
	return (
		<div>
			<div
				style={{
					width: "100vw",
					minHeight: "100vh",
					background: "#0D0D0D", // Dark background
					color: "#ffffff", // Light text
					display: "flex",
					flexDirection: "column", // Stack elements vertically
					justifyContent: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "start",
						flexDirection: "column",
						alignContent: "left",
					}}
				>
					<AnimatedText
						text="INFORMATION TECHNOLOGY ASSOCIATION's"
						font_size="1.6rem"
						font_family="Hanken Grotesk"
						font_weight="bolder"
						letter_spacing="0px"
						animationType="word"
						left_margin="7%"
					/>
					<div
						style={{
							marginTop: "-10px",
						}}
					>
						<AnimatedText
							text="SAMHITA '25"
							font_size="6rem"
							font_family="Saira Stencil One"
							font_weight="regular"
							letter_spacing="5px"
							animationType="letter"
							left_margin="7%"
						/>
					</div>
					<div
						style={{
							marginTop: "30px",
						}}
					>
						<AnimatedText
							text="An Inter-College Event from the Department of Information Technology, MIT. "
							font_size="1.6rem"
							font_family="Hanken Grotesk"
							font_weight="regular"
							letter_spacing="0px"
							animationType="word"
							delay={0.05}
							animationDuration={0.2}
							left_margin="7%"
						/>
					</div>
				</div>
				<div
					style={{
						width: "90%",
						marginLeft: "10px",
					}}
				>
					<AnimatedText
						text="APRIL"
						font_size="1.6rem"
						font_family="Saira"
						font_weight="700"
						animationType="word"
						left_margin="7%"
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
							left_margin="7%"
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
									/* <button className="RegisterButton">
							Register Now!
						</button> */
									<img
										className="RButton"
										src={RegisterBtn}
										draggable={false}
									/>
									// <button className="RegisterButton">
									// 	Register Now!
									// </button>
								}
							</Magnet>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				style={{
					width: "100vw",
					minHeight: "100vh",
					background: "#0D0D0D", // Dark background
					color: "#ffffff", // Light text
					display: "flex",
					flexDirection: "column", // Stack elements vertically
					justifyContent: "center",
				}}
			/>
		</div>
	);
};

export default Page;
