import React from "react";
import "./InputBtn.css";

type InputProps = {
	label: string;
	placeholder: string;
	icon?: React.ReactNode;
	flex?: number;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
	label,
	placeholder,
	icon,
	flex = 1,
	name,
	value,
	onChange,
}) => {
	return (
		<div className="input-container">
			<div className="input-label">{label}</div>
			<div className="group" style={{ flex: flex }}>
				{icon}
				<input
					id={name}
					name={name}
					className="input"
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default Input;
