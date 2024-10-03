
import Image from "next/image";
import React from "react";
import profileImageDesktopLarge from "@/assets/img/profileImageDesktopLarge.png";
import profileImageDesktop from "@/assets/img/profileAndreaDesktopS.png";
import profileImageTablet from "@/assets/img/profileAndreaTablet.png";
import taxiImage from "@/assets/img/porta/Taxis/01 01 01 portada.png";

const ProjectsPageImage = () => {
	return (
		<div>
			<div className='hidden md:flex lg:hidden'>
				<Image
					src={taxiImage}
					alt='profile'
					width={416}
					height={226 } 
				/>
			</div>
			<div className='hidden lg:flex xl:hidden h-[490px] w-[500px]'>
				<Image
					src={taxiImage}
					alt='profile'              
					width={564}                     
					height={307}
				/>
			</div>
			<div className='hidden xl:flex mr-[104px]'>
				<Image
					src={taxiImage}
					alt='profile'
					width={744}
					height={405}
				/>
			</div>
		</div>
	);
};

export default ProjectsPageImage;
