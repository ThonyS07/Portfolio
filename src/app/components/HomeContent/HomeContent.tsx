import React from "react";
import HomeDescription from "./HomeDescription";
import HomeImage from "./HomeImage";
import ButtonS from "../Buttons/Button";
import ProgressBar from "../Progress/ProgressBar";

const HomeContent = () => {
	return (
		<div>
			<ProgressBar level={1} text='Frontend Developer'></ProgressBar>
			<div className='flex justify-center items-center h-screen flex-row '>
				<HomeDescription />
				<div className='pr-52 bg-negro7 w-1/3 h-2/3'></div>
				<div className='bg-blanco pl-2 w-3/3 h-2/3'>
					<HomeImage />
					<ButtonS size='s'>Resume</ButtonS>
				</div>
				<div className='bg-white'></div>
			</div>
		</div>
	);
};

export default HomeContent;
