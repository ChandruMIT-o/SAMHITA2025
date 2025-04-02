import { db } from "./firebaseConfig.js";
import {
	collection,
	getDocs,
	doc,
	setDoc,
	deleteDoc,
} from "firebase/firestore";

async function updateDocIds() {
	try {
		const colRef = collection(db, "Samhita25");
		const querySnapshot = await getDocs(colRef);

		// Process each document in the collection.
		for (const document of querySnapshot.docs) {
			const data = document.data();
			const eventName = data.eventName;
			if (!eventName) continue; // Skip if no eventName field is available

			// Remove all spaces from the eventName to normalize it.
			const normalizedEventName = eventName.replace(/\s/g, "");

			// Check if current document id matches the normalized event name.
			if (document.id !== normalizedEventName) {
				console.log(
					`Updating document ${document.id} to new id: ${normalizedEventName}`
				);

				// Create a new document with the normalized id and copy the data.
				const newDocRef = doc(db, "Samhita25", normalizedEventName);
				await setDoc(newDocRef, data);

				// Optionally, delete the old document.
				await deleteDoc(doc(db, "Samhita25", document.id));
			}
		}
		console.log("Finished updating document IDs.");
	} catch (error) {
		console.error("Error updating document IDs:", error);
	}
}

updateDocIds();
