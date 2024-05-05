import React from "react";
import ProgressBar from "../Progress/ProgressBar";

const SoftSkills = () => {
	return (
		<div className="flex flex-col lg:flex-row flex-wrap justify-evenly gap-[24px]">
			<ProgressBar text='Trabajo en equipo' level={3}></ProgressBar>
			<ProgressBar text='Escucha activa' level={4}></ProgressBar>
			<ProgressBar text='Organización' level={3}></ProgressBar>
			<ProgressBar text='Adaptación' level={4}></ProgressBar>
		</div>
	);
};

export default SoftSkills;
