// App.tsx
import "./App.css";
import EventSection from "./EventSection";
import FAQSection from "./FAQSection";
import HomeSection from "./HomeSection";
import RegistrationSection from "./RegistrationSection";
import AboutSection from "./AboutSection";
import EventsPage from "./EventsPage";
import { Routes, Route } from "react-router-dom";
import { RegistrationProvider } from "./RegistrationContext";
import UserProfilePage from "./UserProfilePage";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<HomeSection />
						<AboutSection />
						<RegistrationProvider>
							<EventSection />
							<FAQSection />
							<RegistrationSection />
						</RegistrationProvider>
					</>
				}
			/>
			<Route path="/event/:event_name" element={<EventsPage />} />
			<Route path="/user" element={<UserProfilePage />} />
		</Routes>
	);
}

export default App;
