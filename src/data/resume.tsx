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
    // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/syed-shajahan',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/syed-shajahan-9669401aa/',
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
      href: '',
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
      href: '',
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
      image: '/vvtrepeaters.PNG',
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
  ],
} as const;
