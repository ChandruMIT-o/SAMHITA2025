// RegistrationContext.tsx
import { createContext, useState, ReactNode } from "react";

export interface RegistrationState {
	selectedPass: string | null;
	selectedIndividualEventTitles: string[];
	selectedWorkshops: string[]; // New field for workshops
	updatePass: (pass: string | null) => void;
	updateIndividualEvents: (titles: string[]) => void;
	updateWorkshops: (titles: string[]) => void; // New function for updating workshops
}

export const RegistrationContext = createContext<RegistrationState>({
	selectedPass: null,
	selectedIndividualEventTitles: [],
	selectedWorkshops: [], // Add missing field
	updatePass: () => {},
	updateIndividualEvents: () => {},
	updateWorkshops: () => {}, // Add missing function
});

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
	const [selectedPass, setSelectedPass] = useState<string | null>(null);
	const [selectedIndividualEventTitles, setSelectedIndividualEventTitles] =
		useState<string[]>([]);
	const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]); // New state

	const updatePass = (pass: string | null) => setSelectedPass(pass);
	const updateIndividualEvents = (titles: string[]) =>
		setSelectedIndividualEventTitles(titles);
	const updateWorkshops = (titles: string[]) => setSelectedWorkshops(titles); // New updater

	return (
		<RegistrationContext.Provider
			value={{
				selectedPass,
				selectedIndividualEventTitles,
				selectedWorkshops, // Provide workshops to context
				updatePass,
				updateIndividualEvents,
				updateWorkshops, // Provide workshop updater to context
			}}
		>
			{children}
		</RegistrationContext.Provider>
	);
};
