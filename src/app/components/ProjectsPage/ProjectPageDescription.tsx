import { TextR2 } from "@/app/format/RegularTypography";
import React from "react";

const ProjectsPageDescription = () => {
	return (
		<div className='flex flex-col w-full mt-[16px] m-0 gap-2'>
			<TextR2>
				Taxitel es una empresa de taxis ubicada en Arequipa, la cual conecta
				desde hace muchos años a pasajeros y conductores. Para el 2019 (año en
				el que tomé el proyecto) los usuarios pasajeros preferían pedir un taxi
				llamando a la central telefónica sobre usar el app y los conductores no
				usaban el app indicando que era preferible solo recibir pedidos por
				medio de la central telefónica.
			</TextR2>
		</div>
	);
};

export default ProjectsPageDescription;
