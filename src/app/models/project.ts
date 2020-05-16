export class Icon {
  Name?: string;
  Group?: string;
  Color?: string;
}
export class Reference {
  Title?: string;
  Url?: string;
  Link?: string;
  Icon?: Icon;
}

export class Media {
  Title?: string;
  Url?: string;
  Class?: string;
}

export class Feature {
  Title: string;
  SubTitle?: string;
  Icon?: Icon;
  Author?: string;
  DateStamp?: string;
  Image: Media;
  FeatureSet: string[];
}

export class Project {
  Title?: string;
  SubTitle?: string;
  Description?: string;
  Icon?: Icon;
  ShowIcon?: boolean;
  References?: Reference[];
  Technologies?: Reference[];
  Media?: Media[];
  Features?: Feature[];
}

export class ContentSection {
  Path: string;
  BackgroundImage: Media;
  Title: string;
  SubTitle: string;
  Heading: string;
  Description: string;
  Projects: Project[];
}