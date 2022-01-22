import { classes } from "../projects";
import { IProject, ITrida } from "./types";

export const getRandomFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getTridaForProject = (project: IProject): ITrida => {
  const tridas = classes;
  return tridas.find((trida) =>
    trida.projects.some((p) => p.title === project.title)
  );
};
