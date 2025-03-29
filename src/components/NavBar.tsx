import React from "react";
import "./NavBar.css";
const NavBar: React.FC = () => {
	return (
		<div className="nav-menu-bar">
			<div className="page-name">SAMHITA '25</div>
			<div className="nav-options">
				<div className="nav-option">Home</div>
				<div className="nav-option">About</div>
				<div className="nav-option">Events</div>
				<div className="nav-option">FAQs</div>
				<div className="nav-option">Contact</div>
			</div>
			<div className="nav-button">Registration</div>
		</div>
	);
};

export default NavBar;
