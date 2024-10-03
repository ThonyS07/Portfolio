import React from "react";
import HomeDescription from "./HomeDescription";
import HomeImage from "./HomeImage";
import ButtonS from "../Buttons/Button";
import ProgressBar from "../Progress/ProgressBar";
import HomeTitlte from "./HomeTitlte";
import Image from "next/image";
import profileImage from "@/assets/img/profileAndrea.jpg";
import ProjectsPageCard from "../Cards/ProjectsPageCard/ProjectsPageCard";
import flecha from "@/assets/img/Icon.svg";

const HomeContent = () => {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center gap-[24px] '>
			<div className='md:w-[50%]'>
				<div className='flex w-full sm:mt-4'>
					<HomeTitlte name='Andrea' lastName='Encarnación' />
				</div>
				<div className='flex justify-center w-full items-center md:hidden'>
					<Image alt='profile' src={profileImage} width={180} height={201} />
				</div>
				<div className='flex justify-center w-full'>
					<HomeDescription />
				</div>
			</div>
			<div>
				<HomeImage />
				
			</div>
		</div>
	);
};

export default HomeContent;
