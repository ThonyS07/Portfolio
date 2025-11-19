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

const ProjectsPageAlcanceBanca= ({
	stakeHolders,
	metodologia,
	equipo,
	kpis,
	embedURL,
	embedTitle,

}: ProjectsPageAlcanceProps) => {

	console.log(
		`soy ${embedTitle} y yo ${embedURL} `
	);

	console.log(`soy ${embedTitle} y yo ${embedURL}`)

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

			{/* CONTENEDOR RESPONSIVE */}
			<div className='w-full flex justify-center mt-6 mb-14'>
				<div className='w-full max-w-5xl'>
					<Frames url={embedURL} />
				</div>
			</div>
		</div>
	);
};

export default ProjectsPageAlcanceBanca;
