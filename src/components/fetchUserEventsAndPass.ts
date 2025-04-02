// src/utils/fetchUserEventsAndPass.ts
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase";

export async function fetchUserEventsAndPass(): Promise<string[]> {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    console.error("No authenticated user found.");
    return [];
  }

  const uidMappingRef = doc(db, "uid_mapping", user.uid);
  const uidMappingSnap = await getDoc(uidMappingRef);
  if (!uidMappingSnap.exists()) {
    console.error("UID mapping not found.");
    return [];
  }

  const { docId } = uidMappingSnap.data() as { docId: string };

  const userDocRef = doc(db, "users", docId);
  const userDocSnap = await getDoc(userDocRef);
  if (!userDocSnap.exists()) {
    console.error("User document not found.");
    return [];
  }

  const userData = userDocSnap.data() as {
    eventsSelected?: string[];
    pass?: string | string[];
  };

  const eventsSelected: string[] = userData.eventsSelected || [];
  let passList: string[] = [];
  if (Array.isArray(userData.pass)) {
    passList = userData.pass;
  } else if (userData.pass && userData.pass.toLowerCase() !== "none") {
    passList = [userData.pass];
  }

  return [...eventsSelected, ...passList];
}
