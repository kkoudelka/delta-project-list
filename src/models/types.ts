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
}
