import React from "react";
import Photo from "@/assets/img/Mask group.png";
import Image from "next/image";
import AboutMeDescription from "./AboutMeDescription";
import HomeCard from "../Cards/HomeCards/HomeCard";
import PRUEBAicon from "../Cards/HomeCards/Icons/FamiliaIcon";
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";
import SoftSkills from "./SoftSkills";
import HardSkills from "./HardSkills";
import Experience from "./Experience";

const AboutMe = () => {
	return (
		<div className='flex flex-col w-full items-center'>
			<div className='flex flex-col mb-[56px] w-full items-center'>
				<TextL1>Quien soy</TextL1>
				<HeaderBl5>Sobre mí</HeaderBl5>
			</div>
			<div className=''>
				<div className='flex w-full mb-[32px] items-center justify-center '>
					<TextBl1>Mi experiencia como UX</TextBl1>
				</div>
				<div className='flex justify-around '>
					<Experience />
				</div>
			</div>
			<div className=''>
				<TextBl1>Mis habilidades blandas</TextBl1>
				<SoftSkills />
			</div>
			<div className=''>
				<TextBl1>Mis habilidades duras</TextBl1>
				<HardSkills />
			</div>
		</div>
	);
};

export default AboutMe;
