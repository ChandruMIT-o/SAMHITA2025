import { motion } from "framer-motion";
import "./AnimatedText.css";

interface AnimatedTextProps {
	text: string;
	font_family: string;
	font_size: string;
	font_weight?: string;
	letter_spacing?: string;
	animationType?: "letter" | "word"; // New prop to choose animation type
	delay?: number;
	animationDuration?: number;
	left_margin?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
	text,
	font_family,
	font_size,
	font_weight = "regular",
	letter_spacing = "0px",
	animationType = "letter", // Default to letter-wise animation
	delay = 0.1,
	animationDuration = 0.5,
	left_margin = "0px",
}) => {
	const splitText =
		animationType === "letter" ? text.split("") : text.split(/(\s+)/); // Preserve spaces when splitting words

	const animationVariants = {
		hidden: { opacity: 0, y: 50 }, // Start below
		visible: (i: number) => ({
			opacity: 1,
			y: 0, // Move up
			transition: {
				delay: i * delay,
				duration: animationDuration,
				ease: "easeOut",
			},
		}),
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.5 }}
			// className="text-3xl font-bold"
			style={{
				width: "fit-content",
				marginLeft: left_margin,
			}}
		>
			{splitText.map((char, i) => (
				<motion.span
					key={i}
					custom={i}
					variants={animationVariants}
					className="hero"
					style={{
						display: "inline-block",
						fontFamily: font_family,
						fontSize: font_size,
						fontWeight: font_weight,
						letterSpacing: letter_spacing,
						whiteSpace: char === " " ? "pre" : "normal", // Preserve spaces
					}}
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default AnimatedText;
