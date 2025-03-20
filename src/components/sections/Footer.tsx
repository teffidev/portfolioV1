'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blueDark text-cream py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-sea">
              Estefania Bermudez
            </h3>
            <p className="mb-4">
              Frontend Developer especializada en React, Next.js y TypeScript.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/teffidev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayLight hover:text-sea transition-colors"
                aria-label="GitHub">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/teffidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grayLight hover:text-sea transition-colors"
                aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-sea">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="text-grayLight hover:text-sea transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-grayLight hover:text-sea transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-grayLight hover:text-sea transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-grayLight hover:text-sea transition-colors">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link
                  href="/#education"
                  className="text-grayLight hover:text-sea transition-colors">
                  Formación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-sea">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>tefyberal09@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>+57 301 354 89 77</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Medellín, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-grayLight/20 pt-6 text-center">
          <p>
            &copy; {currentYear} Estefania Bermudez. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
