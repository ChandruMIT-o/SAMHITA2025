import React, { useState } from "react";
import "./FAQAccordion.css";

interface FAQ {
	question: string;
	answer: string;
}

const faqs: FAQ[] = [
	{
		question: "What are the prices for the competitions?",
		answer: "The prices vary based on the competition type. Please check the event page for details.",
	},
	{
		question: "Will lunch be arranged for all the participants?",
		answer: "Yes, lunch will be provided to all registered participants.",
	},
	{
		question: "What is the deadline for registration?",
		answer: "The registration deadline is mentioned on the official event page.",
	},
	{
		question: "Can I participate in multiple competitions?",
		answer: "Yes, participants can register for multiple competitions as long as schedules do not overlap.",
	},
];

const FAQAccordion: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq-container">
			<h2 className="faq-title">Have any Questions?</h2>
			<div className="faq-list">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className={`faq-item ${
							activeIndex === index ? "active" : ""
						}`}
					>
						<button
							className="faq-question"
							onClick={() => toggleFAQ(index)}
						>
							<span>{faq.question}</span>
							<span className="faq-icon">
								{activeIndex === index ? "▲" : "▼"}
							</span>
						</button>
						{activeIndex === index && (
							<p className="faq-answer">{faq.answer}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQAccordion;
