import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="projects section" id="projects">
			<h2 className="section__title">Projects</h2>
			<span className="section__subtitle">What I have developed</span>
			<div className="projects__container container">
				<div className="projects__tabs">
					<div
						className={
							toggleState === 1
								? "projects__button projects__active button--flex"
								: "projects__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						All
					</div>
					<div
						className={
							toggleState === 2
								? "projects__button projects__active button--flex"
								: "projects__button button--flex"
						}
						onClick={() => toggleTab(2)}>
						Web
					</div>
					<div
						className={
							toggleState === 3
								? "projects__button projects__active button--flex"
								: "projects__button button--flex"
						}
						onClick={() => toggleTab(3)}>
						Mobile
					</div>
					<div
						className={
							toggleState === 4
								? "projects__button projects__active button--flex"
								: "projects__button button--flex"
						}
						onClick={() => toggleTab(3)}>
						Extra
					</div>
				</div>

				<div
					className={
						toggleState === 1
							? "projects__content projects__content-active"
							: toggleState === 2
							? "projects__content projects__content-active"
							: "projects__content"
					}>
					<div className="projects__container container grid">
						<div className="projects__outer-box">
							<h3 className="">quawww</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
					</div>
				</div>
				<div
					className={
						toggleState === 1
							? "projects__content projects__content-active"
							: toggleState === 3
							? "projects__content projects__content-active"
							: "projects__content"
					}>
					<div className="projects__container container grid">
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
					</div>
				</div>
				<div
					className={
						toggleState === 1
							? "projects__content projects__content-active"
							: toggleState === 4
							? "projects__content projects__content-active"
							: "projects__content"
					}>
					<div className="projects__container container grid">
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
						<div className="projects__outer-box">
							<h3 className="">pine apple</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
