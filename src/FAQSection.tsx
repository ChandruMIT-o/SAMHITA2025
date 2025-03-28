import React from "react";
import FAQAccordion from "./components/Accordion";

const FAQSection: React.FC = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				minHeight: "100vh",
				background: "#0D0D0D",
				color: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "flex-start",
			}}
		>
			<FAQAccordion />
		</div>
	);
};

export default FAQSection;
