const functions = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const Razorpay = require("razorpay");

admin.initializeApp();

// ✅ Ensure your function listens on the correct port
const PORT = process.env.PORT || 8080; // Default to 8080
console.log(`✅ Server is running on port ${PORT}`);

exports.updateUserPayment = functions.onCall(async (request) => {
	logger.info("updateUserPayment called", { data: request.data });

	if (!request.auth) {
		throw new Error(
			"User must be authenticated to update payment details."
		);
	}

	const userEmail = request.auth.token.email;
	if (!userEmail) {
		throw new Error("Authenticated user's email not found.");
	}

	const data = request.data;
	if (typeof data.amountPaid !== "number" || !data.paymentID) {
		throw new Error("Invalid payment details provided.");
	}

	const userRef = admin.firestore().collection("users").doc(userEmail);

	try {
		await userRef.update({
			amountPaid: data.amountPaid,
			paid: true,
			paymentID: data.paymentID,
			...(data.orderID ? { orderID: data.orderID } : {}),
			updatedAt: admin.firestore.FieldValue.serverTimestamp(),
		});
		logger.info(`Payment details updated for ${userEmail}`);
		return {
			success: true,
			message: "Payment details updated successfully.",
		};
	} catch (error) {
		logger.error("Error updating payment details:", error);
		throw new Error("Failed to update payment details.");
	}
});

exports.createRazorpayOrder = functions.onCall(async (request) => {
	logger.info("createRazorpayOrder called", { data: request.data });

	if (
		!request.data ||
		typeof request.data.amount !== "number" ||
		!request.data.currency
	) {
		throw new Error(
			"Invalid request: 'amount' and 'currency' are required."
		);
	}

	const functions = require("firebase-functions");
	const razorpay = new Razorpay({
		key_id: functions.config().razorpay.key_id,
		key_secret: functions.config().razorpay.key_secret,
	});

	const options = {
		amount: request.data.amount,
		currency: request.data.currency,
		receipt: `receipt_${Date.now()}`,
	};

	try {
		const order = await razorpay.orders.create(options);
		logger.info("Order created successfully", { order });
		return { success: true, orderId: order.id, order };
	} catch (error) {
		logger.error("Error creating order:", error);
		throw new Error(`Failed to create order: ${error.message}`);
	}
});
