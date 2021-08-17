export interface Entity {
  name: string;
  position: Position[];
}

export interface Position {
  title: string;
  duration: string;
  location?: string;
  description?: string[];
  details?: Detail[];
}

export interface Detail {
  title: string;
  description: string;
  tags: string[];
  tools: string;
  url?: string;
}