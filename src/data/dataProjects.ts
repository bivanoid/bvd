import projectsData from "./project_data.json";

interface Tech {
    lang: string;
}

interface ProjectsType {
    id: string;
    name: string;
    desc: string;
    link: string;
    type: string;
    tech: Tech[];
    detail: string[];
    textBtn: string;
    image: string;
}

export const DataProjects: ProjectsType[] = projectsData.projects;