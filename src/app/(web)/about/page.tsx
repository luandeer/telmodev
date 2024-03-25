import Breadcrumb from "@/components/comun/Breadcrumb";
import CardUi from "@/components/ui-web/about/cardui";
import { IoSchool } from "react-icons/io5";
import { GiSevenPointedStar } from "react-icons/gi";
import { TbPacman } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const CATEGORIES = [
  {
    img: "https://res.cloudinary.com/dsf39ftzm/image/upload/v1711257497/portafolio/rq5fmygbikr9xytvgdbz.jpg",
    icon: GiSevenPointedStar,
    title: "Universidad Nacional Mayor de San Marcos",
    desc: "Ingenieria de Software(2017 - en curso)",
  },
  {
    img: "https://res.cloudinary.com/dsf39ftzm/image/upload/v1711257651/portafolio/in2m1g1ixsmckknmebzz.webp",
    icon: GiSevenPointedStar,
    title: "PLATZI - Frontend",
    desc: "Developer Javascript",
  },
  {
    img: "https://res.cloudinary.com/dsf39ftzm/image/upload/v1711257756/portafolio/e1siubad5x0ilth68qdv.jpg",
    icon: GiSevenPointedStar,
    title: "Programa One Oracle Next education - Graduado(2022)",
    desc: "Frontend Developer",
  },
  {
    img: "https://res.cloudinary.com/dsf39ftzm/image/upload/v1711257879/portafolio/oxo02uootmfs6ki8fu7z.jpg",
    icon: GiSevenPointedStar,
    title: "Instituto Cultural Peruano Norteamericano(ICPNA)",
    desc: "Básico 12",
  },
];

const activities = [
  {
    title: "Sonqu - Perú | Full Stack Developer",
    description:
      "En Sonqu formé parte de un equipo encargado de desarrollar aplicaciones web para la propia empresa como landing page, página web personalizada y un sistema web de gestión.",
    achievements: [
      "Colaboré en la optimización del proceso de suscripción(enfoque de negocio) para mejorar la experiencia del usuario y hacer más eficiente el proceso.",
      "Diseñé e implementé funcionalidades para control de almacén y gestión de empleados en el sistema web de la empresa.",
      "Las tecnologías o herramientas que logré usar fueron Next js, tailwind css, typescript, postgres Sql, shadcn ui y node js.",
    ],
    link: null,
  },
  {
    title: "Freelancer - Perú | Frontend Developer",
    description: "",
    achievements: [
      "Creé páginas visualmente atractivas y altamente funcionales que capturaron efectivamente la atención del usuario.",
      "Desarrollé soluciones de comercio electrónico autoadministrables que simplificaron la experiencia de compra en línea para los clientes, la gestión de inventario y la organización del catálogo de productos. ",
    ],
    link: null,
  },
  // Agrega más actividades aquí
];

const certificados = [
  {
    title: "Curso de Next 14",
    description: "Fernando Herrera -  DevDetalles",
    achievements: null,
    link: null,
  },
  {
    title: "Scrum Master Certified",
    description:
      "CertiProf(Expedición: oct. 2023)",
    achievements: null,
    link: 'https://drive.google.com/file/d/1vaEGukSM46RtpKltxqeFKYoLEgx-P8ex/view',
  },
  {
    title: "Programa Oracle Next Education F2 T4 Front-end",
    description: "Alura Latam(Expedición: jun. 2023)",
    achievements: [
      "React.js",
    ],
    link: 'https://app.aluracursos.com/program/certificate/061f936d-a166-47b2-a6ec-a2afc0adf89b',
  },
  {
    title: "GitHub para programadores",
    description: "LinkedIn(Expedición: mar. 2023)",
    achievements: null,
    link: 'https://www.linkedin.com/learning/certificates/033d5cb0105ac5f94970c9625489eefcb425a2f9ae7c420725e651e8e52afde1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2FSVR4xIwRBS%2BykDu9lBW%2Bg%3D%3D',
  },
  {
    title: "Curso de Frontend Developer",
    description: "Platzi (Expedición: sept. 2022)",
    achievements: null,
    link: 'https://platzi.com/p/alexander_pere/curso/2467-frontend-developer/diploma/detalle/',
  },
  {
    title: "Curso de Responsive Design: Maquetación Mobile First",
    description: "Platzi (Expedición: ene. 2023)",
    achievements: null,
    link: 'https://platzi.com/p/alexander_pere/curso/2030-mobile-first/diploma/detalle/',
  },
  {
    title: "Formación Desarrollo Personal G4 - ONEFormación Desarrollo Personal G4 - ONE",
    description: "Alura Latam (Expedición: dic. 2022)",
    achievements: null,
    link: 'https://app.aluracursos.com/degree/certificate/a4842f27-485f-4c09-ad79-8240e2334b1d',
  },
  
  // Agrega más actividades aquí
];

