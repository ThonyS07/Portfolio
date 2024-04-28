"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/HomeContent/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import AboutMe from "@/app/components/Profile/AboutMe";
import ProjectsWrapper from "@/app/components/Projects/ProjectsWrapper";
import ProgressWLabelAndName from "@/app/components/Progress/ProgressWLabelAndName";
import { LabelGreen } from "./components/Labels/Label";
import Projects from "./components/Projects/Projects";

const Home = () => {
	return (
		<div className="w-full">
			<NavBar />
			<div className='px-[78px]'>
				<section id='home'>
					<HomeContent />
				</section>
				<section id='about me'>
					<AboutMe />
				</section>
				<section id='my projects'>
					<Projects />
				</section>
				<section id='contact me'>
					<ContactWrapper />
				</section>

				<section className='p-5 justify-between'>
					<h1>PRUEBAS</h1>
					<LabelGreen>dgsdf</LabelGreen>
				</section>
			</div>
		</div>
	);
};

export default Home;
