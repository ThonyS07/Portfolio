import Image from "next/image";
import logo from "@/assets/img/logo.svg";



import React from "react";

const Logo = () => {
	return (
		<div className="flex min-[200px]:h-[41]">
			<Image src={logo} alt='logo' />
			
		</div>
	);
};

export default Logo;
