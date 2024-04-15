import React from "react";
import HomeDescription from "./HomeDescription";
import HomeImage from "./HomeImage";
import ButtonS from "../Buttons/Button";

const HomeContent = () => {
	return (
		<div className='flex justify-center items-center h-screen flex-row '>
			<div className='pr-52 bg-negro7 w-1/3 h-2/3'>
				<HomeDescription />
			</div>
			<div className='bg-blanco pl-2 w-3/3 h-2/3'>
				<HomeImage />
				<ButtonS text='Resume' size='s' ></ButtonS>
			</div>
			<div className='bg-white'></div>
		</div>
	);
};

export default HomeContent;
