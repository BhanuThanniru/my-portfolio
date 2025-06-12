import project1 from "../assets/projects/personal_portfolio.webp";
import project2 from "../assets/projects/budget_planner.webp";
import project3 from "../assets/projects/pizza_app.webp";
import project4 from "../assets/projects/wav2lip.webp";
import project5 from "../assets/projects/secret_sharing.webp";

export const HERO_CONTENT = `I am a Software Engineer with 3 years of experience in designing, developing, and deploying software solutions. Specializing in Full-Stack Development, I work with technologies like Java, Spring Boot, Angular, React, Next.js, and Node.js. Throughout my career, I have successfully delivered complex projects while focusing on writing clean, efficient code. I am driven by the opportunity to solve technical challenges and create solutions that enhance user experiences and contribute to business success.`;

export const ABOUT_TEXT = `A highly adaptable and results-driven Software Engineer with over 3 years of professional experience in full-stack development, including proficiency in Java, Workflow, Node.js, and TypeScript. Skilled in developing applications and optimizing business processes, with expertise in MySQL, PostgreSQL, and MongoDB. Demonstrated success in collaborating with agile teams, streamlining workflows, and delivering innovative solutions for diverse industries. Adept at embracing challenges, driving technical modernization, and leveraging tools like Docker, Azure, and Git to build efficient systems.`;

export const EXPERIENCES = [
    {
      "year": "2024 - Present",
      "role": "Graduate Teaching Assistant",
      "company": "University of North Carolina at Charlotte",
      "description": "Assisting students with web application design and development courses. Grading assignments and providing support during lab sessions to enhance their understanding of programming concepts and best practices.",
      "technologies": ["HTML", "CSS", "JavaScript", "API Fetch", "C", "Assembly Language"]
    },
    {
      "year": "2021 - 2024",
      "role": "Senior Software Analyst",
      "company": "Capgemini Technology Services India Limited",
      "description": "Designed and developed enterprise applications using Java, Spring Boot, and Angular, replacing legacy systems with modern full-stack solutions. Created RESTful APIs with role-based workflows, automated SLAs, and PostgreSQL procedures. Built workflow-based process management tools featuring dynamic dashboards and responsive UIs to streamline operations and enhance user experience.",
      "technologies": ["Java", "Spring", "Springboot", "CSS", "JavaScript", "jQuery", "PostgreSQL", "MySQL", "Joget"]
    },
];

export const PROJECTS = [
  {
    "title": "Personal Portfolio",
    "image": project1,
    "description": "A personal portfolio showcasing my skills in web development. It highlights my expertise in building innovative, high-quality solutions. Built with a modern, responsive design to provide an intuitive user experience, the portfolio demonstrates my technical skills and accomplishments across different domains.",
    "technologies": ["Reactjs", "Tailwind"]
  },
  {
    "title": "Personal Budget Planning Application",
    "image": project2,
    "description": "Developed an application for managing personal finances, allowing users to track their income, expenses, and set budget goals. The app provides visual insights into financial trends and helps users make informed decisions. It offers an easy-to-use, interactive interface for financial management.",
    "technologies": ["Node.js", "Angular", "Material-UI", "D3.js", "Firebase"]
  },
  {
    "title": "Online Pizza Ordering Application",
    "image": project3,
    "description": "Designed and implemented a web application for ordering pizzas online. Administrators can manage the menu, view orders, and update pricing easily.",
    "technologies": ["Spring Boot", "Angular", "Oracle"]
  },
  {
    "title": "Real-time Wav2Lip",
    "image": project4,
    "description": "Optimized an audio-video processing project to enable real-time synchronization of audio with video frames. The system dynamically matches lip movements to the audio, creating a seamless experience. A simple front-end interface allows users to upload and process files effortlessly.",
    "technologies": ["Python", "PyTorch", "OpenVINO", "Streamlit", "PyAudio", "Numpy"]
  },
  {
    "title": "Secret Sharing System",
    "image": project5,
    "description": "Developed a secure system that divides sensitive information into multiple parts, which can only be reconstructed when a threshold number of parts are combined. This cryptographic method ensures data confidentiality and is useful for securely sharing secrets.",
    "technologies": ["Python"]
  },
];

export const CONTACT = {
  phoneNo: "+1 (816)-812-3274 ",
  email: "bthannir@charlotte.edu",
};
