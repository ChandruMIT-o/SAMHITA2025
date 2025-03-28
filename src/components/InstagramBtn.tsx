import "./InstagramBtn.css";

interface ShinyTextProps {
	text: string;
	disabled?: boolean;
	speed?: number;
	className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
	text,
	disabled = false,
	speed = 5,
	className = "",
}) => {
	const animationDuration = `${speed}s`;

	return (
		<div
			className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}
			style={{
				animationDuration,
				fontFamily: "Hanken Grotesk",
				fontSize: "1.1rem",
				letterSpacing: "1px",
				fontWeight: "bold",
			}}
		>
			{text}
		</div>
	);
};

export default ShinyText;
