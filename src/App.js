import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import HandsOn from "./components/handsOn/HandsOn";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Projects from "./components/projects/Projects";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Home />
				<About />
				<Skills />
				<HandsOn />
				{/* <Projects /> */}
				<Qualification />
				{/* <Testimonials /> */}
				<Contact />
			</main>
			<Footer />
			<ScrollUp />
		</>
	);
}

export default App;
