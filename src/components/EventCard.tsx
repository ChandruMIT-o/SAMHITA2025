// TiltedCard.tsx
import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";
import ShinyText from "./InstagramBtn";
import Switch from "./ToggleBtn";
import CircularText from "./MoreBtn";

interface TiltedCardProps {
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
	// Remove internal eventSelection
	isSelected: boolean;
	// New prop: disable toggling when selection is forced by a pass.
	disableToggle?: boolean;
	// Callback to notify parent when toggled.
	onToggle: () => void;
}

const springValues: SpringOptions = {
	damping: 30,
	stiffness: 100,
	mass: 2,
};

export default function TiltedCard({
	imageSrc,
	containerHeight = "400px",
	containerWidth = "600px",
	imageHeight = "400px",
	imageWidth = "600px",
	rotateAmplitude = 8,
	scaleOnHover = 1.03,
	showMobileWarning = false,
	displayOverlayContent = true,
	overlayContent = null,
	eventTitle = "ToS",
	eventType = "Technical",
	eventTag = "NEW",
	isSelected,
	disableToggle = false,
	onToggle,
	altText = "",
}: TiltedCardProps) {
	const ref = useRef<HTMLElement>(null);
	const navigate = useNavigate();

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

	// Only allow toggle if not forced (disableToggle === false)
	function handleCardClick() {
		if (!disableToggle) {
			onToggle();
		}
	}

	function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
		e.stopPropagation();
		const currentScroll = window.scrollY;
		console.log("Storing scroll position:", currentScroll);
		sessionStorage.setItem("scrollPosition", currentScroll.toString());
		navigate(`/event/${eventTitle}`);
	}

	return (
		<figure
			ref={ref}
			className="tilted-card-figure"
			style={{
				height: containerHeight,
				width: containerWidth,
				display: "flex",
				flexDirection: "column",
			}}
			onMouseMove={handleMouse}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleCardClick}
		>
			{showMobileWarning && (
				<div className="tilted-card-mobile-alert">
					This effect is not optimized for mobile. Check on desktop.
				</div>
			)}

			<motion.div
				className="tilted-card-inner"
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
						!isSelected
							? "tilted-card-img"
							: "titled-card-img-selected"
					}
					style={{
						width: imageWidth,
						height: imageHeight,
					}}
				/>

				{displayOverlayContent && overlayContent && (
					<motion.div
						className="tilted-card-overlay"
						onClick={handleOverlayClick}
					>
						<CircularText
							text="MORE*ON*THIS*EVENT*"
							onHover="speedUp"
							spinDuration={20}
							className="custom-class"
						/>
					</motion.div>
				)}
				<div className="tilted-card-title-row">
					<motion.div
						className={`tilted-card-title ${
							eventTitle.length > 20
								? "long-title"
								: eventTitle.length > 30
								? "very-long-title"
								: ""
						}`}
					>
						{eventTitle}
					</motion.div>

					<Switch isOn={isSelected} />
				</div>
				<div className="tilted-card-caption-row">
					<div className="tilted-card-caption">{eventType}</div>
					<ShinyText
						className="titled-card-caption2"
						text={eventTag}
						disabled={false}
						speed={3}
					/>
				</div>
			</motion.div>
		</figure>
	);
}
