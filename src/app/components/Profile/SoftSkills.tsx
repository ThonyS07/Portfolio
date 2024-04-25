import React from "react";
import ProgressBar from "../Progress/ProgressBar";

const SoftSkills = () => {
    return <div>
        <ProgressBar text="Trabajo en equipo" level={3} ></ProgressBar>
        <ProgressBar text="Escucha activa" level={4} ></ProgressBar>
        <ProgressBar text="Organización" level={3} ></ProgressBar>
        <ProgressBar text="Adaptación" level={4} ></ProgressBar>
    </div>;
};

export default SoftSkills;
