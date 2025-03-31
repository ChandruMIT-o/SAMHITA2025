const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");

// Initialize Firebase Admin SDK (only once)
admin.initializeApp();

exports.updateUserPayment = onCall(async (request) => {
	logger.info("updateUserPayment called", { data: request.data });

	// Ensure the user is authenticated.
	if (!request.auth) {
		throw new Error(
			"User must be authenticated to update payment details."
		);
	}

	// Get the authenticated user's email.
	const userEmail = request.auth.token.email;
	if (!userEmail) {
		throw new Error("Authenticated user's email not found.");
	}

	// Extract and validate the payment details.
	const data = request.data;
	if (typeof data.amountPaid !== "number" || !data.paymentID) {
		throw new Error("Invalid payment details provided.");
	}

	// Reference the user document in Firestore (document ID = user's email).
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
