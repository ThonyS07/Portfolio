"use client";
import ContactWrapper from "@/components/Contact/ContactWrapper";
import HomeContent from "@/components/HomeContent/HomeContent";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "@/components/Profile/Profile";
import ProjectsWrapper from "@/components/Projects/ProjectsWrapper";


const Home = () => {
	
	return (
		<div>
			<NavBar/>
			<section id='home'>
				<HomeContent />
			</section>
			<section id='about'>
				<Profile />
			</section>
			<section id='projects'>
				<ProjectsWrapper/>
			</section>
			<section id='contact'>
				<ContactWrapper />
			</section>
		</div>
	);
};

export default Home;
