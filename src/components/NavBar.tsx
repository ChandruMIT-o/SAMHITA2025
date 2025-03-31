import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
	return (
		<div className="nav-menu-bar">
			<div className="page-name">SAMHITA '25</div>
			<div className="nav-options">
				<a href="#home" className="nav-option">
					Home
				</a>
				<a href="#about" className="nav-option">
					About
				</a>
				<a href="#events" className="nav-option">
					Events
				</a>
				<a href="#faqs" className="nav-option">
					FAQs
				</a>
				<a href="#contact" className="nav-option">
					Contact
				</a>
			</div>
			<a href="#registration" className="nav-button">
				Registration
			</a>
		</div>
	);
};

export default NavBar;
