import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, User, getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

interface UserData {
	fullName: string;
	phone: string;
	email: string;
	amountPaid: number[];
	paymentId: string[];
	paid: boolean;
	registeredOn: Date[];
	eventsSelected: string[];
	pass: string;
}

interface PaymentProps {
	amount: number;
	items: string[];
	pass: string;
}

const Payment: React.FC<PaymentProps> = ({ amount, items, pass }) => {
	const [fullName, setFullName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [userDocRef, setUserDocRef] = useState<any>(null);
	const navigate = useNavigate();

	useEffect(() => {
		const scriptExists = document.querySelector(
			'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
		);
		if (!scriptExists) {
			const script = document.createElement("script");
			script.src = "https://checkout.razorpay.com/v1/checkout.js";
			script.async = true;
			document.body.appendChild(script);
		}
	}, []);

	const fetchUserDetails = async () => {
		const auth = getAuth();
		const user = await new Promise<User | null>((resolve) =>
			onAuthStateChanged(auth, resolve)
		);

		if (user) {
			const uidMappingRef = doc(db, "uid_mapping", user.uid);
			const uidMappingSnap = await getDoc(uidMappingRef);

			if (uidMappingSnap.exists()) {
				const docId = uidMappingSnap.data().docId;
				const userDocRef = doc(db, "users", docId);
				const userDocSnap = await getDoc(userDocRef);

				if (userDocSnap.exists()) {
					const userData = userDocSnap.data() as UserData;
					setFullName(userData.fullName);
					setPhoneNumber(userData.phone);
					setEmail(userData.email);
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
		event.preventDefault();
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

		try {
			const authToken = await user.getIdToken();
			const functions = getFunctions();
			const createOrder = httpsCallable<
				{ amount: number; currency: string; authToken: string },
				{ orderId: string }
			>(functions, "createRazorpayOrder");
			const result = await createOrder({
				amount,
				currency: "INR",
				authToken,
			});
			const orderId = result.data.orderId;

			const options = {
				key: "rzp_live_kENOccTH8MltHT",
				amount: amount * 100,
				currency: "INR",
				name: "Samhita '25",
				image: "/safin.svg",
				description: "Event Registration",
				order_id: orderId,
				handler: async function (response: any) {
					console.log("Payment successful!", response);
					try {
						if (userDocRef) {
							const userDocSnap = await getDoc(userDocRef);
							const userData = userDocSnap.data() as UserData;

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
								new Date(),
							];
							const updatedEventsSelected = [
								...(userData?.eventsSelected || []),
								...items,
							];

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

							await updateDoc(userDocRef, updatePayload);
							await setDoc(doc(db, "order_payments", orderId), {
								orderId,
								paymentId: response.razorpay_payment_id,
								amountPaid: amount,
								registeredOn: new Date(),
								eventsSelected: items,
							});

							alert("Payment details stored successfully!");
							navigate("/user");
						}
					} catch (error) {
						console.error("Error updating payment:", error);
						alert("Error storing payment details.");
					}
				},
				prefill: {
					name: fullName,
					contact: phoneNumber,
					email: email,
				},
				theme: { color: "#92008E" },
			};

			const rzp1 = new window.Razorpay(options);
			rzp1.on("payment.failed", function (response: any) {
				console.error("Payment failed:", response.error);
				alert("Payment failed! Try again.");
			});

			rzp1.open();
		} catch (error) {
			console.error("Error creating Razorpay order:", error);
			alert("Error creating payment order.");
		}
	};

	useEffect(() => {
		fetchUserDetails();
	}, []);

	return (
		<button className="payportelbtn" onClick={handlePayment}>
			Pay Now
		</button>
	);
};

export default Payment;
