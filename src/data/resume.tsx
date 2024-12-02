import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Shaju',
  initials: 'HG',
  url: 'https://dillion.io',
  location: 'Chennai, India',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'Front-End | UI Developer with background in React and Next.js. Former Web Desinger, now focused on creating intuitive user experiences.',
  summary: `Hey! I’m a Front-End Developer with 3+ years of experience building sleek, intuitive web experiences. I specialize in React, Next.js, and TypeScript, blending clean design with seamless functionality to create responsive interfaces and scalable solutions. Passionate about innovation and impact, I’m all about turning ideas into digital experiences that stand out. Let’s make something amazing together!`,
  avatarUrl: '/illu.jpeg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    // 'Node.js',
    // 'Express.js',
    'Prisma',
    'shadcn ui',
    'MaterialUI',
    'TailwindCSS',
    'Docker',
    'Git',
    'GitHub',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/hari-str',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hariharanganesan99/',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/dillion-twitter',
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/dillion-youtube',
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'VVT Solutions Pvt Ltd',
      href: 'https://vvtsolutions.in',
      badges: [],
      location: 'Chennai, India',
      title: 'Front-End Developer',
      logoUrl: '/vvts.png',
      start: 'May 2022',
      end: 'Dec 2024',
      description:
        'As a Front-End Developer for 3.8 years, I built responsive, scalable web apps like neet.guide and collegesuggest.com using React, Next.js, and TypeScript. I transformed designs into functional interfaces, ensured mobile responsiveness, and played a key role in launching live projects. I also collaborated on integrating Prisma and optimizing performance for seamless user experiences.',
    },
    {
      company: 'Braintree Infotech',
      badges: [],
      href: 'https://kitkatsoftwaretechnologies.com',
      location: 'Coimbatore, India',
      title: 'Junior Web Designer',
      logoUrl: '/braintreelogo.jpg',
      start: 'Sep 2022',
      end: 'Feb 2023',
      description:
        'Spent 1 year as a Junior Web Designer, creating clean, user-friendly web designs and sharpening my skills in HTML, CSS, and JavaScript. This role laid the foundation for my passion for front-end development and taught me the importance of crafting accessible and visually engaging designs.',
    },
  ],
  education: [
    {
      school: 'Mohammed sathak arts and science college',
      href: 'https://www.mscartsandscience-edu.in/',
      degree: 'Bsc Computer Science (BSC.CS)',
      logoUrl: '/clglogo.png',
      start: '2014',
      end: '2017',
    },
    // {
    //   school: 'JJ College of Arts & Science',
    //   href: 'https://www.jjcoll.in',
    //   degree: "Bachelor's Degree of Computer Application (BCA)",
    //   logoUrl: '/jj-logo.jpg',
    //   start: '2017',
    //   end: '2020',
    // },
  ],
  projects: [
    {
      title: 'NEET.Guide',
      href: '#',
      dates: 'OCT 2024 - Present',
      active: true,
      description:
        'Developed neet.guide, an AI-powered learning platform tailored for NEET aspirants. The platform provides personalized study plans, practice tests, and dynamic performance tracking. Integrated advanced AI algorithms to adapt the study material based on student progress, ensuring effective learning. Technologies used include React, TypeScript, Tailwind CSS, Shadcn, and Prisma.',
      technologies: ['React', 'Typescript', 'Redux toolkit', 'Tailwind CSS', 'S'],
      links: [
        {
          type: 'Website',
          href: 'https://neet.guide/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/neetguide.png',
      video: '',
    },
    {
      title: 'College Suggest',
      href: 'https://magicui.design',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Worked on CollegeSuggest.com, a platform designed to help students find suitable colleges based on their preferences. Focused on creating an intuitive, dynamic user interface with advanced search and filter functionalities. Ensured seamless responsiveness and integration across devices. Key technologies: React, TypeScript, Next.js, MUI, Tailwind CSS.',
      technologies: ['Next.js', 'Typescript', 'Redux toolkit', 'Prisma', 'MaterialUI', 'React'],
      links: [
        {
          type: 'Website',
          href: 'https://www.collegesuggest.com/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/cg.png',
      video: '',
    },
    {
      title: 'Asta Properties',
      href: '#',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Developed a sleek and responsive landing page for Asta Properties, focusing on delivering a user-friendly experience for property browsing. Designed intuitive navigation and incorporated dynamic features to highlight key services, ensuring easy access to listings and property details. The page is fully optimized for a smooth experience across all devices.',
      technologies: ['Next.js', 'Typescript', 'Redux toolkit', 'Prisma', 'Meterial UI'],
      links: [
        {
          type: 'Website',
          href: 'https://astaproperties.com/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/asta.png',
      video: '',
    },
    {
      title: 'Institute TopAll',
      href: '#',
      dates: 'September 2022 - September 2022',
      active: true,
      description: `Developed a user-friendly and responsive landing page for Institute TopAll, designed to engage visitors and promote the platform's features. Focused on creating clear navigation and dynamic content that effectively presents the platform's services. Optimized for a seamless experience across all devices, ensuring easy access to key information.`,
      technologies: ['React', 'Javascript', 'Firebase', 'Meterial UI'],
      links: [
        {
          type: 'Website',
          href: 'https://institute.topall.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/itopall.png',
      video: '',
    },
    {
      title: ` NEET Repeaters Course`,
      href: '#',
      dates: 'March 2021 - May 2021',
      active: true,
      description: `Developed a clean, engaging landing page for VVT Coaching's NEET Repeaters Course, aimed at providing students with the essential information and resources to prepare for the NEET exam. Focused on clear calls to action, course details, and testimonials. The page is responsive and optimized for a seamless experience across devices, guiding users to easily register and access course information.`,
      technologies: ['React', 'Javascript', 'Firebase', 'Meterial UI'],
      links: [
        {
          type: 'Website',
          href: 'https://www.vvtcoaching.com/neet-repeaters-course/?utm_source=organic+home&utm_medium=website&utm_campaign=NRC+2025&utm_content=carousel+banner',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/vvtrepeaters.png',
      video: '',
    },
    {
      title: ` MyDD Points`,
      href: '#',
      dates: 'March 2021 - May 2021',
      active: true,
      description: `Worked on the development of MyDD Points and various eCommerce websites, focusing on optimizing user experience and design. Contributed to creating responsive, interactive interfaces, ensuring seamless navigation and functionality. Enhanced eCommerce features for better product presentation and streamlined user interaction across devices.`,
      technologies: ['React', 'Javascript', 'Firebase', 'Meterial UI'],
      links: [
        {
          type: 'Website',
          href: 'https://mydd.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/ddpoints.png',
      video: '',
    },
    // {
    //   title: 'Automatic Chat',
    //   href: 'https://automatic.chat',
    //   dates: 'April 2023 - March 2024',
    //   active: true,
    //   description:
    //     'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
    //   technologies: [
    //     'Next.js',
    //     'Typescript',
    //     'PostgreSQL',
    //     'Prisma',
    //     'TailwindCSS',
    //     'Shadcn UI',
    //     'Magic UI',
    //     'Stripe',
    //     'Cloudflare Workers',
    //   ],
    //   links: [
    //     {
    //       type: 'Website',
    //       href: 'https://automatic.chat',
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: '',
    //   video:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
    // },
  ],
  hackathons: [
    // {
    //   title: 'Hack Western 5',
    //   dates: 'November 23rd - 25th, 2018',
    //   location: 'London, Ontario',
    //   description:
    //     'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
    //   links: [],
    // },
    // {
    //   title: 'Hack The North',
    //   dates: 'September 14th - 16th, 2018',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed a mobile application which delivers university campus wide events in real time to all students.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
    //   links: [],
    // },
    // {
    //   title: 'FirstNet Public Safety Hackathon',
    //   dates: 'March 23rd - 24th, 2018',
    //   location: 'San Francisco, California',
    //   description:
    //     'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
    //   icon: 'public',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
    //   links: [],
    // },
    // {
    //   title: 'DeveloperWeek Hackathon',
    //   dates: 'February 3rd - 4th, 2018',
    //   location: 'San Francisco, California',
    //   description:
    //     'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
    //   links: [
    //     {
    //       title: 'Github',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/cryptotrends/cryptotrends',
    //     },
    //   ],
    // },
    // {
    //   title: 'HackDavis',
    //   dates: 'January 20th - 21st, 2018',
    //   location: 'Davis, California',
    //   description:
    //     'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
    //   win: 'Best Data Hack',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
    //   links: [
    //     {
    //       title: 'Devpost',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://devpost.com/software/my6footprint',
    //     },
    //     {
    //       title: 'ML',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/Wallet6/my6footprint-machine-learning',
    //     },
    //     {
    //       title: 'iOS',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/Wallet6/CarbonWallet',
    //     },
    //     {
    //       title: 'Server',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/Wallet6/wallet6-server',
    //     },
    //   ],
    // },
    // {
    //   title: 'ETH Waterloo',
    //   dates: 'October 13th - 15th, 2017',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
    //   links: [
    //     {
    //       title: 'Organization',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/ethdocnet',
    //     },
    //   ],
    // },
    // {
    //   title: 'Hack The North',
    //   dates: 'September 15th - 17th, 2017',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed a virtual reality application allowing users to see themselves in third person.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
    //   links: [
    //     {
    //       title: 'Streamer Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/justinmichaud/htn2017',
    //     },
    //     {
    //       title: 'Client Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/RTSPClient',
    //     },
    //   ],
    // },
    // {
    //   title: 'Hack The 6ix',
    //   dates: 'August 26th - 27th, 2017',
    //   location: 'Toronto, Ontario',
    //   description:
    //     'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/ShareShip/ShareShip',
    //     },
    //     {
    //       title: 'Site',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://share-ship.herokuapp.com/',
    //     },
    //   ],
    // },
    // {
    //   title: 'Stupid Hack Toronto',
    //   dates: 'July 23rd, 2017',
    //   location: 'Toronto, Ontario',
    //   description:
    //     'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/nsagirlfriend/nsagirlfriend',
    //     },
    //   ],
    // },
    // {
    //   title: 'Global AI Hackathon - Toronto',
    //   dates: 'June 23rd - 25th, 2017',
    //   location: 'Toronto, Ontario',
    //   description:
    //     'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
    //   win: '1st Place Winner',
    //   links: [
    //     {
    //       title: 'Article',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
    //     },
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/TinySamosas/',
    //     },
    //   ],
    // },
    // {
    //   title: 'McGill AI for Social Innovation Hackathon',
    //   dates: 'June 17th - 18th, 2017',
    //   location: 'Montreal, Quebec',
    //   description:
    //     'Developed realtime facial microexpression analyzer using AI',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
    //   links: [],
    // },
    // {
    //   title: 'Open Source Circular Economy Days Hackathon',
    //   dates: 'June 10th, 2017',
    //   location: 'Toronto, Ontario',
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
    //   win: '1st Place Winner',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/genecis',
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: 'May 19th - 21st, 2017',
    //   location: 'International',
    //   description: 'Improved PocketDoc and submitted to online competition',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
    //   win: 'Top 10 Finalist | Honourable Mention',
    //   links: [
    //     {
    //       title: 'Medium Article',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
    //     },
    //     {
    //       title: 'Devpost',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://devpost.com/software/pocketdoc-react-native',
    //     },
    //     {
    //       title: 'YouTube',
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
    //     },
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/pocketdoc-react-native',
    //     },
    //   ],
    // },
    // {
    //   title: 'HackMining',
    //   dates: 'May 12th - 14th, 2017',
    //   location: 'Toronto, Ontario',
    //   description: 'Developed neural network to optimize a mining process',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
    //   links: [],
    // },
    // {
    //   title: 'Waterloo Equithon',
    //   dates: 'May 5th - 7th, 2017',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
    //   links: [
    //     {
    //       title: 'Devpost',
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: 'https://devpost.com/software/pocketdoc-react-native',
    //     },
    //     {
    //       title: 'YouTube',
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
    //     },
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/pocketdoc-react-native',
    //     },
    //   ],
    // },
    // {
    //   title: 'SpaceApps Waterloo',
    //   dates: 'April 28th - 30th, 2017',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/earthwatch',
    //     },
    //   ],
    // },
    // {
    //   title: 'MHacks 9',
    //   dates: 'March 24th - 26th, 2017',
    //   location: 'Ann Arbor, Michigan',
    //   description:
    //     'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/threejs-planes',
    //     },
    //   ],
    // },
    // {
    //   title: 'StartHacks I',
    //   dates: 'March 4th - 5th, 2017',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
    //   win: '1st Place Winner',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
    //   links: [
    //     {
    //       title: 'Source (Mobile)',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/mattBlackDesign/recipic-ionic',
    //     },
    //     {
    //       title: 'Source (Server)',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/mattBlackDesign/recipic-rails',
    //     },
    //   ],
    // },
    // {
    //   title: 'QHacks II',
    //   dates: 'February 3rd - 5th, 2017',
    //   location: 'Kingston, Ontario',
    //   description:
    //     'Developed a mobile game which enables city-wide manhunt with random lobbies',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
    //   mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
    //   links: [
    //     {
    //       title: 'Source (Mobile)',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/dillionverma/human-huntr-react-native',
    //     },
    //     {
    //       title: 'Source (API)',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/mattBlackDesign/human-huntr-rails',
    //     },
    //   ],
    // },
    // {
    //   title: 'Terrible Hacks V',
    //   dates: 'November 26th, 2016',
    //   location: 'Waterloo, Ontario',
    //   description:
    //     'Developed a mock of Windows 11 with interesting notifications and functionality',
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
    //     },
    //   ],
    // },
    // {
    //   title: 'Portal Hackathon',
    //   dates: 'October 29, 2016',
    //   location: 'Kingston, Ontario',
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
    //   links: [
    //     {
    //       title: 'Source',
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: 'https://github.com/UWPortalSDK/crowmark',
    //     },
    //   ],
    // },
  ],
} as const;
