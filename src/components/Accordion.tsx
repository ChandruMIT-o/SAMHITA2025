import React, { useState } from "react";
import {
	Accordion,
	AccordionTab,
	AccordionTabChangeEvent,
} from "primereact/accordion";
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "./Accordion.css";

interface FAQ {
	question: string;
	answer: string;
}

const faqs: FAQ[] = [
	{
		question: "1) Are on spot registrations open ?",
		answer: "Yes, on spot registration is available, participants can register at the registration desk on the date of the event.",
	},
	{
		question: "2) Are there any discounts for bulk booking?",
		answer: "Yes, there are huge discounts for bulk booking, please contact the organizers for more info.",
	},
	{
		question: "3) Can i participate in multiple events?",
		answer: "yes, each event is scheduled such that a person can attend every event. Time management is the key!",
	},
	{
		question: "4) Do the workshops in the combo overlap?",
		answer: "No they do not. The combos are fixed such that participant can participate in all workshops mentioned in the combo.",
	},
];

const FAQAccordion: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState<number | number[] | null>(
		null
	);

	const onTabChange = (event: AccordionTabChangeEvent) => {
		// Ensure event.index is treated as a single number (handle array case)
		const index = Array.isArray(event.index) ? event.index[0] : event.index;
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq-container">
			<Accordion activeIndex={activeIndex} onTabChange={onTabChange}>
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
