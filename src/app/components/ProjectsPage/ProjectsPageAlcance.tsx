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

	console.log(
		`soy ${embedTitle} y yo ${embedURL} yo ${frameTitle} y yo ${frameURL}`
	);
	const renderFrame = (frameURL: string): string => {
		if (!frameURL)
			return ''
		return frameURL
	};
	console.log(`soy ${embedTitle} y yo ${embedURL} yo ${frameTitle} y yo ${frameURL}`)
	const renderFrameTitle = (frameTitle: string): string => {
		if (!frameTitle) return ''
		return frameTitle
	};
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
			<HeaderBl5>{embedTitle}</HeaderBl5>

			{/* CONTENEDOR RESPONSIVE */}
			<div className='w-full flex justify-center mt-6 mb-14'>
				<div className='w-full max-w-5xl'>
					<Frames url={embedURL} />
				</div>
			</div>

			{frameTitle && <HeaderBl5>{frameTitle}</HeaderBl5>}

			{/* CONTENEDOR RESPONSIVE */}
			<div className='w-full flex justify-center mt-6 mb-14'>
				<div className='w-full max-w-5xl'>
					{frameURL && <Frames url={frameURL} />}
				</div>
			</div>
		</div>
	);
};

export default ProjectsPageAlcance;
