import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBZEjDDNd-SLdg7zhVkJyZ384PDLwE3PsY",
	authDomain: "samhita25-61718.firebaseapp.com",
	projectId: "samhita25-61718",
	storageBucket: "samhita25-61718.firebasestorage.app",
	messagingSenderId: "165163084321",
	appId: "1:165163084321:web:3748f642bb6756f2a0d160",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
