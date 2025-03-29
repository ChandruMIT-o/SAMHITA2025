import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./PassCard.css";
import ShinyText from "./InstagramBtn";
import Switch from "./ToggleBtn";

interface PassCardProps {
	imageSrc: React.ComponentProps<"img">["src"];
	altText?: string;
	captionText?: string;
	containerHeight?: React.CSSProperties["height"];
	containerWidth?: React.CSSProperties["width"];
	imageHeight?: React.CSSProperties["height"];
	imageWidth?: React.CSSProperties["width"];
	scaleOnHover?: number;
	rotateAmplitude?: number;
	showMobileWarning?: boolean;
	showTooltip?: boolean;
	overlayContent?: React.ReactNode;
	displayOverlayContent?: boolean;
	eventTitle?: string;
	eventType?: string;
	eventTag?: string;
	eventSelection?: boolean;
}

const springValues: SpringOptions = {
	damping: 30,
	stiffness: 100,
	mass: 2,
};

export default function PassCard({
	imageSrc,
	// Updated to portrait dimensions: height > width
	containerHeight = "400px",
	containerWidth = "283px",
	imageHeight = "400px",
	imageWidth = "283px",
	rotateAmplitude = 8,
	scaleOnHover = 1.03,
	showMobileWarning = false,
	displayOverlayContent = true,
	overlayContent = null,
	eventTitle = "ToS",
	eventType = "Technical",
	eventTag = "NEW",
	eventSelection = false,
	altText = "",
}: PassCardProps) {
	const ref = useRef<HTMLElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useMotionValue(0), springValues);
	const rotateY = useSpring(useMotionValue(0), springValues);
	const scale = useSpring(1, springValues);
	const opacity = useSpring(0);
	const rotateFigcaption = useSpring(0, {
		stiffness: 300,
		damping: 30,
		mass: 1,
	});

	const [lastY, setLastY] = useState<number>(0);
	const [isToggled, setIsToggled] = useState<boolean>(eventSelection);

	function handleMouse(e: React.MouseEvent<HTMLElement>) {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - rect.width / 2;
		const offsetY = e.clientY - rect.top - rect.height / 2;

		const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
		const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

		rotateX.set(rotationX);
		rotateY.set(rotationY);

		x.set(e.clientX - rect.left);
		y.set(e.clientY - rect.top);

		const velocityY = offsetY - lastY;
		rotateFigcaption.set(-velocityY * 0.6);
		setLastY(offsetY);
	}

	function handleMouseEnter() {
		scale.set(scaleOnHover);
		opacity.set(1);
	}

	function handleMouseLeave() {
		opacity.set(0);
		scale.set(1);
		rotateX.set(0);
		rotateY.set(0);
		rotateFigcaption.set(0);
	}

	// Toggle switch state when the whole card is clicked
	function handleCardClick() {
		setIsToggled((prev) => !prev);
	}

	return (
		<figure
			ref={ref}
			className="passcards-figure"
			style={{
				height: containerHeight,
				width: containerWidth,
				display: "flex",
				flexDirection: "column",
			}}
			onMouseMove={handleMouse}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleCardClick} // Entire card is now clickable
		>
			{showMobileWarning && (
				<div className="passcards-mobile-alert">
					This effect is not optimized for mobile. Check on desktop.
				</div>
			)}

			<motion.div
				className="passcards-inner"
				style={{
					width: imageWidth,
					height: imageHeight,
					rotateX,
					rotateY,
					scale,
				}}
			>
				<motion.img
					src={imageSrc}
					alt={altText}
					className={
						!isToggled ? "passcards-img" : "passcards-img-selected"
					}
					style={{
						width: imageWidth,
						height: imageHeight,
					}}
				/>

				{displayOverlayContent && overlayContent && (
					<motion.div className="passcards-overlay">
						{overlayContent}
					</motion.div>
				)}
				<div className="passcards-title-row">
					<motion.div className="passcards-title">
						{eventTitle}
					</motion.div>
					{/* Pass the current toggle state to the Switch */}
					<Switch isOn={isToggled} />
				</div>
				<div className="passcards-caption-row">
					<div className="passcards-caption">{eventType}</div>
					<ShinyText
						className="passcards-caption2"
						text={eventTag}
						disabled={false}
						speed={3}
					/>
				</div>
			</motion.div>
		</figure>
	);
}
