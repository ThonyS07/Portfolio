import React from 'react'
import ProgressBar from '../Progress/ProgressBar';

const HardSkills = () => {
  return (
		<div className='flex max-[1024px]:flex-col flex-row flex-wrap justify-evenly'>
			<ProgressBar text='Ux Research' level={3} />
			<ProgressBar text='Prototipado' level={4} />
			<ProgressBar text='Testing' level={3} />
			<ProgressBar text='Arquitectura de la información' level={4} />
			<ProgressBar text='Figma' level={3} />
			<ProgressBar text='Metodologias ágiles' level={3} />
		</div>
	);
}

export default HardSkills
