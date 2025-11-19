import React from "react";
import { HeaderBl5 } from "@/app/format/BlackTypography";

import ProjectsPageAlcanceCards from "./ProjectsPageAlcanceCards";
import Frames from "../Frames/Frames";

interface ProjectsPageAlcanceProps { 
	stakeHolders: string[];
	metodologia: string[];
	equipo: string[];
	kpis: string[];
	frameURL?: string;
	embedURL: string;
	embedTitle: string;
	frameTitle?: string;
}

const ProjectsPageAlcance = ({
	stakeHolders,
	metodologia,
	equipo,
	kpis,
	frameURL,
	embedURL,
	embedTitle,
	frameTitle,
}: ProjectsPageAlcanceProps) => {
	return (
		<div className='flex flex-col w-full  sm:my-12 md:my-16 xl:my-14'>
			<HeaderBl5>Alcance</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-10 mb-14 w-full items-center'>
				<div className='mb-8 flex flex-col items-center'></div>
				<ProjectsPageAlcanceCards
					stakeHolders={stakeHolders}
					metodologia={metodologia}
					equipo={equipo}
					kpis={kpis}
				/>
			</div>
			<HeaderBl5>{embedTitle}</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-10 mb-14  mt-6 w-full items-center'>
				<Frames url={embedURL}></Frames>
			</div>
			<div className=''>
				<HeaderBl5>{frameTitle}</HeaderBl5>
			</div>
			<div className='flex flex-col max-[768px]:mb-10 mb-14 mt-6 w-full items-center'>
			 {frameURL && <Frames url={frameURL}></Frames>}
			</div>
		</div>
	);
};

export default ProjectsPageAlcance;
