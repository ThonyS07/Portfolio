import React from "react";
import Photo from "@/assets/img/Mask group.png";
import Image from "next/image";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";

import ProjectsPageAlcanceCards from "./ProjectsPageAlcanceCards";
import Frames from "../Frames/Frames";

const ProjectsPageAlcance = () => {
	return (
		<div className='flex flex-col w-full  sm:my-[48px] md:my-[64px] xl:my-[56px]'>
			<HeaderBl5>Alcance</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] w-full items-center'>
				<div className='mb-[32px] flex flex-col items-center'></div>
				<ProjectsPageAlcanceCards />
			</div>
			<HeaderBl5>App Pasajeros</HeaderBl5>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px]  mt-[24px] w-full items-center'>
				<Frames url='https://embed.figma.com/design/xGYDzgO1snXpYLrvjCrulF/Taxitel?node-id=0-1&embed-host=share'></Frames>
			</div>
			<div className=''>
				<HeaderBl5>App Conductor</HeaderBl5>
			</div>
			<div className='flex flex-col max-[768px]:mb-[40px] mb-[56px] mt-[24px] w-full items-center'>
				<Frames url='https://embed.figma.com/design/xGYDzgO1snXpYLrvjCrulF/Taxitel?node-id=3-1304&embed-host=share'></Frames>
			</div>
		</div>
	);
};

export default ProjectsPageAlcance;
