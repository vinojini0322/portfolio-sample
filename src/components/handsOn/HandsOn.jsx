import React, { useState } from "react";
import "./handsOn.css";

const HandsOn = () => {
	const [toggleState, setToggleState] = useState(0);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="handsOn section" id="handsOn">
			<h2 className="section__title">Hands-On</h2>
			<span className="section__subtitle">What I have coded</span>
			<div className="handsOn__container container grid">
				<div className="handsOn__content">
					<div>
						<i class="bx bx-code-alt handsOn__icon"></i>
						<h3 className="handsOn__title">Frontend Developer</h3>
					</div>
					<span className="handsOn__button" onClick={() => toggleTab(1)}>
						View more{" "}
						<i className="uil uil-arrow-right handsOn__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 1
								? "handsOn__modal active-modal"
								: "handsOn__modal"
						}>
						<div className="handsOn__modal-content">
							<i
								className="uil uil-times handsOn__modal-close"
								onClick={() => toggleTab(0)}></i>
							<h3 className="handsOn__modal-title">Frontend Developer</h3>
							<p className="handsOn__modal-description">
								Having more than two years of hands-on experiences with the
								technologies such as JavaScript, React, Angular, HTML, CSS and
								Bootstrap
							</p>
							<ul className="handsOn__modal-handsOn-group grid">
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Worked on the super admin page UI of a web application that
										can be used for e-marketing purposes.
										<br />
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: ReactJS | Bootstrap | CSS | HTML
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Built an application that can be used to manage bookings in
										a hospital.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: ReactJS | Bootstrap | CSS | HTML
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Worked on a web application that can be used to collect
										feedback.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: ReactJS | Bootstrap | CSS | HTML
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Developed UI of features that customize and modify mac os
										and ios devices as required for business needs.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: JavaScript
								</span>
							</ul>
						</div>
					</div>
				</div>
				<div className="handsOn__content">
					<div>
						<i class="bx bx-code-curly handsOn__icon"></i>
						<h3 className="handsOn__title">Backend Developer</h3>
					</div>
					<span className="handsOn__button" onClick={() => toggleTab(2)}>
						View more{" "}
						<i className="uil uil-arrow-right handsOn__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 2
								? "handsOn__modal active-modal"
								: "handsOn__modal"
						}>
						<div className="handsOn__modal-content">
							<i
								className="uil uil-times handsOn__modal-close"
								onClick={() => toggleTab(0)}></i>
							<h3 className="handsOn__modal-title">Backend Developer</h3>
							<p className="handsOn__modal-description">
								Having more than two years of hands-on experiences with the
								technologies such as Java, Python and frameworks such as
								SpringBoot
							</p>
							<ul className="handsOn__modal-handsOn-group grid">
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Worked on the super admin page back-end of a web application
										that can be used for e-marketing purposes.
										<br />
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: Java | SpringBoot
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Built an application that can be used to manage bookings in
										a hospital.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: Java | SpringBoot
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Worked on a web application that can be used to collect
										feedback.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: Java | SpringBoot
								</span>
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Developed UI of features that customize and modify mac os
										and ios devices as required for business needs.
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: Java | SpringBoot
								</span>
							</ul>
						</div>
					</div>
				</div>

				<div className="handsOn__content">
					<div>
						<i class="bx bx-code-curly handsOn__icon"></i>
						<h3 className="handsOn__title">Mobile Developer</h3>
					</div>
					<span className="handsOn__button" onClick={() => toggleTab(3)}>
						View more{" "}
						<i className="uil uil-arrow-right handsOn__button-icon"></i>
					</span>
					<div
						className={
							toggleState === 3
								? "handsOn__modal active-modal"
								: "handsOn__modal"
						}>
						<div className="handsOn__modal-content">
							<i
								className="uil uil-times handsOn__modal-close"
								onClick={() => toggleTab(0)}></i>
							<h3 className="handsOn__modal-title">Mobile Developer</h3>
							<p className="handsOn__modal-description">
								Having more than two years of hands-on experiences with the
								technologies such as Flutter and Android.
							</p>
							<ul className="handsOn__modal-handsOn-group grid">
								<li className="handsOn__modal-handsOn">
									<i className="uil uil-check-circle handsOn__modal-icon"></i>
									<p className="handsOn__modal-info">
										Built a mobile application for an e-commerce bidding system.
										<br />
									</p>
								</li>
								<span className="handsOn__technologies">
									Technologies: Flutter | Java | PostgreSQL
								</span>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HandsOn;
