import { initializeApp } from "firebase/app";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import

const firebaseConfig = {
	apiKey: "AIzaSyBZEjDDNd-SLdg7zhVkJyZ384PDLwE3PsY",
	authDomain: "samhita25-61718.firebaseapp.com",
	projectId: "samhita25-61718",
	storageBucket: "samhita25-61718.firebasestorage.app",
	messagingSenderId: "165163084321",
	appId: "1:165163084321:web:3748f642bb6756f2a0d160",
	measurementId: "G-4MSZDKBYHG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, provider);
		console.log("User Info:", result.user);
	} catch (error) {
		console.error("Google Sign-In Error:", error);
	}
};

const logout = async () => {
	try {
		await signOut(auth);
		console.log("User logged out");
	} catch (error) {
		console.error("Logout Error:", error);
	}
};

export { auth, db, signInWithGoogle, logout };
