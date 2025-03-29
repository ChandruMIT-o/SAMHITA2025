import React from "react";
import "./EventsPage.css";
import ShinyText from "./components/InstagramBtn";

const EventsPage: React.FC = () => {
	return (
		<div className="event-page-container">
			<div className="ep-back-btn">Back</div>
			<div className="ep-left-section">
				<div className="ep-event-type">
					<ShinyText text="Technical Event"></ShinyText>
				</div>
				<div className="ep-event-name">Tournament of Strategies</div>
				<div className="ep-event-details">
					<div className="ep-event-description">
						A competitive AI tournament where participants submit
						strategic models to compete in a simulated environment.
						The strategies will be tested in various game-theoretic
						scenarios, including iterated dilemmas, negotiation
						challenges, and adaptive learning environments.
					</div>
					<div className="ep-duration-chips">
						<div className="ep-duration-chip">
							<img
								src="src/assets/icons/duration.svg"
								className="ep-logo2"
							></img>
							<div className="ep-round-text">Round 1</div>
							<div className="ep-duration">45 Minutes</div>
						</div>
						<div className="ep-duration-chip">
							<img
								src="src/assets/icons/duration.svg"
								className="ep-logo2"
							></img>
							<div className="ep-round-text">Round 2</div>
							<div className="ep-duration">45 Minutes</div>
						</div>
					</div>

					<div className="ep-specifics">
						<ul>
							<li>
								Participants must submit their AI strategies
								before the deadline.
							</li>
							<li>
								The tournament consists of multiple rounds,
								where strategies will compete head-to-head.
							</li>
							<li>
								The competition includes categories such as
								reinforcement learning, evolutionary algorithms,
								and classic rule-based strategies.
							</li>
							<li>
								Live leaderboards will track performance
								throughout the event.
							</li>
							<li>
								The final showdown will feature the top 8
								strategies in a knockout format.
							</li>
						</ul>
					</div>
					<div className="ep-prize-chips">
						<div className="ep-prize-chip">
							<img
								src="src/assets/icons/trophy.svg"
								className="ep-logo1"
							/>
							<div className="ep-price-amount">1000 K</div>
						</div>
						<div className="ep-prize-chip">
							<img
								src="src/assets/icons/trophy2.svg"
								className="ep-logo1"
							></img>
							<div className="ep-price-amount2">1000 K</div>
						</div>
					</div>
				</div>
			</div>
			<div className="ep-right-section">
				<div className="ep-row1">
					<div className="ep-date-chips">
						<div className="ep-date-chip">
							<img
								src="src/assets/icons/date.svg"
								className="ep-logo3"
							></img>
							<div className="ep-date">April 12</div>
						</div>
						<div className="ep-date-chip">
							<img
								src="src/assets/icons/date.svg"
								className="ep-logo3"
							></img>
							<div className="ep-date">April 13</div>
						</div>
					</div>
					<div className="ep-enroll-btn">Enroll</div>
				</div>
				<img
					src="src/assets/event_posters/TOS.png"
					className="ep-poster"
				></img>
			</div>
		</div>
	);
};

export default EventsPage;
