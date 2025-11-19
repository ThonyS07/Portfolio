"use client";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import taxiImage from "@/assets/img/porta/Taxis/01 01 01 portada.png";
import ProjectsPageContent from "../components/ProjectsPage/ProjectsPageContent";

import ProjectsPageAlcance from "../components/ProjectsPage/ProjectsPageAlcance";

const page = () => {
	try {
		console.log("Imports:", {
			A: React,
			B: NavBar,
			C: ProjectsPageContent,
			D: taxiImage,
			E: ProjectsPageAlcance,
		});
		const stakeholders = ["Gerente General taxitel", "Área de Marketing"];
		const metodologia = ["Design thinking", "Scrum"];
		const equipo = ["2 UX/UI Designers", "1 Full Stack Developer "];
		const kpis = [
			"Tasa de conversión",
			"Tasa de retención",
			"Aumento de pedidos por App",
		];
		return (
			<div>
				<div className='w-full dark:bg-negro3'>
					<NavBar />
					<div className='w-full dark:bg-negro3 sm:px-4 md:px-11 lg:px-[107px] xl:px-[204px] pb-1'>
						<ProjectsPageContent
							title='App para taxis'
							image={taxiImage}
							description='Taxitel es una empresa de taxis ubicada en Arequipa, la cual conecta
				desde hace muchos años a pasajeros y conductores. Para el 2019 (año en
				el que tomé el proyecto) los usuarios pasajeros preferían pedir un taxi
				llamando a la central telefónica sobre usar el app y los conductores no
				usaban el app indicando que era preferible solo recibir pedidos por
				medio de la central telefónica.'
						/>
						<ProjectsPageAlcance
							stakeHolders={stakeholders}
							metodologia={metodologia}
							equipo={equipo}
							kpis={kpis}
							frameURL='https://embed.figma.com/design/xGYDzgO1snXpYLrvjCrulF/Taxitel?node-id=3-1304&embed-host=share'
							embedURL='https://embed.figma.com/design/xGYDzgO1snXpYLrvjCrulF/Taxitel?node-id=0-1&embed-host=share'
							embedTitle='App pasajeros'
							frameTitle='App conductor'
						/>
						<div className=' sm:px-25 md:px-42 lg:px-52 xl:px-104'>
							{/* <Projects />
					
						<div className='flex-col justify-center items-center'>
							<section id='contactame'>
								<ContactWrapper />
							</section>
						</div> */}
						</div>
					</div>
				</div>
			</div>
		);
	} catch (error) {
		console.error("Error en TaxisPage:", error);
		return <div>Error al renderizar la página</div>;
	}
};

export default page;
