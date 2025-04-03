import React, { useEffect, useState } from "react";
import "./SignIn.css";
import Input from "./components/InputBtn";
import { MailIcon, PasswordIcon } from "./components/ICONS";
import { motion } from "framer-motion";
import ShinyText from "./components/InstagramBtn";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const containerVariants = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -50 },
};

const buttonVariants = {
	hover: { scale: 1.05 },
	tap: { scale: 0.95 },
};

const SignIn: React.FC = () => {
	const navigate = useNavigate();

	// Scroll to top when page loads
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSignInClick = () => {
		navigate("/signup");
	};

	const handleRPClick = () => {
		navigate("/passswordreset");
	};

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	// State for authentication errors
	const [authError, setAuthError] = useState<string | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const validate = () => {
		let valid = true;
		const newErrors = {
			email: "",
			password: "",
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

		// Password validation
		if (!formData.password.trim()) {
			newErrors.password = "Password is required.";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setAuthError(null); // Reset previous authentication errors
		if (validate()) {
			try {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					formData.email,
					formData.password
				);
				console.log("Sign In Successful:", userCredential.user);
				// Navigate to home page on successful sign in
				navigate("/");
			} catch (error: any) {
				console.error("Error signing in:", error.message);
				// Handle specific authentication error codes if desired
				if (error.code === "auth/user-not-found") {
					setAuthError("No user found with this email.");
				} else if (error.code === "auth/wrong-password") {
					setAuthError("Incorrect password. Please try again.");
				} else {
					setAuthError(error.message);
				}
			}
		}
	};

	return (
		<motion.div
			className="signin-section"
			variants={containerVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.6 }}
		>
			<motion.div
				className="ep-back-btn"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => navigate("/")}
			>
				Back
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				className="signup-headings"
			>
				<div>
					<ShinyText text="✦ Sign In" />
				</div>
				<div className="signin-heading">Samhita'25 Sign In</div>
			</motion.div>
			<motion.form
				className="signin-form-container"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.5 }}
			>
				<Input
					label="Email"
					placeholder="Enter your email"
					icon={<MailIcon />}
					name="email"
					value={formData.email}
					onChange={handleInputChange}
				/>
				{errors.email && <div className="error">{errors.email}</div>}
				<Input
					label="Password"
					placeholder="Enter your password"
					icon={<PasswordIcon />}
					name="password"
					value={formData.password}
					onChange={handleInputChange}
				/>
				{errors.password && (
					<div className="error">{errors.password}</div>
				)}
				{/* Display authentication error if any */}
				{authError && (
					<div className="error auth-error">{authError}</div>
				)}
				<div className="signinuprow">
					<motion.button
						type="button"
						onClick={handleSignInClick}
						className="toSignUp"
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
					>
						To Sign Up
					</motion.button>
					<motion.button
						type="button"
						onClick={handleRPClick}
						className="forgotPassword"
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
					>
						Password Reset
					</motion.button>
					<motion.button
						type="button"
						onClick={handleSubmit}
						className="signinbtn"
						variants={buttonVariants}
						whileHover="hover"
						whileTap="tap"
					>
						Sign In
					</motion.button>
				</div>
			</motion.form>
		</motion.div>
	);
};

export default SignIn;
