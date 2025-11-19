import React from "react";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";
import ProjectsWrapper from "./ProjectsWrapper";

const Projects = () => {
	return (
		<div className='flex flex-col w-full items-center mb-20'>
			<div className='flex flex-col max-[768px]:mb-10 mb-56 w-full items-center'>
				<TextL1>Lo que puedo hacer</TextL1>
				<HeaderBl5>Mis proyectos</HeaderBl5>
			</div>
			<div className='flex flex-col w-full justify-center items-center'>
				<ProjectsWrapper/>
			</div>
		</div>
	);
};

export default Projects;
