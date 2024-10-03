import { StaticImageData } from "next/image";

export type ProjectCardProps = {
	titulo: string;
	tags: string[];
	text: string;
	buttonText: string;
	image: StaticImageData;
	buttonLink: string;
};

export type ProjectsPageCardProps = {
	title: string;
	text?: string;
	image: StaticImageData;

	order: number;
}
