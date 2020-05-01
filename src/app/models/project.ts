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