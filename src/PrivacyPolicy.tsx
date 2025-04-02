import React from "react";
import { useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css"; // Add CSS for styling

const PrivacyPolicy: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="privacy-container">
			<h1>Privacy Policy</h1>
			<p className="effective-date">Effective Date: 2/04/2024</p>

			<section>
				<h2>1. Information We Collect</h2>
				<p>
					We may collect the following information when you use our
					website:
				</p>
				<ul>
					<li>Personal details (e.g., name, email, phone number)</li>
					<li>
						Payment details (processed securely through third-party
						payment providers)
					</li>
					<li>
						Usage data (e.g., website interactions, device
						information, and cookies)
					</li>
				</ul>
			</section>

			<section>
				<h2>2. How We Use Your Information</h2>
				<p>We use your data solely for the following purposes:</p>
				<ul>
					<li>To process transactions and provide services</li>
					<li>To improve our website and user experience</li>
					<li>To respond to inquiries and provide support</li>
					<li>To comply with legal and regulatory requirements</li>
				</ul>
				<p>
					<strong>No Marketing Communications:</strong> We do not use
					your data for promotional or marketing purposes.
				</p>
			</section>

			<section>
				<h2>3. Data Protection & Security</h2>
				<p>
					We implement strict security measures to protect your
					personal information from unauthorized access, alteration,
					or misuse.
				</p>
			</section>

			<section>
				<h2>4. Third-Party Sharing</h2>
				<p>
					We do not sell, rent, or trade your personal information.
					However, we may share it with trusted third-party service
					providers (such as payment processors) to fulfill our
					services securely.
				</p>
			</section>

			<section>
				<h2>5. Your Rights</h2>
				<p>You have the right to:</p>
				<ul>
					<li>Access and review your personal data</li>
					<li>Request corrections or deletions</li>
					<li>Opt out of non-essential data collection</li>
				</ul>
				<p>
					For any inquiries regarding your data, please contact us at{" "}
					<strong>+91 9500127141</strong>.
				</p>
			</section>

			<section>
				<h2>6. Changes to This Policy</h2>
				<p>
					We may update this Privacy Policy as needed. Any changes
					will be posted on this page with the updated effective date.
				</p>
			</section>

			<p>
				By using <strong>Samhita25</strong>, you agree to the terms
				outlined in this Privacy Policy.
			</p>

			<button className="back-btn" onClick={() => navigate("/")}>
				Back
			</button>
		</div>
	);
};

export default PrivacyPolicy;
