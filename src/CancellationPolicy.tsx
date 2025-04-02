import React from "react";
import { useNavigate } from "react-router-dom";
import "./CancellationPolicy.css"; // Add CSS for styling

const CancellationPolicy: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="cancellation-container">
			<h1>Cancellation Policy</h1>

			<section>
				<p>
					At <strong>Samhita25</strong>, all purchases are final. We
					strictly do not allow cancellations, refunds, or exchanges
					under any circumstances.
				</p>
				<p>
					By making a purchase on our platform, you acknowledge and
					agree to this policy.
				</p>
				<p>
					If you have any concerns regarding your order, please
					contact us at <strong>+91 9500127141</strong>.
				</p>
			</section>

			<button className="back-btn" onClick={() => navigate(-1)}>
				Back
			</button>
		</div>
	);
};

export default CancellationPolicy;
