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
} from "@/components/ui/accordion";
export default function Home() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="mt-8 grid grid-cols-2 items-center justify-center gap-2 max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-3 sm:mt-0">
        <div className="flex flex-col items-start justify-start px-5 text-gray-700 duration-700 animate-in slide-in-from-top-full sm:px-0">
          <div>
            <Badge className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-gray-700 px-5 py-1 transition-colors">
              {" "}
              <TbVersionsFilled className="text-white" size={12} />
              <span className="text-xs text-white">V2.0</span>
            </Badge>
          </div>

          <h1 className=" text-start text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
            <span className="flex items-center justify-start gap-1 md:text-4xl">
              Hola
              <PiHandWavingFill className="text-yellow-500" />
            </span>{" "}
            Soy Telmo Perez,
          </h1>
          <p className=" md:text-md mt-6 text-start text-gray-500">
            Jr Frontend Developer | Software Engineer Student at UNMSM.
          </p>

          <div className="mt-3 hidden flex-wrap items-center gap-x-5 gap-y-4 duration-700 animate-in slide-in-from-bottom-full">
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
              className="flex  items-center justify-center gap-1 rounded-lg border border-gray-200 bg-gray-700 px-4 py-3 text-sm text-white shadow-lg transition-colors"
            >
              Hablemos
            </Link>

            <DescargarCv />
          </div>
        </div>

        <div className="relative hidden  w-auto overflow-hidden duration-700 animate-in slide-in-from-left-full sm:flex">
          <Image
            alt="sonqu"
            className="aspect-[4/4] rounded-full bg-transparent object-cover object-center sm:w-full"
            src="/yoHome.png"
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

      <span className="mx-5 mt-10 flex items-center sm:mx-0">
        <Badge className="whitespace-nowrap bg-[#C5E898] px-5 py-1  text-green-700 hover:bg-[#C5E898] sm:mx-0">
          Tecnologías que uso frecuentemente
        </Badge>
        <Separator className="my-4 shrink" />
      </span>

      <div className="flex flex-col items-start justify-center">
        <Skills />
      </div>

      <span className="mx-5 mt-2 flex items-center sm:mx-0 sm:hidden">
        <Badge className="whitespace-nowrap bg-blue-300 px-5 py-1  text-blue-800 hover:bg-blue-300 sm:mx-0">
          Curiosidades
        </Badge>
        <Separator className="my-4 shrink" />
      </span>

      <Accordion type="single" collapsible className="mx-5 sm:mx-0 sm:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger className=" text-start text-sm hover:no-underline">
            ¿Cuánto tiempo me llevó hacer este portafolio?
          </AccordionTrigger>
          <AccordionContent>Exactamente 3 dias.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className=" text-start text-sm hover:no-underline">
            ¿Cuál es tu proyecto favorito y por qué?
          </AccordionTrigger>
          <AccordionContent>
            Sonqu, lo encuentras en la pestaña de Portafolio. Porque es el
            primer proyecto real que realicé para un cliente en donde hubo
            muchos desafíos para mi crecimiento como desarrollador frontend.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className=" text-start text-sm hover:no-underline">
            ¿Qué recursos utilicé?
          </AccordionTrigger>
          <AccordionContent>
            <Link
              href="https://tailwindcomponents.com/"
              className="mr-3 underline"
              target="_blank"
            >
              {" "}
              Tailwind components
            </Link>{" "}
            <Link
              href="https://www.hyperui.dev/"
              className="mr-3 underline"
              target="_blank"
            >
              {" "}
              HyperUI
            </Link>{" "}
            <Link
              href="https://react-icons.github.io/react-icons/"
              className="mr-3 underline"
              target="_blank"
            >
              {" "}
              React-Icons
            </Link>{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
