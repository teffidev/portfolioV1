"use client";

import Image from "next/image";
import Link from "next/link";

// Datos de ejemplo para proyectos (en producción deberías tener tus propios proyectos)
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce App",
    description:
      "Plataforma de comercio electrónico desarrollada con React, Next.js y Tailwind CSS.",
    image: "/images/projects/project1.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/teffidev/project1",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Admin",
    description:
      "Panel de administración con autenticación, gestión de usuarios y análisis de datos.",
    image: "/images/projects/project2.jpg",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/teffidev/project2",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "App de Tareas",
    description:
      "Aplicación para gestión de tareas con notificaciones y calendario.",
    image: "/images/projects/project3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    githubUrl: "https://github.com/teffidev/project3",
    demoUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            <span className="text-sea">Mis</span> Proyectos
          </h2>
          <Link href="/projects" className="btn-primary">
            Ver todos
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="card transition-transform hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-sea">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-cream text-blueDark text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark dark:text-cream hover:text-sea dark:hover:text-sea">
                    Ver código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blueDark dark:text-cream hover:text-sea dark:hover:text-sea">
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
