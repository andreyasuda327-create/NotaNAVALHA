
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  { name: "Início", path: "/", icon: "⌂" },
  { name: "Filmes", path: "/filmes", icon: "▣" },
  { name: "Séries", path: "/series", icon: "▤" },
  { name: "Jogos", path: "/jogos", icon: "⌘" },
  { name: "Álbuns", path: "/albuns", icon: "◉" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/" className="brand">
        NOTA<span>NAVALHA</span>
        <small>ARQUIVO DE MÍDIA</small>
      </Link>

      <div className="sidebar-label">BIBLIOTECA</div>

      <nav className="sidebar-nav">
        {sections.map((section) => (
          <Link
            key={section.path}
            href={section.path}
            className={
              pathname === section.path
                ? "nav-link active"
                : "nav-link"
            }
          >
            <span className="nav-icon">{section.icon}</span>
            {section.name}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        NOTANAVALHA © 2026
      </div>
    </aside>
  );
}
