// EventSection.tsx
import React, { useContext, useEffect, useState } from "react";
import TiltedCard from "./components/EventCard";
import EventMenu from "./components/EventMenu";
import { motion } from "framer-motion";
import "./EventSection.css";
import ShinyText from "./components/InstagramBtn";
import PassCard from "./components/PassCard";
import { RegistrationContext } from "./RegistrationContext";
import { db } from "./firebase"; // Import Firestore instance
import { collection, getDocs } from "firebase/firestore";

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
	"Combo-Workshops",
];

const EventSection: React.FC = () => {
	const {
		selectedPass,
		selectedIndividualEventTitles,
		updatePass,
		updateIndividualEvents,
	} = useContext(RegistrationContext);
	const [selectedType, setSelectedType] = React.useState<string>("All");
	const [events, setEvents] = useState<Event[]>([]);

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
							.eventName.toUpperCase()}.png`, // Convert to uppercase
					})
				);

				// Define the sorting order
				const typeOrder = [
					"Signature Events",
					"Technical",
					"Non-Technical",
					"Workshops",
					"Combo-Workshops",
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

	console.log(events);

	const handlePassToggle = (passType: string) => {
		updatePass(selectedPass === passType ? null : passType);
	};

	const handleEventToggle = (eventTitle: string) => {
		if (selectedIndividualEventTitles.includes(eventTitle)) {
			updateIndividualEvents(
				selectedIndividualEventTitles.filter((t) => t !== eventTitle)
			);
		} else {
			updateIndividualEvents([
				...selectedIndividualEventTitles,
				eventTitle,
			]);
		}
	};

	const isEventForced = (event: (typeof events)[number]) => {
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

	const getEventSelection = (event: (typeof events)[number]): boolean => {
		if (isEventForced(event)) return true;
		return selectedIndividualEventTitles.includes(event.title);
	};

	const filteredEvents =
		selectedType === "All"
			? events
			: events.filter((event) => event.type === selectedType);

	return (
		<div className="event-container" id="events">
			<motion.div className="r-section-headings">
				<ShinyText text="✦ Events" />
				<div className="e-heading">
					Come and show us what you have got!
				</div>
			</motion.div>
			<ShinyText text="Passes & Combo tickets" />
			<div className="passcards-holder">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.2,
						ease: "easeInOut",
						delay: 0.5,
					}}
					className="tpass"
				>
					<PassCard
						imageSrc="assets/event_passes/TECH PASS.png"
						eventTitle="TECH"
						eventType="Pass"
						eventTag="Rs. 249"
						overlayContent={<div style={{ color: "white" }} />}
						isSelected={selectedPass === "TECH"}
						onToggle={() => handlePassToggle("TECH")}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.2,
						ease: "easeInOut",
						delay: 0.3,
					}}
					className="gpass"
				>
					<PassCard
						imageSrc="assets/event_passes/GLOBAL PASS.png"
						eventTitle="GLOBAL"
						eventType="Pass"
						eventTag="Rs.500"
						overlayContent={<div style={{ color: "white" }} />}
						containerHeight="480px"
						containerWidth="339px"
						imageHeight="480px"
						imageWidth="339px"
						isSelected={selectedPass === "GLOBAL"}
						onToggle={() => handlePassToggle("GLOBAL")}
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.2,
						ease: "easeInOut",
						delay: 0.5,
					}}
					className="npass"
				>
					<PassCard
						imageSrc="assets/event_passes/NONTECH PASS.png"
						eventTitle="NON-TECH"
						eventType="Pass"
						eventTag="Rs. 249"
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
				{filteredEvents.map((event, index) => {
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
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{
								opacity: { duration: 0.5, delay: index * 0.1 },
								layout: { duration: 1.2, ease: "easeInOut" },
							}}
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
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default EventSection;
