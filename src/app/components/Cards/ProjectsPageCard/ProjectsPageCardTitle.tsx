import {ReactNode} from "react";
import { TextB1, TextB2 } from "@/app/format/BoldTypography";

const ProjectsPageCardTitle = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<div className='block xl:hidden'>
				<TextB1>{children}</TextB1>
			</div>
			<div className='hidden xl:block'>
				<TextB2>{children}</TextB2>{" "}
			</div>
		</div>
	);
};

export default ProjectsPageCardTitle;
