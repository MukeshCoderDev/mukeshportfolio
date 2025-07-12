
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  techTags: string[];
  liveUrl?: string;
  repoUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Skill {
  icon: string;
  title:string;
  description: string;
}

export interface SocialLink {
  icon: string;
  url: string;
}

export interface ContactInfo {
    icon: string;
    title: string;
    detail: string;
}
