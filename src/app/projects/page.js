import React from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Foodie Delight",
    description:
      "Foodie Delight is an online cloud kitchen interface. Built with React and a love for food.",
    imageUrl: "MangaWEB.png",
    projectLink: "https://github.com/SanthoshMoolemane/foodieDelight",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "Track all your expenses with ease to better manage your finances.",
    imageUrl: "hearhaven.png",
    projectLink:
      "https://github.com/SanthoshMoolemane/expenseTrackerApp.github.io",
  },
  {
    id: 3,
    title: "Blog",
    description: "A blog to store all your favorite news and articles.",
    imageUrl: "quicknews.png",
    projectLink: "https://github.com/SanthoshMoolemane/blog-app",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className="relative flex flex-col items-start justify-between p-4 rounded-xl shadow-lg transition-all hover:shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 hover:border-white transition-transform duration-300">
      {/* Project Image */}
      <div className="relative w-full overflow-hidden rounded-md">
        <Image
          src={`/Santhosh-portfolio/images/${project.imageUrl}`}
          alt={`${project.title} preview`}
          className="w-full aspect-[16/9] object-cover"
          width={600}
          height={338}
          quality={100}
          priority
        />
      </div>

      {/* Project Title */}
      <h3 className="mt-4 text-lg font-semibold text-white">{project.title}</h3>

      {/* Project Description */}
      <p className="mt-2 text-sm text-gray-300 line-clamp-3">
        {project.description}
      </p>

      {/* Project Button */}
      <a href={project.projectLink} className="mt-4" target="_blank">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all"
        >
          <FaGithub className="w-4 h-4" />
          View Project
        </button>
      </a>
    </article>
  );
};

export default function ProjectSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden text-white py-20">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]" />

      {/* Blurry Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-blue-300">Projects</h1>
        <p className="mt-4 text-lg text-gray-300">
          Here are some of the projects I have worked on. Click on a project to
          explore more.
        </p>

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
