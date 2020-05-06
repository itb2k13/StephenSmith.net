export class Reference {
  title: string;
  url: string;
  link: string;
  icon: string;
}

export class Media {
  title: string;
  url: string;
}

export class Feature {
  title: string;
  image: Media;
  featureSet: string[];
}

export class Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  references: Reference[];
  media: Media[];
  features: Feature[];
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