import { useState } from "react";
import { motion } from "framer-motion";

type AccordionProps = {
	title: string;
	content: string;
};

const Accordion = ({ title, content }: AccordionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full max-w-lg mx-auto my-3">
			<motion.div
				initial={false}
				animate={{ backgroundColor: isOpen ? "#222" : "#111" }}
				className="border border-gray-700 rounded-lg overflow-hidden shadow-md"
			>
				{/* Accordion Header */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="w-full p-4 flex justify-between items-center text-white text-lg font-medium"
				>
					{title}
					<motion.span
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.2 }}
					>
						▼
					</motion.span>
				</button>

				{/* Accordion Content */}
				<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={
						isOpen
							? { height: "auto", opacity: 1 }
							: { height: 0, opacity: 0 }
					}
					transition={{ duration: 0.3 }}
					className="overflow-hidden"
				>
					<div className="p-4 text-gray-300">{content}</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Accordion;
