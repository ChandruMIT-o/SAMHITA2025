import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { onAuthStateChanged, User, getAuth } from "firebase/auth";

// Define the interface for user data structure
interface UserData {
	fullName: string;
	phone: string;
	email: string;
	amountPaid: number[]; // Array to store amounts
	paymentId: string[]; // Array to store payment IDs
	paid: boolean; // Payment status
	registeredOn: Date[]; // Array of timestamps
	eventsSelected: string[]; // Array of selected event IDs or names
	pass: string | string; // Pass status (could be a single string or an array)
}

interface PaymentProps {
	amount: number;
	items: string[]; // New events/items to add
	pass: string; // New pass value to update
}

const Payment: React.FC<PaymentProps> = ({ amount, items, pass }) => {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [userDocRef, setUserDocRef] = useState<any>(null); // The document reference for the user
	const navigate = useNavigate();

	console.log(amount, items, pass);

	useEffect(() => {
		if (
			!document.querySelector(
				'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
			)
		) {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.async = true;
			document.body.appendChild(script);
		}
	}, []);

	// Fetch user details and reference doc using the UID mapping
	const fetchUserDetails = async () => {
		const auth = getAuth();
		const user = await new Promise<User | null>((resolve) =>
			onAuthStateChanged(auth, resolve)
		);

		if (user) {
			// Get the mapping of UID to docId
			const uidMappingRef = doc(db, "uid_mapping", user.uid);
			const uidMappingSnap = await getDoc(uidMappingRef);

			if (uidMappingSnap.exists()) {
				const docId = uidMappingSnap.data().docId; // Get docId from mapping

				// Get the user document from the "users" collection
				const userDocRef = doc(db, "users", docId);
				const userDocSnap = await getDoc(userDocRef);

				if (userDocSnap.exists()) {
					const userData = userDocSnap.data() as UserData; // Type cast to UserData

					// Set user details in state
					setFullName(userData.fullName);
					setPhoneNumber(userData.phone);
					setEmail(userData.email);

					// Set the doc reference for later use in payment update
					setUserDocRef(userDocRef);
				}
			} else {
				console.error("UID mapping not found");
			}
		}
	};

	const handlePayment = async (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault(); // Prevent unintended form submission

		const auth = getAuth();
		const user = await new Promise<User | null>((resolve) =>
			onAuthStateChanged(auth, resolve)
		);

		if (!user) {
			alert("Please log in first.");
			navigate("/signin");
			return;
		}

		if (!fullName || !phoneNumber || !email) {
			alert("User details not available. Please try again.");
			return;
		}

		if (amount < 20) {
			alert("Select the events before paying!");
			return;
		}

		const options = {
			key: "rzp_live_kENOccTH8MltHT",
			// key: "rzp_test_cQf5jcExLIpXxz",
			amount: amount * 100, // Amount in paisa (1 INR = 100 paisa)
			currency: "INR",
			name: "Samhita '25",
			image: "/safin.svg", // Replace with your logo URL
			description: "Event Registration",
			handler: async function (response: any) {
				console.log("Payment successful!", response);

				try {
					if (userDocRef) {
						const userDocSnap = await getDoc(userDocRef);
						const userData = userDocSnap.data() as UserData;

						// Update arrays for payment details
						const updatedAmountPaid = [
							...(userData?.amountPaid || []),
							amount,
						];
						const updatedPaymentId = [
							...(userData?.paymentId || []),
							response.razorpay_payment_id,
						];
						const updatedRegisteredOn = [
							...(userData?.registeredOn || []),
							new Date(), // New payment timestamp
						];

						// Update eventsSelected assuming 'items' is an array of new events to add.
						const updatedEventsSelected = [
							...(userData?.eventsSelected || []),
							...items,
						];

						// Build the update payload.
						// Only update the pass field if the new pass value is not "none"
						const updatePayload: any = {
							amountPaid: updatedAmountPaid,
							paymentId: updatedPaymentId,
							registeredOn: updatedRegisteredOn,
							paid: true,
							eventsSelected: updatedEventsSelected,
						};

						if (pass !== "none") {
							updatePayload.pass = pass;
						}

						// Update the user's document
						await updateDoc(userDocRef, updatePayload);

						// Save the current payment instance values in the 'payments' collection.
						const paymentPayload = {
							amountPaid: amount, // Current instance value
							registeredOn: new Date(), // Current payment timestamp
							eventsSelected: items,
						};

						await setDoc(
							doc(db, "payments", response.razorpay_payment_id),
							paymentPayload
						);

						alert("Payment details stored successfully!");
						navigate("/user");
					}
				} catch (error) {
					console.error("Error updating payment:", error);
					alert("Error storing payment details.");
				}
			},

			prefill: {
				name: fullName || "Test User",
				contact: phoneNumber || "9999999999",
				email: email || "test@example.com",
			},
			theme: { color: "#92008E" },
		};

		const rzp1 = new window.Razorpay(options);

		rzp1.on("payment.failed", function (response: any) {
			console.error("Payment failed:", response.error);
			alert("Payment failed! Try again.");
		});

		rzp1.open();
	};

	useEffect(() => {
		// Fetch user details when component mounts
		fetchUserDetails();
	}, []);

	return (
		<button className="payportelbtn" onClick={handlePayment}>
			Pay Now
		</button>
	);
};

export default Payment;