export default function About() {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <Breadcrumb
          pageName="Acerca de mi"
          pathActual="/me.png"
          description="Hola, mi nombre es Telmo Alexander Perez Reginaldo. Actualmente soy estudiante de décimo ciclo en Ingeniería de Software de la Universidad Nacional Mayor de San Marcos."
        />
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 lg:grid-cols-3">
        <Card className="relative grid h-full w-full place-items-center overflow-hidden rounded-xl py-4 text-center sm:py-0">
          <div className="absolute inset-0 h-full w-full bg-red-900" />
          <CardContent className="relative w-full py-2">
            <h4 className="text-xs font-bold text-gray-50 opacity-50">
              ¿Donde estudié?
            </h4>
            <CardTitle className="mt-9 text-gray-50">Educación</CardTitle>
            <CardDescription className="mb-14 mt-4 text-sm leading-relaxed text-gray-100 opacity-95">
              Actualmente estoy cursando el décimo ciclo de la carrera de
              ingeniería de software en la Universidad Nacional Mayor de San
              Marcos.
            </CardDescription>
            <IoSchool size={40} className="mx-auto text-gray-50" />
          </CardContent>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CardUi key={props.title} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CardUi key={props.title} {...props} />
          ))}
        </div>
        <div className="flex-1 rounded-xl bg-gray-900 p-8 shadow-xl">
          <h4 className="text-xl font-bold text-gray-50">
            Experiencia Laboral
          </h4>
          <div className="relative px-4">
            <div className="absolute h-full border border-dashed border-secondary border-opacity-20"></div>

            {activities.map((activity) => (
              <div
                key={activity.title}
                className="my-6 -ml-1.5 flex w-full items-center"
              >
                <div className="z-10 w-1/12">
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-500"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    {activity.link ? (
                      <a
                        href={activity.link}
                        className="font-bold text-yellow-500"
                      >
                        {activity.title}
                      </a>
                    ) : (
                      <span className="text-gray-50">{activity.title}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-50 opacity-70 font-light">
                    {activity.description}
                  </p>
                  {activity.achievements && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-gray-50 opacity-70 font-light">
                      {activity.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-xl bg-gray-900 p-8 shadow-xl">
          <h4 className="text-xl font-bold text-gray-50">
            Cursos y Certificaciones
          </h4>
          <div className="relative px-4">
            <div className="absolute h-full border border-dashed border-secondary border-opacity-20"></div>

            {certificados.map((activity) => (
              <div
                key={activity.title}
                className="my-6 -ml-1.5 flex w-full items-center"
              >
                <div className="z-10 w-1/12">
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-500"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    {activity.link ? (
                      <a
                        href={activity.link}
                        className=" text-gray-50 hover:text-yellow-500"
                        target="_blank"
                      >
                        {activity.title}
                      </a>
                    ) : (
                      <span className="text-gray-50">{activity.title}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-300 opacity-70 font-light">
                    {activity.description}
                  </p>
                  {activity.achievements ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-gray-300 opacity-70 font-light">
                      {activity.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  ):<></>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="relative grid h-full w-full place-items-center overflow-hidden rounded-xl py-4 text-center sm:py-0">
          <div className="absolute inset-0 h-full w-full bg-yellow-600" />
          <CardContent className="relative w-full py-2">
            <h4 className="text-xs font-bold text-gray-50 opacity-50">
              ¿Qué hago en mi tiempo libre?
            </h4>
            <CardTitle className="mt-9 text-gray-50">Hobby</CardTitle>
            <CardDescription className="mb-14 mt-4 text-sm leading-relaxed text-gray-100 opacity-95">
              Me gusta ir al gym, jugar futbol, videojuegos y hacer contenido para redes.
            </CardDescription>
            <TbPacman size={40} className="mx-auto animate-bounce text-gray-50" />
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
