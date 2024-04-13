"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/HomeContent/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import Profile from "@/app/components/Profile/Profile";
import ProjectsWrapper from "@/app/components/Projects/ProjectsWrapper";
import ProgressWLabelXXS from "./components/Progress/ProgressWLabelXXS";
import ProgressCircle from "./components/Progress/ProgressCircle";

const Home = () => {
	return (
		<div>
			<NavBar />
			<section id='home'>
				<HomeContent />
			</section>
			<section id='about'>
				<Profile />
			</section>
			<section id='projects'>
				<ProjectsWrapper />
			</section>
			<section id='contact'>
				<ContactWrapper />
			</section>

			<section>
				<h1>PRUEBAS</h1>
				<ProgressCircle value={50} size="S" />
			</section>
		</div>
	);
};

export default Home;
