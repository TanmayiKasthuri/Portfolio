import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isMobile : boolean = false;
  showAllProjects : boolean = false;
  //resumeURL = "https://firebasestorage.googleapis.com/v0/b/mahith-portfolio.appspot.com/o/Mahith_Murari_Resume_apr18.pdf?alt=media&token=4875186c-5309-49e9-8133-ae99e100ad2a";
  resumeURL = "https://drive.google.com/file/d/1M1ZKFflmGXrs4caMp665b2SgG9gVaGP7/view";

  PStext = "I began my journey at Powerschool as an Engineering intern in August 2020 and later continued as a full-time employee from June 2021 to July 2022. During this period, I was involved in the development of the Enrollment product of Powerschool, utilizing a tech stack that included Angular, Asp.Net MVC, WebApi, GitLab, Sourcetree, and Sql server, among others.";

  fitconnectText = "Designed a web-based social media application for fitness enthusiasts, enhancing user experience by efficiently tracking locations and delivering personalized recommendations. The app provides tailored suggestions for races and clubs based on user preferences and activity levels. Integrated advanced geolocation features to track user movements in real-time and offer relevant fitness activities nearby. This project aimed to foster a community of fitness enthusiasts by enabling users to discover and participate in local fitness events and clubs, ultimately promoting a healthier and more active lifestyle.";

  easyconsultText = "This is a cutting-edge healthcare communication solution named Easyconsult. Leveraging MongoDB Atlas for a robust database, and building RESTful API endpoints with Express and Node.js, I created a seamless real-time interaction platform for doctors and patients using ReactJS on the frontend. The application employs WebSocket communication for live updates during consultations. Easyconsult features dynamic QR code generation for consultations, transparent disease/condition selection with medication details, secure user authentication, and consultation review capabilities. This innovative two-pronged app fosters enhanced doctor-patient communication, improving adherence to medical instructions and patient empowerment.";

  shopitText = "With a commitment to promoting eco-conscious buying and selling, ShopIt provides a seamless online marketplace where users can effortlessly browse and purchase environmentally-friendly products. Harnessing the Django ORM (Object-Relational Mapping) capabilities, ShopIt ensures efficient data management and seamless interactions between the backend and frontend. Under the hood, PostgreSQL serves as the backbone of our database, ensuring reliability, scalability, and performance. With PGAdmin as our user-friendly interface, database management becomes a breeze and optimizes data operations";

  powerplayText = "As part of Hackathon at PowerSchool, I designed and deployed an event management web application to improve the tracking and organization of social events. The implementation of this application resulted in a 50% reduction of workload for the HR department. I received recognition for designing this project, which was later proposed to be integrated into the company's real-time application. The integration would enhance tracking and notification capabilities for various events and activities in schools.";

  everydaycookText = "EverydayCook is a recipe finder app built with django as backend, the frontend with React, and the app was deployed using AWS services like EC2 and S3. It allows users to input available ingredients to receive dish recommendations and serves as an electronic cookbook with detailed recipes and cooking times."

  ngOnInit() {

    // this.service.getAllData().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ key: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // ).subscribe(objectsFromDB => {
    //   console.log(objectsFromDB)
    // });

    let scroll = document.getElementById("scroll");
    if(scroll !== null)
      scroll.style.maxHeight = window.screen.availHeight+"px";
    let introduction = document.getElementById("introduction")
    if(introduction !== null)
      introduction.style.maxHeight = window.screen.availHeight+"px";
    //introduction

    // console.log(window.screen.availHeight)
    // console.log(window.screen.height)

    if(screen.width <= 480) {     
      this.isMobile = true;      
    }
  }

  goto(id :string)
  {
    // console.log(id)
    // console.log(document.getElementById(id));
    let node = document.getElementById(id);
    if(node !== null)
      node.scrollIntoView({ behavior: "smooth",block: "start"});
  }

  gototop()
  {
    let introduction = document.getElementById("introduction")
    if(introduction !== null)
      introduction.scrollIntoView({ behavior: "smooth",block: "center"});
  }

  ProfileData = {
      "name" : "TanmayiKasthuri",
      "caption" : "I believe in Consistency",
      "summary" : "Attending GHC'2023, Graduate Student Assistant - Software Developer at University of Florida, Pursuing MS in CS at University of Florida, Ex-Software Engineer Intern at Infotech Inc., Ex- Software Engineer at PowerSchool Group LLC, Ex-VITian",
      "mainSummary" : "Dedicated Computer Scientist and Software Engineer, I combine a strong foundation in computer science with a passion for creating impactful tech solutions. With hands-on experience in Full Stack Development and expertise in Web Technologies, AI, and IoT, I thrive on crafting innovative solutions that seamlessly blend user needs with cutting-edge technology. \nMy journey has taken me from transforming outdated web interfaces into modern, engaging modules to developing serverless Progressive Web Applications with 1600+ downloads. I excel in tackling complex challenges, from optimizing codebases to orchestrating headless Selenium test video recording for efficient CI debugging. \nCommitted to staying at the forefront of technology trends, I am driven to shape the future through innovation. Aspiring to lead tech-driven initiatives and cultivate collaborative environments, I invite you to join me on this exciting journey of technological advancement and transformation.",
      "endSummary" : "Always open to connect with people. Most of my projects are open-source, so if you have any questions or just want to connect with me, feel free to ping me, lets collaborate and build better tech.",
      "photoUrl" : "https://drive.google.com/file/d/1xCo-XLD-YUoFEOAUoRfkOKgpQSD0jYXN/view?usp=drive_link",
      "email" : "mailto:mahithmurari@gmail.com",
      "links" : [
          {
              "linkUrl" : "https://mahith-murari.web.app/",
              "icon" : "",
              "name" : "Portfolio"
          },
          {
              "linkUrl" : "https://www.linkedin.com/in/mahith-murari-23b2881a3",
              "icon" : "",
              "name" : "LinkedIn"
          },
          {
              "linkUrl" : "https://github.com/MurariMahith",
              "icon" : "",
              "name" : "GitHub"
          },
          {
              "linkUrl" : "https://www.instagram.com/murari_mahith_prabhakar/",
              "icon" : "",
              "name" : "Instagram"
          }
      ],
      "skills": [
          {
              "skill": "Python",
              "category": "Programming Languages",
              "proficiency": 5
          },
          {
              "skill": "JavaScript",
              "category": "Programming Languages",
              "proficiency": 4
          },
          {
              "skill": "Java",
              "category": "Programming Languages",
              "proficiency": 4
          },
          {
              "skill": "C#",
              "category": "Programming Languages",
              "proficiency": 4
          },
          {
              "skill": "TypeScript",
              "category": "Programming Languages",
              "proficiency": 3
          },
          {
              "skill": "Sql",
              "category": "Programming Languages",
              "proficiency": 4
          },
          {
              "skill": "HTML5",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "CSS3",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Angular",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "ASP.NET MVC",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Web API 2",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "React.js",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Node.js",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Express JS",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Django",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "REST APIs",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": ".Net framework",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": ".Net core",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "MEAN stack",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "MERN stack",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Bootstrap",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Spring boot",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "jQuery",
              "category": "Web Technologies",
              "proficiency": 4
          },
          {
              "skill": "Jenkins",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Docker",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "JSON",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "XML",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "SQL Server",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "MySQL",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "Firebase",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "Entity Framework",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "ORM",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "Mongoose",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "Microservices",
              "category": "Database and Platforms",
              "proficiency": 4
          },
          {
              "skill": "AWS",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "SDLC",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Git",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Selenium",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Visual Studio",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "GitHub",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "GitLab",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "JIRA",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Agile Methodology",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Pair programming",
              "category": "Tools and Other",
              "proficiency": 4
          },
          {
              "skill": "Scrum",
              "category": "Tools and Other",
              "proficiency": 4
          }
      ],
      "education" : [
          {
              "universityName" : "University of Florida (UF)",
              "degree" : "Master of Science",
              "major" : "Computer Science",
              "minor" : "",
              "startDate" : "Aug 2023",
              "endDate" : "May 2024",
              "graduated" : false,
              "cgpa" : "3.84/4.0",
              "summary" : "",
              "priority" : 3,
              "imageUrl" : "https://drive.google.com/file/d/13jUuveEk9xIAgIVujLwbSHwd0xNVyBD-/view?usp=drive_link"
          },
          {
              "universityName" : "VIT University, Vellore (Vellore Institute of Technology)",
              "degree" : "Master of Technology - Integrated",
              "major" : "Software Engineering / Computer Science",
              "minor" : "",
              "startDate" : "Jul 2016",
              "endDate" : "Jun 2021",
              "graduated" : false,
              "cgpa" : "8.58/10.0",
              "summary" : "",
              "priority" : 5,
              "imageUrl" : "https://drive.google.com/file/d/1xEDs-PpoYOq79DtxHnJ-EpzDfVeYFz0z/view?usp=drive_link"
          }
      ],
      "experiences" : [
          {
              "role" : "Graduate Student Assisstant - Software Developer",
              "startRole" : null,
              "company" : "University of Florida, IFAS Dept",
              "location" : "Gainesville, Florida",
              "startDate" : "Aug 2023",
              "endDate" : "",
              "timePeriod" : null,
              "photoUrl" : "https://drive.google.com/file/d/1gPShBeZe3Y6S-cYV3EU-8pLekPP4J2py/view?usp=drive_link",
              "summary" : "",
              "subSummary" : "",
              "techUsed" : ["C#", "Desktop Application", "Javascript", "Django", "Python", "HTML5", "CSS3", "Sql", "MySQL", "ArcGIS"],
              "awards" : [],
              "stillDoing" : true,
              "priority" : 1,
              "companyUrl" : "https://ifas.ufl.edu/",
              "filesUrl" : []
          },
          {
              "role" : "Software Engineer Intern",
              "startRole" : null,
              "company" : "Infotech inc.",
              "location" : "Gainesville, Florida",
              "startDate" : "May 2023",
              "endDate" : "Aug 2023",
              "timePeriod" : "4 Months",
              "photoUrl" : "https://drive.google.com/file/d/1cn8EPud9Q2w9mvWnoNLCUu3Wsm2n_ZRE/view?usp=drive_link",
              "summary" : "As a Software Engineering Intern at Infotech Inc., I developed a NuGet package for advanced accessibility analysis using Selenium and Axecore, significantly promoting compliance and inclusivity. This package included a customizable report generator for data-driven decisions and actionable accessibility insights. My work reduced developer effort by 50% through the initial accessibility analysis, uncovering 11k violations and streamlining Jenkins CI artifacts extraction with efficient PowerShell scripts, optimizing build time and achieving 80% app coverage. I also orchestrated headless Selenium test video recording via an innovative Puppeteer-Selenium architecture, enhancing CI debugging, and upgraded the application's UI by migrating from Bootstrap v3 to v4, modernizing the user experience.",
              "subSummary" : "",
              "techUsed" : ["C#", "ASP.Net MVC 5", "WebAPI", "Javascript", "NodeJS", "Selenium", "Puppeteer", "Jenkins", "Sql", "PowerShell Scripting", "LightHouse", "Accessibility Analysis", "Bootstrap"],
              "awards" : ["11k violations in first run"],
              "stillDoing" : false,
              "priority" : 2,
              "companyUrl" : "https://www.infotechinc.com/",
              "filesUrl" : []
          },
          {
              "role" : "Associate Software Engineer - II",
              "startRole" : "Software Engineer Intern",
              "company" : "PowerSchool Group LLC",
              "location" : "Gainesville, Florida",
              "startDate" : "Aug 2020",
              "endDate" : "Jul 2022",
              "timePeriod" : "24 Months",
              "photoUrl" : "https://drive.google.com/file/d/1AqzE8a3t4nlLHJ2O7S24AMwB6FrN7RMc/view?usp=drive_link",
              "summary" : "During my tenure at PowerSchool, I served as an Associate Software Engineer – 2, where I played a crucial role in the development and maintenance of web-based software and web services using Asp.Net MVC, Angular, JavaScript, and REST APIs. I led a 4-person innovation team, facilitating the design and development of a proof of concept (POC) that delivered enhanced flexibility to customers, adding significant value to the product. I also significantly improved cross-product document integration by implementing matching algorithms, resulting in a 30% decrease in data redundancy and a 40% reduction in third-party server calls, boosting overall efficiency. Additionally, I was responsible for analyzing, debugging, and fixing mission-critical bugs, writing unit tests, test plans, performing component testing, and conducting performance analysis.",
              "subSummary" : "As a Software Engineering Intern at PowerSchool, I transformed various outdated pages into modern Angular modules, providing both a visually appealing UI for customers and enhanced developer benefits, which led to a 20% increase in customer engagement. I optimized the codebase by conducting a thorough analysis and removing unused code, resulting in improved code health, readability, and an 18% decrease in build time. Additionally, I assessed and remedied security risks in the application, including XSS, IDOR, and CSRF vulnerabilities, and conducted sprint and feature presentations to stakeholders, including product owners and project managers.",
              "techUsed" : ["C#", "ASP.Net MVC 5", "WebAPI", "Angular", "Javascript", "NodeJS", "Selenium", "Puppeteer", "SqlServer", "TypeScript", "Bootstrap"],
              "awards" : ["Best Performing intern 2020", "3rd in Hack-a-thon 2021"],
              "stillDoing" : false,
              "priority" : 4,
              "companyUrl" : "https://www.powerschool.com/",
              "filesUrl" : []
          }
      ],
      "projects" : [
          {
              "name" : "Suggesto : Personalised movie recommendation app",
              "caption" : "Serverless Frontend Heavy Single page application (PWA) and Android application",
              "summary" : "Designed and developed Suggesto, a Progressive Web Application (PWA) using Angular, TypeScript, Bootstrap, and Firebase. This serverless platform offers personalized movie recommendations and fosters user engagement. With 1600+ downloads on Google PlayStore and 700+ registered users, it includes wish-listing, incognito mode, and social features to connect with friends. Suggesto enhances the movie-watching experience by reducing search time and redirecting users to movie platforms seamlessly.",
              "photourl" : "https://drive.google.com/file/d/1Q9m1Zx2Wz5CUCO-M-cnTduI-44m0qXiA/view",
              "link" : "https://play.google.com/store/apps/details?id=xyz.appmaker.jibpca",
              "link2" : "https://weekendmoviesuggestion.web.app/home",
              "githubLink" : "https://github.com/MurariMahith/SuggestoMain",
              "techUsed" : ["Angular", "Javascript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Firebase", "OAuth"],
              "awards" : ["1600+ downloads in Google PlayStore", "800+ registered users."]
          },
          {
              "name" : "PowerPlay",
              "caption" : "Role based Event management system for Schools",
              "summary" : "Created PowerPlay, an event management system using ASP.Net MVC, Angular, TypeScript, Bootstrap, SQL Server, and Entity Framework. It streamlined event tracking at PowerSchool, reducing HR workload by 50%. The project gained recognition for potential integration into the company's real-time applications, enhancing event tracking and notifications in schools.",
              "photourl" : "https://drive.google.com/file/d/1mntnOmZ_8-U2d9TI9mPZoG-7u_350QWI/view",
              "link" : "",
              "link2" : "",
              "githubLink" : null,
              "techUsed" : ["C#", "ASP.Net MVC 5", "WebAPI", "Angular", "Javascript", "TypeScript", "HTML5", "CSS3", "SqlServer", "Entity Framework", "OAuth"],
              "awards" : ["3rd in Hack-a-thon", "Proposed to integrate in production"]
          },
          {
              "name" : "Photography application",
              "caption" : "Platform for photographers to showcase their work",
              "summary" : "I conceptualized and launched a web-based Photography Application utilizing Python, Django, HTML5, CSS3, JavaScript, and SQLite. This innovative platform empowers photographers to showcase their portfolios with interactive posts, resulting in a remarkable 35% customer growth. Notably, the application offers a keyword-based image search feature, seamlessly integrated with the Unsplash API, enhancing users' ability to discover and connect with photographers. This project not only provided a valuable tool for artistic expression and networking but also significantly improved user engagement and the overall experience within the photography community.",
              "photourl" : "https://drive.google.com/file/d/16PVVowl-MRjhHDwOZ4O_-OMU3IjeETfQ/view",
              "link" : null,
              "link2" : null,
              "githubLink" : "https://github.com/MurariMahith/sgphoto",
              "techUsed" : ["Django", "Python", "Javascript", "HTML5", "CSS3", "ORM", "REST APIs"],
              "awards" : []
          },
          {
              "name" : "Dynamic Blogger Application",
              "caption" : "Personal dynamic website for a Youtuber/Blogger",
              "summary" : "I spearheaded the development of the Dynamic Blogger Application, catering to the renowned YouTuber RiseAloneYt. This dynamic website, built using Angular, TypeScript, Bootstrap, and the YouTube API, offers an engaging and user-friendly interface. It seamlessly integrates with YouTube, providing viewers easy access to the channel, video uploads, and social media handles. The website also offers real-time updates, keeping the audience abreast of the latest content. Its sleek design and interactive features enhance the viewer experience and contribute to RiseAloneYt's online presence, fostering a stronger connection with the audience.",
              "photourl" : "https://drive.google.com/file/d/1hqSmWrIPeU5OsU7FTMk8g04sSVICXeUa/view?usp=drive_link",
              "link" : null,
              "link2" : "",
              "githubLink" : "https://github.com/MurariMahith/RiseAloneyt",
              "techUsed" : ["Angular", "Javascript", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Youtube API", "REST APIs"],
              "awards" : ["Live data analytics leveraging Youtube API"]
          }
      ],
      "resumeUrl" : ""
  }
}
