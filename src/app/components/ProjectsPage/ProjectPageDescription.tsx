import { TextR2 } from "@/app/format/RegularTypography";
import React from "react";

const ProjectsPageDescription = ({ description }: { description: string }) => {
	return (
		<div className='flex flex-col w-full mt-4 m-0 gap-2'>
			<TextR2>
				{description}
			</TextR2>
		</div>
	);
};

export default ProjectsPageDescription;
