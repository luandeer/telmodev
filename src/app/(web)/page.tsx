import Link from "next/link";

import { siteConfig } from "@/config/site-web";

import { PiHandWavingFill } from "react-icons/pi";
import { TbVersionsFilled } from "react-icons/tb";
import { Skills } from "@/components";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import { DescargarCv } from "@/components/ui-web/inicio/descargar-cv";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
export default function Home() {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="grid grid-cols-2 items-center justify-center gap-2 max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-3 mt-8 sm:mt-0">
        <div className="flex flex-col items-start justify-start px-5 text-gray-700 sm:px-0 duration-700 animate-in slide-in-from-top-full">
          <div >
            <Badge className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-gray-700 px-5 py-1 transition-colors">
              {" "}
              <TbVersionsFilled className="text-white" size={12} />
              <span className="text-xs text-white">
                V2.0
              </span>
            </Badge>
          </div>

          <h1 className=" text-start text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
            <span className="flex items-center justify-start gap-1 md:text-4xl">
              Hola
              <PiHandWavingFill className="text-yellow-500" />
            </span>{" "}
            Soy Telmo Perez,
          </h1>
          <p className=" mt-6 text-start text-gray-500 md:text-md">
            Jr Frontend Developer | Software Engineer Student at UNMSM.
          </p>

          <div className="hidden mt-3 flex-wrap items-center gap-x-5 gap-y-4 duration-700 animate-in slide-in-from-bottom-full">
            {Object.values(siteConfig.links).map((item: any, i) => {
              const { title, icon: Icon, href } = item;
              // Comprueba si Icon está definido antes de usarlo
              const IconComponent = Icon ?? (() => null);
              return (
                <a
                  key={title}
                  href={href}
                  rel="noreferer noopener"
                  target="_blank"
                  className="flex items-center gap-2 border-b border-border"
                >
                  <IconComponent size={20} className="text-gray-500" />
                  <span className="text-gray-500">{title}</span>
                </a>
              );
            })}
          </div>

          <div className=" mt-6 flex items-center justify-start space-x-2 sm:space-x-3">
            <Link
              href="/contacto"
              className="flex  items-center justify-center shadow-lg gap-1 rounded-lg border border-gray-200 bg-gray-700 px-4 py-3 text-sm text-white transition-colors"
            >
              Hablemos
            </Link>

            <DescargarCv />
          </div>
        </div>

        <div className="relative hidden  sm:flex w-auto overflow-hidden duration-700 animate-in slide-in-from-left-full">
          <Image
            alt="sonqu"
            className="aspect-[4/4] rounded-full bg-transparent object-cover object-center sm:w-full"
            src="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png"
            width={400}
            height={300}
            priority
          />
        </div>

        <div className="align-self-center hidden h-auto justify-self-center lg:w-full">
          <Image
            alt="sonqu"
            className="mx-auto aspect-[6/3] overflow-hidden rounded-xl object-cover object-center shadow sm:w-full"
            src="https://res.cloudinary.com/dpnhvrzyc/image/upload/v1708465733/imagenes-web/u4vrbvcmsjr4sjxasstg.jpg"
            width={400}
            height={300}
          />
        </div>
      </div>

      <span className="flex items-center mt-10 mx-5 sm:mx-0">
        <Badge className="bg-[#C5E898] py-1 px-5 text-green-700  hover:bg-[#C5E898] sm:mx-0 whitespace-nowrap">
          Tecnologías que uso frecuentemente
        </Badge>
        <Separator className="my-4 shrink" />

      </span>

      <div className="flex flex-col items-start justify-center">
        <Skills />
      </div>

      <span className="flex items-center mt-2 mx-5 sm:mx-0 sm:hidden">
        <Badge className="bg-blue-300 py-1 px-5 text-blue-800  hover:bg-blue-300 sm:mx-0 whitespace-nowrap">
          Curiosidades
        </Badge>
        <Separator className="my-4 shrink" />

      </span>

      <Accordion type="single" collapsible className=" mx-5 sm:mx-0 sm:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" hover:no-underline text-start text-sm">¿Cuánto tiempo me llevó hacer este portafolio?
          </AccordionTrigger>
          <AccordionContent>
            Exactamente 3 dias.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" hover:no-underline text-start text-sm">¿Cuál es tu proyecto favorito y por qué?</AccordionTrigger>
          <AccordionContent>
            Sonqu, lo encuentras en la pestaña de Portafolio. Porque es el primer proyecto real que realicé para un cliente en donde hubo muchos desafíos para mi crecimiento como desarrollador frontend.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

    </div>
  );
}
