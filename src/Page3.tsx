import React from "react";
import "./Page3.css";
import ShinyText from "./components/InstagramBtn";
import ScrollReveal from "./components/ScrollReveal";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { ImageCarousel } from "./components/ImageCarousal";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
} from "@chakra-ui/accordion";

const Page3: React.FC = () => {
	const controls = useAnimation();
	const { scrollY } = useScroll();

	useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			const threshold = window.innerHeight * 0.8;
			if (latest >= threshold) {
				controls.start({ opacity: 1, y: 0 });
			} else {
				controls.start({ opacity: 0, y: 50 });
			}
		});

		return () => unsubscribe(); // Clean up the listener
	}, [controls, scrollY]);

	const images = [
		"https://placehold.co/520x300",
		"https://placehold.co/412x412",
		"https://placehold.co/520x300",
		"https://placehold.co/412x412",
	];

	return (
		<div
			style={{
				width: "100vw",
				height: "200vh",
				minHeight: "100vh",
				background: "#0D0D0D",
				color: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-end",
				paddingBottom: "300px",
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={controls}
				transition={{ duration: 0.5 }}
			>
				<ShinyText text="✤ ABOUT US"></ShinyText>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={controls}
					transition={{ duration: 0.5 }}
				></motion.div>
				<div className="about-text-container-container">
					<ScrollReveal
						baseOpacity={0.2}
						enableBlur={true}
						baseRotation={10}
						blurStrength={0}
						containerClassName="about-text-container"
						textClassName="about-text"
					>
						Google Fonts makes it easy to bring personality and
						performance to your websites and products. Our robust
						catalog of open-source fonts and icons makes it easy to
						integrate expressive type and icons seamlessly — no
						matter where you are in the world.
					</ScrollReveal>
				</div>
			</motion.div>

			<ImageCarousel
				images={images}
				velocity={100} // adjust the scroll speed as desired
				numCopies={5} // number of repeated copies for continuous scroll
			/>

			<Accordion>
				<AccordionItem header="What is Lorem Ipsum?">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</AccordionItem>

				<AccordionItem header="Where does it come from?">
					Quisque eget luctus mi, vehicula mollis lorem. Proin
					fringilla vel erat quis sodales. Nam ex enim, eleifend
					venenatis lectus vitae, accumsan auctor mi.
				</AccordionItem>

				<AccordionItem header="Why do we use it?">
					Suspendisse massa risus, pretium id interdum in, dictum sit
					amet ante. Fusce vulputate purus sed tempus feugiat.
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default Page3;
