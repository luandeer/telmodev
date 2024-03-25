import Link from "next/link";

import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

import { PiHandWavingFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";
import { TbFileDownload } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { Skills } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-center gap-2 max-sm:flex max-sm:flex-col-reverse max-sm:items-center max-sm:gap-3">
        <div className="flex flex-col items-start justify-start px-5 text-gray-700 xl:px-0">
          <Link href="#">
            <Badge className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-gray-700 px-5 py-1 transition-colors hover:bg-blue-200">
              {" "}
              <GrProjects className="text-white" size={12} />
              <p className="font-semibold text-white">
                20 proyectos desarrollados
              </p>
            </Badge>
          </Link>

          <h1 className=" text-start text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
            <span className="flex items-center justify-start gap-1 md:text-4xl">
              Hola
              <PiHandWavingFill className="text-yellow-500" />,
            </span> Soy Telmo Perez.
          </h1>
          <p className=" mt-6 text-start text-gray-500 md:text-xl">
            Jr Frontend Developer | Software Engineer Student at UNMSM
          </p>
          <div className="mb-0 mt-2 hidden items-center gap-3 text-gray-800">
            <a
              href="https://www.facebook.com/Sonquoficial"
              className="transform  transition-transform hover:scale-95 hover:text-indigo-700 "
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.youtube.com/@sonqu"
              className="transform transition-transform hover:scale-95 hover:text-indigo-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.instagram.com/sonqu.oficial/?hl=es"
              className="transform transition-transform hover:scale-95 hover:text-indigo-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@sonquoficial?lang=es"
              className="transform transition-transform hover:scale-95 hover:text-indigo-700"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok size={30} />
            </a>
          </div>
          <div className=" mt-6 flex items-center justify-start space-x-2 sm:space-x-3">
            <Link
              href="/contacto"
              className="flex  items-center justify-center gap-1 rounded-full border border-gray-200 bg-black px-5 py-2 text-sm text-white transition-colors"
            >
              <BiSolidContact size="20" />
              Contáctame
            </Link>

            <Link
              href="/contacto"
              className="flex max-w-fit items-center justify-center gap-1 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            >
              <TbFileDownload size="20" />
              Descargar CV
            </Link>
          </div>
        </div>

        <div className="relative w-auto overflow-hidden flex">
          <Image
            alt="sonqu"
            className="aspect-[4/4] bg-transparent object-cover object-center sm:w-full rounded-full"
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



      <Separator className="my-4" />

      <div className="flex flex-col justify-center items-start">

        <Badge className="mb-4 bg-[#C5E898] py-1 text-green-700 hover:bg-[#C5E898]  mx-5 sm:mx-0">
          Tecnologías que uso frecuentemente
        </Badge>

        <Skills />
      </div>
    </>
  );
}
