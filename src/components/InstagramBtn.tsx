import "./InstagramBtn.css";

interface ShinyTextProps {
	text: string;
	disabled?: boolean;
	speed?: number;
	className?: string;
	fontSize?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
	text,
	disabled = false,
	speed = 5,
	className = "",
	fontSize = "1.1rem",
}) => {
	const animationDuration = `${speed}s`;

	return (
		<div
			className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
			style={{
				animationDuration,
				fontFamily: "Hanken Grotesk",
				fontSize: fontSize,
				letterSpacing: "1px",
				fontWeight: "bold",
			}}
		>
			{text}
		</div>
	);
};

export default ShinyText;
