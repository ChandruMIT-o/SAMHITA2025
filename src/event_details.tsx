const eventData: Record<string, any> = {
	"Coding Quest": {
		eventType: "Technical Event",
		eventName: "Coding Quest",
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
				<div className="ep-price-amount">₹5000</div>
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
				<div className="ep-price-amount">₹5000</div>
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
	"Squid Games": {
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
				<div className="ep-price-amount">₹5000</div>
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
		poster: "/assets/event_posters/SQUID GAMES.png",
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
			<div className="ep-prize-chip" key="queryPrize2">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">₹5000</div>
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
		poster: "/assets/event_posters/CALL OF QUERY.png",
	},
	"Reverse Coding": {
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
				<div className="ep-price-amount">₹5000</div>
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
		poster: "/assets/event_posters/REVERSE CODING.png",
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
				<div className="ep-price-amount">₹5000</div>
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
		poster: "/assets/event_posters/STREET CODING.png",
	},
	Hackathon: {
		eventType: "Technical Event",
		eventName: "Hackathon",
		eventDescription:
			"Gear up for the ultimate test of innovation at SAMHITA'25! An 8-hour coding marathon where brilliance meets endurance. Solve real-world challenges, push your limits, and prove you're the best in the game. Do you have what it takes to outthink, outcode, and outlast the competition? The clock is ticking—let the hacking begin! LIMITED SLOTS ONLY! Slots will be given on a first come first serve basis.",
		roundsChips: [
			<div className="ep-duration-chip" key="hackathon1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">8 hours (9AM - 5PM)</div>
			</div>,
			<div className="ep-date-chip" key="hackathonDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		specifics: {
			"Registration Process": [
				"Only the team lead should register",
				"Team member details collected later via Google Form",
				"After registration, team lead receives email with idea submission form",
			],
			"Team Formation": [
				"2-4 members per team",
				"Mixed teams from different institutions allowed",
			],
			"Problem Domains": [
				"Fintech",
				"Healthcare",
				"Sustainability",
				"Education",
				"Social Impact",
			],
			"Idea Submission": [
				"Idea document should include: problem, solution, features, target audience, feasibility",
				"Submission deadline: 5PM on April 11",
			],
			"Event Rules": [
				"Develop working prototype within 8 hours",
				"Any programming language/framework/tools allowed",
				"Bring your own laptops and equipment",
			],
			"Submission Guidelines": [
				"GitHub repository or ZIP file of codebase",
				"Short presentation/demo video (if required)",
				"Brief project description",
			],
			Breaks: [
				"Teams can take breaks as needed",
				"Clock continues running during breaks",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="paperPresentationPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">₹10000 Price Pool</div>
			</div>,
			<div className="ep-prize-chip" key="paperPresentationPrize2">
				<img
					src="/assets/icons/trophy2.svg"
					className="ep-logo2"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount2">Each Team ₹499</div>
			</div>,
		],
		poster: "/assets/event_posters/HACKATHON.png",
	},
	"Paper Presentation": {
		eventType: "Technical Event",
		eventName: "Paper Presentation",
		eventDescription:
			"Showcase your research and innovative ideas in the field of IT and CT at SAMHITA'25! Present your findings in front of expert judges and gain valuable insights.",
		roundsChips: [
			<div className="ep-duration-chip" key="paperPresentation1">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Presentation Time</div>
				<div className="ep-duration">8 mins + 2 mins Q&A</div>
			</div>,
			<div className="ep-date-chip" key="paperPresentationDate1">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		specifics: {
			"Eligibility & Registration": [
				"Open to students from IT and CT departments",
				"Team event (1-2 members per team)",
				"Only one team member needs to register",
				"On-spot registration available",
			],
			"Paper Guidelines": [
				"Topics should be innovative and intriguing in IT/CT fields",
				"Paper can be in any format, limited to 5 pages",
				"Paper need not be published",
				"Must submit paper before event (Drive link will be shared)",
			],
			"Presentation Rules": [
				"PPT presentation on event day (max 15 slides excluding title/references)",
				"8-minute presentation followed by 2-minute Q&A",
				"All teams must carry a copy of their paper",
			],
		},
		prizeChips: [
			<div className="ep-prize-chip" key="paperPresentationPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">$10000 Price Pool</div>
			</div>,
			<div className="ep-prize-chip" key="paperPresentationPrize2">
				<img
					src="/assets/icons/trophy2.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount2">Each Team $499</div>
			</div>,
		],
		poster: "/assets/event_posters/PAPER PRESENTATION.png",
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
				<div className="ep-price-amount">₹5000</div>
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
			<div className="ep-prize-chip" key="aiImpromptuPrize1">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">₹4000</div>
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
				<div className="ep-price-amount">₹4000</div>
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
		poster: "/assets/event_posters/TREASURE HUNT.png",
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
				<div className="ep-price-amount">₹4000</div>
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
		poster: "/assets/event_posters/IPL AUCTION.png",
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
				<div className="ep-price-amount">₹4000</div>
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
		poster: "/assets/event_posters/FANDOM QUIZ.png",
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
				<div className="ep-price-amount">₹4000</div>
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
		poster: "/assets/event_posters/ESCAPE ROOM.png",
	},

	"DATA SCIENCE DECODED – Unlock Insights & Innovation": {
		eventType: "Workshop",
		eventName:
			"DATA SCIENCE DECODED – Unlock Insights & Innovation By Google",
		eventDescription:
			"This workshop goes beyond theoretical concepts to explore real-world business applications of Data Science. Designed for professionals and aspiring data scientists, it focuses on leveraging data-driven insights to solve complex business challenges.",
		roundsChips: [
			<div className="ep-duration-chip" key="dsDuration">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">6 hours</div>
			</div>,
		],
		specifics: {
			"Topics Covered": [
				"Business-Driven Data Science",
				"Data Preprocessing & Cleaning",
				"Exploratory Data Analysis (EDA)",
				"Machine Learning in Business",
				"Data-Driven Decision Making",
			],
			Speaker: ["Navyaa Sharma, Software Engineer @ Google"],
		},
		dateChips: [
			<div className="ep-date-chip" key="dsDate">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		prizeChips: [
			<div className="ep-prize-chip" key="workshopCert">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Participation Certificate</div>
			</div>,
		],
		poster: "/assets/event_posters/DATA SCIENCE DECODED – UNLOCK INSIGHTS & INNOVATION.png",
	},

	"Unleashing the Power of Cloud Computing and Data Managament": {
		eventType: "Workshop",
		eventName:
			"Unleashing the Power of Cloud Computing and Data Management",
		eventDescription:
			"In today's data-driven world, cloud-based data management has become essential for businesses looking to scale, optimize performance, and ensure security. This workshop explores the key principles and best practices of managing data in the cloud.",
		roundsChips: [
			<div className="ep-duration-chip" key="cloudDuration">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">3 hours</div>
			</div>,
		],
		specifics: {
			"Topics Covered": [
				"Introduction to Cloud Data Management",
				"Cloud Storage & Databases",
				"Data Security & Compliance",
				"Scalability & Performance Optimization",
				"Business Use Cases",
			],
			Speaker: ["Losshika S N, NatWest Group"],
		},
		dateChips: [
			<div className="ep-date-chip" key="cloudDate">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 12</div>
			</div>,
		],
		prizeChips: [
			<div className="ep-prize-chip" key="workshopCert">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Participation Certificate</div>
			</div>,
		],

		poster: "/assets/event_posters/UNLEASHING THE POWER OF CLOUD COMPUTING AND DATA MANAGAMENT.png",
	},

	"The IT Behind Drones:Beginner to Advanced": {
		eventType: "Workshop",
		eventName: "The IT Behind Drones: Beginner to Advanced",
		eventDescription:
			"This workshop provides an in-depth exploration of the technological advancements shaping modern drone systems, including hands-on demonstration and live drone show.",
		roundsChips: [
			<div className="ep-duration-chip" key="droneDuration">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">6 hours</div>
			</div>,
		],
		specifics: {
			"Topics Covered": [
				"Drone Architecture & Components",
				"Flight Control & Navigation",
				"Computer Vision & AI in Drones",
				"IoT & Cloud Integration",
				"Industry Use Cases",
				"Live Drone Demonstration",
			],
			Speaker: [
				"Dr. N. Suresh Kumar, Chairman, 360 Group of Companies and team",
			],
		},
		dateChips: [
			<div className="ep-date-chip" key="droneDate">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		prizeChips: [
			<div className="ep-prize-chip" key="workshopCert">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Participation Certificate</div>
			</div>,
		],
		poster: "/assets/event_posters/THE IT BEHIND DRONESBEGINNER TO ADVANCED.png",
	},

	"REVOLUTIONIZING AI: The Future of Gen AI & Conversational AI": {
		eventType: "Workshop",
		eventName:
			"REVOLUTIONIZING AI: The Future of Gen AI & Conversational AI",
		eventDescription:
			"This workshop explores the rapidly evolving landscape of Generative AI and Conversational AI, focusing on their real-world applications and impact on businesses.",
		roundsChips: [
			<div className="ep-duration-chip" key="aiDuration">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">3 hours</div>
			</div>,
		],
		specifics: {
			"Topics Covered": [
				"Introduction to Generative AI",
				"Conversational AI Fundamentals",
				"Building AI-Powered Conversations",
				"Business Applications",
				"Future of Conversational AI",
			],
			Speaker: ["Cecil Samuel, Novacis Digital LLC, IITM Research Park"],
		},
		dateChips: [
			<div className="ep-date-chip" key="aiDate">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 13</div>
			</div>,
		],
		poster: "/assets/event_posters/REVOLUTIONIZING AI THE FUTURE OF GEN AI & CONVERSATIONAL AI.png",
		prizeChips: [
			<div className="ep-prize-chip" key="workshopCert">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Participation Certificate</div>
			</div>,
		],
	},

	"MERN Stack": {
		eventType: "Workshop",
		eventName: "Mastering MERN - Build Scalable Apps",
		eventDescription:
			"This workshop provides a comprehensive introduction to the MERN (MongoDB, Express, React, Node.js) stack, equipping participants with the essential skills to build full-stack web applications.",
		roundsChips: [
			<div className="ep-duration-chip" key="mernDuration">
				<img
					src="/assets/icons/duration.svg"
					className="ep-logo2"
					alt="Duration Icon"
				/>
				<div className="ep-round-text">Duration</div>
				<div className="ep-duration">6 hours</div>
			</div>,
		],
		specifics: {
			"Topics Covered": [
				"MERN Stack Basics",
				"React Fundamentals",
				"React Tools",
				"Express Backend",
				"MongoDB Integration",
			],
			Speaker: [
				"Jeevanandham D, Software Engineer @ Tekion Corp and team",
			],
		},
		dateChips: [
			<div className="ep-date-chip" key="mernDate">
				<img
					src="/assets/icons/date.svg"
					className="ep-logo3"
					alt="Date Icon"
				/>
				<div className="ep-date">April 14</div>
			</div>,
		],
		poster: "/assets/event_posters/MERN STACK.png",
		prizeChips: [
			<div className="ep-prize-chip" key="workshopCert">
				<img
					src="/assets/icons/trophy.svg"
					className="ep-logo1"
					alt="Prize Icon"
				/>
				<div className="ep-price-amount">Participation Certificate</div>
			</div>,
		],
	},
};

export default eventData;
