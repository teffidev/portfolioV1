"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "tefyberal09@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-sea">Estefania</span> Bermudez Alvarez
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-grayLight">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8">
              Especializada en React, Next.js, TypeScript y Tailwind CSS.
              Apasionada por crear soluciones web innovadoras y experiencias de
              usuario excepcionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/cv.pdf"
                download
                className="btn-primary flex items-center justify-center gap-2">
                <DocumentArrowDownIcon className="h-5 w-5" />
                Descargar CV
              </a>
              <button
                onClick={copyToClipboard}
                className="btn-secondary flex items-center justify-center gap-2">
                {isCopied ? (
                  <>
                    <CheckIcon className="h-5 w-5" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <span>Copiar Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/teffidev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea transition-colors">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/teffidev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blueDark dark:text-grayLight hover:text-sea dark:hover:text-sea transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-sea">
              <Image
                src="/images/profile.jpg"
                alt="Estefania Bermudez"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
