import * as functions from "firebase-functions/v2/https";
import Razorpay from "razorpay";

export const createRazorpayOrder = functions.onCall(async (request) => {
	try {
		// Retrieve Razorpay credentials from environment variables (v2)
		const key_id = process.env.RAZORPAY_KEY_ID;
		const key_secret = process.env.RAZORPAY_KEY_SECRET;

		if (!key_id || !key_secret) {
			console.error(
				"Missing Razorpay credentials in environment variables."
			);
			throw new functions.HttpsError(
				"internal",
				"Razorpay credentials missing."
			);
		}

		// Initialize Razorpay instance inside the function
		const razorpay = new Razorpay({ key_id, key_secret });

		// Prepare order options
		const amount = request.data.amount;
		const currency = request.data.currency || "INR";
		const options = {
			amount: Math.round(amount * 100), // Convert INR to paise
			currency: "INR",
			receipt: `order_rcptid_${Date.now()}`,
			payment_capture: 1,
		};

		// Create order
		const order = await razorpay.orders.create(options);
		console.log("Razorpay order created:", order);

		return {
			orderId: order.id,
			currency: order.currency,
			amount: order.amount,
		};
	} catch (error) {
		console.error("Error creating Razorpay order:", error);
		throw new functions.HttpsError(
			"internal",
			"Unable to create order.",
			error
		);
	}
});
