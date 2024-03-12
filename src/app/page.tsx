"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/HomeContent/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import Profile from "@/app/components/Profile/Profile";
import ProjectsWrapper from "@/app/components/Projects/ProjectsWrapper";

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
		</div>
	);
};

export default Home;
