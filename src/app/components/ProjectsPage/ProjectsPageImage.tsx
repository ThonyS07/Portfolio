import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
const ProjectsPageImage = ({ image }: { image: StaticImageData }) => {
	return (
		<div>
			<div className='hidden md:flex lg:hidden'>
				<Image src={image} alt='profile' width={416} height={226} />
			</div>
			<div className='hidden lg:flex xl:hidden w-[564px] h-[307px]'>
				<Image src={image} alt='profile' width={564} height={307} />
			</div>
			<div className='hidden xl:flex mr-[104px]'>
				<Image src={image} alt='profile' width={744} height={405} />
			</div>
		</div>
	);
};

export default ProjectsPageImage;
