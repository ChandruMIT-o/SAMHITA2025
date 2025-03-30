// EventSection.tsx
import React, { useContext } from "react";
import TiltedCard from "./components/EventCard";
import EventMenu from "./components/EventMenu";
import { motion } from "framer-motion";
import "./EventSection.css";
import ShinyText from "./components/InstagramBtn";
import PassCard from "./components/PassCard";
import { RegistrationContext } from "./RegistrationContext";

// Example event data
const events = [
	{
		title: "Coding Quest",
		type: "Technical",
		tag: "POPULAR",
		imageSrc: "src/assets/event_posters/CODING QUEST.png",
	},
	{
		title: "Street Coding",
		type: "Technical",
		tag: "NEW",
		imageSrc: "src/assets/event_posters/STREET CODING.png",
	},
	{
		title: "Ninja Coding",
		type: "Technical",
		tag: "POPULAR",
		imageSrc: "src/assets/event_posters/NINJA CODING.png",
	},
	{
		title: "AI Impromptu",
		type: "Technical",
		tag: "AI",
		imageSrc: "src/assets/event_posters/AI IMPROMPTU.png",
	},
	{
		title: "Call of Query",
		type: "Technical",
		tag: "DATABASE",
		imageSrc: "src/assets/event_posters/CALL OF QUERY.png",
	},
	{
		title: "Tournament of Strategies",
		type: "Technical",
		tag: "NEW",
		imageSrc: "src/assets/event_posters/TOS.png",
	},
	{
		title: "Reverse Coding",
		type: "Technical",
		tag: "CHALLENGE",
		imageSrc: "src/assets/event_posters/REVERSE CODING.png",
	},
	{
		title: "Squid Games",
		type: "Technical",
		tag: "FUN",
		imageSrc: "src/assets/event_posters/SQUID GAME.png",
	},
	{
		title: "Treasure Hunt",
		type: "Non-Technical",
		tag: "ADVENTURE",
		imageSrc: "src/assets/event_posters/TREASURE HUNT.png",
	},
	{
		title: "IPL Auction",
		type: "Non-Technical",
		tag: "STRATEGY",
		imageSrc: "src/assets/event_posters/IPL AUCTION.png",
	},
	{
		title: "Fandom Quiz",
		type: "Non-Technical",
		tag: "QUIZ",
		imageSrc: "src/assets/event_posters/FANDOM QUIZ.png",
	},
	{
		title: "Connections",
		type: "Non-Technical",
		tag: "LOGIC",
		imageSrc: "src/assets/event_posters/CONNECTIONS.png",
	},
	{
		title: "ADZAP",
		type: "Non-Technical",
		tag: "CREATIVE",
		imageSrc: "src/assets/event_posters/ADZAP.png",
	},
	{
		title: "Escape Room",
		type: "Non-Technical",
		tag: "PUZZLE",
		imageSrc: "src/assets/event_posters/ESCAPE ROOM.png",
	},
	{
		title: "Hackathon",
		type: "Signature Event",
		tag: "BIG EVENT",
		imageSrc: "src/assets/event_posters/HACKATHON.png",
	},
	{
		title: "Paper Presentation",
		type: "Signature Event",
		tag: "ACADEMIC",
		imageSrc: "src/assets/event_posters/PAPER PRESENTATION.png",
	},
];

const eventTypes = [
	"All",
	"Technical",
	"Non-Technical",
	"Signature Event",
	"Workshops",
];

const EventSection: React.FC = () => {
	const {
		selectedPass,
		selectedIndividualEventTitles,
		updatePass,
		updateIndividualEvents,
	} = useContext(RegistrationContext);
	const [selectedType, setSelectedType] = React.useState<string>("All");

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
		<div
			style={{
				width: "100%",
				background: "#0D0D0D",
				color: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "3%",
				gap: "50px",
			}}
		>
			<motion.div className="r-section-headings">
				<ShinyText text="✦ Registration" />
				<div className="e-heading">
					Come and show us what you have got!
				</div>
			</motion.div>
			<ShinyText text="Passes & Combo tickets" />
			<div className="passcards-holder">
				<PassCard
					imageSrc="src/assets/event_passes/TECH PASS.png"
					eventTitle="TECH"
					eventType="Pass"
					eventTag="Rs. 249"
					overlayContent={<div style={{ color: "white" }} />}
					isSelected={selectedPass === "TECH"}
					onToggle={() => handlePassToggle("TECH")}
				/>
				<PassCard
					imageSrc="src/assets/event_passes/GLOBAL PASS.png"
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
				<PassCard
					imageSrc="src/assets/event_passes/NONTECH PASS.png"
					eventTitle="NON-TECH"
					eventType="Pass"
					eventTag="Rs. 249"
					overlayContent={<div style={{ color: "white" }} />}
					isSelected={selectedPass === "NON-TECH"}
					onToggle={() => handlePassToggle("NON-TECH")}
				/>
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
								opacity: { duration: 0.5, delay: index * 0.3 },
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
