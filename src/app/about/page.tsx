import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container-custom py-24">
      <h1 className="text-4xl font-bold mb-8">
        <span className="text-sea">Sobre</span> Mí
      </h1>

      <p className="mb-8">
        Información detallada sobre mi formación y experiencia.
      </p>

      <Link href="/" className="btn-primary inline-block">
        Volver al inicio
      </Link>
    </div>
  );
}
