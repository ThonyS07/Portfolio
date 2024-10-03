import React from "react";



import Image from "next/image";
import taxiImage from "@/assets/img/porta/Taxis/01 01 01 portada.png";
import ProjectsPageCard from "../Cards/ProjectsPageCard/ProjectsPageCard";

import ProjectPageTitle from "./ProjectPageTitle";
import ProjectsPageDescription from "./ProjectPageDescription";
import ProjectsPageImage from "./ProjectsPageImage";

const ProjectsPageContent = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center gap-[24px] '>
			<div className='md:w-[50%]'>
				<div className='flex w-full sm:mt-4'>
					<ProjectPageTitle title='App para taxis ' />
				</div>
				<div className='flex justify-center w-full items-center md:hidden'>
					<Image alt='profile' src={taxiImage} width={180} height={201} />
				</div>
				<div className='flex justify-center w-full'>
					<ProjectsPageDescription />
				</div>
			</div>
			<div>
				<ProjectsPageImage />
			</div>
		</div>
	);
};

export default ProjectsPageContent;
