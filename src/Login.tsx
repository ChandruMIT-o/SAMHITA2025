import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth, logout } from "./firebase"; // Removed Google login
import { onAuthStateChanged, User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import "./Login.css";

const db = getFirestore(); // Initialize Firestore

const Login: React.FC = () => {
	const [user, setUser] = useState<User | null>(null);
	const [fullName, setFullName] = useState<string | null>(null); // Store fullName
	const navigate = useNavigate(); // Initialize navigate

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
			setUser(currentUser);

			if (currentUser) {
				const cachedFullName = localStorage.getItem(
					`fullName_${currentUser.uid}`
				);
				if (cachedFullName) {
					setFullName(cachedFullName); // Set fullName from cache if available
				} else {
					await fetchUserDetails(currentUser); // Fetch fullName if not found in cache
				}
			} else {
				setFullName(null); // Reset fullName when user logs out
			}
		});

		return () => unsubscribe();
	}, []);

	const fetchUserDetails = async (currentUser: User) => {
		if (!currentUser.uid) return; // Ensure there's a valid uid

		// Fetch the docId from the "uid_mapping" collection using the uid
		const uidMappingRef = doc(db, "uid_mapping", currentUser.uid);
		const uidMappingSnap = await getDoc(uidMappingRef);

		if (uidMappingSnap.exists()) {
			const docId = uidMappingSnap.data().docId; // Get the docId from the mapping

			// Use the docId to fetch the user details from the "users" collection
			const userRef = doc(db, "users", docId);
			const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				const userData = userSnap.data();
				const fetchedFullName = userData.fullName || "Profile";
				setFullName(fetchedFullName); // Set fullName

				// Cache the fullName in local storage for future use
				localStorage.setItem(
					`fullName_${currentUser.uid}`,
					fetchedFullName
				);
			} else {
				console.error("User document not found in Firestore.");
			}
		} else {
			console.error("UID mapping not found.");
		}
	};

	const handleLogout = async () => {
		const confirmLogout = window.confirm(
			"Are you sure you want to log out?"
		);
		if (confirmLogout) {
			// Remove fullName from localStorage on logout
			if (user?.uid) {
				localStorage.removeItem(`fullName_${user.uid}`);
			}
			await logout();
		}
	};

	const handleProfileClick = () => {
		navigate("/user"); // Navigate to /user page
	};

	return (
		<div className="loginbtns">
			{user ? (
				<>
					<div
						className="login-btn"
						onClick={handleProfileClick}
						style={{ cursor: "pointer" }}
					>
						<span style={{ color: "#92008E" }}>{fullName}</span>
					</div>

					<button className="login-btn" onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<>
					<button
						className="login-btn"
						onClick={() => navigate("/signin")}
					>
						Sign In
					</button>
					<button
						className="login-btn"
						onClick={() => navigate("/signup")}
					>
						Sign Up
					</button>
				</>
			)}
		</div>
	);
};

export default Login;
