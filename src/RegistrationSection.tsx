import React, { useState } from "react";
import "./RegistrationSection.css";
import MultiEventSelect from "./components/MultiEventSelect";
import ShinyText from "./components/InstagramBtn";
import { motion } from "framer-motion";
import Magnet from "./components/RegistrationButton";
import user_icon from "/assets/user-icon.svg";
import loc_icon from "/assets/loc-icon.svg";
import insta_icon from "/assets/insta-icon.svg";
import { useNavigate } from "react-router-dom";
import Payment from "./components/Payment";

const RegistrationSection: React.FC = () => {
	const [items, setItems] = useState<string[]>([]);
	const [pass, setPass] = useState<string>("none");
	const navigate = useNavigate();

	const [fullAmount, setFullAmount] = useState(0);

	return (
		<div className="registration-section" id="registration">
			<div className="r-section">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5 }}
					className="r-section-headings"
				>
					<div>
						<ShinyText text="✦ Registration" />
					</div>
					<div className="gi-row1">
						<Magnet disabled={false} magnetStrength={8}>
							<a
								href="https://forms.gle/F9kDNpBqT8uKd4Lw9"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<div className="acc-chip">
									<img
										className="insta-icon"
										src="/assets/icons/acc.svg"
										alt="Instagram Icon"
									/>
									<div className="insta-number">
										Looking for Accomodations?
									</div>
								</div>
							</a>
						</Magnet>
					</div>
					<div className="r-heading">
						Let’s get you here, shall we?
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5 }}
					className="registration-inputs-container"
				>
					{/* The form can use onBlur to trigger validation on leaving inputs */}
					<form className="registration-form-container">
						<MultiEventSelect
							setFullAmount={setFullAmount}
							setItems={setItems}
							setPass={setPass}
						/>
						<Magnet
							className="paybtncontainer"
							disabled={false}
							magnetStrength={8}
						>
							{/* <Payment className="payportelbtn">Pay Portal</Payment> */}
							<div className="payment-section">
								<Payment
									amount={fullAmount}
									items={items}
									pass={pass}
								></Payment>
							</div>
						</Magnet>
					</form>
				</motion.div>

				<div className="general-info">
					<div id="contact">
						<ShinyText text="✦ Contact & Location ✦" />
					</div>
					<div className="gi-row1">
						<div className="contact-chip">
							<img
								className="contact-icon"
								src={user_icon}
								alt="User Icon"
							/>
							<div className="contact-name">Usha</div>
							<div className="contact-number">
								+91 9500 127141
							</div>
						</div>
						<div className="contact-chip">
							<img
								className="contact-icon"
								src={user_icon}
								alt="User Icon"
							/>
							<div className="contact-name">Shreesh</div>
							<div className="contact-number">
								+91 82206 61199
							</div>
						</div>
						<div className="contact-chip">
							<img
								className="contact-icon"
								src={user_icon}
								alt="User Icon"
							/>
							<div className="contact-name">Sai</div>
							<div className="contact-number">
								+91 91 73584 32694
							</div>
						</div>
					</div>
					<div className="gi-row1">
						<div className="contact-chip">
							<img
								className="contact-icon"
								src={loc_icon}
								alt="Location Icon"
							/>
							<a
								href="https://maps.app.goo.gl/mKXMHkxsMthEqc9J9"
								target="_blank"
								rel="noopener noreferrer"
								className="contact-name"
							>
								<div>
									IT Department{" "}
									<span style={{ color: "#c086ff" }}>.</span>{" "}
									Madras Institute of Technology{" "}
									<span style={{ color: "#c086ff" }}>.</span>{" "}
									Chromepet{" "}
									<span style={{ color: "#c086ff" }}>.</span>{" "}
									Chennai
								</div>
							</a>
						</div>
					</div>
					<div className="gi-row1">
						<Magnet disabled={false} magnetStrength={8}>
							<a
								href="https://www.instagram.com/samhita_mit/?igsh=aWp6OTJyZWR5cDFs#"
								target="_blank"
								rel="noopener noreferrer"
								style={{ textDecoration: "none" }}
							>
								<div className="insta-chip">
									<img
										className="insta-icon"
										src={insta_icon}
										alt="Instagram Icon"
									/>
									<div className="insta-number">
										Follow us on Instagram!
									</div>
								</div>
							</a>
						</Magnet>
					</div>
					<div className="gi-row1">
						<div
							className="copyright-text-link cancellation_policy"
							onClick={() => navigate("/cancellation_policy")}
						>
							Cancellation Policy |
						</div>
						<div className="copyright-text">
							© 2025 ITA. All rights reserved.
						</div>
						<div
							className="copyright-text-link cancellation_policy"
							onClick={() => navigate("/policy")}
						>
							| Privacy Policy
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegistrationSection;
