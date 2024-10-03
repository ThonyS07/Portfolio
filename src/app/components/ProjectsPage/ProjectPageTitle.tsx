import { HeaderBl1, HeaderBl2, HeaderBl4 } from "@/app/format/BlackTypography";
import { HeaderL6, TextL1 } from "@/app/format/LightTypography";
import React from "react";

const ProjectPageTitle = ({title}: {title: string}) => {
    return (
			<div>
				<div className='flex flex-col w-full  m-0 gap-2'>
					<div className='md:hidden flex flex-row gap-5  dark:text-[#fff] text-negro3'>
						<HeaderBl4>{title}</HeaderBl4>
					</div>

					<div className='hidden md:flex lg:hidden  flex-col  dark:text-[#fff] text-negro3'>
						<HeaderBl2>{title}</HeaderBl2>
					</div>

					<div className='hidden lg:flex lg:flex-row  gap-5  dark:text-[#fff] text-negro3'>
						<HeaderBl1>{title}</HeaderBl1>
					</div>
					<div className='md:hidden text-purple1'>
						<TextL1>Trabajo UX/UI</TextL1>
					</div>
					<div className='hidden md:flex text-purple1'>
						<HeaderL6>Trabajo UX/UI</HeaderL6>
					</div>
				</div>
			</div>
		);
};

export default ProjectPageTitle;
