import React, { useState } from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="nav-menu-bar">
			<div className="nav-header">
				<div className="page-name">SAMHITA '25</div>
				<div className="menu-toggle" onClick={toggleMenu}>
					<div className="bar1"></div>
					<div className="bar2"></div>
					<div className="bar3"></div>
				</div>
			</div>
			<div className={`nav-options ${isOpen ? "open" : ""}`}>
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
				{/* Mobile-only registration button */}
				<a href="#registration" className="nav-button mobile">
					Registration
				</a>
			</div>
			{/* Desktop-only registration button */}
			<a href="#registration" className="nav-button desktop">
				Registration
			</a>
		</div>
	);
};

export default NavBar;
