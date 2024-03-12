"use client";

import { createContext, useState, useContext } from "react";
import { CreateProject, UpdateProject } from "@/app/interfaces/Project";
import { Project } from "@prisma/client";

export const ProjectContext = createContext<{
	projects: Project[];
	loadProjects: () => Promise<void>;
	createProject: (project: CreateProject) => Promise<void>;
	deleteProject: (id: string) => Promise<void>;
	selectedProject: Project | null;
	setSelectedProject: (project: Project | null) => void;
	updateProject: (id: string, project: UpdateProject) => Promise<void>;
}>({
	projects: [],
	loadProjects: async () => {},
	createProject: async (project: CreateProject) => {},
	deleteProject: async (id: string) => {},
	selectedProject: null,
	setSelectedProject: (project: Project | null) => {},
	updateProject: async (id: string, project: UpdateProject) => {},
});

export const useProjects = () => {
	const context = useContext(ProjectContext);
	if (!context) {
		throw new Error("useProjects must be used within a ProjectsProvider");
	}
	return context;
};

export const ProjectsProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	async function loadProjects() {
		const res = await fetch("/api/projects");
		const data = await res.json();
		setProjects(data);
	}

	async function createProject(project: CreateProject) {
		const res = await fetch("/api/projects", {
			method: "POST",
			body: JSON.stringify(project),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const newProject = await res.json();
		setProjects([...projects, newProject]);
	}

	async function deleteProject(id: string) {
		const res = await fetch(`/api/projects/${id}`, {
			method: "DELETE",
		});
		const data = await res.json();
		setProjects(projects.filter((project) => project.id !== id));
	}

	async function updateProject(id: string, project: UpdateProject) {
		const res = await fetch(`/api/projects/${id}`, {
			method: "PUT",
			body: JSON.stringify(project),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		setProjects(
			projects.map((project) => (project.id === id ? data : project))
		);
	}

	return (
		<ProjectContext.Provider
			value={{
				projects,
				loadProjects,
				createProject,
				deleteProject,
				selectedProject,
				setSelectedProject,
				updateProject,
			}}>
			{children}
		</ProjectContext.Provider>
	);
};
