"use client";

// import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-cream/10 dark:bg-blueDark/20">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-sea">Sobre</span> Mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">
              Soy una{" "}
              <span className="font-semibold text-sea">
                programadora con experiencia en planificación, diseño y
                optimización de proyectos tecnológicos
              </span>
              , especializada en desarrollo Front-end, metodologías ágiles y
              mejora de aplicaciones web.
            </p>
            <p className="text-lg mb-4">
              Mi trayectoria profesional abarca desde la administración de
              empresas hasta el desarrollo web, lo que me ha permitido entender
              tanto el aspecto técnico como el de negocio en los proyectos
              digitales.
            </p>
            <p className="text-lg mb-4">
              Me apasiona crear soluciones innovadoras que potencien el
              crecimiento empresarial y mejoren la experiencia del usuario,
              siempre enfocada en entregar productos de alta calidad y valor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-blueDark rounded-lg p-6 shadow-md">
              <h3 className="font-bold mb-4 text-sea">Habilidades técnicas</h3>
              <ul className="space-y-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>HTML5/CSS3</li>
                <li>Git</li>
                <li>Testing</li>
                <li>UX/UI</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-blueDark rounded-lg p-6 shadow-md">
              <h3 className="font-bold mb-4 text-sea">Habilidades blandas</h3>
              <ul className="space-y-2">
                <li>Trabajo en equipo</li>
                <li>Propositiva</li>
                <li>Responsable</li>
                <li>Enfocada al detalle</li>
                <li>Emprendedora</li>
                <li>Proactiva</li>
                <li>Manejo de tareas múltiples</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-blueDark rounded-lg p-6 shadow-md">
              <h3 className="font-bold mb-4 text-sea">Metodologías</h3>
              <ul className="space-y-2">
                <li>Lean</li>
                <li>Kanban</li>
                <li>Scrum</li>
                <li>Learning Agility</li>
                <li>Design Thinking</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-blueDark rounded-lg p-6 shadow-md">
              <h3 className="font-bold mb-4 text-sea">Idiomas</h3>
              <ul className="space-y-2">
                <li>Español: Nativo</li>
                <li>Inglés: A2</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
