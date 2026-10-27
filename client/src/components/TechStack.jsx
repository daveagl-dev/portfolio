import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    desc: "Interfaces rápidas, accesibles y responsivas.",
    techs: [
      { name: "React", Icon: FaReact },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
    ],
  },
  {
    title: "Backend",
    desc: "APIs y servicios robustos del lado del servidor.",
    techs: [
      { name: "Node.js", Icon: FaNodeJs },
      { name: "Express", Icon: SiExpress },
      { name: "Django", Icon: SiDjango },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    title: "Bases de Datos",
    desc: "Almacenamiento y modelado de datos.",
    techs: [
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: SiMysql },
      { name: "PostgreSQL", Icon: SiPostgresql },
    ],
  },
  {
    title: "Herramientas y DevOps",
    desc: "Control de versiones, despliegue e infraestructura.",
    techs: [
      { name: "Git", Icon: FaGitAlt },
      { name: "GitHub", Icon: FaGithub },
      { name: "Docker", Icon: FaDocker },
      { name: "Linux", Icon: FaLinux },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="servicios" className="bg-[#100a1c] px-8 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <p className="mb-3 text-sm font-semibold tracking-widest text-orange-500">
            TECNOLOGÍAS QUE UTILIZO
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Stack MERN Y MRD
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            Domino el ciclo completo de desarrollo: desde la interfaz que ve el usuario hasta la infraestructura que sostiene el sistema.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <p className="mt-2 text-sm text-white/50">{group.desc}</p>

              <div className="mt-6 space-y-4">
                {group.techs.map(({ name, Icon }) => (
                  <div key={name} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-orange-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-white/80">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
