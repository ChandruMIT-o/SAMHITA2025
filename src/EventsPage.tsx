import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventsPage.css";
import ShinyText from "./components/InstagramBtn";
import eventData from "./event_details";

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

	return (
		<div className="event-page-container">
			<div
				className="ep-back-btn"
				onClick={() => {
					navigate("/");
				}}
			>
				Back
			</div>
			<div className="ep-left-section">
				<div className="ep-event-type">
					<ShinyText text={event.eventType} />
				</div>
				<div className="ep-event-name">{event.eventName}</div>
				<div className="ep-event-details">
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
											<strong>{section}</strong>
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
				</div>
			</div>
			<div className="ep-right-section">
				<div className="ep-row1">
					<div className="ep-date-chips">{event.dateChips}</div>
				</div>
				{event.poster && (
					<img
						src={event.poster}
						className="ep-poster"
						alt="Event Poster"
					/>
				)}
			</div>
		</div>
	);
};

export default EventsPage;
