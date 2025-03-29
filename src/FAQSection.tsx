import React from "react";
import FAQAccordion from "./components/Accordion";
import { motion } from "framer-motion";
import ShinyText from "./components/InstagramBtn";
import "./FAQSection.css";
const FAQSection: React.FC = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				minHeight: "100vh",
				background: "#0D0D0D",
				color: "#ffffff",
			}}
			className="faq-section"
		>
			<motion.div className="left-faqs-section">
				<ShinyText text="✤ FAQs"></ShinyText>

				<div className="heading">Have any Questions?</div>
			</motion.div>
			<div className="right-faqs-section">
				<FAQAccordion />
			</div>
		</div>
	);
};

export default FAQSection;
