import React from "react";
import Photo from "../../assets/img/Mask group.png";
import Image from "next/image";

const Profile = () => {
	return (
		<div>
			<Image
				src={Photo}
				alt='ProfilePhoto'
				width={350}
				height={350}
			/>

		</div>
	);
};

export default Profile;
