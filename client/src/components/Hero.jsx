import Header from "./Header";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiDjango } from "react-icons/si";

const logos = [
  { name: "Linux", Icon: FaLinux },
  { name: "React", Icon: FaReact },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Express", Icon: SiExpress },
  { name: "Django", Icon: SiDjango },
  { name: "GitHub", Icon: FaGithub },
  { name: "Git", Icon: FaGitAlt },
  { name: "Docker", Icon: FaDocker },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#100a1c]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#150c26] to-[#100a1c]" />

      <div className="relative">
        <Header />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-8 pb-20 pt-6 lg:grid-cols-2 lg:px-16">
          {/* Left copy */}
          <div className="relative z-10 text-left">
            <p className="mb-4 text-sm font-semibold tracking-widest text-orange-500">
              SISTEMAS COMPLETOS. SOLUCIONES REALES.
            </p>
            <h1 className="text-5xl font-bold leading-[1.1] text-white lg:text-6xl">
              Construyo <br />
              Sistemas Completos <br />
              Que{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Resuelven.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-base text-white/60">
              Soy David Aguilera, Full Stack Developer dedicado a realizar y mantener sistemas de principio a fin que ayudan a resolver problemas
              reales de negocio.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-7 py-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                DESCARGAR CV
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                VER PROYECTOS
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-70">
              {logos.map(({ name, Icon }) => (
                <span
                  key={name}
                  title={name}
                  className="flex items-center gap-2 text-white/80"
                >
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-semibold">{name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-10 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-purple-500/15 to-transparent blur-3xl" />
              <div
                role="img"
                aria-label="Editor de código con una API en Node.js y un componente de React"
                className="relative h-[420px] w-[340px] overflow-hidden rounded-[2rem] bg-[#0d0817] shadow-2xl ring-1 ring-white/10 lg:h-[500px] lg:w-[400px]"
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-white/40">server.js</span>
                </div>
                <pre className="overflow-hidden p-5 font-mono text-[12px] leading-6 text-white/70 lg:text-[13px]">
                  <code>
                    <span className="text-purple-400">const</span> app ={" "}
                    <span className="text-orange-400">express</span>();{"\n"}
                    {"\n"}
                    app.<span className="text-orange-400">get</span>(
                    <span className="text-green-400">"/api/projects"</span>,{"\n"}
                    {"  "}
                    <span className="text-purple-400">async</span> (req, res) =&gt;{" "}
                    {"{"}
                    {"\n"}
                    {"    "}
                    <span className="text-purple-400">const</span> data ={" "}
                    <span className="text-purple-400">await</span>{"\n"}
                    {"      "}Project.<span className="text-orange-400">find</span>();
                    {"\n"}
                    {"    "}res.<span className="text-orange-400">json</span>(data);
                    {"\n"}
                    {"  "}
                    {"}"}
                    {"\n"}
                    );{"\n"}
                    {"\n"}
                    <span className="text-white/30">{"// React client"}</span>
                    {"\n"}
                    <span className="text-purple-400">const</span> [items, setItems] ={" "}
                    {"\n"}
                    {"  "}
                    <span className="text-orange-400">useState</span>([]);{"\n"}
                    {"\n"}
                    <span className="text-orange-400">useEffect</span>(() =&gt; {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-orange-400">fetch</span>(
                    <span className="text-green-400">"/api/projects"</span>)
                    {"\n"}
                    {"    "}.then(r =&gt; r.json()).then(setItems);{"\n"}
                    {"}"}, []);
                  </code>
                </pre>
              </div>

              <div
                role="img"
                aria-label="Vista previa de un sitio web del lado del cliente"
                className="absolute -bottom-8 -right-10 w-56 overflow-hidden rounded-2xl bg-[#1c1330] shadow-2xl ring-1 ring-white/15 lg:-right-24 lg:w-64"
              >
                <div className="flex items-center gap-1.5 bg-[#150c26] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="ml-2 flex-1 truncate rounded bg-white/10 px-2 py-0.5 text-[9px] text-white/50">
                    miportafolio.dev
                  </span>
                </div>
                <div className="p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="h-2 w-10 rounded bg-white/70" />
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-6 rounded bg-white/25" />
                      <span className="h-1.5 w-6 rounded bg-white/25" />
                      <span className="h-1.5 w-6 rounded bg-white/25" />
                    </span>
                  </div>
                  <div className="rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-3">
                    <span className="block h-2 w-24 rounded bg-white/90" />
                    <span className="mt-1.5 block h-1.5 w-16 rounded bg-white/60" />
                    <span className="mt-3 inline-block rounded-full bg-white px-3 py-1 text-[8px] font-bold text-red-500">
                      VER MÁS
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <span className="h-10 rounded-md bg-white/10" />
                    <span className="h-10 rounded-md bg-white/10" />
                    <span className="h-10 rounded-md bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
