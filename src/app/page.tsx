"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/HomeContent/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import Profile from "@/app/components/Profile/Profile";
import ProjectsWrapper from "@/app/components/Projects/ProjectsWrapper";
import ButtonXS from "./components/Buttons/Button";
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

			<section className='p-5 justify-between'>
				<h1>PRUEBAS</h1>
				<ButtonXS text='soy un boton'></ButtonXS>
				<ProgressCircle size='L' value={50}></ProgressCircle>
			</section>
		</div>
	);
};

export default Home;
