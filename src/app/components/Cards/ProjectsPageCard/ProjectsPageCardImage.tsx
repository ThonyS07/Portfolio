import React from 'react'
import type { StaticImageData } from "next/image";
import Image from 'next/image';

const ProjectsPageCardImage = ({ image }: { image: StaticImageData }) => {
  return (
		<div>
			<div className='block l:hidden xl:hidden'>
				<Image src={image} alt='projectImage' />
			</div>
			<div className='hidden l:block xl:hidden'>
				<Image src={image} alt='projectImage' />
			</div>
			<div className='hidden xl:block'>
				<Image src={image} alt='projectImage' />
			</div>
		</div>
	);
}

export default ProjectsPageCardImage
