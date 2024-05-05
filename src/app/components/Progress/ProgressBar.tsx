import React from "react";
import ProgressLevelOne from "./ProgressLevelOne";
import ProgressLevelTwo from "./ProgressLevelTwo";
import ProgressLevelThree from "./ProgressLevelThree";
import ProgressLevelFour from "./ProgressLevelFour";

const ProgressBar = ({ level, text }: { level: number; text: string }) => {
	return (
		<div className='sm:w-[328px] sm:h-[56px] md:w-[680px]  lg:w-[564px] xl:w-[744px] h-[60px]'>
			<div className="mb-4">
				<p className='md:h-[24px] h-[28px] dark:text-blanco text-negro6 text-left tracking-normal  sm:text-[16px] md:text-[20px] leading-7 md:leading-6 font-semibold '>
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
