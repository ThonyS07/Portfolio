import React from "react";
import HomeDescription from "./HomeDescription";
import HomeImage from "./HomeImage";
import ButtonS from "../Buttons/Button";
import ProgressBar from "../Progress/ProgressBar";
import HomeTitlte from "./HomeTitlte";
import Image from "next/image";
import profileImage from "@/assets/img/profileAndrea.jpg"

const HomeContent = () => {
	return (
		<div>
			<div>
				<HomeTitlte name='Andrea' lastName='Encarnación' />
			</div>
			<div className="flex justify-center w-full items-center md:hidden"><Image alt="profile" src={profileImage} width={180} height={201}/></div>
			<div></div>
		</div>
	);
};

export default HomeContent;
