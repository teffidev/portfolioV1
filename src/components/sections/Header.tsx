'use client';

import Image from "next/image";

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blueDark/90 to-blueDark/70 z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header-bg.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-sea">Estefania</span> Bermudez
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">Frontend Developer</h2>
        <a
          href="#about"
          className="btn-primary inline-block animate-bounce mt-8">
          Conoce más
        </a>
      </div>
    </header>
  );
}
