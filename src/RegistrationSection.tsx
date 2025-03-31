import React, { useState } from "react";
import "./RegistrationSection.css";
import Input from "./components/InputBtn";
import MultiEventSelect from "./components/MultiEventSelect";
import ShinyText from "./components/InstagramBtn";
import { motion } from "framer-motion";
import Magnet from "./components/RegistrationButton";
import user_icon from "/assets/user-icon.svg";
import loc_icon from "/assets/loc-icon.svg";
import insta_icon from "/assets/insta-icon.svg";
import {
	InstituteIcon,
	MailIcon,
	PhoneIcon,
	UserIcon,
	YearOfStudyIcon,
} from "./components/ICONS";
import PayPortalBtn from "./components/PayPortalBtn";

const RegistrationSection: React.FC = () => {
	// State to hold form field values
	const [formData, setFormData] = useState({
		fullName: "",
		yearOfStudy: "",
		email: "",
		phone: "",
		instituteName: "",
	});

	const [fullAmount, setFullAmount] = useState(0);

	// State to hold error messages for each field
	const [errors, setErrors] = useState({
		fullName: "",
		yearOfStudy: "",
		email: "",
		phone: "",
		instituteName: "",
	});

	// Handle input changes for controlled inputs
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Validate form fields and update errors state
	const validate = () => {
		let valid = true;
		const newErrors = {
			fullName: "",
			yearOfStudy: "",
			email: "",
			phone: "",
			instituteName: "",
		};

		// Full Name validation
		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full name is required.";
			valid = false;
		}

		// Year of Study validation
		if (!formData.yearOfStudy.trim()) {
			newErrors.yearOfStudy = "Year of study is required.";
			valid = false;
		} else if (isNaN(Number(formData.yearOfStudy))) {
			newErrors.yearOfStudy = "Year of study must be a number.";
			valid = false;
		}

		// Email validation
		if (!formData.email.trim()) {
			newErrors.email = "Email is required.";
			valid = false;
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email)) {
				newErrors.email = "Invalid email format.";
				valid = false;
			}
		}

		// Phone validation
		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required.";
			valid = false;
		} else {
			const phoneRegex = /^[+]?[0-9]{10,15}$/;
			if (!phoneRegex.test(formData.phone)) {
				newErrors.phone = "Invalid phone number.";
				valid = false;
			}
		}

		// Institute Name validation
		if (!formData.instituteName.trim()) {
			newErrors.instituteName = "Institute name is required.";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	// Compute if the form is valid to enable the payment button
	const isFormValid = () => {
		return (
			formData.fullName.trim() !== "" &&
			formData.yearOfStudy.trim() !== "" &&
			formData.email.trim() !== "" &&
			formData.phone.trim() !== "" &&
			formData.instituteName.trim() !== "" &&
			!errors.fullName &&
			!errors.yearOfStudy &&
			!errors.email &&
			!errors.phone &&
			!errors.instituteName
		);
	};

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
			id="registration"
		>
			<div className="r-section">
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -100 }}
					transition={{ duration: 0.5 }}
					className="r-section-headings"
				>
					<div>
						<ShinyText text="✦ Registration" />
					</div>
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
					{/* The form can use onBlur to trigger validation on leaving inputs */}
					<form
						className="registration-inputs-container"
						onBlur={validate}
					>
						<div className="r-rows">
							<div className="r-row1">
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}
								>
									<Input
										label="Full Name"
										placeholder="Your full name!"
										icon={<UserIcon />}
										width="400px"
										name="fullName"
										value={formData.fullName}
										onChange={handleInputChange}
									/>
									{errors.fullName && (
										<div className="error">
											{errors.fullName}
										</div>
									)}
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}
								>
									<Input
										label="Year of Study"
										placeholder="Enter your year of study"
										icon={<YearOfStudyIcon />}
										width="180px"
										name="yearOfStudy"
										value={formData.yearOfStudy}
										onChange={handleInputChange}
									/>
									{errors.yearOfStudy && (
										<div className="error">
											{errors.yearOfStudy}
										</div>
									)}
								</div>
							</div>
							<div className="r-row1">
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}
								>
									<Input
										label="Email"
										placeholder="Enter your email"
										icon={<MailIcon />}
										width="300px"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
									/>
									{errors.email && (
										<div className="error">
											{errors.email}
										</div>
									)}
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}
								>
									<Input
										label="Phone"
										placeholder="+91"
										icon={<PhoneIcon />}
										width="280px"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
									/>
									{errors.phone && (
										<div className="error">
											{errors.phone}
										</div>
									)}
								</div>
							</div>
							<div className="r-row1">
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "10px",
									}}
								>
									<Input
										label="Institute Name"
										placeholder="Enter full institute name"
										icon={<InstituteIcon />}
										width="610px"
										name="instituteName"
										value={formData.instituteName}
										onChange={handleInputChange}
									/>
									{errors.instituteName && (
										<div className="error">
											{errors.instituteName}
										</div>
									)}
								</div>
							</div>
							<Magnet
								className="paybtncontainer"
								disabled={!isFormValid()}
								magnetStrength={8}
							>
								<PayPortalBtn
									disabled={!isFormValid()}
									amount={fullAmount} // Example amount (in INR)
									name={formData.fullName}
									email={formData.email}
									contact={formData.phone}
								/>
							</Magnet>
						</div>
						<MultiEventSelect setFullAmount={setFullAmount} />
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
								+91 76676 34519
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
								+91 76676 34519
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
								+91 76676 34519
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
							<div className="contact-name">
								IT Department{" "}
								<span style={{ color: "#c086ff" }}>.</span>{" "}
								Madras Institute of Technology{" "}
								<span style={{ color: "#c086ff" }}>.</span>{" "}
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
									alt="Instagram Icon"
								/>
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
