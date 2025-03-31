import { db } from "./firebaseConfig.js";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

const allEvents = [
	{
		title: "GenAI & Conversational AI",
		type: "Workshops",
		tag: "BY IITM-RESEARCH PARK",
	},
	{ title: "Cloud & Data Management", type: "Workshops", tag: "BY NATWEST" },
	{
		title: "Drones: Beginner to Advanced",
		type: "Workshops",
		tag: "BY 360 FLYING CLUB",
	},
	{ title: "Career Launchpad", type: "Workshops", tag: "POPULAR" },
	{ title: "MERN Stack", type: "Workshops", tag: "BY TEKION" },
	{
		title: "GenAI & Conversational AI + MERN Stack",
		type: "Combo-Workshops",
		tag: "COMBO-1",
	},
	{
		title: "GenAI & Conversational AI + Career Launchpad",
		type: "Combo-Workshops",
		tag: "COMBO-2",
	},
	{
		title: "Cloud & Data Management + MERN Stack",
		type: "Combo-Workshops",
		tag: "COMBO-3",
	},
	{
		title: "Cloud & Data Management + Career Launchpad",
		type: "Combo-Workshops",
		tag: "COMBO-4",
	},
	{
		title: "Drones: Beginner to Advanced + Career Launchpad",
		type: "Combo-Workshops",
		tag: "COMBO-5",
	},
	{
		title: "Drones: Beginner to Advanced + MERN Stack",
		type: "Combo-Workshops",
		tag: "COMBO-6",
	},
	{
		title: "GenAI & Conversational AI + MERN Stack + Cloud & Data Management",
		type: "Combo-Workshops",
		tag: "COMBO-7",
	},
	{
		title: "GenAI & Conversational AI + Career Launchpad + Cloud & Data Management",
		type: "Combo-Workshops",
		tag: "COMBO-8",
	},
];

const addAdditionalEvents = async () => {
	try {
		const eventCollection = collection(db, "Samhita25");
		const snapshot = await getDocs(eventCollection);

		const existingEventIds = new Set();
		snapshot.forEach((doc) => {
			existingEventIds.add(doc.id);
		});

		for (const event of allEvents) {
			const eventId = event.title.replace(/\s+/g, ""); // Remove spaces for doc ID

			if (!existingEventIds.has(eventId)) {
				const eventDocRef = doc(db, "Samhita25", eventId);

				const eventData = {
					eventName: event.title,
					eventType: event.type,
					price: Math.floor(Math.random() * (500 - 100 + 1)) + 100, // Random price 100-500
				};

				await setDoc(eventDocRef, eventData);
				console.log(`Added: ${event.title}`);
			} else {
				console.log(`Skipped (Already Exists): ${event.title}`);
			}
		}
	} catch (error) {
		console.error("Error adding events:", error);
	}
};

addAdditionalEvents();
