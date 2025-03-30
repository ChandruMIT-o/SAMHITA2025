import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EventsPage.css";
import ShinyText from "./components/InstagramBtn";

const eventData: Record<string, any> = {
	"Coding Quest": {
		eventType: "Technical Event",
		eventName: "Hackathon Showdown",
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
		poster: "/assets/event_posters/HACKATHON.png",
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
	"Treasure Hunt": {
		eventType: "Non-Technical Event",
		eventName: "Treasure Hunt",
		eventDescription:
			"Crack the Clues. Claim the Prize. A thrilling race of wit and strategy at SAMHITA’25! Solve puzzles, follow the trail, and uncover hidden treasures. Will you be the one to find it first?",
		roundsChips: [
			<div className="ep-duration-chip" key="hunt1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Slot Duration</div>
				<div className="ep-duration">1.5 hrs</div>
			</div>,
		],
		specifics: {
			"Team Formation": [
				"Each team must consist of 3 to 4 members.",
				"Mixed teams from different institutions are allowed.",
				"Solo participation is not allowed.",
			],
			"General Rules": [
				"The hunt consists of multiple clues leading to different locations within the college premises.",
				"Teams must solve each clue correctly to proceed to the next stage.",
				"Mobile phones are allowed as some clues require scanning QR codes or online searches.",
				"Teams must not tamper with or move clues meant for other participants.",
			],
			"Time Limit & Winner Selection": [
				"The event will be conducted in multiple slots of 1.5 hours each.",
				"The team that completes the hunt in the shortest time overall will be declared the winner.",
			],
			"Disqualification Criteria": [
				"Any form of cheating, rule violation, or misbehavior will lead to immediate disqualification.",
				"Damaging college property or disrupting other teams is not allowed.",
			],
			"Judging & Decision": [
				"The decision of the organizers and event coordinators is final and binding.",
				"Any disputes must be addressed immediately to the event coordinators.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="huntPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Exciting Prizes</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="huntDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		poster: "/assets/event_posters/TREASURE_HUNT.png",
	},
	"IPL Auction": {
		eventType: "Non-Technical Event",
		eventName: "IPL Auction",
		eventDescription:
			"Become the owner of your own IPL team! Bid for players, build a squad of 11, and form the most strategic and balanced team under a limited budget. Test your cricket knowledge and auction tactics!",
		roundsChips: [
			<div className="ep-duration-chip" key="ipl1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Prelims</div>
				<div className="ep-duration">30 mins</div>
			</div>,
			<div className="ep-duration-chip" key="ipl2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Quiz Round</div>
				<div className="ep-duration">1 hour</div>
			</div>,
			<div className="ep-duration-chip" key="ipl3">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Auction</div>
				<div className="ep-duration">2 hours</div>
			</div>,
		],
		specifics: {
			"Team Formation": ["Teams of 3–4 members"],
			Rules: [
				"Virtual budget: ₹100 crores",
				"Form a team of exactly 11 players (Min: 4 Batsmen, 3 Bowlers, 1 All-rounder, 1 Wicketkeeper)",
				"Auction-based player selection",
				"Judged on team balance, smart picks & budget strategy",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="iplPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Exciting Prizes</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="iplDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/IPL_AUCTION.png",
	},
	"Fandom Quiz": {
		eventType: "Non-Technical Event",
		eventName: "Fandom Quiz",
		eventDescription:
			"Test your fandom knowledge across movies, anime, TV shows, and more at SAMHITHA’25! An ITA event where only true fans will triumph.",
		roundsChips: [
			<div className="ep-duration-chip" key="fandom1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Prelims</div>
				<div className="ep-duration">Rolling Event (20 mins)</div>
			</div>,
			<div className="ep-duration-chip" key="fandom2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Finals</div>
				<div className="ep-duration">60 mins</div>
			</div>,
		],
		specifics: {
			"Team Formation": ["Up to 3 members per team"],
			Rules: [
				"Only registered teams are allowed to participate.",
				"The prelims game will be disclosed on the spot.",
				"Finals will consist of three quiz segments.",
				"Points and buzzers will be managed by the Quizmasters.",
				"The Quizmaster's decision will be final.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="fandomPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Exciting Prizes</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="fandomDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 14</div>
			</div>,
		],
		poster: "/assets/event_posters/FANDOM_QUIZ.png",
	},
	Connections: {
		eventType: "Non-Technical Event",
		eventName: "Connections",
		eventDescription:
			"Link the Unseen, Think the Unthinkable! Dive into the ultimate puzzle challenge at SAMHITHA’25! An ITA event where sharp minds make the right connections.",
		roundsChips: [
			<div className="ep-duration-chip" key="conn1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Prelims</div>
				<div className="ep-duration">30 mins (Rolling Event)</div>
			</div>,
			<div className="ep-duration-chip" key="conn2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Finals</div>
				<div className="ep-duration">1 hr</div>
			</div>,
		],
		specifics: {
			"Team Formation": [
				"Each team can have a minimum of 2 to maximum of 3 members",
			],
			Rules: [
				"Only registered teams are allowed to participate",
				"The competition consists of 2 rounds: Prelims and Finals",
				"Each round presents a set of images with a hidden connection.",
				"Teams must identify the common link and submit their answer within the given time limit.",
				"Finals: Consists of 5 segments including Tie Breaker. Host Decision is Final.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="connPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Exciting Prizes</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="connDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 15</div>
			</div>,
		],
		poster: "/assets/event_posters/CONNECTIONS.png",
	},
	"Escape Room x TBO": {
		eventType: "Non-Technical Event",
		eventName: "Escape Room x TBO",
		eventDescription:
			"A time thief is traveling through different eras and stealing important relics! As time cops, you must find the relics and return them to their designated place, and capture the time thief before he disrupts the timeline!",
		roundsChips: [
			<div className="ep-duration-chip" key="escape1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Slot Duration</div>
				<div className="ep-duration">30 mins (Rolling Event)</div>
			</div>,
		],
		specifics: {
			"Team Formation": [
				"Each group must have a minimum of 3 members and a maximum of 5 members.",
			],
			Rules: [
				"The entry fee for the Escape Room is Rs.50 per group.",
				"Bags should be left outside the Escape Room.",
				"Strictly no phones are allowed inside the Escape Room.",
				"There are 4 eras in total with a time limit of 7 minutes for each.",
				"Failure to complete the quest in time will result in one member getting trapped in that era while the others move on to the next. The remaining member must complete the quest in that era so that they can join the others.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="escapePrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Exciting Prizes</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="escapeDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 14</div>
			</div>,
		],
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
