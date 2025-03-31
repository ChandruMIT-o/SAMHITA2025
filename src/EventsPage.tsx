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
				<div className="ep-price-amount2">$3500</div>
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
				<div className="ep-price-amount2">$3500</div>
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
	"Squid Games (Geeks’ Version)": {
		eventType: "Technical Event",
		eventName: "Squid Games (Geeks’ Version)",
		eventDescription:
			"If you thought 'Bruh, that's easy' while watching Squid Game, this is for you. Code, compete, celebrate and DECEIVE. Come and test your luck (or should we say survival skills?!) with our SG.\n\nPS: You're also testing your technical knowledge.",
		roundsChips: [
			<div className="ep-duration-chip" key="squid1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Event Duration</div>
				<div className="ep-duration">As long as you survive 😈</div>
			</div>,
		],
		specifics: {
			"Rules of the Event": [
				"This is a single-player event.",
				"There will be 5 rounds with each round ranging from 30 minutes to 1 hour.",
				"Some rounds will require collaboration with other participants.",
				"The first round will take place on Saturday, the 12th, while the remaining rounds will be held on Sunday, the 13th.",
				"Further instructions will be provided during the event. Any violation will result in disqualification.",
				"The survivor(s) will get a cash prize of INR ????",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="squidPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="squidPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="squidDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12 - 13</div>
			</div>,
		],
		poster: "/assets/event_posters/SQUID_GAMES.png",
	},
	"Call of Query": {
		eventType: "Technical Event",
		eventName: "Call of Query",
		eventDescription:
			"Think fast, query smart! Test your SQL skills and logical reasoning in this thrilling database showdown! Unleash your skills at the riveting SAMHITA ‘25 and dominate the query battlefield!",
		roundsChips: [
			<div className="ep-duration-chip" key="query1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Prelims</div>
				<div className="ep-duration">Rolling event (30 mins)</div>
			</div>,
			<div className="ep-duration-chip" key="query2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Finals</div>
				<div className="ep-duration">45 mins</div>
			</div>,
		],
		specifics: {
			"Team Formation": ["Up to 2 members per team in the first round"],
			Rules: [
				"Only registered teams are allowed to participate.",
				"Final round - individual participation.",
				"The prelims round will have objective type questions.",
				"Finals will consist of more advanced and descriptive questions.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="queryPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="queryPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="queryDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/CALL_OF_QUERY.png",
	},
	ReverseCoding: {
		eventType: "TechnicalEvent",
		eventName: "Reverse Coding",
		eventDescription:
			"Unleash your inner codebreaker at 'Reverse Coding'! Decode, deconstruct, and debug as you tackle challenges in reverse. It's not just about solving problems; it’s about uncovering how they were made.",
		roundsChips: [
			<div className="ep-duration-chip" key="reverse1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Prelims</div>
				<div className="ep-duration">Rolling Event (35 mins)</div>
			</div>,
			<div className="ep-duration-chip" key="reverse2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Finals</div>
				<div className="ep-duration">45 mins</div>
			</div>,
		],
		specifics: {
			TeamFormation: ["Up to 2-3 members per team"],
			Rules: [
				"The prelims round: Sample Input & Output will be given, find the logic implied and write output for given input.",
				"Finals: 1 member of team will be given the task to find the logic (with interesting clues), the others have to decode.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="reversePrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="reversePrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="reverseDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		poster: "/assets/event_posters/REVERSE_CODING.png",
	},
	"Street Coding": {
		eventType: "Technical Event",
		eventName: "Street Coding",
		eventDescription:
			"Street Coding is pure chaos—high-pressure, unpredictable, and relentless. Can you decipher patterns, decode the unknown, and survive the madness? Step into the arena and prove your mettle! Chaos is calling, Will you be Falling?!",
		roundsChips: [
			<div className="ep-duration-chip" key="street1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Single Round</div>
				<div className="ep-duration">1 hr</div>
			</div>,
		],
		specifics: {
			"Team Formation": [
				"Individual participation or teams of up to 2 members",
			],
			Rules: [
				"No AI/Internet Usage: Strictly prohibited. We WILL know. Odavum Mudiyadhu, Oliyavum Mudiyadhu. Trust us. :)",
				"Survival of the Sharpest: Navigate through the Meen Market and emerge victorious!",
				"On-spot registrations are available.",
				"Cash Prizes, Refreshments, and Participation certificates will be provided.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="streetPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="streetPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="streetDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/STREET_CODING.png",
	},
	Hackathon: {
		eventType: "Technical Event",
		eventName: "Hackathon",
		eventDescription:
			"Gear up for the ultimate test of innovation at SAMHITA’25! An 8-hour coding marathon where brilliance meets endurance. Solve real-world challenges, push your limits, and prove you're the best in the game. Do you have what it takes to outthink, outcode, and outlast the competition? The clock is ticking—let the hacking begin!",
		roundsChips: [
			<div className="ep-duration-chip" key="hackathon1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">8 hours</div>
			</div>,
		],
		specifics: {
			"Team Formation": [
				"Each team must consist of 2 to 4 members",
				"Mixed teams from different institutions are allowed",
			],
			Rules: [
				"The hackathon will run for 8 hours from 9 AM to 5 PM.",
				"Teams must develop a working prototype within the given time and submit their project before the deadline.",
				"Teams can use any programming language, framework, or tools of their choice.",
				"Participants must bring their own laptops, chargers, and other necessary equipment.",
			],
			"Submission Guidelines": [
				"Teams must submit their project before the deadline.",
				"Submission should include:",
				"- A GitHub repository or ZIP file of the codebase.",
				"- A short presentation or demo video (if required).",
				"- A brief project description explaining the solution.",
			],
			"Judging & Decision": [
				"The decision of the judges and event coordinators is final and binding.",
				"Any disputes must be addressed immediately to the event coordinators.",
			],
			Breaks: [
				"Teams are free to move around and take breaks as needed.",
				"The countdown will not pause during breaks, so teams must manage their time wisely.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="hackathonPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="hackathonPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="hackathonDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		poster: "/assets/event_posters/HACKATHON.png",
	},
	"Paper Presentation": {
		eventType: "Technical Event",
		eventName: "Paper Presentation",
		eventDescription:
			"Showcase your research and innovative ideas in the field of IT and CT at SAMHITA’25! Present your findings in front of expert judges and gain valuable insights.",
		roundsChips: [
			<div className="ep-duration-chip" key="paperPresentation1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">Varies</div>
			</div>,
		],
		specifics: {
			Eligibility: [
				"Open to students from IT and CT departments.",
				"Papers can be either published or yet-to-be-published.",
			],
			Participation: [
				"Individual participation only.",
				"Each participant can present only one paper.",
			],
			"Paper & Presentation Format": [
				"The paper should be related to innovative and intriguing topics in IT/CT fields.",
				"Presentation must be in PPT format and submitted before the event.",
				"Maximum 15 slides (excluding title and references).",
				"Presentation time: 8 minutes + 2-minute Q&A session.",
			],
			"Event Rules": [
				"On-spot registrations are available.",
				"This is a non-rolling event (participants cannot re-enter after elimination).",
				"Tentative timing: 10:00 AM.",
				"Participants should bring their own laptops or USB drives if needed.",
				"Plagiarism will lead to disqualification.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="paperPresentationPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="paperPresentationPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="paperPresentationDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		poster: "/assets/event_posters/PAPER_PRESENTATION.png",
	},
	"AI Impromptu": {
		eventType: "Technical Event",
		eventName: "AI Impromptu",
		eventDescription:
			"Transform ideas into polished perfection, all while collaborating from a distance. It’s not just about what you create—it’s about how you refine, innovate, and bring visions to life. Ready to unlock your potential and showcase your brilliance?",
		roundsChips: [
			<div className="ep-duration-chip" key="aiImpromptu1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Round 1</div>
				<div className="ep-duration">30 mins</div>
			</div>,
			<div className="ep-duration-chip" key="aiImpromptu2">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Round 2</div>
				<div className="ep-duration">30 mins</div>
			</div>,
		],
		specifics: {
			"Team Composition": ["Each team must consist of two participants."],
			"Time Allocation": [
				"The total allotted time will be equally divided between both participants.",
				"Participant 1 will use the first half of the time to operate the system and generate the prompt, then must step away from the system.",
				"Participant 2 will use the second half of the time to take over and complete the task.",
			],
			"Evaluation Criteria": [
				"Teams will be shortlisted based on completion time and the similarity of the final output to the original prompt or reference image.",
			],
			"Task Details": [
				"Participants will work in pairs to prompt engineer and refine the output for website creation in Round 1.",
				"Participants will work in pairs to recreate AI-generated images in Round 2.",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="aiImpromptuPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$5000</div>
			</div>,
			<div className="ep-prize-chip" key="aiImpromptuPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3500</div>
			</div>,
		],
		dateChips: [
			<div className="ep-date-chip" key="aiImpromptuDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		poster: "/assets/event_posters/AI IMPROMPTU.png",
	},
	ADZAP: {
		eventType: "Technical Event",
		eventName: "ADZAP",
		eventDescription:
			"Get ready to think on your feet! ADZAP is a high-energy event where teams are given bizarre or imaginary products and must come up with creative, fun, and convincing advertisements — all within minutes. Bring your wit, humor, and spontaneity to the stage as you try to sell the unsellable. The more outrageous, the better!",
		roundsChips: [
			<div className="ep-duration-chip" key="adzapPrelim">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Preliminary Round</div>
				<div className="ep-duration">3 hours</div>
			</div>,
			<div className="ep-duration-chip" key="adzapFinal">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Final Round</div>
				<div className="ep-duration">2 hours</div>
			</div>,
		],
		specifics: {
			"Team Composition": [
				"Each team must consist of 2 to 3 participants.",
			],
			"Preliminary Round": [
				"Each team will be given 3–5 minutes (including preparation and presentation).",
				"Teams will be judged on creativity, spontaneity, and presentation.",
				"Top-performing teams will be shortlisted for the final round.",
			],
			"Final Round": [
				"Each finalist team will again be given 3–5 minutes to present.",
				"Judging will be more focused on creativity, marketing skills, humor, and audience engagement.",
			],
			"Event Specifics": [
				"Topics or products will be given on the spot.",
				"Teams will be judged based on creativity, spontaneity, humor, and presentation skills.",
				"Use of offensive or inappropriate content will result in immediate disqualification.",
				"Exceeding the time limit will lead to penalty points.",
				"The decision of the judges will be final and binding.",
			],
		},
		dateChips: [
			<div className="ep-date-chip">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo2"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12, 2025</div>
			</div>,
		],
		prizeChips: [
			<div className="ep-prize-chip" key="adzapPrize1">
				<img
					src="/assets/icons/prize.svg"
					className="ep-logo2"
					alt="Prize Icon"
				/>
				<div className="ep-prize">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="adzapPrize2">
				<img
					src="/assets/icons/prize.svg"
					className="ep-logo2"
					alt="Prize Icon"
				/>
				<div className="ep-prize">$3000</div>
			</div>,
		],
		poster: "/assets/event_posters/ADZAP.png",
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
				<div className="ep-price-amount">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="huntPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3000</div>
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
				<div className="ep-price-amount">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="iplPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3000</div>
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
				<div className="ep-price-amount">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="fandomPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3000</div>
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
				<div className="ep-price-amount">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="connPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3000</div>
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
	"Escape Room": {
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
				<div className="ep-price-amount">$4000</div>
			</div>,
			<div className="ep-prize-chip" key="escapePrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$3000</div>
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
