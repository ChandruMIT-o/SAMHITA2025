import React from "react";

import "./VideoBackground.css";

interface VideoBackgroundProps {
	videoSrc: string;
	overlayContent?: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
	return (
		<video className="BG" src={videoSrc} autoPlay loop muted playsInline />
	);
};

export default VideoBackground;
