import React, {
	useRef,
	useState,
	useEffect,
	ReactNode,
	MouseEventHandler,
	UIEvent,
} from "react";
import { motion, useInView } from "framer-motion";
import "./AnimatedList.css";

interface AnimatedItemProps {
	children: ReactNode;
	delay?: number;
	index: number;
	onMouseEnter?: MouseEventHandler<HTMLDivElement>;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
	children,
	delay = 0,
	index,
	onMouseEnter,
	onClick,
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { amount: 0.5, once: false });
	return (
		<motion.div
			ref={ref}
			data-index={index}
			onMouseEnter={onMouseEnter}
			onClick={onClick}
			initial={{ scale: 0.7, opacity: 0 }}
			animate={
				inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
			}
			transition={{ duration: 0.2, delay }}
			style={{ marginBottom: "1rem", cursor: "pointer" }}
		>
			{children}
		</motion.div>
	);
};

interface AnimatedListProps {
	eventNames: string[];
	eventTimes: string[];
	whatsappLinks: string[];
	onItemSelect?: (
		eventName: string,
		eventTime: string,
		whatsappLink: string,
		index: number
	) => void;
	showGradients?: boolean;
	enableArrowNavigation?: boolean;
	className?: string;
	itemClassName?: string;
	displayScrollbar?: boolean;
	initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
	eventNames,
	eventTimes,
	whatsappLinks,
	onItemSelect,
	showGradients = true,
	enableArrowNavigation = true,
	className = "",
	itemClassName = "",
	displayScrollbar = true,
	initialSelectedIndex = -1,
}) => {
	const listRef = useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] =
		useState<number>(initialSelectedIndex);
	const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
	const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
	const [bottomGradientOpacity, setBottomGradientOpacity] =
		useState<number>(1);

	const handleScroll = (e: UIEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const { scrollTop, scrollHeight, clientHeight } = target;
		setTopGradientOpacity(Math.min(scrollTop / 50, 1));
		const bottomDistance = scrollHeight - (scrollTop + clientHeight);
		setBottomGradientOpacity(
			scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
		);
	};

	// Keyboard navigation: arrow keys, tab, and enter selection
	useEffect(() => {
		if (!enableArrowNavigation) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
				e.preventDefault();
				setKeyboardNav(true);
				setSelectedIndex((prev) =>
					Math.min(prev + 1, eventNames.length - 1)
				);
			} else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
				e.preventDefault();
				setKeyboardNav(true);
				setSelectedIndex((prev) => Math.max(prev - 1, 0));
			} else if (e.key === "Enter") {
				if (selectedIndex >= 0 && selectedIndex < eventNames.length) {
					e.preventDefault();
					if (onItemSelect) {
						onItemSelect(
							eventNames[selectedIndex],
							eventTimes[selectedIndex],
							whatsappLinks[selectedIndex],
							selectedIndex
						);
					}
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		eventNames,
		selectedIndex,
		onItemSelect,
		enableArrowNavigation,
		eventTimes,
		whatsappLinks,
	]);

	// Scroll the selected item into view if needed
	useEffect(() => {
		if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
		const container = listRef.current;
		const selectedItem = container.querySelector(
			`[data-index="${selectedIndex}"]`
		) as HTMLElement | null;
		if (selectedItem) {
			const extraMargin = 50;
			const containerScrollTop = container.scrollTop;
			const containerHeight = container.clientHeight;
			const itemTop = selectedItem.offsetTop;
			const itemBottom = itemTop + selectedItem.offsetHeight;
			if (itemTop < containerScrollTop + extraMargin) {
				container.scrollTo({
					top: itemTop - extraMargin,
					behavior: "smooth",
				});
			} else if (
				itemBottom >
				containerScrollTop + containerHeight - extraMargin
			) {
				container.scrollTo({
					top: itemBottom - containerHeight + extraMargin,
					behavior: "smooth",
				});
			}
		}
		setKeyboardNav(false);
	}, [selectedIndex, keyboardNav]);

	return (
		<div className={`scroll-list-container ${className}`}>
			<div
				ref={listRef}
				className={`scroll-list ${
					!displayScrollbar ? "no-scrollbar" : ""
				}`}
				onScroll={handleScroll}
			>
				{eventNames.map((eventName, index) => (
					<AnimatedItem
						key={index}
						delay={0.1 * index}
						index={index}
						onMouseEnter={() => setSelectedIndex(index)}
						onClick={() => {
							setSelectedIndex(index);
							if (onItemSelect) {
								onItemSelect(
									eventName,
									eventTimes[index],
									whatsappLinks[index],
									index
								);
							}
						}}
					>
						<div
							className={`item ${
								selectedIndex === index ? "selected" : ""
							} ${itemClassName}`}
						>
							<p className="item-text">{eventName}</p>
							<p className="item-text">{eventTimes[index]}</p>
							<a
								className="float-button"
								target="_blank"
								rel="noopener noreferrer"
								href={whatsappLinks[index].trim()}
							>
								<img
									className="fa fa-whatsapp"
									aria-hidden="true"
									src="/assets/icons/wa.svg"
									alt="WhatsApp"
								/>
								<span>Join Group</span>
							</a>
						</div>
					</AnimatedItem>
				))}
			</div>
			{showGradients && (
				<>
					<div
						className="top-gradient"
						style={{ opacity: topGradientOpacity }}
					></div>
					<div
						className="bottom-gradient"
						style={{ opacity: bottomGradientOpacity }}
					></div>
				</>
			)}
		</div>
	);
};

export default AnimatedList;
