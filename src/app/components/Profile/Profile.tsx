import React from "react";
import Photo from "@/assets/img/Mask group.png";
import Image from "next/image";
import ProfileDescription from "./ProfileDescription";
import HomeCard from "../Cards/HomeCards/HomeCard";
import PRUEBAicon from "../Cards/HomeCards/Icons/PRUEBA";

const Profile = () => {
	return (
		<div className="justify-between flex bg-slate-400 ml-48 mr-48">
			<div className="w-1/3"><Image
				src={Photo}
				alt='ProfilePhoto'
				width={350}
				height={350}
			/></div>
			<div className="w-2/3"><ProfileDescription />
			<HomeCard text='como me gusta asfdkhasldhaskldjsakldjaslkdjsakldjsakld' titulo='hola'><PRUEBAicon></PRUEBAicon></HomeCard>
			</div>
			
			

		</div>
	);
};

export default Profile;
