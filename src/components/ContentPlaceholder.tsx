import * as React from "react";
import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";

const randomInt = (min: number, max: number): number =>
	Math.round(mix(min, max, Math.random()));
const generateParagraphLength = (): number => randomInt(5, 20);
const generateWordLength = (): number => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs: number[][] = Array.from({ length: 3 }, () =>
	Array.from({ length: generateParagraphLength() }, generateWordLength)
);

type WordProps = {
	width: number;
};

export const Word: React.FC<WordProps> = ({ width }) => (
	<div className="word" style={{ width }} />
);

type ParagraphProps = {
	words: number[];
};

const Paragraph: React.FC<ParagraphProps> = ({ words }) => (
	<div className="paragraph">
		{words.map((width, index) => (
			<Word key={index} width={width} />
		))}
	</div>
);

export const ContentPlaceholder: React.FC = () => (
	<motion.div
		variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
		transition={{ duration: 0.8 }}
		className="content-placeholder"
	>
		{paragraphs.map((words, index) => (
			<Paragraph key={index} words={words} />
		))}
	</motion.div>
);
