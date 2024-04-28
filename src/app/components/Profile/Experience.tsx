import React from "react";
import ProgressCircle from "../Progress/ProgressCircle";

const Experience = () => {
	return (
		<div className='flex w-full flex-col '>
			<div className='md:hidden justify-evenly sm:flex mb-[40px]'>
				<ProgressCircle value={45.5} size='XS' text='Banca' />
				<ProgressCircle value={34.5} size='XS' text='Seguros' />
				<ProgressCircle value={12.5} size='XS' text='Transporte' />
				<ProgressCircle value={7.5} size='XS' text='Delivery' />
			</div>
			<div className='hidden md:flex justify-evenly  lg:hidden mb-[56px]'>
				<ProgressCircle value={45.5} size='S' text='Banca' />
				<ProgressCircle value={34.5} size='S' text='Seguros' />
				<ProgressCircle value={12.5} size='S' text='Transporte' />
				<ProgressCircle value={7.5} size='S' text='Delivery' />
			</div>
			<div className='lg:flex w-full justify-evenly xl:hidden hidden mb-[56px]'>
				<ProgressCircle value={45.5} size='M' text='Banca' />
				<ProgressCircle value={34.5} size='M' text='Seguros' />
				<ProgressCircle value={12.5} size='M' text='Transporte' />
				<ProgressCircle value={7.5} size='M' text='Delivery' />
			</div>
			<div className='hidden  justify-evenly  xl:flex mb-[56px]'>
				<ProgressCircle value={45.5} size='L' text='Banca' />
				<ProgressCircle value={34.5} size='L' text='Seguros' />
				<ProgressCircle value={12.5} size='L' text='Transporte' />
				<ProgressCircle value={7.5} size='L' text='Delivery' />
			</div>
		</div>
	);
};

export default Experience;


