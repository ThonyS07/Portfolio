import { TextB1, TextB3 } from "@/app/format/BoldTypography";
import React from "react";
import ProjectsPageAlcanceIcon from "./ProjectsPageAlcanceIcon";
import { TextR2, TextR3 } from "@/app/format/RegularTypography";

const ProjectsPageAlcanceCard = ({
	children,
	text,
	titulo,
}: {
	children: React.ReactNode;
	text: string[];
	titulo: string;
}) => {
	return (
		<div className='sm:w-[328px] sm:h-[202px]  md:w-[328px] md:h-[202px] xl:w-[360px] xl:h-[220px] lg:w-[270px] lg:h-[202px]  p-[27px] rounded-2xl dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-github shadow-[4px_4px_20px_0_#4b506b]'>
			<div>
				<ProjectsPageAlcanceIcon>{children}</ProjectsPageAlcanceIcon>
			</div>
			<div className='my-4 flex xl:hidden'>
				<TextB1>{titulo}</TextB1>
			</div>
			<div className=' flex xl:hidden'>
				 <TextR3>{text.map((text, i) => <li key={i}>{text}</li>)}</TextR3> 
				
			</div>
			<div className='my-4 xl:flex hidden'>
				<TextB1>{titulo}</TextB1>
			</div>
			<div className=' xl:flex hidden'>
				<TextR2>{text}</TextR2>
			</div>
		</div>
	);
};

export default ProjectsPageAlcanceCard;
