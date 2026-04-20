import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    itask,
    mytextutils,
    baitunnasr,
    threejs,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
  {
    title: "Frontend Developer",
    company_name: "HTML, CSS, JavaScript",
    icon: html,
    iconBg: "#383E56",
    date: "March 2024 - Dec 2024",
    points: [
      "Built responsive and interactive UI using HTML, CSS, and JavaScript.",
      "Converted UI designs into clean, pixel-perfect web pages.",
      "Improved performance and ensured mobile responsiveness across devices."
    ],
  },
  {
    title: "React Native Developer",
    company_name: "React Native",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - March 2025",
    points: [
      "Developed mobile applications using React Native.",
      "Integrated APIs and managed application state efficiently.",
      "Collaborated with designers and backend developers for smooth UI/UX."
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Python, SQL, MongoDB",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "April 2025 - Dec 2025",
    points: [
      "Built RESTful APIs using Python (Flask/Django).",
      "Managed SQL and MongoDB databases for data storage.",
      "Implemented authentication and secure backend services."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Developing full-stack web apps using React and Nodejs.",
      "Connecting frontend with backend via REST APIs.",
      "Working with SQL and MongoDB for scalable data handling.",
      "Ensuring performance, security, and responsive design."
    ],
  },
];
  
  const testimonials = [
    {
    testimonial:
      "The iTask Planner is very intuitive and helped me organize daily tasks better. The drag-and-drop feel and clean design make it easy to use.",
    name: "Productivity User",
    designation: "Student (Project Feedback)",
    company: "iTask Planner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "MyText Utils made text formatting and quick editing much faster. The clean UI and simple tools helped me complete tasks efficiently.",
    name: "Portfolio User",
    designation: "Developer (Project Feedback)",
    company: "MyText Utils",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Baitun Nasr Islamic Finance project presents financial information in a clear and structured way. The interface feels professional and trustworthy.",
    name: "Finance App User",
    designation: "Demo Client Feedback",
    company: "Baitun Nasr Islamic Finance",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];
  
  const projects = [
    {
      name: "i-Task Planner",
      description:
        "i Task Planner helps you organize your daily schedule with ease. Simply create, manage, and track your tasks . Stay on top of your routine with a user-friendly, simple interface designed.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: itask,
      source_code_link: "https://itask-planner.netlify.app/",
    },
    {
      name: "MyTextUtils",
      description:
        "A simple, user-friendly tool for converting text to uppercase, lowercase, cleaning formatting, copying content, and enhancing text editing productivity online.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mytextutils,
      source_code_link: "https://mytextutils.netlify.app/",
    },
    {
      name: "BaitUnNasr.Co-Op",
      description:
        "A responsive platform for Bait-un-Nasr Co-operative Bank providing banking services, updates, forms, loan details, announcements, and customer-centric financial information.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: baitunnasr,
      source_code_link: "https://baitunnasr.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };