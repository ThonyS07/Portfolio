import React from "react";
import ProjectsPageAlcanceCard from "./ProjectsPageAlcanceCards/ProjectsPagesAlcanceCard";
import FamiliaIcon from "../Cards/HomeCards/Icons/FamiliaIcon";
import StakeIcon from "./ProjectsPageAlcanceCards/Icons/stakeIcon";
import MetodoIcon from "./ProjectsPageAlcanceCards/Icons/metodoIcon";
import EquipoIcon from "./ProjectsPageAlcanceCards/Icons/equipoIcon";
import KpisIcon from "./ProjectsPageAlcanceCards/Icons/kpisIcon";

const ProjectsPageAlcanceCards = ({stakeHolders, metodologia, equipo, kpis}:{stakeHolders: string[], metodologia: string[], equipo: string[], kpis: string[]}) => {
	

	return (
		<div>
			<div className='flex items-center justify-center flex-col w-full md:w-[684px] lg:w-full gap-[24px] md:flex-row xl:mx-[104px] md:flex-wrap lg:flex-nowrap'>
				<div>
					<ProjectsPageAlcanceCard titulo='Stakeholder' text={stakeHolders}>
						<StakeIcon />
					</ProjectsPageAlcanceCard>
				</div>
				<div className='my-[0px] '>
					<ProjectsPageAlcanceCard
						titulo='Metodología'
						text={metodologia}>
						<MetodoIcon/>
					</ProjectsPageAlcanceCard>
				</div>
				<div className='my-[0px] '>
					<ProjectsPageAlcanceCard
						titulo='Equipo '
						text={equipo}>
						<EquipoIcon />
					</ProjectsPageAlcanceCard>
				</div>
				<div className=''>
					<ProjectsPageAlcanceCard
						titulo="KPI's"
						text={kpis}>
						<KpisIcon />
					</ProjectsPageAlcanceCard>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPageAlcanceCards;
