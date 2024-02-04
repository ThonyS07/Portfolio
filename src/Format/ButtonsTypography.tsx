import React from "react";
import { TypographyProps } from "@/Props/FormatProps";
import styles from "./Typography.module.css";

export const ButtonXL: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-xl text-black`}>
			{children}
		</p>
	);
};
export const ButtonL: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-lg text-black`}>
			{children}
		</p>
	);
};
export const ButtonM: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-base text-black`}>
			{children}
		</p>
	);
};
export const ButtonS: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-sm text-black`}>
			{children}
		</p>
	);
};
export const ButtonXS: React.FC<TypographyProps> = ({ children }) => {
	return (
		<p
			className={`${styles.boldFont} text-left tracking-normal text-xs text-black`}>
			{children}
		</p>
	);
};
