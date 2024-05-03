"use client";
import ContactWrapper from "@/app/components/Contact/ContactWrapper";
import HomeContent from "@/app/components/Home/HomeContent";
import NavBar from "@/app/components/NavBar/NavBar";
import AboutMe from "@/app/components/Profile/AboutMe";
import Projects from "./components/Projects/Projects";

const Home = () => {
	return (
		<div className='w-full '>
			<NavBar />
			<section
				className='sm:pl-[25px] md:pl-[42px] lg:pl-[52px] xl:pl-[104px] mt-[32px]'
				id='home'>
				<HomeContent />
			</section>
			<div className=' sm:px-[25px] md:px-[42px] lg:px-[52px] xl:px-[104px]'>
				<section id='about me'>
					<AboutMe />
				</section>
				<section id='my projects'>
					<Projects />
				</section>
				<div className='flex-col justify-center items-center'>
					<section id='contact me'>
						<ContactWrapper />
					</section>
				</div>
			</div>
		</div>
	);
};

export default Home;
