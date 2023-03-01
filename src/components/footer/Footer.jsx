import React from "react";
import "./footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title"></h1>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">
							About
						</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">
							Projects
						</a>
					</li>
					<li>
						<a href="#testimonials" className="footer__link">
							Testimonials
						</a>
					</li>
				</ul>
				<div className="footer__social">
					<a
						href="https://www.linkedin.com/in/vinojini-paramasivam-b4748513b/"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-linkedin-square"></i>
					</a>
					<a
						href="https://gitlab.com/Vinojini_P"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-git"></i>
					</a>
					<a
						href="https://github.com/vinojini0322"
						className="footer__social-link"
						target="_blank">
						<i className="bx bxl-github"></i>
					</a>
				</div>
				<span className="footer__copy">
					&#169;VinojiniParamasivam. All rights reerved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
