import React, { useRef, useLayoutEffect } from "react";
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from "framer-motion";
import "./ImageCarousal.css";

interface VelocityMapping {
	input: [number, number];
	output: [number, number];
}

interface VelocityImagesProps {
	children: React.ReactNode;
	baseVelocity: number;
	scrollContainerRef?: React.RefObject<HTMLSpanElement> | null;
	className?: string;
	damping?: number;
	stiffness?: number;
	numCopies?: number;
	velocityMapping?: VelocityMapping;
	parallaxClassName?: string;
	scrollerClassName?: string;
	parallaxStyle?: React.CSSProperties;
	scrollerStyle?: React.CSSProperties;
}

interface ImageCarouselProps {
	scrollContainerRef?: React.RefObject<HTMLElement>;
	images: string[];
	velocity?: number;
	className?: string;
	damping?: number;
	stiffness?: number;
	numCopies?: number;
	velocityMapping?: VelocityMapping;
	parallaxClassName?: string;
	scrollerClassName?: string;
	parallaxStyle?: React.CSSProperties;
	scrollerStyle?: React.CSSProperties;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
	scrollContainerRef,
	images = [],
	velocity = 100,
	className = "",
	damping = 50,
	stiffness = 400,
	numCopies = 6,
	velocityMapping = { input: [0, 1000], output: [0, 5] },
	parallaxClassName = "parallax",
	scrollerClassName = "scroller",
	parallaxStyle,
	scrollerStyle,
}) => {
	function VelocityImages({
		children,
		baseVelocity = velocity,
		scrollContainerRef,
		className = "",
		damping,
		stiffness,
		numCopies,
		velocityMapping,
		parallaxClassName,
		scrollerClassName,
		parallaxStyle,
		scrollerStyle,
	}: VelocityImagesProps) {
		const baseX = useMotionValue(0);
		const scrollOptions = scrollContainerRef
			? { container: scrollContainerRef }
			: {};
		const { scrollY } = useScroll(scrollOptions);
		const scrollVelocity = useVelocity(scrollY);
		const smoothVelocity = useSpring(scrollVelocity, {
			damping: damping ?? 50,
			stiffness: stiffness ?? 400,
		});
		const velocityFactor = useTransform(
			smoothVelocity,
			velocityMapping?.input || [0, 1000],
			velocityMapping?.output || [0, 5],
			{ clamp: false }
		);

		// Reference for the first copy element to measure its width
		const copyRef = useRef<HTMLDivElement>(null);
		const copyWidth = useRef<number>(0);

		useLayoutEffect(() => {
			if (copyRef.current) {
				copyWidth.current = copyRef.current.offsetWidth;
			}
		}, []);

		// Helper function to wrap the x position continuously
		function wrap(min: number, max: number, v: number): number {
			const range = max - min;
			const mod = (((v - min) % range) + range) % range;
			return mod + min;
		}

		const x = useTransform(baseX, (v) => {
			if (copyWidth.current === 0) return "0px";
			return `${wrap(-copyWidth.current, 0, v)}px`;
		});

		const directionFactor = useRef<number>(1);
		useAnimationFrame((_, delta) => {
			let moveBy =
				directionFactor.current * baseVelocity * (delta / 1000);

			if (velocityFactor.get() < 0) {
				directionFactor.current = -1;
			} else if (velocityFactor.get() > 0) {
				directionFactor.current = 1;
			}

			moveBy += directionFactor.current * moveBy * velocityFactor.get();
			baseX.set(baseX.get() + moveBy);
		});

		const copies = [];
		for (let i = 0; i < numCopies!; i++) {
			copies.push(
				<div
					className={className}
					key={i}
					// Attach the ref only to the first copy so we can measure its width
					ref={i === 0 ? copyRef : null}
					style={{ display: "flex", gap: "30px" }}
				>
					{children}
				</div>
			);
		}

		return (
			<div className={parallaxClassName} style={parallaxStyle}>
				<motion.div
					className={scrollerClassName}
					style={{ x, ...scrollerStyle }}
				>
					{copies}
				</motion.div>
			</div>
		);
	}

	return (
		<section>
			<VelocityImages
				className={className}
				baseVelocity={velocity}
				scrollContainerRef={scrollContainerRef}
				damping={damping}
				stiffness={stiffness}
				numCopies={numCopies}
				velocityMapping={velocityMapping}
				parallaxClassName={parallaxClassName}
				scrollerClassName={scrollerClassName}
				parallaxStyle={parallaxStyle}
				scrollerStyle={scrollerStyle}
			>
				{images.map((src, index) => (
					<img
						src={src}
						alt={`carousel-${index}`}
						key={index}
						style={{ marginRight: "10px" }}
						draggable={false}
					/>
				))}
			</VelocityImages>
		</section>
	);
};

export default ImageCarousel;
