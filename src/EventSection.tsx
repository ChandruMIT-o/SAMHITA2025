// EventSection.tsx
import React, { useContext, useEffect, useRef, useState } from "react";
import TiltedCard from "./components/EventCard";
import EventMenu from "./components/EventMenu";
import { motion } from "framer-motion";
import "./EventSection.css";
import ShinyText from "./components/InstagramBtn";
import PassCard from "./components/PassCard";
import { RegistrationContext } from "./RegistrationContext";
import { db } from "./firebase"; // Import Firestore instance
import { collection, getDocs } from "firebase/firestore";
import { Toast } from "primereact/toast"; // Import PrimeReact Toast

interface Event {
	title: string;
	type: string;
	tag: string; // Will store price instead of tag
	imageSrc: string;
}

const eventTypes = [
	"All",
	"Technical",
	"Non-Technical",
	"Signature Event",
	"Workshops",
	"Workshop Combos",
];

const EventSection: React.FC = () => {
	const {
		selectedPass,
		selectedIndividualEventTitles,
		updatePass,
		updateIndividualEvents,
	} = useContext(RegistrationContext);
	const [selectedType, setSelectedType] = useState<string>("All");
	const [events, setEvents] = useState<Event[]>([]);
	const [isSmallScreen, setIsSmallScreen] = useState(
		window.innerWidth <= 768
	);
	const toast = useRef<any>(null);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const querySnapshot = await getDocs(
					collection(db, "Samhita25")
				);
				const fetchedEvents: Event[] = querySnapshot.docs.map(
					(doc) => ({
						title: doc.data().eventName,
						type: doc.data().eventType,
						tag: `₹${doc.data().price}`, // Store price as tag
						imageSrc: `/assets/event_posters/${doc
							.data()
							.eventName.toUpperCase()
							.replace(/:/g, "")}.png`,
					})
				);

				// Define the sorting order
				const typeOrder = [
					"Signature Events",
					"Technical",
					"Non-Technical",
					"Workshops",
					"Workshop Combos",
				];

				// Sort the events based on typeOrder
				const sortedEvents = fetchedEvents.sort((a, b) => {
					return (
						typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type)
					);
				});

				setEvents(sortedEvents);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEvents();
	}, []);

	const handlePassToggle = (passType: string) => {
		// Toggle the pass
		if (selectedPass === passType) {
			updatePass(null);
			toast.current?.show({
				severity: "warn",
				summary: "Pass removed",
				detail: "Check registration",
				life: 3000,
			});
		} else {
			updatePass(passType);
			toast.current?.show({
				severity: "info",
				summary: "Pass applied",
				detail: "Check registration",
				life: 3000,
			});
		}
	};

	const handleEventToggle = (eventTitle: string) => {
		if (selectedIndividualEventTitles.includes(eventTitle)) {
			updateIndividualEvents(
				selectedIndividualEventTitles.filter((t) => t !== eventTitle)
			);
			toast.current?.show({
				severity: "warn",
				summary: "Event removed",
				detail: "Removed from registration input",
				life: 3000,
			});
		} else {
			updateIndividualEvents([
				...selectedIndividualEventTitles,
				eventTitle,
			]);
			toast.current?.show({
				severity: "success",
				summary: "Event added",
				detail: "Added to registration input",
				life: 3000,
			});
		}
	};

	const isEventForced = (event: Event) => {
		if (selectedPass === "TECH" && event.type === "Technical") return true;
		if (
			selectedPass === "GLOBAL" &&
			(event.type === "Technical" || event.type === "Non-Technical")
		)
			return true;
		if (selectedPass === "NON-TECH" && event.type === "Non-Technical")
			return true;
		return false;
	};

	const getEventSelection = (event: Event): boolean => {
		if (isEventForced(event)) return true;
		return selectedIndividualEventTitles.includes(event.title);
	};

	const filteredEvents =
		selectedType === "All"
			? events
			: events.filter((event) => event.type === selectedType);

	return (
		<div className="event-container" id="events">
			<Toast ref={toast} />
			<motion.div className="e-section-headings">
				<ShinyText text="✦ Events" speed={3} />
				<div className="e-heading">
					Come and show us what you have got!
				</div>
			</motion.div>
			<ShinyText text="Passes & Combo tickets" />
			<div className="passcards-holder">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						delay: 0.1,
					}}
					className="tpass"
				>
					<PassCard
						imageSrc="assets/event_passes/TECH PASS.png"
						eventTitle="TECH"
						eventType="Pass"
						eventTag="Rs. 289"
						overlayContent={<div style={{ color: "white" }} />}
						isSelected={selectedPass === "TECH"}
						onToggle={() => handlePassToggle("TECH")}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						delay: 0,
					}}
					className="gpass"
				>
					<PassCard
						imageSrc="assets/event_passes/GLOBAL PASS.png"
						eventTitle="GLOBAL"
						eventType="Pass"
						eventTag="Rs.349"
						overlayContent={<div style={{ color: "white" }} />}
						containerHeight={isSmallScreen ? "400px" : "480px"}
						containerWidth={isSmallScreen ? "283px" : "339px"}
						imageHeight={isSmallScreen ? "400px" : "480px"}
						imageWidth={isSmallScreen ? "283px" : "339px"}
						isSelected={selectedPass === "GLOBAL"}
						onToggle={() => handlePassToggle("GLOBAL")}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						delay: 0.2,
					}}
					className="npass"
				>
					<PassCard
						imageSrc="assets/event_passes/NONTECH PASS.png"
						eventTitle="NON-TECH"
						eventType="Pass"
						eventTag="Rs. 189"
						overlayContent={<div style={{ color: "white" }} />}
						isSelected={selectedPass === "NON-TECH"}
						onToggle={() => handlePassToggle("NON-TECH")}
					/>
				</motion.div>
			</div>

			<div className="gooey-menu">
				<EventMenu
					items={eventTypes.map((type) => ({
						label: type,
						href: "#",
					}))}
					onSelect={(label) => setSelectedType(label)}
				/>
			</div>

			<motion.div
				className="event-grid"
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{filteredEvents.map((event, _) => {
					const forced = isEventForced(event);
					const selected = getEventSelection(event);
					const displayTag =
						forced && selectedPass
							? `${selectedPass} Pass Applied!`
							: event.tag;
					return (
						<motion.div
							key={event.title}
							layout
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{
								layout: { duration: 0.5, ease: "easeInOut" },
								y: { duration: 0.7, ease: "easeInOut" },
							}}
							className="inside-event-grid"
						>
							<TiltedCard
								imageSrc={event.imageSrc}
								overlayContent={
									<p className="tilted-card-demo-text">
										{event.title}
									</p>
								}
								eventTitle={event.title}
								eventType={event.type}
								eventTag={displayTag}
								isSelected={selected}
								disableToggle={forced}
								onToggle={() => handleEventToggle(event.title)}
								displayOverlayContent={
									event.type !== "Workshop Combos"
								}
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default EventSection;
