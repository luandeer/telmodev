import Breadcrumb from "@/components/comun/Breadcrumb";
import { Badge } from "@/components/ui/badge";


export default function Skills() {
  const skills = [
    "React JS",
    "Next JS",
    "Shadcn UI",
    "Next UI",
    "Tailwind CSS",
    "Node js",
    "PostgreSql",
    "Mysql",
    "Zustand",
    "Redux",
    "Prisma",
    "Docker",
    "Next Auth",
    "Nest js",
  ];
  const lenguajes = [
    "Typescript",
    "Javascript",
    "Html",
    "Css",
    "C++",
    "C#"

  ];
  const tools = [
    "VS Code",
    "Git",
    "Figma",
  ];

  const otrosSkills = [
    "Adobe Illustrator",
    "Adobe Animate",
    "Adobe Photoshop",
    "Adobe Premier",
    "Filmora"
  ];

  return (
    <div className="sm:pb-40">
      <div className="px-4 sm:px-0">
        <Breadcrumb
          pageName="Mis Skills"
          pathActual="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711477173/portafolio/ddx5hqnun605bnyb2sud.png"
          description="Estas son las habilidades que he desarrollado."
        />
      </div>

      <div className="mx-4 sm:mx-0 p-4 mb-5 bg-gray-800 text-gray-200 rounded-xl text-sm hidden">
        <p>Cuento con habilidades destacadas en el desarrollo web, con un enfoque particular en tecnologías como React.js, Next.js y Tailwind CSS para crear interfaces modernas y receptivas. Mi experiencia abarca tanto el desarrollo frontend con JavaScript y TypeScript, como el backend con Node.js y Express.js.</p>
      </div>

      <section className="max-sm:px-4">
        <div className="sm:mb-44 sm:px-0">
          <div className=" dark:border-white/[.15]">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-full px-0">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Tecnologías 
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>


                <div className="flex items-center flex-wrap justify-start gap-2 mb-12 lg:mb-0">
                  {skills.map((text) => (
                    <List key={text} text={text} />
                  ))}
                </div>
              </div>

              <div className="w-full px-0">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Lenguajes de Programación
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>


                <div className="flex items-center flex-wrap justify-start gap-2 mb-12 lg:mb-0">
                  {lenguajes.map((text) => (
                    <List key={text} text={text} />
                  ))}
                </div>
              </div>

              <div className="w-full sm:px-0">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Softwares and Tools
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>

                <div className="flex items-center flex-wrap justify-start gap-2 mb-12 lg:mb-0">
                  {tools.map((text) => (
                    <List key={text} text={text} />
                  ))}
                </div>
              </div>

              <div className="w-full sm:px-0">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Otros Skills
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>

                <div className="flex items-center flex-wrap justify-start gap-2 mb-12 lg:mb-0">
                  {otrosSkills.map((text) => (
                    <List key={text} text={text} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const List = ({ text }: any) => (
  <Badge className="bg-[#C5E898] hover:bg-[#C5E898] text-green-700 m-0">{text}</Badge>
);