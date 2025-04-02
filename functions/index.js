import { getFunctions, httpsCallable } from "firebase/functions";

async function generateRazorpayOrderId(amount, currency, receipt, notes) {
	try {
		const functions = getFunctions();
		const createOrder = httpsCallable(functions, "createRazorpayOrder");
		const result = await createOrder({ amount, currency, receipt, notes });
		return result.data.orderId;
	} catch (error) {
		console.error("Error calling createRazorpayOrder:", error);
		// Handle the error appropriately in your UI
		throw error;
	}
}

// Example usage:
const paymentAmount = 100; // Example amount in your base currency (e.g., Rupees)
const paymentCurrency = "INR";
const orderReceipt = "receipt_123";
const orderNotes = { key1: "value1", key2: "value2" };

generateRazorpayOrderId(
	paymentAmount,
	paymentCurrency,
	orderReceipt,
	orderNotes
)
	.then((orderId) => {
		console.log("Razorpay Order ID:", orderId);
		// Use this orderId to initialize the Razorpay checkout
	})
	.catch((error) => {
		console.error("Failed to generate Razorpay Order ID:", error.message);
	});
