export interface Entity {
  name?: string;
  summary?: Summary[];
}

export interface Summary {
  title: string;
  institution?: string;
  duration: string;
  location?: string;
  description?: string[];
  format?: "list" | "paragraph";
  details?: Detail[];
  url?: string;
}

export interface Detail {
  title: string;
  description: string[];
  tags: string[];
  tools: string;
  url?: string;
}