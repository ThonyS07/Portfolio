'use client';
import React from "react";
import NavBar from "../components/NavBar/NavBar";

import ProjectsPageContent from "../components/ProjectsPage/ProjectsPageContent";

import ProjectsPageAlcance from "../components/ProjectsPage/ProjectsPageAlcance";

const page = () => {
	return (
		<div>
			<div className='w-full dark:bg-negro3'>
				<NavBar />
				<div className='w-full dark:bg-negro3 sm:px-[16px] md:px-[44px] lg:px-[107px] xl:px-[204px] pb-1'>
					<ProjectsPageContent />
					<ProjectsPageAlcance />
					<div className=' sm:px-[25px] md:px-[42px] lg:px-[52px] xl:px-[104px]'>
						{/* <Projects />
					
						<div className='flex-col justify-center items-center'>
							<section id='contactame'>
								<ContactWrapper />
							</section>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
