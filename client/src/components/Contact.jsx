import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    label: "Teléfono",
    value: "+000 0000-0000",
    href: "tel:+0000000000",
    Icon: FaPhone,
  },
  {
    label: "Email",
    value: "tu-email@ejemplo.com",
    href: "mailto:tu-email@ejemplo.com",
    Icon: FaEnvelope,
  },
  {
    label: "Ubicación",
    value: "Ciudad, País",
    href: "#",
    Icon: FaMapMarkerAlt,
  },
  {
    label: "GitHub",
    value: "github.com/tu-usuario",
    href: "https://github.com/tu-usuario",
    Icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#faf9f7] px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-500">
            CONTACTO
          </p>
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-5 text-gray-500">
            ¿Tienes una idea o necesitas un sistema a la medida? Escríbeme y
            conversemos.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {contactInfo.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {label}
                </p>
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
