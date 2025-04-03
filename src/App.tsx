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
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import PrivacyPolicy from "./PrivacyPolicy";
import CancellationPolicy from "./CancellationPolicy";
import { useScroll, motion } from "framer-motion";

function App() {
	const { scrollYProgress } = useScroll();
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<motion.div
							id="scroll-indicator"
							style={{
								scaleX: scrollYProgress,
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								height: 5,
								originX: 0,
								background:
									"linear-gradient(to right, #8D00CE, #FF277E)" /* Purple to Magenta to Purple */,
								backgroundSize:
									"200% 100%" /* Initial size for animation */,
								animation:
									"gradientAnimation 2s infinite alternate" /* Apply animation */,
							}}
						/>
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
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/passswordreset" element={<ForgotPassword />} />
			<Route path="/policy" element={<PrivacyPolicy />} />
			<Route
				path="/cancellation_policy"
				element={<CancellationPolicy />}
			/>
		</Routes>
	);
}

export default App;
