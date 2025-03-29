import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
	children: ReactNode;
	scrollContainerRef?: RefObject<HTMLElement>;
	baseOpacity?: number;
	containerClassName?: string;
	textClassName?: string;
	wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
	children,
	scrollContainerRef,
	baseOpacity = 0.1,
	containerClassName = "",
	textClassName = "",
	wordAnimationEnd = "center center",
}) => {
	const containerRef = useRef<HTMLHeadingElement>(null);

	const splitText = useMemo(() => {
		const text = typeof children === "string" ? children : "";
		return text.split(/(\s+)/).map((word, index) => {
			if (word.match(/^\s+$/)) return word;
			return (
				<span className="word" key={index}>
					{word}
				</span>
			);
		});
	}, [children]);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		const scroller =
			scrollContainerRef && scrollContainerRef.current
				? scrollContainerRef.current
				: window;

		const wordElements = el.querySelectorAll<HTMLElement>(".word");

		// Word opacity animation
		gsap.fromTo(
			wordElements,
			{ opacity: baseOpacity, willChange: "opacity" },
			{
				ease: "none",
				opacity: 1,
				stagger: 0.05,
				scrollTrigger: {
					trigger: el,
					scroller,
					start: "top bottom-=20%",
					end: wordAnimationEnd,
					scrub: true,
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [scrollContainerRef, baseOpacity, wordAnimationEnd]);

	return (
		<h2 ref={containerRef} className={containerClassName}>
			<p className={textClassName}>{splitText}</p>
		</h2>
	);
};

export default ScrollReveal;
