"use client";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import taxiImage from "@/assets/img/porta/Taxis/01 01 01 portada.png";
import ProjectsPageContent from "../components/ProjectsPage/ProjectsPageContent";

import ProjectsPageAlcance from "../components/ProjectsPage/ProjectsPageAlcance";

const page = () => {
	const stakeholders = [
		"Product owner",
		"Especialista en productos",
		"Area legal y de MKT",
	];
	const metodologia = ["Lean UX", "Scrum"];
	const equipo = ["1 UX Designers", "1 UI Designer", "1 Full Stack Developer "];
	const kpis = [
		"Tasa de conversión",
		"Tasa de retención",
		"Aumento de pedidos por App",
	];
	return (
		<div>
			<div className='w-full dark:bg-negro3'>
				<NavBar />
				<div className='w-full dark:bg-negro3 sm:px-[16px] md:px-[44px] lg:px-[107px] xl:px-[204px] pb-1'>
					<ProjectsPageContent
						title='Bxl Banca empresas'
						image={taxiImage}
						description='Mi experiencia dice Banca, y no es casualidad, este es un proyecto que pude construir en poco tiempo y del cual me siento orgullosa.
En la actualidad Banca empresas es el sector con menos soluciones tecnológicas y curiosamente el que más retribución económica brinda a los bancos.'
					/>
                    <ProjectsPageAlcance
                        embedTitle='Banca empresas'
						stakeHolders={stakeholders}
						metodologia={metodologia}
						equipo={equipo}
						kpis={kpis}
						embedURL='https://embed.figma.com/design/Uw0yNGuUrdRY5t9ocRKyfI/Banca-empresas?node-id=0-1&embed-host=share'
					/>
					<div className=' sm:px-[25px] md:px-[42px] lg:px-[52px] xl:px-[104px]'>
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
};

export default page;
