export interface ITrida {
  projects?: IProject[];
  title: string;
  domain: string;
  unique: string;
}

export interface IProject {
  title: string;
  authorName: string;
  consultantName?: string;
  subdomain: string;
  https?: boolean;
  inRoot?: boolean;
  keywords?: string[];
}

export interface IOutOfContext {
  imageName: string;
  description?: string;
  nsfw?: boolean;
}

export interface IKeywordProjects {
  keyword: string;
  projects: { project: IProject; tridaBaseUrl: string }[];
}
