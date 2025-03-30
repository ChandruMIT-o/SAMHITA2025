import React, { useState, useEffect } from "react";
import { auth, signInWithGoogle, logout } from "./firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import "./Login.css";

const db = getFirestore(); // Initialize Firestore

const Login: React.FC = () => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);

			if (currentUser) {
				await checkAndCreateUser(currentUser);
			}
		});

		return () => unsubscribe();
	}, []);

	const checkAndCreateUser = async (currentUser: User) => {
		if (!currentUser.email) return;

		const userRef = doc(db, "users", currentUser.email);
		const userSnap = await getDoc(userRef);

		if (!userSnap.exists()) {
			// Create a new document with only email and username
			await setDoc(userRef, {
				email: currentUser.email,
				username: currentUser.displayName || "",
				fullName: "",
				institute: "",
				phone: "",
				yearOfStudy: null,
				amountPaid: 0,
				paid: false,
				paymentID: "",
				eventsSelected: [],
			});
			console.log("New user document created");
		} else {
			console.log("User document already exists");
		}
	};

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
