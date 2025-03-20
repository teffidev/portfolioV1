import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="container-custom py-24">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-sea">Mi</span> Experiencia
      </h1>

      <p className="mb-8">
        Aquí encontrarás una lista de mis experiencias profesionales.
      </p>

      <Link href="/" className="btn-primary inline-block">
        Volver al inicio
      </Link>
    </div>
  );
}
