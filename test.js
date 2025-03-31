import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

// 🔹 Replace with your Firebase project config
const firebaseConfig = {
	apiKey: "AIzaSyBZEjDDNd-SLdg7zhVkJyZ384PDLwE3PsY",
	authDomain: "samhita25-61718.firebaseapp.com",
	projectId: "samhita25-61718",
	storageBucket: "samhita25-61718.firebasestorage.app",
	messagingSenderId: "165163084321",
	appId: "1:165163084321:web:3748f642bb6756f2a0d160",
	measurementId: "G-4MSZDKBYHG",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

// 🔹 Sample test data
const testPaymentData = {
	amountPaid: 50000, // ₹500 in paise
	paymentID: "pay_TEST123456",
	orderID: "order_TEST7890",
};

const testOrderData = {
	amount: 50000, // ₹500 in paise
	currency: "INR",
};

// 🔹 Function to test `updateUserPayment`
async function testUpdateUserPayment() {
	const updateUserPayment = httpsCallable(functions, "updateUserPayment");
	try {
		const response = await updateUserPayment(testPaymentData);
		console.log("✅ updateUserPayment Response:", response.data);
	} catch (error) {
		console.error("❌ updateUserPayment Error:", error.message);
	}
}

// 🔹 Function to test `createRazorpayOrder`
async function testCreateRazorpayOrder() {
	const createRazorpayOrder = httpsCallable(functions, "createRazorpayOrder");
	try {
		const response = await createRazorpayOrder(testOrderData);
		console.log("✅ createRazorpayOrder Response:", response.data);
	} catch (error) {
		console.error("❌ createRazorpayOrder Error:", error.message);
	}
}

// 🔹 Run Tests
async function runTests() {
	console.log("🔄 Testing createRazorpayOrder...");
	await testCreateRazorpayOrder();

	console.log("🔄 Testing updateUserPayment...");
	await testUpdateUserPayment();
}

runTests();
