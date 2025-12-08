export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration and open communication with clients and teams",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Based in Surat, Gujarat - Flexible with time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, NestJS, PostgreSQL, MongoDB",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full Stack Developer with 3+ years of experience building scalable web applications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Passionate about solving complex problems and building user-friendly solutions",
    description: "Continuous Learning & Innovation",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Elearning platform for student to Learn Online",
    des: "E-Learning revolutionizes education, breaking barriers of time and place.",
    img: "./pa1.svg",
    iconLists: ["./next.svg","./re.svg", "./tail.svg", "./ts.svg","./mongo.svg"],
    link: "https://github.com/parth799/E-Learning-Platform-server.git",
  },
  {
    id: 2,
    title: "Next-door (Estate Marketplace )",
    des: "Designed and implemented a comprehensive real estate marketplace platform using React, Node.js, and TypeScript.",
    img: "./estate.png",
    iconLists: ["./re.svg","./tail.svg", "./ts.svg","./c.svg","./mongo.svg"],
    link: "./ui.yoom.com",
  },
  {
    id: 3,
    title: "VibeCart (Ecommerce Website)",
    des: "Frontend development using Next.js for creating interactive, intuitive, and responsive user interfaces.",
    img: "./vibecart.png",
    iconLists: ["./re.svg", "./tail.svg", "./ts.svg", "./mongo.svg", "./figma.svg"],
    link: "./ui.aiimg.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner. I is Just A Junk Value For my Portfolio",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "./cloud.svg",
    nameImg: "./cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "./app.svg",
    nameImg: "./appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "./host.svg",
    nameImg: "./hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "./s.svg",
    nameImg: "./streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "./dock.svg",
    nameImg: "./dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer - Codehawk Technologies",
    desc: "Leading cross-functional teams in developing scalable web applications using React.js, Next.js, Node.js, and TypeScript. Driving projects from concept to deployment with focus on performance optimization and user experience.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
  },
  {
    id: 2,
    title: "Full-stack Developer Intern - Codehawk Technologies",
    desc: "Developed web-based platforms using React.js and Node.js, enhancing interactivity and performance. Collaborated with senior developers to implement best practices and modern development workflows.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 3,
    title: "Freelance MERN Stack Developer",
    desc: "Delivered full-stack web applications for clients using MongoDB, Express.js, React.js, and Node.js. Managed complete project lifecycle from requirements gathering to deployment and maintenance.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications",
    desc: "SDJ International College - Computer Science (July 2021 - July 2024). Built strong foundation in software development, algorithms, and modern web technologies.",
    className: "md:col-span-2",
    thumbnail: "./exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/parth799",
    img: "./git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/parth-desai-99169266",
    img: "./link.svg",
  },
];
