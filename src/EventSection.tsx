import React, { useState } from "react";
import TiltedCard from "./components/EventCard";
import EventMenu from "./components/EventMenu";
import { motion } from "framer-motion";
import "./EventSection.css";
import ShinyText from "./components/InstagramBtn";
import PassCard from "./components/PassCard";

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
	const [selectedType, setSelectedType] = useState<string>("All");

	// Filter events based on selected type
	const filteredEvents =
		selectedType === "All"
			? events
			: events.filter((event) => event.type === selectedType);

	return (
		<div
			style={{
				width: "95vw",
				height: "800vh",
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
				<ShinyText text="✦ Registration"></ShinyText>

				<div className="e-heading">
					Come and show us what you have got!
				</div>
			</motion.div>
			<ShinyText text="Passes & Combo tickets"></ShinyText>
			<div className="passcards-holder">
				<PassCard
					imageSrc="src/assets/event_passes/TECH PASS.png"
					eventTitle="TECH"
					eventType="Pass"
					eventTag="Rs. 249"
					overlayContent={<div style={{ color: "white" }}></div>}
				/>
				<PassCard
					imageSrc="src/assets/event_passes/GLOBAL PASS.png"
					eventTitle="GLOBAL"
					eventType="Pass"
					eventTag="Rs.500"
					overlayContent={<div style={{ color: "white" }}></div>}
					containerHeight="480px"
					containerWidth="339px"
					imageHeight="480px"
					imageWidth="339px"
				/>
				<PassCard
					imageSrc="src/assets/event_passes/NONTECH PASS.png"
					eventTitle="NON-TECH"
					eventType="Pass"
					eventTag="Rs. 249"
					overlayContent={<div style={{ color: "white" }}></div>}
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
				{filteredEvents.map((event, index) => (
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
							eventTag={event.tag}
						/>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default EventSection;
