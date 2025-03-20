'use client';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Front End Developer",
      company: "Medusa Lab AI",
      period: "Julio 2024 - Marzo 2025",
      location: "Medellín, Colombia",
      description: [
        "Desarrollo de aplicaciones web desde cero en el frontend, usando Nextjs, Typescript y Tailwind CSS.",
        "Implementación de la lógica del frontend y conexión con el backend en colaboración con el equipo de backend.",
        "Participación en reuniones con clientes, para exponer funcionalidades actuales, mejoras y nuevas características, adaptando el desarrollo según las necesidades del cliente.",
      ],
    },
    {
      id: 2,
      role: "Developer Trainee",
      company: "Byte4Bit",
      period: "Marzo 2023 - Julio 2024",
      location: "Medellín, Colombia",
      description: [
        "Análisis del ciclo de vida de la aplicación principal de la empresa, desde la concepción y el diseño, hasta la implementación y el mantenimiento usando React y TypeScript.",
        "Colaboración con el equipo de desarrollo mediante ClickUp para la gestión de tareas y GitHub para el control de versiones.",
        "Automatización de pruebas con Cypress y JavaScript para la aplicación principal.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-cream/10 dark:bg-blueDark/20">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-sea">Experiencia</span> Laboral
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-sea">
              <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-sea transform -translate-x-1/2"></div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-sea mb-1">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-grayLight">
                    {exp.period} | {exp.location}
                  </p>
                </div>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
