import Image from "next/image";
import logo from "../../assets/img/logo.svg";


import React from "react";

const Logo = () => {
	return (
		<div className="">
			<Image src={logo} alt='logo' />
			
		</div>
	);
};

export default Logo;
