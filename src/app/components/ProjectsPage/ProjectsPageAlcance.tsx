import React from "react";
import Photo from "@/assets/img/Mask group.png";
import Image from "next/image";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";

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
		<div className='flex flex-col w-full  sm:my-[48px] md:my-[64px] xl:my-[56px]'>
			<HeaderBl5>Alcance</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] w-full items-center'>
				<div className='mb-[32px] flex flex-col items-center'></div>
				<ProjectsPageAlcanceCards
					stakeHolders={stakeHolders}
					metodologia={metodologia}
					equipo={equipo}
					kpis={kpis}
				/>
			</div>
			<HeaderBl5>{embedTitle}</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px]  mt-[24px] w-full items-center'>
				<Frames url={embedURL}></Frames>
			</div>
			<div className=''>
				<HeaderBl5>{frameTitle}</HeaderBl5>
			</div>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] mt-[24px] w-full items-center'>
			 {frameURL && <Frames url={frameURL}></Frames>}
			</div>
		</div>
	);
};

export default ProjectsPageAlcance;
