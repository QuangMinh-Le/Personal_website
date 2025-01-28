import {
  mobile,
  backend,
  data,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  php,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  uOttawa,
  uOttawa1,
  BHSoft,
  threejs,
  project_littleEye,
  project_broscafe,
  project_roomBookingSystem,
  project_hackthefllush,
  project_expensecontrol,
  sbc,
  data_analysis,
  CMS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "Resume",
    title: "Resume",
    external: true, 
    url: "public/documents/QuangMinhLe-resume.pdf"
  },
];

const services = [
  {
    title: "Full-stack Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "AI gonna take over?",
    icon: backend,
  },
  {
    title: "At least I am locked in!",
    icon: data,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  //  {
  //    name: "docker",
  //    icon: docker,
  //  },
  {
    name: "uOttawa",
    icon: uOttawa1,
  },
];

const experiences = [
  {
    title: "IT and Project Assistant",
    company_name: "Canadian Mathematical Society",
    icon: CMS,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Dec 2024 | Co-op",
    points: [
      "Took ownership over the development and maintenance of CMS web applications, utilizing Python, Django, and Docker to deliver high-quality, tested, and operable code.",
      "Built proficiency in Linux for system administration and command-line operations (WSL2).",
      "Created a custom mobile app using Flutter Flow and JavaScript, allowing 500+ speakers to track their own schedules during the event."
    ],
  },
  {
    title: "DevOps Engineer, QA Engineer",
    company_name: "Univeristy of Ottawa",
    icon: uOttawa,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024 | Co-op",
    points: [
      "Executed end-to-end technical tasks by migrating 20 service APIs from Java-based ESB to Anansi format with Node.js, producing well-documented and tested code that improved API reliability.",
      "Assessed Vector Database Qdrant for AI migration readiness, supporting future AI capabilities.",
      "Worked with SQL Server and Oracle Server for data management and supported QA processes with Postman to uphold API reliability and performance."
    ],
  },
  {
    title: "Computing Analyst Assistant",
    company_name: "Univeristy of Ottawa",
    icon: uOttawa,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023 | Contract Full-time",
    points: [
      "Streamlined app installer storage to GitLab, enhancing version control and enabling efficient updates.",
      "Developed and customized 100+ app installers using PSAppDeployToolkit, including functionalities like disabling updates and configuring unique files.",
      "Efficiently coordinated end-to-end deployment through SCCM, ensuring seamless integration and widespread distribution."
    ],
  },
  {
    title: "Junior IT Technician/ Programmer",
    company_name: "Univeristy of Ottawa",
    icon: uOttawa,
    iconBg: "#E6DEDD",
    date: "October 2022 - April 2023 | Contract Part-time",
    points: [
      "Provide technical support to academic staff, including setting up, configuring, diagnosing, and repairing hardware, operating systems, and software.",
      "Develop and implement SCCM scripts for efficient mass deployment of software."
    ],
  },
  {
    title: "ReactJS Developer Intern",
    company_name: "Bac Ha Software Co., Ltd.",
    icon: BHSoft,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - August 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborate with cross-functional teams to develop and maintain front-end web applications using ReactJS, Redux Thunk, and Redux Saga.",
      "Apply TypeScript and TailwindCSS to improve coding efficiency in large-scale projects.",
      "Contribute to the design and development of responsive, user-friendly web interfaces and graphic content for events."
    ],
  },
];

const achievements = [
  {
    name: "Google Data Analytics Professional Certificate",
    achievement:
      "Completed Google's rigorous data analytics program, mastering essential data analysis tools, techniques, and methodologies. Proficient in data visualization, data cleaning, SQL, and R. Acquired practical skills to analyze and interpret data, enabling data-driven decision-making for improved business outcomes.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "R",
        color: "green-text-gradient",
      },
      {
        name: "Excel",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "yellow-text-gradient",
      },
    ],
    image: data_analysis,
    source_code_link: "https://www.coursera.org/account/accomplishments/professional-cert/FDGDKAW4S64F",
  },
  {
    name: "Top 40 Finalist | SBC 2021",
    achievement:
      "Top 40 Finalist in the Social Business Creation competition organized by HEC Montréal. Our team embarked on a mission to enhance the sleep quality of Vietnamese individuals by designing a cutting-edge smart pillow. This endeavor not only involved product innovation but also the establishment of a sustainable social business model.",
    tags: [
      {
        name: "Entrepeneurship",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "Teamwork",
        color: "pink-text-gradient",
      },
    ],
    image: sbc,
    source_code_link: "https://socialbusinesscreation.hec.ca/competing-projects/SBC2021_131_VN_KOSTRE/?fbclid=IwAR06zIH_ppirIZtWN9Xh8ptVtjmbgKRznjdDTyIuGbZyCu3TaIf-r2lw5L4",
  },

];

const projects = [
  {
    name: "Hack The Fllush | Hackathon Project | uottaHack 2025",
    description:
      "Real-time IoT web app using sensor data to track restroom availability, powered by Solace PubSub+ for instant updates, with a responsive React interface, optimizing real-time data streaming and user interaction",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Solace PubSub+ Cloud",
        color: "yellow-text-gradient",
      },
    ],
    image: project_hackthefllush,
    source_code_link: "https://github.com/QuangMinh-Le/uottahack2025",
  },
  {
    name: "LittleEye | Hackathon Project | Hack The Hill 2023",
    description:
      "A web application, Little Eye, that helps blind and colorblind individuals identify objects and colors using voice commands. Utilize Python and ReactJS to process data from Google Vision and Google Cloud Speech-to-Text APIs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
      {
        name: "Google APIs",
        color: "yellow-text-gradient",
      },
    ],
    image: project_littleEye,
    source_code_link: "https://devpost.com/software/little-eye",
  },
  {
    name: "Expense Control Project",
    description:
      "A web application developed with the Django framework, PostgreSQL database, and Bootstrap for responsive design. Enables users to track personal finances, add expenses and income, monitor spending patterns, and make adjustments to manage their budget effectively.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "yellow-text-gradient",
      },
    ],
    image: project_expensecontrol,
    source_code_link: "https://github.com/QuangMinh-Le/expense-control-project",
  },
  {
    name: "Room Booking System | School Project",
    description:
      "A full-stack web application, implementing a hotel booking system with selection, payment processing, and reservation tracking features.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project_roomBookingSystem,
    source_code_link: "https://github.com/minhlqBHsoft/our-mansion",
  },
  {
    name: "Restaurant Management System | School Project",
    description:
      "An Android application, implementing a restaurant management system. User can create online menu, online store which allows clients to order online, track sold items, and much more.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: project_broscafe,
    source_code_link: "https://github.com/uOttawaSEGA2022/projet-broscafe",
  },
];

export { services, technologies, experiences, achievements, projects };