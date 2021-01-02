/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Ayodele S. Adebayo",
  logo_name: "Unclebay_143",
  nickname: "Frontend Developer",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable user-friendly softwares to create impact.",
  resumeLink:
    "https://ayodelesamueladebayo.netlify.app/assets/resume/Ayodele%20Samuel%20Adebayo.pdf",
  github_account: "https://github.com/unclebay143",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/unclebay143",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayodele-samuel-ayodele-55902819a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/unclebay143",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/unclebay",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Frontend Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive interfaces using CSS 3 Technologies",
        "⚡ Building fast and scalable web-solutions using React JS",
        "⚡ Building Interfaces for backend API data",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying web-based solutions on Heroku",
        "⚡ Hosting websites on Netlify with continuous deployment",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Hacktoberfest",
      iconifyClassname: "simple-icons:digitalocean",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://hacktoberfest.digitalocean.com/",
    },
    {
      siteName: "W3School",
      iconifyClassname: "simple-icons:w3c",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.w3schools.com/",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://www.freecodecamp.org/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Federal Polytechnic Bida, Niger State",
      subtitle: "OND. in Computer Science",
      logo_path: "federal_polytechnic_bida.jpg",
      alt_name: "FPB, Niger State",
      duration: "2018 - Present",
      descriptions: [
        "⚡ Learning the fundamentals of Computer Science",
        "⚡ Apart from this I am also Learning, Data Structure theory, Algorithm and Fundamental Programming Elements.",
        "⚡ .",
      ],
      website_link: "https://fedpolybida.edu.ng/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML 5 & CSS 3",
      subtitle: "- W3school",
      logo_path: "w3school_certificate.png",
      certificate_link:
        "https://certification.w3schools.com/w3certified.asp?email=unclebigbay@gmail.com",
      alt_name: "W3School",
      color_code: "#CCCCCC",
    },
    {
      title: "JavaScript",
      subtitle: "- W3school",
      logo_path: "w3school_certificate.png",
      certificate_link:
        "https://certification.w3schools.com/w3certified.asp?email=unclebigbay@gmail.com",
      alt_name: "W3School",
      color_code: "#CCCCCC",
    },
    {
      title: "Frontend Development",
      subtitle: "- TIIDELab Initiative",
      logo_path: "tiidelab_certificate.png",
      certificate_link: "https://www.tiidelab.com",
      alt_name: "deeplearning.ai",
      color_code: "#CC5599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have picked and worked on personal projects, as well as Open Source Project which have helped me acquired more skills,  ",
  header_image_path: "experience.svg",
  sections: [
    // {
    // title: "Work",
    // experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - PRESENT",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //     {
    //       title: "Android and ML Developer",
    //       company: "Muffito Incorporation",
    //       company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //       logo_path: "muffito_logo.png",
    //       duration: "May 2018 - Oct 2018",
    //       location: "Pune, Maharashtra",
    //       description:
    //         "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //       color: "#9b1578",
    //     },
    //     {
    //       title: "Android Developer",
    //       company: "FreeCopy Pvt. Ltd.",
    //       company_url: "https://www.linkedin.com/company/freecopy/about/",
    //       logo_path: "freecopy_logo.png",
    //       duration: "Nov 2017 - Dec 2017",
    //       location: "Ahmedabad, Gujarat",
    //       description:
    //         "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //       color: "#fc1f20",
    //     },
    //   ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Developer",
          company: "TIIDELab Initiative.",
          company_url: "https://www.tiidelab.com",
          logo_path: "tiidelab_certificate.jpg",
          duration: "Aug 2020 - January 2020",
          location: "Harare street, Wuse zone 2, Abuja",
          description:
            "During my internship at TIIDELab I chaired the group of Developers working on an employee web-based timesheet. There were two objectives: (1) Build a solution for employee forgetting to start their timer. (2) Implement a collaborative online environment for remote works for delegating tasks with their progress, and getting paid based on time spent doing the task. I have closely worked with JavaScript and React JS to improve user interface and experience. The project was built with React JS and Node JS.",
          color: "#ee3c26",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Hacktoberfest 2020, ZeroToMastery, easy-to-git etc. These contributions include bug fixes, feature requests, adding of features and formulating proper documentation for project.",
          color: "#181717",
        },
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is working with React JS & Redux connected to Node API to create a single webpage Employee Timesheet and deploy using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "unclebay143.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development with technologies such as JavaScript, React, Bootstrap and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I also have the habit of documenting my programming journey as well as every interesting topics or bug I come across as a developer.",
    link: "https://medium.com/@unclebay143",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Forestry Area, Bako, Gwagwalada, Abuja",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/iPhf6XNPe1nvmnhS7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 8083826262",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
