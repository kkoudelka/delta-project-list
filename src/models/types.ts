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
}

export interface IOutOfContext {
  imageName: string;
  description?: string;
}
