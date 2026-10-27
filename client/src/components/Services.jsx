const services = [
  {
    icon: "🖌️",
    title: "Identidad de Marca",
    desc: "Creamos identidades únicas que conectan y dejan un impacto duradero.",
    bg: "bg-red-500",
  },
  {
    icon: "🖥️",
    title: "Diseño Web",
    desc: "Sitios web hermosos y responsivos diseñados para convertir y escalar.",
    bg: "bg-orange-500",
  },
  {
    icon: "📊",
    title: "Marketing Digital",
    desc: "Campañas basadas en datos que hacen crecer tu marca y audiencia.",
    bg: "bg-amber-500",
  },
];

const cards = [
  {
    number: "01",
    title: "ESTRATEGIA",
    desc: "Convertimos ideas en estrategias accionables.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=774&auto=format&fit=crop",
    span: "row-span-2",
  },
  {
    number: "02",
    title: "DISEÑO",
    desc: "Creamos diseño hermoso y funcional.",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=774&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "DESARROLLO",
    desc: "Construimos soluciones rápidas, escalables y confiables.",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=774&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "CRECIMIENTO",
    desc: "Impulsamos crecimiento medible basado en datos.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=774&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="proyectos" className="bg-[#faf9f7] px-8 py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-500">
            LO QUE HACEMOS
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Soluciones Creativas <br /> Para Marcas Modernas
          </h2>
          <p className="mt-5 max-w-md text-gray-500">
            Combinamos creatividad, tecnología y estrategia para construir
            experiencias significativas que generan resultados.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 underline underline-offset-4"
          >
            VER TODOS LOS SERVICIOS →
          </a>

          <div className="mt-12 space-y-8">
            {services.map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl text-white ${s.bg}`}
                >
                  {s.icon}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {cards.map((c) => (
            <div
              key={c.number}
              className={`group relative overflow-hidden rounded-2xl ${
                c.span ?? ""
              }`}
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-full min-h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-transform group-hover:translate-x-1">
                →
              </button>
              <div className="absolute bottom-4 left-4 text-left text-white">
                <p className="text-xs font-semibold text-white/70">
                  {c.number}
                </p>
                <p className="text-lg font-bold">{c.title}</p>
                <p className="text-xs text-white/70">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
