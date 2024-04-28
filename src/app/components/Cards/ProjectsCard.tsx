import { TextB1 } from "@/app/format/BoldTypography";
import { TextR3 } from "@/app/format/RegularTypography";
import React from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import { ProjectCardProps } from "@/Props/ProjectsCardProps";
import { LabelBlue } from "../Labels/Label";

const ProjectsCard = ({
	titulo,
	tags,
	text,
	buttonText,
	image,
}: ProjectCardProps) => {
	return (
		<div className='flex flex-col items-start w-[280px] h-[465px] p-[27px] rounded-[8px] shadow-[4px_4px_20px_0_#4b506b] bg-blanco dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c]'>
			<div className="mb-[24px]">
				<Image src={image} alt='projectImage' width={226} height={161} />
			</div>
			<div className="mb-[16px]">
				<TextB1>{titulo}</TextB1>
			</div>
			<div className="flex flex-wrap mb-[16px] gap-2">
				{tags.map((tag, i) => (
				<div key={i}> <LabelBlue>{tag}</LabelBlue></div>
				))}
			</div>
			<div className="mb-[16px]">
				<TextR3>{text}</TextR3>
			</div>
			<div>
				<Button size='l'>{buttonText}</Button>
			</div>
		</div>
	);
};

export default ProjectsCard;