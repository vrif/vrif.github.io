
export type PortfolioType =  'Project' | "Notebook";

export interface Portfolio {
  name: string;
  topics: string;
  type: 'Project' | "Notebook";
  tags: string[];
  tools?: string;
  links: Link[]
}

export interface Link {
  name?: string;
  url: string;
}
