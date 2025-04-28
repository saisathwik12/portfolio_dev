import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
// import project5 from "../assets/project5.png"
// import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "CONTROLHUB",
      description: "Developed ControlHub, a web-based centralized project management, real-time tracking, and analytics.",
      links: {
        site: "https://controlhub-mern.netlify.app/",
        github: "https://github.com/saisathwik12/controlhub_project.git",
      },
    },
    {
      img: project2,
      title: "MEAL MATCH",
      description: "Developed 'Meal Match' web application using HTML, CSS, and JavaScript, enabling users to discover recipes based on available ingredients. ",
      links: {
        site: "https://saisathwik12.github.io/Meal-Match/",
        github: "https://github.com/saisathwik12/Meal-Match.git",
      },
    },
    {
      img: project3,
      title: "SIGN LANGUAGE DETECTION",
      description: "Developed a Sign Language Detection system using Machine Learning to recognize alphabet hand gestures.",
      links: {
        site: "#",
        github: "#",
      },
    },
    
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio