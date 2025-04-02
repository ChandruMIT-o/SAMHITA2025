import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, DocumentData, Timestamp } from "firebase/firestore";
import { auth, db } from "./firebase"; // Adjust the import paths as needed
import ShinyText from "./components/InstagramBtn";
import AnimatedList from "./components/AnimatedList";
import "./EventsPage.css";
import "./UserProfilePage.css";

// Define the interface for event details with wa as an array of strings.
interface EventData {
	eventName: string;
	date: string;
	wa: string[];
}

const UserProfilePage: React.FC = () => {
	const navigate = useNavigate();
	const [events, setEvents] = useState<EventData[]>([]);
	const [username, setUsername] = useState<string>("User");
	const [docId, setDocId] = useState<string>("0000"); // 4-digit unique ID
	const [amountPaid, setAmountPaid] = useState<number[]>([]);
	const [paymentIDs, setPaymentIDs] = useState<string[]>([]);
	const [registeredOn, setRegisteredOn] = useState<string[]>([]);
	const [userPass, setUserPass] = useState<string>("none");

	useEffect(() => {
		const fetchUserAndEvents = async () => {
			if (!auth.currentUser) return; // Ensure a user is logged in

			try {
				// Fetch the user's document ID using their UID
				const uid = auth.currentUser.uid;
				const uidMappingRef = doc(db, "uid_mapping", uid);
				const uidMappingSnap = await getDoc(uidMappingRef);

				if (uidMappingSnap.exists()) {
					const fetchedDocId = uidMappingSnap.data().docId;
					setDocId(fetchedDocId);

					const userDocRef = doc(db, "users", fetchedDocId);
					const userDoc = await getDoc(userDocRef);

					if (userDoc.exists()) {
						const userData = userDoc.data() as DocumentData;
						setUsername(userData.fullName || "User");

						// Set payment, pass, and registration details
						setAmountPaid(userData.amountPaid || []);
						setPaymentIDs(userData.paymentID || []);
						setUserPass(userData.pass || "none");

						// Convert Firestore Timestamps to readable dates
						if (
							userData.registeredOn &&
							Array.isArray(userData.registeredOn)
						) {
							const formattedDates = userData.registeredOn.map(
								(timestamp: Timestamp) =>
									timestamp.toDate().toLocaleString()
							);
							setRegisteredOn(formattedDates);
						}

						// Retrieve eventsSelected array; default to empty if not found
						const eventsSelected: string[] =
							userData.eventsSelected || [];

						// Fetch event details
						const eventsArray = await Promise.all(
							eventsSelected.map(async (event) => {
								const eventId = event.replace(/\s+/g, ""); // Remove spaces to form the document ID
								const eventDocRef = doc(
									db,
									"Samhita25",
									eventId
								);
								const eventDoc = await getDoc(eventDocRef);
								if (eventDoc.exists()) {
									const eventData =
										eventDoc.data() as DocumentData;
									return {
										eventName: eventData.eventName,
										date: eventData.date,
										// Normalize wa to always be an array of strings
										wa: Array.isArray(eventData.wa)
											? eventData.wa
											: [eventData.wa],
									} as EventData;
								}
								return null;
							})
						);

						// Filter out any events that weren't found (null values)
						setEvents(
							eventsArray.filter(
								(ev) => ev !== null
							) as EventData[]
						);
					}
				}
			} catch (error) {
				console.error("Error fetching user or event data:", error);
			}
		};

		fetchUserAndEvents();
	}, []);

	// Prepare arrays for the AnimatedList component based on the fetched events
	const eventNames: string[] = events.map((ev) => ev.eventName);
	const eventTimes: string[] = events.map((ev) => ev.date);
	// whatsappLinks is now an array of string arrays
	const whatsappLinks: string[][] = events.map((ev) => ev.wa);

	return (
		<div className="up-page-container">
			<div
				className="up-back-btn"
				onClick={() => {
					navigate("/");
				}}
			>
				Back
			</div>
			<ShinyText text="Profile" />
			<div className="headup">
				<div className="user-name">
					Hey {username} <span className="user-docid">({docId})</span>
				</div>
				{/* Conditionally display the pass chip if pass is not "none" */}
				{userPass !== "none" && (
					<div className="up-date-chip" key="aiImpromptuDate1">
						<img
							src="/assets/icons/passicon.svg"
							className="up-logo"
							alt="Pass Icon"
						/>
						<ShinyText text={`${userPass}`} speed={1} />
					</div>
				)}
			</div>

			{/* User payment and registration details */}
			<div className="detail-cards">
				{amountPaid.map((amount, index) => (
					<div className="up-detail-card" key={`payment-${index}`}>
						<span style={{ color: "#C085FF" }}>
							Payment Received:
						</span>{" "}
						Rs. {amount}
						<br />
						{paymentIDs[index] && (
							<>
								<span style={{ color: "#C085FF" }}>
									Payment ID:
								</span>{" "}
								{paymentIDs[index]}
								<br />
							</>
						)}
						{registeredOn[index] && (
							<>
								<span style={{ color: "#C085FF" }}>
									Registered On:
								</span>{" "}
								{registeredOn[index]}
							</>
						)}
					</div>
				))}
			</div>

			<div className="up-subhead">Registered Events</div>
			<AnimatedList
				eventNames={eventNames}
				eventTimes={eventTimes}
				whatsappLinks={whatsappLinks}
				onItemSelect={(eventName, eventTime, whatsappLink, index) => {
					console.log(eventName, eventTime, whatsappLink, index);
				}}
				showGradients={false}
				enableArrowNavigation={true}
				displayScrollbar={true}
			/>
		</div>
	);
};

export default UserProfilePage;
