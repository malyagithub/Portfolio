import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              Hello! I'm Malya Choudha, a passionate Computer Science student
              from VIT Bhopal University. My journey in tech began with a deep
              curiosity about how the web works, which quickly evolved into a
              drive to build useful, user-focused digital products.
            </p>

            <p className="text-muted-foreground">
              I specialize in crafting modern web applications using HTML5,
              CSS3, JavaScript, ReactJS, NodeJS, and MongoDB. I've also gained
              experience with ExpressJS, Git, and RESTful APIs to develop
              robust, full-stack solutions for real-world problems.
            </p>

            <p className="text-muted-foreground">
              Whether I'm designing a polished front-end interface or
              architecting the back-end logic, I love transforming complex
              challenges into elegant, efficient code.
            </p>

            <p className="text-muted-foreground">
              My commitment to growth is constant. I'm always exploring new
              frameworks, refining my design skills, and working to improve
              performance and accessibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium
                  transition-all duration-300
                  hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                  hover:scale-105 active:scale-95"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1GGAzv7Bg6ZizmEz5xXHFDfFBBQWHWl_9/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Skill cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                text: "I build responsive websites and web applications using modern frameworks like ReactJS and Tailwind CSS...",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "What I Can Do For You",
                text: "I deliver modern, responsive web applications with a user-first approach...",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                text: "I manage projects from planning to completion by organizing tasks, leading teams...",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-900 dark:text-gray-100">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
