import React from 'react'
import ProgressBar from '../Progress/ProgressBar';

const HardSkills = () => {
  return (
  <div>
        <ProgressBar text="Ux Research" level={3} ></ProgressBar>
        <ProgressBar text="Prototipado" level={4} ></ProgressBar>
        <ProgressBar text="Testing" level={3} ></ProgressBar>
        <ProgressBar text="Arquitectura de la información" level={4} ></ProgressBar>
        <ProgressBar text="Figma" level={3} ></ProgressBar>
        <ProgressBar text="Metodologias ágiles" level={3} ></ProgressBar>
    </div>
  )
}

export default HardSkills
