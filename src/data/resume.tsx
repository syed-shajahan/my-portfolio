import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Shaju',
  initials: 'HG',
  url: 'https://dillion.io',
  location: 'Chennai, India',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'Frontend UI Engineer with background in React and Next.js. Former Software Engineer, now focused on creating intuitive user experiences.',
  summary:
    'Engineer and mentor from Chennai, India, with a double degree in Computer Applications. React, Next.js, and TypeScript enthusiast. Turning coffee into code and sharing tech fun on Instagram.',
  avatarUrl: 'https://i.pinimg.com/564x/2f/60/e9/2f60e942b23d995c8783069bfbc7f1cb.jpg',
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
      title: 'Full Stack Engineer',
      logoUrl: '/vvts.png',
      start: 'Feb 2023',
      end: 'Present',
      description:
        'Developed and maintained high-performance web applications using React JS, Next JS, and TypeScript to enhance user experience and efficiency. Implemented responsive designs with MUI and integrated front-end components with backend services via Node.js and Express.js. Designed robust server-side logic and APIs with Node.js and Express.js, efficiently handling data storage and management with MySQL. Led the implementation of a multi-tenant architecture, serving over 80 institutions, allowing for efficient user experience management. Collaborated with cross-functional teams to define project requirements and design architecture, improving project delivery times by 20%. Optimized application performance and scalability through code reviews, testing, and continuous integration.',
    },
    {
      company: 'Kitkat Software Technologies',
      badges: [],
      href: 'https://kitkatsoftwaretechnologies.com',
      location: 'Coimbatore, India',
      title: 'Software Developer and Mentor (Intern)',
      logoUrl: '/kitkat-soft-logo.png',
      start: 'Sep 2022',
      end: 'Feb 2023',
      description:
        'During my internship, I developed and maintained web applications using React JS, enhancing their functionality and responsiveness. I assisted in implementing TypeScript to improve code quality and maintainability. I worked closely with a team of developers to deliver high-quality software solutions, adhering to project timelines. I also mentored junior interns, guiding them on best practices in front-end development and fostering a collaborative learning environment. Additionally, I gained experience with backend technologies such as Node.js, Express, and RESTful APIs, contributing to server-side logic and API development. Git was utilized for version control, ensuring smooth collaboration and code integrity.',
    },
  ],
  education: [
    {
      school: 'Hindusthan College of Engineering & Technology',
      href: 'https://hicet.ac.in',
      degree: "Master's Degree of Computer Application (MCA)",
      logoUrl: '/hicet-logo.jpg',
      start: '2020',
      end: '2022',
    },
    {
      school: 'JJ College of Arts & Science',
      href: 'https://www.jjcoll.in',
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: '/jj-logo.jpg',
      start: '2017',
      end: '2020',
    },
  ],
  projects: [
    {
      title: 'Institutional Test Preparation App',
      href: '#',
      dates: 'March 2024 - Present',
      active: true,
      description:
        'Developed a B2B web application designed for schools and educational institutions to enhance student performance in NEET and JEE exams. Serving over 80+ institutions, the platform allows for customized tests, assignments, and performance tracking, with both offline and online analysis capabilities.',
      technologies: [
        'React',
        'Typescript',
        'Redux toolkit',
        'MaterialUI',
        'Sequlize',
      ],
      links: [],
      image: '',
      video: '',
    },
    {
      title: 'NEET and JEE Test Preparation',
      href: 'https://magicui.design',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Created a B2C website offering personalized study resources for NEET and JEE exams, integrating features such as dynamic test taking resources and CCAvenue payment gateway.',
      technologies: [
        'Next.js',
        'Typescript',
        'Recoil',
        'Headless UI',
        'TailwindCSS',
        'CC Avenue',
      ],
      links: [],
      image: '',
      video: '',
    },
    {
      title: 'College Selection Platform',
      href: '#',
      dates: 'April 2023 - September 2023',
      active: true,
      description:
        'Contributed to an online platform for college selection, implementing intuitive UI elements and dynamic content using React JS and Next JS',
      technologies: [
        'Next.js',
        'Typescript',
        'Redux toolkit',
        'Prisma',
        'Meterial UI',
      ],
      links: [],
      image: '',
      video: '',
    },
    {
      title: 'Netflix Streaming App - Clone',
      href: '#',
      dates: 'September 2022 - September 2022',
      active: true,
      description:
        'Developed a web application resembling Netflix for streaming content, utilizing TMDB API for movie data, Firebase Authentication for user management, and Redux Toolkit for state management.',
      technologies: ['React', 'Javascript', 'Firebase', 'Meterial UI'],
      links: [
        {
          type: 'Website',
          href: 'https://netflix-clone01.vercel.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '',
    },
    {
      title: 'eCommerce App',
      href: '#',
      dates: 'March 2021 - May 2021',
      active: true,
      description:
        'Developed an eCommerce application for managing shoe product orders, sales, and stock, featuring online payment integration.',
      technologies: ['React', 'Javascript', 'Firebase', 'Meterial UI'],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/hari-str/sportyfit-shoe-shop',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
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
