import React from "react";
import ProgressCircle from "../Progress/ProgressCircle";

const Experience = () => {
	return (
		<div>
			<div className='hidden  max-[768px]:flex'>
				<ProgressCircle value={45.5} size='XS' text='Banca' />
				<ProgressCircle value={34.5} size='XS' text='Seguros' />
				<ProgressCircle value={12.5} size='XS' text='Transporte' />
				<ProgressCircle value={7.5} size='XS' text='Delivery' />
			</div>
			<div className='flex  max-[768px]:hidden min-[1024px]:hidden'>
				<ProgressCircle value={45.5} size='S' text='Banca' />
				<ProgressCircle value={34.5} size='S' text='Seguros' />
				<ProgressCircle value={12.5} size='S' text='Transporte' />
				<ProgressCircle value={7.5} size='S' text='Delivery' />
			</div>
			<div className='flex max-[1024px]:hidden min-[1360]:hidden'>
				<ProgressCircle value={45.5} size='M' text='Banca' />
				<ProgressCircle value={34.5} size='M' text='Seguros' />
				<ProgressCircle value={12.5} size='M' text='Transporte' />
				<ProgressCircle value={7.5} size='M' text='Delivery' />
				
			</div>
			<div className='hidden  min-[1360px]:flex'>
				<ProgressCircle value={45.5} size='L' text='Banca' />
				<ProgressCircle value={34.5} size='L' text='Seguros' />
				<ProgressCircle value={12.5} size='L' text='Transporte' />
				<ProgressCircle value={7.5} size='L ' text='Delivery' />
			</div>
		</div>
	);
};

export default Experience;
