import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className="qualification section" id="portfolio">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My Personal journey</span>
			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggleState === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>{" "}
						Education
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleTab(2)}>
						<i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
						Experience
					</div>
				</div>
				<div className="qualification__sections">
					<div
						className={
							toggleState === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						<div className="qualification__data">
							<div className="">
								<h3 className="qualification__title">
									BENG(HONS) IN SOFTWARE ENGINEERING
								</h3>
								<span className="qualification__subtitle">
									INFORMATICS INSTITUTE OF TECHNOLOGY
									<div className="qualification__calender">
										(AFFILIATED WITH{" "}
										<b>UNIVERSITY OF WESTMINSTER, LONDON, UK</b>)
									</div>
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2017 - 2021
								</div>
							</div>
							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
						<div className="qualification__data">
							<div className=""></div>

							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div className="">
								<h3 className="qualification__title">
									ENGLISH LANGUAGE LEVEL - INTERMEDIATE 2
								</h3>
								<span className="qualification__subtitle">
									BRITISH COUNSIL - KANDY
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2015/SEPTEMBER -
									2015/DECEMBER
								</div>
							</div>
						</div>
						<div className="qualification__data">
							<div className="">
								<h3 className="qualification__title">ADVANCED LEVEL</h3>
								<span className="qualification__subtitle">
									(BIOLOGY STREAM)
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2012 - 2014
								</div>
							</div>
							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
					<div
						className={
							toggleState === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}>
						<div className="qualification__data">
							<div className="">
								<h3 className="qualification__title">
									TRAINEE SOFTWARE ENGINEER
								</h3>
								<span className="qualification__subtitle">
									ENTGRA (PVT) LTD
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>
									2019/JULY - 2020/JUNE (ONE YEAR)
								</div>
							</div>
							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div className=""></div>

							<div className="">
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div className="">
								<h3 className="qualification__title">SOFTWARE ENGINEER</h3>
								<span className="qualification__subtitle">
									VIRYA CONSULTING (PVT) LTD
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i>2021/OCTOBER - PRESENT
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
