import { TextB1 } from "@/app/format/BoldTypography";
import { TextR3 } from "@/app/format/RegularTypography";
import React from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import { ProjectCardProps } from "@/Props/ProjectsCardProps";

const ProjectsCard = ({
	titulo,
	tags,
	text,
	buttonText,
	image,
}: ProjectCardProps) => {
	return (
		<div className='flex flex-col justify-start w-[280px] h-[465px] p-[27px] rounded-[8px] shadow-[4px_4px_20px_0_#4b506b] bg-blanco dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c]'>
			<div>
				<Image src={image} alt='projectImage' width={226} height={161} />
			</div>
			<div>
				<TextB1>{titulo}</TextB1>
			</div>
			<div>
				{tags.map((tag, i) => (
					<p className='mt-[16px] text-negro6 dark:text-blanco' key={i}>
						{tag}
					</p>
				))}
			</div>
			<div>
				<TextR3>{text}</TextR3>
			</div>
			<div>
				<Button size='l'>{buttonText}</Button>
			</div>
		</div>
	);
};

export default ProjectsCard;
