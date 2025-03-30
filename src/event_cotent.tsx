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
};
