import { useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth } from "firebase/auth"; // Import auth

function OrderDetailsTest() {
	const [orderId, setOrderId] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const createRazorpayOrder = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const auth = getAuth();
			const user = auth.currentUser;
			const authToken = user ? await user.getIdToken() : "anonymous";

			// Get Firebase Cloud Functions (No Emulator)
			const functions = getFunctions();

			// Define callable function
			const createOrder = httpsCallable<
				{
					amount: number;
					currency: string;
					authToken: string;
				},
				{ orderId: string; currency: string; amount: number }
			>(functions, "createRazorpayOrder");

			// Call the function
			const result = await createOrder({
				amount: 5000.0,
				currency: "INR",
				authToken,
			});
			setOrderId(result.data.orderId);
			console.log("Order created:", result.data);
		} catch (err) {
			console.error("Error creating order:", err);
			setError((err as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			<button onClick={createRazorpayOrder} disabled={isLoading}>
				{isLoading ? "Creating Order..." : "Create Razorpay Order"}
			</button>

			{error && <p style={{ color: "red" }}>Error: {error}</p>}
			{orderId && <p>Order ID: {orderId}</p>}
		</div>
	);
}

export default OrderDetailsTest;
