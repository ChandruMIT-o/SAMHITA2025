import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// Get a reference to the Cloud Functions API
const cloudFunctions = admin.functions();

async function callCreateOrderFunctionAsAdmin() {
	try {
		// Call the function directly using the Admin SDK
		const result = await cloudFunctions.httpsCallable(
			"createRazorpayOrder"
		)({
			amount: 5000,
			currency: "INR",
		});

		console.log("Function result:", result.data);
	} catch (error) {
		console.error("Error calling function:", error);
	}
}

callCreateOrderFunctionAsAdmin();
