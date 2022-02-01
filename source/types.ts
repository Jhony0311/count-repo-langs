export enum STATUS {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export type Repo = {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string;
  languages_url: string;
};


export type Languages = {
  [name: string]: number;
};