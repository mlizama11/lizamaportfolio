import { ProjectType, Works } from '@/types';

// Projects Data
export const works: Works[] = [
  {
    id: 1,
    type: ProjectType.WEBDEV,
    projects: [
      {
        id: 1,
        title: 'Planted CO2 Software',
        description:
          'I PLANTED GmbH is a startup focused on combating climate change through innovative solutions. As part of their team, I colaborated building a comprehensive CO2 reporting software that enables businesses to accurately track and report their carbon emissions. I worked with React in the frontend and NestJS in the backend. I warmly invite you to visit their website, where you can review the information and even try the free version of the software.',
        img: '/assets/plantedgreen.jpg',
        techStack: [
          { title: 'TypeScript', logo: 'typescript' },
          { title: 'Next.js', logo: 'next.js' },
          { title: 'React', logo: 'react' },
          { title: 'Tailwind CSS', logo: 'tailwindcss' },
          { title: 'Shadcn', logo: 'shadcnui' },
          { title: 'Auth0', logo: 'auth0' },
          { title: 'NestJS', logo: 'nestjs' },
          { title: 'Prisma', logo: 'prisma' },
          { title: 'MySQL', logo: 'mysql' }
        ],
        link: 'https://planted.green/preise'
      },
      {
        id: 2,
        title: 'Emilia Prieto',
        description:
          'The Emilia Prieto Project is dedicated to promoting and preserving the memory of this significant Costa Rican figure: an artist, educator, singer, and folklore scholar. The website serves as a digital platform collecting her most important artistic and intellectual work legacy. I originally developed this site using Bootstrap and recently upgraded it to Next.js. Visit the website to explore her contributions',
        img: '/assets/emiliaprietoproject.jpg',
        techStack: [
          { title: 'TypeScript', logo: 'typescript' },
          { title: 'Next.js', logo: 'next.js' },
          { title: 'React', logo: 'react' },
          { title: 'Tailwind CSS', logo: 'tailwindcss' },
          { title: 'Shadcn', logo: 'shadcnui' },
          { title: 'Motion', logo: 'framer' },
          { title: 'MDX', logo: 'markdown' }
        ],
        link: 'https://emiliaprieto.com/'
      }
    ]
  },
  {
    id: 2,
    type: ProjectType.AUDIOVISUAL,
    projects: [
      {
        id: 1,
        title: 'OAS Official Repository of Inter-American',
        description:
          'Small video news capsule about the vault that safeguards the main legal instruments of the Americas. The treaties and agreements, either bilateral or multilateral, contained in the safe are key tools in international diplomacy and conflict resolution. They represent the legal memory of the Americas from 1889 until today.',
        img: '/assets/oasinteramericantreaties.jpg',
        link: 'https://player.vimeo.com/video/247341360?h=25d69368d5'
      },
      {
        id: 2,
        title: 'OAS Academic Scholarship Program',
        description:
          'Small video news capsule highlighting that the scholarships tripled their beneficiaries from 2005 to 2015. Two interviews were conducted: One with biologist, Irene Guendel, Costa Rica, and other with the lawyer, Constanza Bodini, Argentina.',
        img: '/assets/oasscholarships.jpg',
        link: 'https://player.vimeo.com/video/247501858?h=3527b9da24'
      },
      {
        id: 3,
        title: 'The Electoral Observation Missions',
        description:
          'My first audiovisual project about one of the most important and efficient programs of the OAS. It was recorded in La Paz, Bolivia, during the 2014 general elections. These missions are a cooperation instrument that evaluate the whole electoral processes and offer recommendations for the countries of the Americas.',
        img: '/assets/oaseombolivia.jpg',
        link: 'https://player.vimeo.com/video/247500556?h=99a3c3414f'
      },
      {
        id: 4,
        title: 'Combating Political Violence against Women',
        description:
          'Project made for the Inter-American Commission of Women (CIM). We recorded interviews with outstanding feminine political personalities of the Hemisphere during a roundtable debate in the celebration of Women’s Day of the Americas (February 18) and the International Day of Women (March 8).',
        img: '/assets/oaspoliticalviolencewomen.jpg',
        link: 'https://player.vimeo.com/video/247500555?h=59ffbcd0ba'
      },
      {
        id: 5,
        title:
          'Participation of the Secretary General in the opening of the Forum of Civil Society',
        description:
          'Video news about the participation of the OAS Secretary General José Miguel Insulza in the activities of the Seventh Summit of the Americas, held in Panama City, Panama, on April 8, 2015. It was a valuable experience to cover activities in such ahistorical event where the President of the United States, Barack Obama, and the President of Cuba, Raúl Castro, shook hands.',
        img: '/assets/summitamericaspanama.jpg',
        link: 'https://player.vimeo.com/video/248659451?h=e8e5900ab6'
      },
      {
        id: 6,
        title: 'The Assembly of Modernization',
        description:
          'Audiovisual project created with help of the entire OAS Press and Communications Department. It was designed to show the backstage as well as the main meetings of the 45th Regular Session of the General Assembly (June 2015), which took place in Washington, DC, United States. The edition process was done between the intern Laura Rincón and myself. ',
        img: '/assets/oaschange.jpg',
        link: 'https://player.vimeo.com/video/248660372?h=4dff85db28'
      },
      {
        id: 7,
        title: 'The Art of Making Beer',
        description:
          'It is an institutional documentary made with my colleagues Luis Montenegro and Dayhan Céspedes. It was our final thesis project to obtain our degree in Audiovisual Production from the Federated University. Our project explains the craft beer manufacturing processes and their differences from industrial beer. Costa Rica Craft Brewing are the pioneers of the craft beer movement in the country. The documentary has so far recorded 12,830 views on YouTube, a significant achievement for us.',
        img: '/assets/craftbeercrcbco.jpg',
        link: 'https://www.youtube.com/embed/gWEbKtsgoN4?si=S2Xm9s1Srr0XgKlv'
      },
      {
        id: 8,
        title: 'The Dome and the passage of time',
        description:
          'This audiovisual project with basic edition was a summary of the celebration of the end of the dome’s restauration works (July 2011). The audience was amused by the projections of historic images and animations as well as the presentation of contemporary dance, classical music and opera. The restauration received economic support of the governments of Spain and Germany, Holcim Costa Rica and the Friends of the National Theater Foundation.',
        img: '/assets/thedomenationaltheatrecr.jpg',
        link: 'https://www.youtube.com/embed/4Ex_tJW4Yc8?si=TvLf2K5x7nV7cPcv'
      }
    ]
  },
  {
    id: 3,
    type: ProjectType.PHOTOGRAPHY,
    projects: [
      {
        id: 1,
        title: ' José Luis Rodríguez Zapatero, on June 21, 2016',
        description:
          'A set of photographs taken during the presentation on the Permanent Council of the OAS of the former president of the government of Spain and mediator designed by the Union of South American Nations (UNASUR), José Luis Rodríguez Zapatero, on June 21, 2016. At the occasion, he presented his vision of the dialogue process in the conflict between the government of the Bolivarian Republic of Venezuela and the opposition. To see the full photo gallery on the OAS Flickr, just click on the Visit Website button.',
        img: '/assets/zapaterooea.jpg',
        link: 'https://www.flickr.com/photos/oasoea/albums/72157670069574925/'
      },
      {
        id: 2,
        title: 'Roundtable Towards the closure of Guantánamo',
        description:
          'Photographs taken for the Inter-American Commission on Human Rights (IACHR), in the framework of the Human Rights International Day, on December 10, 2015. The Roundtable Towards the closure of Guantánamo , gathered panelists who discussed the need to shutdown the controversial US detention center in Guantánamo, Cuba. To see the full photo gallery on the IACHR’s Flickr,  just click on the Visit Website button.',
        img: '/assets/guantanamocidh.jpg',
        link: 'https://www.flickr.com/photos/cidh/albums/72157661548742789/'
      }
    ]
  }
];
