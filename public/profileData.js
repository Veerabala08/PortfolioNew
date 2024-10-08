const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Veerabala',
    description:
      "I’m a Junior Developer. I help create applications that address customer needs and solve complex challenges related to both Frontend and Backend. My expertise lies within the Backend. Learning and trying out new tech is something I'm all about. I'd thrive in a place that values creative thinking, teamwork, and independence.",
    resume: 'https://drive.google.com/file/d/1R-oXxFJfsUkgvI5a-9WVqXM5-97HpuUm/view?usp=sharing',
    linkedin: 'https://www.linkedin.com/in/veerabala-maruthaiyan-503015185/',
    github: 'https://github.com/Veerabala08',
  }
  
  const projects = [
    {
        id:1,
      name: 'Spotify Web API',
      description:
        'A command-line app where you can fetch the top 10 albums of your favorite artist using Spotify Web API.',
      stack: ['Python', 'REST-API'],
      sourceCode: 'https://github.com/Veerabala08/Spotify_api',
      livePreview: '',
    },
    {
        id:2,
      name: 'Learning Log',
      description:
        "An online journal system that lets you keep track of information you've learned about particular topics.",
      stack: ['Python', 'Django', 'Bootstrap'],
      sourceCode: 'https://github.com/Veerabala08/Learning_Log',
      livePreview: '',
    },
    {
        id:3,
      name: 'Chatting App',
      description:
        'Create, Connect, Chat: Where Every Room Tells a Story.Chatting app were the user can create chatrooms and have chat mutiple user.',
      stack: ['HTML/CSS', 'SocketIO', 'Flask'],
      sourceCode: 'https://github.com/Veerabala08/Chatting_App',
      livePreview: '',
    },
    {
        id:4,
      name: 'Portfolio',
      description:
        'Webpage to showcase the  skills and projects  that I have created. If you are reading this, you are on the website itself. You can send me mail through it.',
      stack: ['React','Netlify','Git'],
      sourceCode: 'https://github.com/Veerabala08/PortfolioNew',
      livePreview: 'https://veerabala-portfolio.netlify.app/',
      img:'PortfolioNew'
    },
    {
      id:5,
    name: 'Dashboard',
    description:
      'Working on a Beautiful Dashboard Application using nextJS 14 with mongoDb.',
    stack: ['Nextjs','Vercel','Mongodb','Git'],
    sourceCode: 'https://github.com/Veerabala08/dashboardNextjs',
    livePreview: '',
    img:'dashboardNextjs'
  },
    {
      id:6,
    name: 'Ecommerce Store',
    description:
      'This web application simulates an online shop where users can browse products, add them to their cart, and proceed to checkout. The project incorporates the oncepts of React for building user interfaces and Redux for managing application state in a predictable way.',
    stack: ['React','Redux','Vercel','Git'],
    sourceCode: 'https://github.com/Veerabala08/shop',
    livePreview: 'https://online-store-one-ruby.vercel.app',
    img:'shop'
  },
  ]
  const experience = [{
    from: 'Nov 2022',
    to: 'Oct 2023',
    role: 'Associate Digital Engineer',
    location:'Rapidqube Digital Solutions, Chennai',
    description: `Customising and Developing new features on an Web-based ERP prototype product.
Created and shipped new features and added improvements to existing CRM software using Python and Javascript.
Written queries for various reports development and for the APIs.
Worked closely with the Devops team on technical, maintenance and performance issues.
Developed a good understanding of commercial terms and coordinated with colleagues to ensure seamless project execution.
Attended daily stand-up meetings to communicate progress, identify blockers and collaborate with team members.
`
  },
  {
    from: 'May 2024',
    to: 'present',
    role: 'Software Engineer Trainee',
    location:'Doodleblue Innovations, Chennai',
    description: `Developed and maintained web applications using React and Redux, ensuring clean and robust code. Utilised Vitest for testing to ensure high code quality and reliability.
Implemented responsive UI components to enhance user experience.
Participated in daily stand-up meetings to communicate progress, identify blockers.
 `},
  ]
  const skills = ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'GIT', 'GitHub', 'Postman API', 'Ubuntu', 'Frappe', 'Django', 'Flask', 'Ajax', 'Jquery', 'React']
  
  const contact = {
    email: 'veerabalamaruthaiyan@gmail.com',
  }
  
  export { about, projects, skills, contact, experience }