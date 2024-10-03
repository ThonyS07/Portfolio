import { ReactNode } from "react";
import { TextB1, TextB2 } from "@/app/format/BoldTypography";
import { TextR2, TextR3 } from "@/app/format/RegularTypography";

const ProjectsPageCardText = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<div className='block xl:hidden'>
				<TextR3>{children}</TextR3>
			</div>
			<div className='hidden xl:block'>
				<TextR2>{children}</TextR2>
			</div>
		</div>
	);
};

export default ProjectsPageCardText;
