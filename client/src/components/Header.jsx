const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16">
      <a href="#" className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#logo-gradient-header)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 shrink-0"
        >
          <defs>
            <linearGradient id="logo-gradient-header" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
        <span className="leading-tight">
          <span className="block text-sm font-bold tracking-wide text-white">
            DAVID AGUILERA
          </span>
          <span className="block text-[10px] tracking-widest text-white/60">
            DESARROLLADOR FULL STACK
          </span>
        </span>
      </a>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-14 lg:flex">
        {navLinks.map(({ label, href }, i) => (
          <a
            key={label}
            href={href}
            className={`text-sm font-medium ${
              i === 0
                ? "border-b-2 border-orange-500 pb-1 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
