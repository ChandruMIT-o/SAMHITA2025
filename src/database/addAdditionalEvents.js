import { db } from "./firebaseConfig.js";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

const allEvents = [
	{
		title: "Unlocking the Power of Gen-AI and Conversational AI",
		type: "Workshops",
		tag: "BY IITM-RESEARCH PARK",
	},
	{
		title: "Unleashing The Power of Cloud Computing and Data Management",
		type: "Workshops",
		tag: "BY NATWEST",
	},
	{
		title: "The IT Behind Drones: Beginners to Advanced Level",
		type: "Workshops",
		tag: "BY 360 FLYING CLUB",
	},
	{
		title: "Career Launchpad:Placement Session",
		type: "Workshops",
		tag: "POPULAR",
	},
	{
		title: "Mastering MERN-STACK - Build scalable apps",
		type: "Workshops",
		tag: "BY TEKION",
	},
	{
		title: "Unlocking the Power of Gen-AI and Conversational AI + Mastering MERN-STACK - Build scalable apps",
		type: "Combo-Workshops",
		tag: "COMBO-1",
	},
	{
		title: "Unlocking the Power of Gen-AI and Conversational AI + Career Launchpad:Placement Session",
		type: "Combo-Workshops",
		tag: "COMBO-2",
	},
	{
		title: "Unleashing The Power of Cloud Computing and Data Management + Mastering MERN-STACK - Build scalable apps",
		type: "Combo-Workshops",
		tag: "COMBO-3",
	},
	{
		title: "Unleashing The Power of Cloud Computing and Data Management + Career Launchpad:Placement Session",
		type: "Combo-Workshops",
		tag: "COMBO-4",
	},
	{
		title: "The IT Behind Drones: Beginners to Advanced Level + Career Launchpad:Placement Session",
		type: "Combo-Workshops",
		tag: "COMBO-5",
	},
	{
		title: "The IT Behind Drones: Beginners to Advanced Level + Mastering MERN-STACK - Build scalable apps",
		type: "Combo-Workshops",
		tag: "COMBO-6",
	},
	{
		title: "Unlocking the Power of Gen-AI and Conversational AI + Mastering MERN-STACK - Build scalable apps + Unleashing The Power of Cloud Computing and Data Management",
		type: "Combo-Workshops",
		tag: "COMBO-7",
	},
	{
		title: "Unlocking the Power of Gen-AI and Conversational AI + Career Launchpad:Placement Session + Unleashing The Power of Cloud Computing and Data Management",
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
