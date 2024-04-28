import { TextB1, TextB3 } from "@/app/format/BoldTypography";
import React from "react";
import HomeIcon from "./HomeIcon";
import PRUEBAicon from "./Icons/FamiliaIcon";

const HomeCard = ({
	children,
	text,
	titulo,
}: {
	children: React.ReactNode;
	text: string;
	titulo: string;
}) => {
	return (
		<div className='sm:w-[312px] sm:h-[202px]  md:w-[212px] md:h-[220px] xl:w-[368px] xl:h-[182px]  p-[27px] rounded-[16px] dark:shadow-[4px_4px_20px_0_#b997f9] dark:bg-[#1a1d2c] shadow-[4px_4px_20px_0_#4b506b] '>
			<div>
				<HomeIcon>{children}</HomeIcon>
			</div>
			<div className='my-[16px]'>
				<TextB1>{titulo}</TextB1>
			</div>
			<div>
				<TextB3>{text}</TextB3>
			</div>
		</div>
	);
};

export default HomeCard;
