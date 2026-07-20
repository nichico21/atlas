import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">
            F
          </div>

          <div>
            <h1 className="text-sm font-bold leading-none">
              French Supplier Finder
            </h1>
            <p className="text-xs text-gray-500">
              Team France Export
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/">
          Accueil
          </Link>
          <Link href="/opportunities">
          Opportunités
          </Link>
          <Link href="/companies">
          Entreprises
          </Link>
          <a href="#">Recherche</a>
          <a href="#">Analytics</a>
        </nav>
      </div>
    </header>
  );
}
