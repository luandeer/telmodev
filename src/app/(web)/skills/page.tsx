import Breadcrumb from "@/components/comun/Breadcrumb";
import { FaCheck } from "react-icons/fa";


export default function Skills() {
  const skills = [
    "Javascript/Typescript",
    "Html/Css",
    "React JS",
    "Next JS",
    "Shadcn UI/Next UI",
    "Tailwind CSS",
    "Node js",
    "C++",
    "PostgreSql/Mysql",
    "Zustand/Redux",
    "Prisma",
    "Docker"
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
    <div>
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
      
      <section>
        <div className="container sm:mb-44">
          <div className=" dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center gap-4">
              <div className="w-full px-4">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-2xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Tecnologías
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>

                <div
                  className="mb-12 lg:mb-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                    {skills.map((text) => (
                      <List key={text} text={text} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full px-4">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-2xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Softwares and Tools
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>

                <div
                  className="mb-12 lg:mb-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                    {tools.map((text) => (
                      <List key={text} text={text} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full px-4">
                <div
                  className={`w-full text-start`}
                >
                  <h2 className="text-2xl font-bold text-gray-700 dark:text-white sm:text-3xl mb-4">
                    Otros Skills
                  </h2>
                  <p className="hidden text-base !leading-relaxed text-body-color md:text-lg mb-5">
                    Actualmente estoy cursando el décimo ciclo de la carrera de ingeniería de software en la Universidad Nacional Mayor de San Marcos.
                  </p>
                </div>

                <div
                  className="mb-12 lg:mb-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
                    {otrosSkills.map((text) => (
                      <List key={text} text={text} />
                    ))}
                  </div>
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
  <p className="mb-5 flex items-center text-lg font-medium whitespace-nowrap">
    <span className="mr-2 flex p-1 items-start justify-start rounded-md bg-[#C5E898]">
      <FaCheck size={10} className="text-green-700" />
    </span>
    <span className="text-sm">{text}</span>
  </p>
);