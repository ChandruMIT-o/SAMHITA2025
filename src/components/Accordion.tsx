import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/viva-dark/theme.css"; // Dark theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Accordion.css";

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
	return (
		<div className="faq-container">
			<h2 className="faq-title">Have any Questions?</h2>
			<Accordion multiple>
				{faqs.map((faq, index) => (
					<AccordionTab key={index} header={faq.question}>
						<p>{faq.answer}</p>
					</AccordionTab>
				))}
			</Accordion>
		</div>
	);
};

export default FAQAccordion;
