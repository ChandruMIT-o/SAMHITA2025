import React, { useState } from "react";
import "./SignIn.css";
import Input from "./components/InputBtn";
import { MailIcon } from "./components/ICONS";
import { motion } from "framer-motion";
import ShinyText from "./components/InstagramBtn";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";

const ForgotPassword: React.FC = () => {
	const navigate = useNavigate();

	const handleSignInClick = () => {
		navigate("/signin");
	};

	const [formData, setFormData] = useState({
		email: "",
	});

	const [errors, setErrors] = useState({
		email: "",
	});

	const [authError, setAuthError] = useState<string | null>(null);
	const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		let valid = true;
		const newErrors = {
			email: "",
		};

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

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setAuthError(null); // Reset previous authentication errors
		setSuccessMessage(null); // Reset success message

		if (validate()) {
			try {
				// Send password reset email
				await sendPasswordResetEmail(auth, formData.email);
				setSuccessMessage(
					"Password reset link has been sent to your email."
				);
			} catch (error: any) {
				console.error("Error sending reset email:", error.message);
				if (error.code === "auth/user-not-found") {
					setAuthError("No user found with this email.");
				} else {
					setAuthError(error.message);
				}
			}
		}
	};

	return (
		<div className="signin-section">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.5 }}
				className="signup-headings"
			>
				<div>
					<ShinyText text="✦ Forgot Password" />
				</div>
				<div className="signin-heading">Password Reset</div>
			</motion.div>
			<form className="signin-form-container">
				<Input
					label="Email"
					placeholder="Enter your email"
					icon={<MailIcon />}
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
				{errors.email && <div className="error">{errors.email}</div>}
				{/* Display authentication error if any */}
				{authError && (
					<div className="error auth-error">{authError}</div>
				)}
				{/* Display success message if the password reset email was sent */}
				{successMessage && (
					<div className="success">{successMessage}</div>
				)}
				<div className="signinuprow">
					<button
						type="button"
						onClick={handleSignInClick}
						className="toSignUp"
					>
						Back to Sign In
					</button>
					<button
						type="button"
						onClick={handleSubmit}
						className="signinbtn"
					>
						Send Reset Link
					</button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPassword;
