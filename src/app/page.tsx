import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Administrace DD Areny</h1>
      <p className="mb-4">Vítejte v administrátorském dashboardu pro DD Arenu v Pardubicích.</p>
      <Link href="/dashboard" className="text-primary underline font-medium">
        Přejít na hlavní přehled
      </Link>
    </main>
  );
}
