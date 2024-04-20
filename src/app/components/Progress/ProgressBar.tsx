import React from "react";
import ProgressLevelOne from "./ProgressLevelOne";
import ProgressLevelTwo from "./ProgressLevelTwo";
import ProgressLevelThree from "./ProgressLevelThree";
import ProgressLevelFour from "./ProgressLevelFour";

const ProgressBar = ({ level, text }: { level: number; text: string }) => {
	return (
		<div className='w-[312px] min-[360px]:h-[56px] min-[768px]:w-[684px]  min-[1024px]:w-[448px]  min-[1360px]:w-[564px] h-[60px]'>
			<div>
                        <p className='min-[768px]:h-[24px] h-[28px] dark:text-blanco text-negro6 text-left tracking-normal text-[20px] min-[768px]:text-[16px] leading-7 min-[768px]:leading-6 font-semibold '>{text}</p>
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
