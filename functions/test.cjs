const Razorpay = require("razorpay");

async function testCreateOrder() {
	// Initialize the Razorpay instance with your credentials
	const razorpay = new Razorpay({
		key_id: "rzp_test_cQf5jcExLIpXxz",
		key_secret: "pUluVBptLK7NGxj5ivc6rOQ9",
	});

	// Define the order options
	const options = {
		amount: 5000, // Amount in the smallest currency unit (e.g., paise for INR)
		currency: "INR",
		receipt: `order_rcptid_${Date.now()}`, // Unique receipt ID
		payment_capture: 1, // Auto capture payment (set to 0 if you want to capture manually)
	};

	try {
		// Create the order
		const order = await razorpay.orders.create(options);
		console.log("Order created successfully:");
		console.log(order);
	} catch (error) {
		console.error("Error creating order:", error);
	}
}

// Invoke the test function
testCreateOrder();
