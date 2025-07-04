
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string | null;
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
