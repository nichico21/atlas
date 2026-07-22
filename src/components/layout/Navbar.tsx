"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative py-1 transition-colors duration-200
    ${
      pathname === href
        ? "text-blue-600 after:w-full"
        : "text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full"
    }
    after:absolute
    after:left-1/2
    after:-translate-x-1/2
    after:bottom-[-6px]
    after:h-[2px]
    after:bg-blue-600
    after:transition-all
    after:duration-200`;

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

        <nav className="flex items-center gap-8 text-sm font-medium">

          <Link href="/" className={linkClass("/")}>
            Accueil
          </Link>

          <Link
            href="/opportunities"
            className={linkClass("/opportunities")}
          >
            Opportunités
          </Link>

          <Link
            href="/suppliers"
            className={linkClass("/suppliers")}
          >
            Entreprises
          </Link>

          <Link
            href="/search"
            className={linkClass("/search")}
          >
            Recherche
          </Link>

          <Link
            href="/analytics"
            className={linkClass("/analytics")}
          >
            Analytics
          </Link>

        </nav>
      </div>
    </header>
  );
}