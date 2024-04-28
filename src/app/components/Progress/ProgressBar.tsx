import React from "react";
import ProgressLevelOne from "./ProgressLevelOne";
import ProgressLevelTwo from "./ProgressLevelTwo";
import ProgressLevelThree from "./ProgressLevelThree";
import ProgressLevelFour from "./ProgressLevelFour";

const ProgressBar = ({ level, text }: { level: number; text: string }) => {
	return (
		<div className='sm:w-[312px] sm:h-[56px] md:w-[684px]  lg:w-[448px] xl:w-[564px] h-[60px]'>
			<div>
				<p className='md:h-[24px] h-[28px] dark:text-blanco text-negro6 text-left tracking-normal text-[20px] md:text-[16px] leading-7 md:leading-6 font-semibold '>
					{text}
				</p>
			</div>
			{level === 1 ? (
				<ProgressLevelOne />
			) : level === 2 ? (
				<ProgressLevelTwo />
			) : level === 3 ? (
				<ProgressLevelThree />
			) : (
				<ProgressLevelFour />
			)}
		</div>
	);
};

export default ProgressBar;
