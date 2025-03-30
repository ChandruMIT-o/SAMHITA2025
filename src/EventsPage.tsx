import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventsPage.css";
import ShinyText from "./components/InstagramBtn";

const eventData: Record<string, any> = {
	"Coding Quest": {
		eventType: "Technical Event",
		eventName: "Code Quest",
		eventDescription:
			"Join Code Hunt – where coding, clues, and creativity collide! 🧩 Solve challenges, race against time, and outsmart your rivals – no skipping, no shortcuts! 🚀 Fastest team wins, so gear up for the ultimate brain-bending adventure!",
		roundsChips: [
			<div className="ep-duration-chip" key="hack1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Preliminary</div>
				<div className="ep-duration">1 hr 15 mins</div>
			</div>,
		],
		specifics: [
			"Each team should have 3 members.",
			"Only registered teams are allowed to participate.",
			"Solve three coding challenges, each unlocking a crucial clue.",
			"Gather all three clues, piece them together, and unveil the final answer.",
			"Think fast, code smart, and crack the ultimate mystery!",
		],
		prizeChips: [
			<div className="ep-prize-chip" key="hackPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="hackPrize2">
				<img
					src="/assets/icons/trophy2.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount2">$3000</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="hackDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
			<div className="ep-date-chip" key="hackDate2">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/CODING QUEST.png",
	},
	"Ninja Coding": {
		eventType: "Technical Event",
		eventName: "Ninja Coding",
		eventDescription:
			"Sharpen your coding skills and compete in Ninja Coding at SAMHITA’25! This ITA event challenges participants with aptitude, problem-solving, and competitive programming rounds to determine the ultimate coding champions.",
		roundsChips: [
			<div className="ep-duration-chip" key="hack1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Preliminary</div>
				<div className="ep-duration">Rolling event (30 mins)</div>
			</div>,
			<div className="ep-duration-chip" key="hack1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Finals</div>
				<div className="ep-duration">120 mins</div>
			</div>,
		],
		specifics: [
			"On-spot registration is available.",
			"Up to 2 members per team.",
			"The prelims round will have objective-type questions.",
			"The finals will consist of competitive coding questions.",
		],
		prizeChips: [
			<div className="ep-prize-chip" key="hackPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="hackPrize2">
				<img
					src="/assets/icons/trophy2.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount2">$3000</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="hackDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
			<div className="ep-date-chip" key="hackDate2">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/NINJA CODING.png",
	},
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

	return (
		<div className="event-page-container">
			<div
				className="ep-back-btn"
				onClick={() => {
					sessionStorage.setItem(
						"scrollPosition",
						String(window.scrollY)
					); // Save scroll position
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
							{event.specifics.map(
								(item: string, index: number) => (
									<li key={index}>{item}</li>
								)
							)}
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
