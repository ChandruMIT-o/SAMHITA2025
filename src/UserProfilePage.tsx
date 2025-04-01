import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { auth, db } from "./firebase"; // Adjust the import paths as needed
import ShinyText from "./components/InstagramBtn";
import AnimatedList from "./components/AnimatedList";
import "./EventsPage.css";
import "./UserProfilePage.css";

// Define the interface for event details
interface EventData {
	eventName: string;
	date: string;
	wa: string;
}

const UserProfilePage: React.FC = () => {
	const navigate = useNavigate();
	const [events, setEvents] = useState<EventData[]>([]);
	const [username, setUsername] = useState<string>("User");
	const [amountPaid, setAmountPaid] = useState<number>(0);
	const [userPass, setUserPass] = useState<string>("none");
	const [registeredOn, setRegisteredOn] = useState<string>("");

	useEffect(() => {
		const fetchUserAndEvents = async () => {
			if (!auth.currentUser) return; // Ensure a user is logged in

			try {
				// Fetch the user's document from the "users" collection using their email
				const uid = auth.currentUser.uid;
				const uidMappingRef = doc(db, "uid_mapping", uid);
				const uidMappingSnap = await getDoc(uidMappingRef);

				if (uidMappingSnap.exists()) {
					const userDocRef = doc(
						db,
						"users",
						uidMappingSnap.data().docId
					);
					const userDoc = await getDoc(userDocRef);

					if (userDoc.exists()) {
						const userData = userDoc.data() as DocumentData;
						setUsername(userData.fullName || "User");

						// Set payment, pass, and registration timestamp details
						setAmountPaid(userData.amountPaid || 0);
						setUserPass(userData.pass || "none");
						if (userData.registeredOn) {
							// Convert Firestore Timestamp to a formatted date string
							setRegisteredOn(
								userData.registeredOn.toDate().toLocaleString()
							);
						}

						// Retrieve eventsSelected array; default to empty if not found
						const eventsSelected: string[] =
							userData.eventsSelected || [];

						// Use Promise.all to fetch all event documents concurrently
						const eventsArray = await Promise.all(
							eventsSelected.map(async (event) => {
								// Remove all whitespaces from the event name to form the document ID
								const eventId = event.replace(/\s+/g, "");
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
										wa: eventData.wa,
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
	const whatsappLinks: string[] = events.map((ev) => ev.wa);

	return (
		<div className="up-page-container">
			<div
				className="up-back-btn"
				onClick={() => {
					sessionStorage.setItem(
						"scrollPosition",
						String(window.scrollY)
					);
					navigate("/");
				}}
			>
				Back
			</div>
			<ShinyText text="Profile" />
			<div className="headup">
				<div className="user-name">Hey {username}!</div>
				{/* Conditionally display the pass chip if pass is not "none" */}
				{userPass.toLowerCase() !== "none" && (
					<div className="up-date-chip" key="aiImpromptuDate1">
						<img
							src="/assets/icons/passicon.svg"
							className="up-logo"
							alt="Pass Icon"
						/>
						<ShinyText text={`${userPass} Pass`} speed={1} />
					</div>
				)}
			</div>
			<div className="up-detail-card">
				<span style={{ color: "#C085FF" }}>Payment Received:</span> Rs.{" "}
				{amountPaid}
				<br />
				<span style={{ color: "#C085FF" }}>Registered On:</span>{" "}
				{registeredOn}
			</div>
			<div className="up-subhead">Registered Events</div>
			<AnimatedList
				eventNames={eventNames}
				eventTimes={eventTimes}
				whatsappLinks={whatsappLinks}
				onItemSelect={(
					eventName: string,
					eventTime: string,
					whatsappLink: string,
					index: number
				) => {
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
