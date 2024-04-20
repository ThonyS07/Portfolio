import { TextB1, TextB3 } from "@/app/format/BoldTypography";
import React from "react";
import HomeIcon from "./HomeIcon";
import PRUEBAicon from "./Icons/PRUEBA";

const HomeCard = ({ children,text, titulo }: { children: React.ReactNode, text: string, titulo: string }) => {
	return (
		<div className='w-[312px] h-[202px] lg:w-[212px] lg:h-[220px] min-[1360px]:w-[368px] min-[1360px]:h-[182px] p-[27px] rounded-[16px] dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c] shadow-[4px_4px_20px_0_#4b506b66] '>
			<div className=''>
				<HomeIcon>{children}</HomeIcon>
			</div>
			<div className=''>
				{" "}
				<TextB1>{titulo}</TextB1>{" "}
			</div>
			<div className=''>
				{" "}
				<TextB3>{text}</TextB3>{" "}
			</div>
		</div>
	);
};

export default HomeCard;
