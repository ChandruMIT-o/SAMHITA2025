import React, { useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";

const placeholderProfile = "src/assets/user-icon.svg";
import "./Login.css";

const Login: React.FC = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		const confirmLogout = window.confirm(
			"Are you sure you want to log out?"
		);
		if (confirmLogout) {
			await logout();
		}
	};

	return (
		<div className="loginbtns">
			{user ? (
				<>
					<div className="login-btn">
						Welcome,{" "}
						<span style={{ color: "#92008E" }}>
							{" "}
							{user.displayName}
						</span>
					</div>

					<button className="login-btn" onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<button className="login-btn" onClick={signInWithGoogle}>
					Login with Google
				</button>
			)}
		</div>
	);
};

export default Login;
