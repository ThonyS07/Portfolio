import React from "react";
import ProjectPageCardTitle from "./ProjectsPageCardTitle";
import { ProjectsPageCardProps } from "@/Props/ProjectsCardProps";
import ProjectsPageCardText from "./ProjectPageCardText";
import ButtonLink from "./ButtonLink";
import ProjectsPageCardImage from "./ProjectsPageCardImage";
import { HeaderB4 } from "@/app/format/BoldTypography";



const ProjectsPageCard = ({
	title,
	text,
	image,
	order,
}: ProjectsPageCardProps) => {
	return (
		<div className='flex flex-row  items-start w-[280px] h-[465px] p-[27px] rounded-[8px]  bg-blanco  dark:bg-[#1a1d2c]'>
			<div className='w-[54px] xl:w-[68px] items-center justify-center text-purple3'>
				<HeaderB4>{order}</HeaderB4>
			
			</div>
			<div className='flex flex-col'>
				<div>
					<ProjectPageCardTitle>{title}</ProjectPageCardTitle>
				</div>
				<div>
					<ProjectsPageCardText>{text}</ProjectsPageCardText>
				</div>
				<div className="py-4">
					<ProjectsPageCardImage image={image}></ProjectsPageCardImage>
				</div>
				<div className="flex justify-end text-purple3 ">
					<ButtonLink/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPageCard;
