// RegistrationContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export interface RegistrationState {
	selectedPass: string | null;
	selectedIndividualEventTitles: string[];
	updatePass: (pass: string | null) => void;
	updateIndividualEvents: (titles: string[]) => void;
}

export const RegistrationContext = createContext<RegistrationState>({
	selectedPass: null,
	selectedIndividualEventTitles: [],
	updatePass: () => {},
	updateIndividualEvents: () => {},
});

export const RegistrationProvider = ({ children }: { children: ReactNode }) => {
	const [selectedPass, setSelectedPass] = useState<string | null>(null);
	const [selectedIndividualEventTitles, setSelectedIndividualEventTitles] =
		useState<string[]>([]);

	const updatePass = (pass: string | null) => setSelectedPass(pass);
	const updateIndividualEvents = (titles: string[]) =>
		setSelectedIndividualEventTitles(titles);

	return (
		<RegistrationContext.Provider
			value={{
				selectedPass,
				selectedIndividualEventTitles,
				updatePass,
				updateIndividualEvents,
			}}
		>
			{children}
		</RegistrationContext.Provider>
	);
};
