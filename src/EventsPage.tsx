import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./EventsPage.css";
import ShinyText from "./components/InstagramBtn";
import eventData from "./event_details";

const pageVariants = {
	initial: { opacity: 0, y: 50 },
	in: { opacity: 1, y: 0 },
	out: { opacity: 0, y: -50 },
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.8,
};

const EventsPage: React.FC = () => {
	const { event_name } = useParams<{ event_name: string }>();
	const navigate = useNavigate();

	// Look up the event data or provide fallback content
	const event = eventData[event_name || ""] || {
		eventType: "Unknown Event",
		eventName: "Event Not Found",
		eventDescription: "No details available for this event.",
		roundsChips: [],
		specifics: [],
		prizeChips: [],
		dateChips: [],
		poster: "",
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			className="event-page-container"
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<motion.div
				className="ep-back-btn"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => navigate("/")}
			>
				Back
			</motion.div>
			<motion.div
				className="ep-left-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
			>
				<div className="ep-event-type">
					<ShinyText text={event.eventType} />
				</div>
				<motion.div
					className="ep-event-name"
					initial={{ x: -50 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					{event.eventName}
				</motion.div>
				<motion.div
					className="ep-event-details"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
				>
					<div className="ep-event-description">
						{event.eventDescription}
					</div>
					<div className="ep-duration-chips">{event.roundsChips}</div>
					<div className="ep-specifics">
						<ul>
							{Array.isArray(event.specifics)
								? event.specifics.map(
										(item: string, index: number) => (
											<li key={index}>{item}</li>
										)
								  )
								: Object.entries(
										event.specifics as Record<
											string,
											string[]
										>
								  ).map(([section, points], index) => (
										<li key={index}>
											<div className="ep-section-heading">
												{section}
											</div>
											<ul>
												{points.map(
													(point, subIndex) => (
														<li key={subIndex}>
															{point}
														</li>
													)
												)}
											</ul>
										</li>
								  ))}
						</ul>
					</div>
					<div className="ep-prize-chips">{event.prizeChips}</div>
				</motion.div>
			</motion.div>
			<motion.div
				className="ep-right-section"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
			>
				<motion.div
					className="ep-row1"
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					transition={{ delay: 0.6, duration: 0.5 }}
				>
					<div className="ep-date-chips">{event.dateChips}</div>
				</motion.div>
				{event.poster && (
					<motion.img
						src={event.poster}
						className="ep-poster"
						alt="Event Poster"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.5 }}
					/>
				)}
			</motion.div>
		</motion.div>
	);
};

export default EventsPage;
