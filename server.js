// server.js (using ES module syntax)
import express from "express";
import Razorpay from "razorpay";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Enable CORS for all origins
app.use(cors());

app.use(bodyParser.json());

const razorpayInstance = new Razorpay({
	key_id: "rzp_test_cQf5jcExLIpXxz", // Your Test API Key
	key_secret: "pUluVBptLK7NGxj5ivc6rOQ9", // Replace with your secret key (do NOT expose this in client code)
});

app.post("/createOrder", async (req, res) => {
	const { amount, currency } = req.body;
	const options = {
		amount: amount, // amount in paise; for ₹50, use 5000
		currency: currency || "INR",
		receipt: "receipt#1",
	};

	try {
		const order = await razorpayInstance.orders.create(options);
		res.json(order);
	} catch (error) {
		console.error("Error creating order:", error);
		res.status(500).send("Error creating order");
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
