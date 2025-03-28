import React, { useState } from "react";
import TiltedCard from "./components/EventCard";
import EventMenu from "./components/EventMenu";
import { motion } from "framer-motion";
import "./Page2.css";

// Example event data
const events = [
	{
		title: "Tournament of Strategies",
		type: "Technical",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "AI Innovations",
		type: "Technical",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Creative Writing Workshop",
		type: "Non-Technical",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Cybersecurity Basics",
		type: "Workshops",
		tag: "OG",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Tech Quiz",
		type: "Technical",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Startup Pitching",
		type: "Non-Technical",
		tag: "OG",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Robotics Hackathon",
		type: "Technical",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
	{
		title: "Business Model Canvas",
		type: "Workshops",
		tag: "NEW",
		imageSrc:
			"https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
	},
];

const eventTypes = ["All", "Technical", "Non-Technical", "Workshops"];

const Page2: React.FC = () => {
	const [selectedType, setSelectedType] = useState<string>("All");

	// Filter events based on selected type
	const filteredEvents =
		selectedType === "All"
			? events
			: events.filter((event) => event.type === selectedType);

	return (
		<div
			style={{
				width: "100vw",
				minHeight: "100vh",
				background: "#0D0D0D",
				color: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<EventMenu
				items={eventTypes.map((type) => ({ label: type, href: "#" }))}
				onSelect={(label) => setSelectedType(label)}
			/>

			<motion.div
				className="event-grid"
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{filteredEvents.map((event, index) => (
					<motion.div
						key={event.title}
						layout
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, delay: index * 0.1 }}
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
							eventTag={event.tag}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Page2;
