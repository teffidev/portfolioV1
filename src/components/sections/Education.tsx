"use client";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Desarrollo de Aplicaciones para Dispositivos Móviles",
      institution: "ITM Institución Universitaria",
      period: "Febrero 2025 - Actualmente",
      location: "Medellín, Colombia",
    },
    {
      id: 2,
      degree: "Back End Specialist",
      institution: "Digital House",
      period: "Julio 2023 - Julio 2024",
      location: "Argentina",
    },
    {
      id: 3,
      degree: "Professional Developer",
      institution: "Digital House",
      period: "Octubre 2021 - Julio 2023",
      location: "Argentina",
    },
    {
      id: 4,
      degree: "Administrador de Empresas",
      institution: "Institución Universitaria Escolme",
      period: "Febrero 2013 - Febrero 2017",
      location: "Medellín, Colombia",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Curso de Salesforce Admin",
      institution: "WomenForceIT",
      year: "2022",
    },
    {
      id: 2,
      name: "Testing básico en Java, POO, JavaScript básico, Frontend Developer",
      institution: "Platzi",
      year: "2022",
    },
    {
      id: 3,
      name: "Scrum, Prework Windows, Computación básica, Fundamentos de Ingeniería de Software, Gestión Efectiva del Tiempo, Certificación en PMP, Fundamentos de Gestión de Proyectos",
      institution: "Platzi",
      year: "2021",
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-sea">Formación</span> Académica
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-sea">Educación</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="border-l-2 border-sea pl-6 pb-6 relative before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:bg-sea before:rounded-full">
                  <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                  <p className="font-medium mb-1">{edu.institution}</p>
                  <p className="text-grayLight">
                    {edu.period} | {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-sea">
              Certificaciones
            </h3>
            <div className="space-y-8">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="border-l-2 border-sea pl-6 pb-6 relative before:content-[''] before:absolute before:left-[-5px] before:top-0 before:w-2 before:h-2 before:bg-sea before:rounded-full">
                  <h4 className="text-xl font-bold mb-1">{cert.name}</h4>
                  <p className="font-medium mb-1">{cert.institution}</p>
                  <p className="text-grayLight">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
