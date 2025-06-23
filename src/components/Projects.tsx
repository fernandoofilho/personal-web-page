import React from "react";
import {
  ExternalLinkIcon,
  GithubIcon,
  StarIcon,
  GitBranchIcon,
} from "lucide-react";
export const Projects = () => {
  // Mock GitHub projects
  const projects = [
    {
      id: 1,
      title: "[FRONTEND] Moto Device",
      description:
        "Frontend application developed using Angular and Material UI, deployed on Google Cloud. It serves as the user interface for the Moto Device system, providing an intuitive experience for interacting with tasks, workspaces, and AI-powered features.",
      tags: [
        "Angular",
        "Typescript",
        "Node.js",
        "MaterialUI",
        "Google Cloud Platform",
      ],
      githubUrl:
        "https://github.com/fernandoofilho/frontend-desafio-final-motoacademy",
      demoUrl:
        "https://frontend-moto-device-motoacademy-6450354291.us-central1.run.app/home",
      stars: 1,
      forks: 1,
      image:
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*jG3eEQIaxnRxZJdnLqiGOg.png",
    },
    {
      id: 2,
      title: "[BACKEND] Moto Device",
      description:
        "A collaborative task management backend built with NestJS and integrated with LLMs for smart task suggestions and summaries. Supports workspace creation, task assignment, deadlines, and real-time updates using Google Cloud services.",
      tags: [
        "Typescript",
        "NestJs",
        "Google Cloud Platform",
        "Cloud Storage",
        "App Run",
        "LLMs",
      ],
      githubUrl:
        "https://github.com/fernandoofilho/backend-desafio-final-motoacademy",
      demoUrl: "#",
      stars: 1,
      forks: 1,
      image: "https://kinsta.com/wp-content/uploads/2022/06/nest-js-logo.png",
    },
    {
      id: 3,
      title: "BT Tracker",
      description:
        "An AI-powered wildfire prediction platform built with FastAPI and TensorFlow. It analyzes environmental data to forecast fire risks with high accuracy. The project was recognized with an award at the BC Conference held at Harvard and MIT for its innovation and impact in climate resilience.",
      tags: ["Python", "TensorFlow", "FastAPI", "React"],
      githubUrl: "https://bttracker.framer.website/",
      demoUrl: "https://bttracker.vercel.app/",
      stars: 65,
      forks: 24,
      image:
        "https://plus.unsplash.com/premium_photo-1726052940663-c6b0431a1018?q=80&w=2288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent GitHub projects. Each one represents
          different challenges and learning opportunities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <StarIcon size={16} className="mr-1" />
                    <span className="mr-3">{project.stars}</span>
                    <GitBranchIcon size={16} className="mr-1" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/fernandoofilho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
          >
            View More on GitHub
            <GithubIcon size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
