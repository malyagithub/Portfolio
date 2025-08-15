import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";


import { FaUniversity, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { FaLink } from "react-icons/fa";





// ✅ certificates array must be defined BEFORE usage
const certificates = [
  {
    title: "Bits And Bytes Of Computer Network",
    org: "-Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/CTTXCKQ37TDB",
    color: "text-blue-500",
  },
  {
    title: "The Complete Web Development Course",
    org: "Udemy",
    url: "https://www.udemy.com/certificate/UC-a29e9bf0-d147-401b-ba9f-17eac9c45c33/",
    color: "text-green-500",
  },
  { title: "Cyber Security Analyst", org: "IBM", url: "https://drive.google.com/file/d/1Kleuo4eri3Cs-6OUWz-AOJ_amIb_2qSx/view?usp=sharing", color: "text-red-500" },
  { title: "MERN Full-Stack Web Development Course", org: "-Ethnus", url: "https://drive.google.com/file/d/1Zjw6HepFr9LQZHNGYrs0rBnfHjM-O9dy/view?usp=sharing", color: "text-yellow-500" },
  { title: "Cloud Computing", org: "-NPTEL", url: "https://drive.google.com/file/d/1cvmX1nsIvFeE7iMPWENE3OJV-juwTQuB/view?usp=sharing", color: "text-purple-500" },
  { title: "Market Analytics", org: "-NPTEL", url: "https://drive.google.com/file/d/1KXW61mBklpx2TOrRufEyagjZgw_BydG4/view?usp=sharing", color: "text-pink-500" },
  { title: "Python-Essentials", org: "-VIthyarthi", url: "https://drive.google.com/file/d/1yRHr4GbRcrsDrIGByX8S8ogHKvCU2y7R/view?usp=sharing", color: "text-indigo-500" },
  { title: "Databases for Developers: Foundations", org: "-Oracle", url: "https://drive.google.com/file/d/17i7p9zq1JXaO1XMFlAtm5VHWLybDsUev/view?usp=sharing", color: "text-orange-500" },
  { title: "MATLAB Onramp", org: "-MATLAB", url: "https://drive.google.com/file/d/1douAuC51fbI7o5_4Eli2Gx9t3PABFF0Q/view?usp=sharing", color: "text-blue-400" },
  { title: "Simulink Onramp", org: "-MATLAB", url: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=6ea474d9-8bb3-4747-9782-37969070efdc&", color: "text-purple-400" },
  { title: "SQL (Basics)", org: "-HackerRank", url: "https://www.hackerrank.com/certificates/cac6bad22d8b", color: "text-cyan-500" },
];


const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "An application for ordering food from local restaurants with real-time tracking.",
    image: "/projects/food-delivery.png",
    tags: ["React", "Node.js", "Tailwind"],
    demoUrl: "https://food-del-frontend-7r95.onrender.com/",
    githubUrl: "https://github.com/malyagithub/food-del.git",
  },
  {
    id: 2,
    title: "3D Portfolio",
    description:
      "A personal portfolio website with interactive 3D elements and animations.",
    image: "/projects/portfolio-3D.png",
    tags: ["Three-D", "React", "Tailwind", "CSS"],
    demoUrl: "https://portfolio-3d-brown.vercel.app/",
    githubUrl: "https://github.com/malyagithub/portfolio-3d.git",
  },
  {
    id: 3,
    title: "Job Portal",
    description: "A web application for job seekers and employers to connect.",
    image: "/projects/job-portal.png",
    tags: ["React", "Express.js", "MongoDB", "ShadeInUi"],
    demoUrl: "https://github.com/malyagithub/JOB-PORTAL.git",
    githubUrl: "https://github.com/malyagithub/JOB-PORTAL.git",
  },
  {
    id: 4,
    title: "Background Remover",
    description:
      "A tool to automatically remove the background from an uploaded image.",
    image: "/projects/bg-remover.png",
    tags: ["React", "Express.js", "MongoDB", "HTML", "CSS"],
    demoUrl: "https://bg-remover-tau.vercel.app/",
    githubUrl: "https://github.com/malyagithub/bg-remover.git",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "An application that displays current weather and forecasts based on location.",
    image: "/projects/weather-app.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    demoUrl: "https://weather-three-beryl-15.vercel.app/",
    githubUrl: "https://github.com/malyagithub/WEATHER.git",
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "A simple web-based calculator with basic arithmetic functionality.",
    image: "/projects/calculator.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://malyagithub.github.io/Calculator/",
    githubUrl: "https://github.com/malyagithub/Calculator.git",
  },
  {
    id: 7,
    title: "To-Do List App",
    description:
      "A task management application for creating, tracking, and completing daily tasks.",
    image: "/projects/todo-list.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://to-do-list-app-stuw.vercel.app/",
    githubUrl: "https://github.com/malyagithub/To-Do-LIST-APP.git",
  },
  {
    id: 8,
    title: "Drum-Kit",
    description: "A drum-kit of different instruments.",
    image: "/projects/drum.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://malyagithub.github.io/Drum-kit/",
    githubUrl: "https://github.com/malyagithub/Drum-kit.git",
  },
];






export const ProjectSection = () => {


    const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };
  return (










    <section id="projects" className="py-16 px-4 md:px-14 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-sm">
          Here are My Projects....
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 flex flex-col"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="aspect-[6/5] w-full overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Tags */}
      
<div className="p-6">
  <div className="flex flex-wrap gap-2 mb-4">
    {project.tags.map((tag, index) => (
      <span
        key={index}
        className="px-2 py-1 text-xs font-medium rounded-full border 
                   bg-gray-200 text-gray-800 border-gray-300
                   dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
      >
        {tag}
      </span>
    ))}
  </div>


                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 ml-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                       <span className="text-sm">Source Code</span>

                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/malyagithub"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium
                  transition-all duration-300
                  hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                  hover:scale-105 active:scale-95 w-fit flex items-center mx-auto gap-2"
          >
            <Github size={20} /> Check My Github <ArrowRight size={16} />
          </a>

























        </motion.div>
      </div>




 <h2 className=" mt-20 text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>
<div className="container mx-auto max-w-4xl space-y-10">
        {/* University */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col justify-between hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-indigo-400">
    <FaUniversity className="text-3xl animate-bounce" /> University
  </h3>
  <div>
    <h4 className="font-semibold text-lg text-gray-100">B.Tech in Computer Science</h4>
    <p className="mt-2 text-gray-300">
      VIT Bhopal University<br /> 2022 – 2026 (Expected) <br />
      <span className="font-medium text-indigo-200">CGPA: 8.46 / 10</span>
    </p>
  </div>
</motion.div>

{/* School */}
<motion.div
  className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-500"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-indigo-400">
    <MdSchool className="text-3xl animate-pulse" /> School
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
      <h4 className="font-semibold text-gray-100">Senior Secondary - Science</h4>
      <p className="text-gray-300">
        Sant Paul Senior Secondary School <br /> Year: 2022 | CBSE Board <br />
        <span className="text-emerald-300">Percentage: 80.2%</span>
      </p>
    </div>
    <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
      <h4 className="font-semibold text-gray-100">Secondary (10th)</h4>
      <p className="text-gray-300">
        Sant Paul Senior Secondary School <br /> Year: 2020 | CBSE Board <br />
        <span className="text-orange-300">Percentage: 79.4%</span>
      </p>
    </div>
  </div>
</motion.div>

        {/* Certificates */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-indigo-400">
            <FaCertificate className="text-3xl animate-spin-slow" /> Certificates & Courses
          </h3>
          <ul className="space-y-4">
            {certificates.map((cert, index) => (
              <li key={index} className="flex items-start gap-3">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 hover:underline group ${cert.color}`}
                >
                  <FaLink className={`text-lg group-hover:rotate-45 transition-transform duration-300`} />
                  <span className="font-medium text-gray-100">{cert.title}</span>
                </a>
                <span className="text-sm text-gray-400 ml-6">{cert.org}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>





    </section>

  );
};
