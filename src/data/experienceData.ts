export type Experience = {
  id: string;
  organization: string;
  position: string;
  duration: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    id: '1',
    organization: 'Yksoft',
    position: 'UI/UX Designer',
    duration: 'June 2020 - Present (4 years 6 months)',
    responsibilities: [
      'Design and development of interfaces for websites, applications, and CRM systems.',
      'Conducted user research to inform design decisions and optimize user experience.',
    ],
  },
  {
    id: '2',
    organization: 'Meta-web',
    position: 'UI/UX Designer & Web Developer',
    duration: 'February 2019 - December 2019 (11 months)',
    responsibilities: [
      'Designed, prototyped, and implemented UI and UX for websites, plugins, and applications.',
      'Developed visual identity from user interaction flows to logos and brand identity.',
    ],
  },
  {
    id: '3',
    organization: 'Smart Design',
    position: 'Designer',
    duration: 'February 2018 - June 2018 (5 months)',
    responsibilities: [
      'Led the rebranding and updated the corporate visual identity.',
      'Created print materials, including product catalogs, labels, and business presentations.',
    ],
  },
  {
    id: '4',
    organization: 'Otkritie Factoring',
    position: 'Designer',
    duration: 'October 2016 - January 2018 (1 year 4 months)',
    responsibilities: [
      'Developed and maintained landing pages and websites.',
      'Designed printed advertising materials and event branding (badges, banners, displays).',
    ],
  },
  {
    id: '5',
    organization: 'Picasso Games',
    position: 'Graphic Artist',
    duration: 'September 2009 - July 2010 (11 months)',
    responsibilities: [
      'Created and animated characters, locations, and interfaces for flash games.',
    ],
  },
];
