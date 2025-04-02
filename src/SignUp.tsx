import React, { useState } from "react";
import "./SignUp.css";
import Input from "./components/InputBtn";
import ShinyText from "./components/InstagramBtn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
	InstituteIcon,
	MailIcon,
	PhoneIcon,
	UserIcon,
	YearOfStudyIcon,
	PasswordIcon,
} from "./components/ICONS";

import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
	getFirestore,
	collection,
	getDocs,
	doc,
	setDoc,
} from "firebase/firestore";

const db = getFirestore();

const SignUp: React.FC = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		fullName: "",
		yearOfStudy: "",
		email: "",
		phone: "",
		instituteName: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		fullName: "",
		yearOfStudy: "",
		email: "",
		phone: "",
		instituteName: "",
		password: "",
	});

	// For general authentication errors
	const [authError, setAuthError] = useState<string | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		let valid = true;
		const newErrors = {
			fullName: "",
			yearOfStudy: "",
			email: "",
			phone: "",
			instituteName: "",
			password: "",
		};

		// Full Name validation
		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full name is required.";
			valid = false;
		}

		// Year of Study validation (only allow 1-6)
		if (!formData.yearOfStudy.trim()) {
			newErrors.yearOfStudy = "Year of study is required.";
			valid = false;
		} else {
			const year = Number(formData.yearOfStudy);
			if (isNaN(year) || ![1, 2, 3, 4, 5, 6].includes(year)) {
				newErrors.yearOfStudy =
					"Year of study must be 1, 2, 3, 4, 5, or 6.";
				valid = false;
			}
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

		// Password validation
		if (!formData.password.trim()) {
			newErrors.password = "Password is required.";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	// Generate a unique 4-digit ID starting from "0001"
	const generateUniqueId = async (): Promise<string> => {
		const usersCollection = collection(db, "users");
		const snapshot = await getDocs(usersCollection);
		let maxId = 0;
		snapshot.forEach((docSnap) => {
			const docId = docSnap.id;
			const num = parseInt(docId, 10);
			if (!isNaN(num) && num > maxId) {
				maxId = num;
			}
		});
		// Increment maxId and pad it to 4 digits
		const newId = (maxId + 1).toString().padStart(4, "0");
		return newId;
	};

	// Handle click on the Sign Up button
	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setAuthError(null); // Reset any previous error
		if (validate()) {
			try {
				// Create the user with email and password
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					formData.email,
					formData.password
				);
				const user = userCredential.user;

				// Generate a unique 4-digit document ID
				const uniqueId = await generateUniqueId();

				// Create a new user document in Firestore with the generated unique ID
				await setDoc(doc(db, "users", uniqueId), {
					fullName: formData.fullName,
					yearOfStudy: Number(formData.yearOfStudy),
					email: formData.email,
					phone: formData.phone,
					instituteName: formData.instituteName,
					uid: user.uid, // optional: store the Firebase Auth user ID
					amountPaid: [], // Empty array for amounts
					paid: false,
					paymentId: [], // Empty array for payment IDs
					eventsSelected: [],
					registeredOn: [], // Empty array for timestamps
					pass: "",
				});

				// Store mapping of uid -> docId
				await setDoc(doc(db, "uid_mapping", user.uid), {
					docId: uniqueId,
				});

				console.log(
					"User signed up and document created with ID:",
					uniqueId
				);
				// Navigate to the Sign In page after successful signup
				navigate("/signin");
			} catch (error: any) {
				console.error("Error signing up:", error.message);
				// Handle specific error for email already in use
				if (error.code === "auth/email-already-in-use") {
					setAuthError(
						"Email is already in use. Please sign in instead."
					);
				} else {
					setAuthError(error.message);
				}
			}
		}
	};

	const handleSignInClick = () => {
		navigate("/signin");
	};

	return (
		<div className="signup-section" id="signup">
			<div className="signup-content">
				<div
					className="ep-back-btn"
					onClick={() => {
						navigate("/");
					}}
				>
					Back
				</div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5 }}
					className="signup-headings"
				>
					<div>
						<ShinyText text="✦ Sign Up" />
					</div>
					<div className="signup-heading">Samhita '25 Sign Up</div>
				</motion.div>

				<form className="signup-form-container">
					<div className="signup-rows">
						<div className="signup-row">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									flex: 2,
								}}
							>
								<Input
									label="Full Name"
									placeholder="Your full name!"
									icon={<UserIcon />}
									flex={2}
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
									flex: 1,
								}}
							>
								<Input
									label="Year of Study"
									placeholder="Year of study"
									icon={<YearOfStudyIcon />}
									flex={2}
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
						<div className="signup-row">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									flex: 2,
								}}
							>
								<Input
									label="Institute Name"
									placeholder="Enter full institute name"
									icon={<InstituteIcon />}
									flex={1}
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
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									flex: 1,
								}}
							>
								<Input
									label="Phone"
									placeholder="+91"
									icon={<PhoneIcon />}
									flex={2}
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
								/>
								{errors.phone && (
									<div className="error">{errors.phone}</div>
								)}
							</div>
						</div>
						<div className="signup-row">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									flex: 3,
								}}
							>
								<Input
									label="Email"
									placeholder="Enter your email"
									icon={<MailIcon />}
									flex={1}
									name="email"
									value={formData.email}
									onChange={handleInputChange}
								/>
								{errors.email && (
									<div className="error">{errors.email}</div>
								)}
							</div>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									flex: 2,
								}}
							>
								<Input
									label="Password"
									placeholder="Enter your password"
									flex={1}
									icon={<PasswordIcon />}
									name="password"
									value={formData.password}
									onChange={handleInputChange}
								/>
								{errors.password && (
									<div className="error">
										{errors.password}
									</div>
								)}
							</div>
						</div>
						{/* Display authentication errors */}
						{authError && (
							<div className="error auth-error">{authError}</div>
						)}
						<div className="signinuprow">
							<button
								type="button"
								onClick={handleSignInClick}
								className="toSignIn"
							>
								Take me to Sign In
							</button>
							<button
								type="button"
								onClick={handleSubmit}
								className="signupbtn"
							>
								Sign Up
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
