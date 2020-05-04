export class Reference {
  title: string;
  url: string;
  icon: string;
}

export class Media {
  title: string;
  url: string;
}


export class Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  references: Reference[];
  media: Media[];
}

export class ContentSection {
  _id: string;
  backgroundImage: Media;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  projects: Project[];
}