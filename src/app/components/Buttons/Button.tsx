import React from "react";
import styles from "./Buttons.module.css";
import { ButtonsProps } from "@/Props/ButtonsProps";
import {
	ButtonL,
	ButtonM,
	ButtonS,
	ButtonXL,
	ButtonXS,
} from "@/app/format/ButtonsTypography";

const Button = ({ text, onClick, size }: ButtonsProps) => {
	let classNames = "";
	if (size === "S" || size === "s") {
		classNames = "w-89 h-28 py-[6px] px-[19px] mt-0 -ml-[41px] mr-[48px] mb-0";
	} else if (size === "M" || size === "m") {
		classNames =
			"w-100 h-36 py-[9px] px-[18px] mt-0 -ml-[40px] mr-[40px] mb-[41px]";
	} else if (size === "L" || size === "l") {
		classNames =
			"w-120 h-42  py-[11px] px-[27px] mt-0 -ml-[29px] mr-[34px] mb-[40px]";
	} else if (size === "XL" || size === "xl") {
		classNames =
			"w-140 h-48 py-[13px] px-[27px] mt-0 -ml-[29px] mr-[29px] mb-[28px]";
	} else {
		classNames =
			"w-159 h-56 py-4 px-[25px] mt-[10px] -ml-[77px] mr-[10px] mb-[40px]";
	}

	return (
		<div>
			<button
				className={`${classNames}  dark:bg-negro1 dark:border-blanco dark:border-1 dark:hover:border-[#9747ff] dark:hover:text-[#a57bf5] dark:disabled:border-[#9747ff] dark:disabled:text-[#6a708c] dark:active:border-[#ccb4fa] dark:active:text-[#ccb4fa] bg-purple1 flex flex-row justify-center items-center gap-2.5 rounded-lg hover:bg-purple3 active:bg-purple2 disabled:bg-purple9 `}>
				{size === "S" || size === "s" ? (
					<ButtonXS>{text}</ButtonXS>
				) : size === "M" || size === "m" ? (
					<ButtonS>{text}</ButtonS>
				) : size === "L" || size === "l" ? (
					<ButtonM>{text}</ButtonM>
				) : size === "XL" || size === "xl" ? (
					<ButtonL>{text}</ButtonL>
				) : (
					<ButtonXL>{text}</ButtonXL>
				)}
			</button>
		</div>
	);
};

export default Button;
