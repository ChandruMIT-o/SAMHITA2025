import React from "react";
import "./PayPortal.css";

interface PayPortalBtnProps {
	disabled: boolean;
	amount: number; // amount in INR (rupees)
	name: string;
	email: string;
	contact: string;
}

const PayPortalBtn: React.FC<PayPortalBtnProps> = ({
	disabled,
	amount,
	name,
	email,
	contact,
}) => {
	const loadScript = (src: string): Promise<boolean> => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => resolve(true);
			script.onerror = () => resolve(false);
			document.body.appendChild(script);
		});
	};

	console.log(disabled, amount, name, email, contact);

	const displayRazorpay = async () => {
		if (disabled || amount <= 0 || !name || !email || !contact) {
			alert(
				"Please ensure all fields are filled correctly before proceeding."
			);
			return;
		}

		const scriptLoaded = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);
		if (!scriptLoaded) {
			alert("Razorpay SDK failed to load. Please check your connection.");
			return;
		}

		const orderResponse = await fetch("http://localhost:5000/createOrder", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: amount * 100, currency: "INR" }),
		});

		if (!orderResponse.ok) {
			alert("Failed to create order. Please try again.");
			return;
		}

		const { id: order_id } = await orderResponse.json();

		const options = {
			key: "rzp_test_cQf5jcExLIpXxz",
			amount: (amount * 100).toString(),
			currency: "INR",
			name: "Samhita 25",
			description: "Payment Transaction",
			image: "/logo.png",
			order_id,
			callback_url: "http://127.0.0.1:4000/",
			prefill: { name, email, contact },
			theme: { color: "#3399cc" },
		};

		const paymentObject = new (window as any).Razorpay(options);
		paymentObject.open();
	};

	return (
		<button
			className="payportelbtn"
			disabled={disabled || amount <= 0}
			onClick={displayRazorpay}
		>
			Pay Now
		</button>
	);
};

export default PayPortalBtn;
