import React from "react";
import "./InputBtn.css";

type InputProps = {
	label: string;
	placeholder: string;
	icon?: React.ReactNode; // Allows passing any JSX element as an icon
	width?: string;
};

const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	icon,
	width = "200px",
}) => {
	return (
		<div className="input-container">
			<div className="input-label">{label}</div>

			<div
				className="group"
				style={{
					width: width,
				}}
			>
				{icon}

				<input
					id="query"
					className="input"
					type="text"
					placeholder={placeholder}
					name="searchbar"
				/>
			</div>
		</div>
	);
};

export default Input;
