import React from 'react'
import { TextL1 } from "@/app/format/LightTypography";
import { HeaderBl5, TextBl1 } from "@/app/format/BlackTypography";
import ProjectsCard from '../Cards/ProjectsCard';
import viaje from '@/assets/img/viaje.svg'

const ProjectsWrapper = () => {
  return (
		<div className='flex sm:flex-col md:flex-row sm:gap-[24px] md:ml-40 lg:gap-[40] xl:gap-[68px] flex-wrap items-center'>
			<ProjectsCard
				titulo='Banca'
				tags={["UX", "UI", "Referencia"]}
				text='Después de algunos años trabajando para 2 bancos, decidí tomar de referencia mi experiencia para poner en práctica todo lo aprendido.'
				buttonText='Conoce más'
				image={viaje}
			/>
			<ProjectsCard
				titulo='Seguros'
				tags={["UX", "UI", "Referencia"]}
				text='Una nueva versión de mi trabajo en una importante aseguradora Peruana; explicando el proceso de como fue construida.'
				buttonText='Conoce más'
				image={viaje}
			/>
			<ProjectsCard
				titulo='Animalista'
				tags={["UX", "UI", "Personal"]}
				text='Mi amor a los animales y las visitas a veterinarios de mis mascotas me llevaron a crear una plataforma para veterinarias y animalistas.'
				buttonText='Conoce más'
				image={viaje}
			/>
			<ProjectsCard
				titulo='Transporte'
				tags={["UX", "UI", "Referencia"]}
				text='Mis inicios en el mundo del UX fueron muy enriquecedores, este es un proyecto real del 2019, con mejoras basadas en mi experiencia.'
				buttonText='Conoce más'
				image={viaje}
			/>
			<ProjectsCard
				titulo='Ecommerce'
				tags={["UI", "Personal"]}
				text='Estoy a nada de iniciar un nuevo emprendimiento, con este proyecto busco facilidad al momento de ofrecer los productos a mis clientes.'
				buttonText='Conoce más'
				image={viaje}
			/>
			<ProjectsCard
				titulo='ChatBot'
				tags={["Conversacional", "Personal"]}
				text='He tenido experiencia creando ChatBots, me parece importante refrescar mis conocimientos dándole vida a uno nuevo en mi portafolio.'
				buttonText='Conoce más'
				image={viaje}
			/>
		</div>
	);
}

export default ProjectsWrapper
