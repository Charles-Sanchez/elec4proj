export type DepartmentData = {
  code: string;
  title: string;
  subtitle: string;


  theme: { accentHex: string };

  images: {
    heroLeft: string;
    heroBig: string;
    heroSmall1: string;
    heroSmall2: string;
    peo: string;
    watermark: string;
  };

  programOverview: {
    heading: string;
    text: string;
    stats: { nonTeaching: number; faculty: number; students: number };
  };

  peo: {
    title: string;
    subtitle: string;
    bullets: string[];
  };

  so: {
    title: string;
    subtitle: string;
    outcomes: { title: string; text: string }[];
  };

  curriculum: {
    title: string;
    text: string;
    bullets: string[];
  };

  laboratories: {
    title: string;
    items: string[];
  };

  faculty: {
    title: string;
    members: { name: string; role: string }[];
  };

  careers: {
    title: string;
    subtitle: string;
    cards: { icon: string; title: string; text: string }[];
  };
};