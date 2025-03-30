import React from "react";
import "./RegistrationSection.css";
import Input from "./components/InputBtn";
import MultiEventSelect from "./components/MultiEventSelect";
import ShinyText from "./components/InstagramBtn";
import { motion } from "framer-motion";
import Magnet from "./components/RegistrationButton";
import user_icon from "./assets/user-icon.svg";
import loc_icon from "./assets/loc-icon.svg";
import insta_icon from "./assets/insta-icon.svg";

const RegistrationSection: React.FC = () => {
	const UserIcon = (
		<svg
			width="36"
			height="40"
			viewBox="0 0 36 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="search-icon"
		>
			<path
				d="M34 38V34C34 31.8783 33.1571 29.8434 31.6569 28.3431C30.1566 26.8429 28.1217 26 26 26H10C7.87827 26 5.84344 26.8429 4.34315 28.3431C2.84285 29.8434 2 31.8783 2 34V38M26 10C26 14.4183 22.4183 18 18 18C13.5817 18 10 14.4183 10 10C10 5.58172 13.5817 2 18 2C22.4183 2 26 5.58172 26 10Z"
				stroke="#1E1E1E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);

	const PhoneIcon = (
		<svg
			width="44"
			height="44"
			viewBox="0 0 44 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="search-icon"
		>
			<path
				d="M41.7762 31.8402V37.8402C41.7785 38.3972 41.6644 38.9485 41.4413 39.4589C41.2181 39.9692 40.8908 40.4274 40.4804 40.8039C40.0699 41.1805 39.5854 41.4672 39.0577 41.6456C38.5301 41.8241 37.971 41.8903 37.4162 41.8402C31.2619 41.1715 25.3502 39.0685 20.1562 35.7002C15.3239 32.6295 11.2269 28.5325 8.15623 23.7002C4.77619 18.4826 2.67272 12.5422 2.01623 6.36019C1.96625 5.80713 2.03198 5.24971 2.20923 4.72344C2.38649 4.19717 2.67138 3.71357 3.04577 3.30344C3.42016 2.8933 3.87584 2.56561 4.38382 2.34124C4.89179 2.11686 5.44091 2.00072 5.99623 2.00019H11.9962C12.9668 1.99064 13.9078 2.33435 14.6438 2.96726C15.3797 3.60017 15.8604 4.47909 15.9962 5.44019C16.2495 7.36033 16.7191 9.24565 17.3962 11.0602C17.6653 11.776 17.7236 12.554 17.564 13.302C17.4045 14.0499 17.034 14.7364 16.4962 15.2802L13.9562 17.8202C16.8033 22.8273 20.9491 26.9731 25.9562 29.8202L28.4962 27.2802C29.04 26.7425 29.7265 26.3719 30.4745 26.2124C31.2224 26.0529 32.0004 26.1111 32.7162 26.3802C34.5308 27.0573 36.4161 27.5269 38.3362 27.7802C39.3078 27.9173 40.195 28.4066 40.8293 29.1552C41.4636 29.9038 41.8006 30.8593 41.7762 31.8402Z"
				stroke="#1E1E1E"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);

	const MailIcon = (
		<svg
			width="20"
			height="16"
			viewBox="0 0 20 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="search-icon"
		>
			<path
				d="M2 16C1.45 16 0.975 15.8083 0.575 15.425C0.191667 15.025 0 14.55 0 14V2C0 1.45 0.191667 0.983334 0.575 0.599999C0.975 0.2 1.45 0 2 0H18C18.55 0 19.0167 0.2 19.4 0.599999C19.8 0.983334 20 1.45 20 2V14C20 14.55 19.8 15.025 19.4 15.425C19.0167 15.8083 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
				fill="#bdbecb"
			/>
		</svg>
	);

	const InstituteIcon = (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="search-icon"
		>
			<path
				d="M0 44.4C0 42.4118 1.61177 40.8 3.6 40.8H44.4C46.3882 40.8 48 42.4118 48 44.4V44.4C48 46.3882 46.3882 48 44.4 48H3.6C1.61178 48 0 46.3882 0 44.4V44.4ZM24 0L1.7992 8.88032C0.712545 9.31498 0 10.3674 0 11.5378V11.5378C0 13.1186 1.28145 14.4 2.8622 14.4H43.2C45.851 14.4 48 12.251 48 9.6V9.6M36 22.8C36 20.8118 37.6118 19.2 39.6 19.2V19.2C41.5882 19.2 43.2 20.8118 43.2 22.8V32.4C43.2 34.3882 41.5882 36 39.6 36V36C37.6118 36 36 34.3882 36 32.4V22.8ZM20.4 22.8C20.4 20.8118 22.0118 19.2 24 19.2V19.2C25.9882 19.2 27.6 20.8118 27.6 22.8V32.4C27.6 34.3882 25.9882 36 24 36V36C22.0118 36 20.4 34.3882 20.4 32.4V22.8ZM4.8 22.8C4.8 20.8118 6.41178 19.2 8.4 19.2V19.2C10.3882 19.2 12 20.8118 12 22.8V32.4C12 34.3882 10.3882 36 8.4 36V36C6.41178 36 4.8 34.3882 4.8 32.4V22.8Z"
				fill="#bababa"
			/>
		</svg>
	);

	const YearOfStudyIcon = (
		<svg
			width="36"
			height="40"
			viewBox="0 0 36 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="search-icon"
		>
			<path
				d="M34.4572 4.05509H28.286V1.52018C28.2858 0.681103 27.5942 0 26.743 0C25.8902 0 25.2002 0.681103 25.2002 1.52018V4.05509H11.3149V1.52018C11.3149 0.681103 10.6237 0 9.7721 0C8.91977 0 8.22927 0.681103 8.22927 1.52018V4.05509H1.54283C0.691125 4.05509 0 4.73607 0 5.57528V38.4798C0 39.3193 0.691125 40 1.54283 40H34.4572C35.3084 40 36 39.3193 36 38.4798V5.57528C35.9999 4.73595 35.3084 4.05509 34.4572 4.05509ZM20.2644 33.8243H18.125V19.7354H18.075L15.23 21.2482L14.8017 19.5847L18.3766 17.7009H20.2644V33.8243ZM32.9143 12.4158H3.08566V7.09533H8.22927V8.61539C8.22927 9.45459 8.91977 10.1356 9.7721 10.1356C10.6238 10.1356 11.3149 9.45459 11.3149 8.61539V7.09533H25.2002V8.61539C25.2002 9.45459 25.8902 10.1356 26.743 10.1356C27.5942 10.1356 28.2858 9.45459 28.2858 8.61539V7.09533H32.9143V12.4158Z"
				fill="#bababa"
			/>
		</svg>
	);

	return (
		<div
			style={{
				width: "100vw",
				height: "160vh",
				minHeight: "100vh",
				background: "#0D0D0D",
				color: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "flex-start",
				padding: "8%",
			}}
		>
			<div className="r-section">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -100 }}
					transition={{ duration: 0.5 }}
					className="r-section-headings"
				>
					<ShinyText text="✦ Registration"></ShinyText>

					<div className="r-heading">
						Let’s get you here, shall we?
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -100 }}
					transition={{ duration: 0.5 }}
					className="registration-inputs-container"
				>
					<div className="r-rows">
						<div className="r-row1">
							<Input
								label="Full Name"
								placeholder="Your name!"
								icon={UserIcon}
								width="400px"
							/>
							<Input
								label="Year of Study"
								placeholder="Your name!"
								icon={YearOfStudyIcon}
								width="180px"
							/>
						</div>
						<div className="r-row1">
							<Input
								label="Email"
								placeholder="Your name!"
								icon={MailIcon}
								width="300px"
							/>
							<Input
								label="Phone"
								placeholder="+91"
								icon={PhoneIcon}
								width="280px"
							/>
						</div>
						<div className="r-row1">
							<Input
								label="Institute Name"
								placeholder="Enter full institute name"
								icon={InstituteIcon}
								width="610px"
							/>
						</div>
						<Magnet
							className="paybtncontainer"
							disabled={false}
							magnetStrength={8}
						>
							<div className="payportelbtn">Pay Portal</div>
						</Magnet>
					</div>

					<MultiEventSelect />
				</motion.div>

				<div className="general-info">
					<ShinyText text="✦ Contact & Location ✦"></ShinyText>
					<div className="gi-row1">
						<div className="contact-chip">
							<img className="contact-icon" src={user_icon}></img>
							<div className="contact-name">Usha</div>
							<div className="contact-number">
								+91 76676 34519
							</div>
						</div>
						<div className="contact-chip">
							<img className="contact-icon" src={user_icon}></img>
							<div className="contact-name">Shreesh</div>
							<div className="contact-number">
								+91 76676 34519
							</div>
						</div>
						<div className="contact-chip">
							<img className="contact-icon" src={user_icon}></img>
							<div className="contact-name">Sai</div>
							<div className="contact-number">
								+91 76676 34519
							</div>
						</div>
					</div>
					<div className="gi-row1">
						<div className="contact-chip">
							<img className="contact-icon" src={loc_icon}></img>
							<div className="contact-name">
								IT Department{" "}
								<span style={{ color: "#c086ff" }}>.</span>{" "}
								Madras Institute of Technology{" "}
								<span style={{ color: "#c086ff" }}>.</span>
								Chromepet{" "}
								<span style={{ color: "#c086ff" }}>.</span>{" "}
								Chennai
							</div>
						</div>
					</div>
					<div className="gi-row1">
						<Magnet
							className="paybtncontainer"
							disabled={false}
							magnetStrength={8}
						>
							<div className="insta-chip">
								<img
									className="insta-icon"
									src={insta_icon}
								></img>
								<div className="insta-number">
									Follow us on Instagram!
								</div>
							</div>
						</Magnet>
					</div>
					<div className="gi-row1">
						<div className="copyright-text">
							© 2025 ITA. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationSection;
