import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import Breadcrumb from "@/components/comun/Breadcrumb";
import { siteConfig } from "@/config/site-web";
export default function Contacto() {
  return (
    <div className="container grid w-full gap-2 px-5 pb-12 sm:px-0">
      <Breadcrumb
        pageName="Contacto"
        pathActual="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711476727/portafolio/bi4soea85b1a0kanxnyy.png"
        description="Encuentrame por estos medios."
      />

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Redes Sociales</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar todos mis redes sociales.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.facebook.href}
            target="_blank"
          >
            <FaFacebook className="h-6 w-6" />
            <span className="text-sm font-medium">Facebook</span>
          </a>
          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.linkedin.href}
            target="_blank"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="text-sm font-medium">Linkedin</span>
          </a>
          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.github.href}
            target="_blank"
          >
            <FaGithub className="h-6 w-6" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.youtube.href}
            target="_blank"
          >
            <FaYoutube className="h-6 w-6" />
            <span className="text-sm font-medium">Youtube</span>
          </a>
          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.instagram.href}
            target="_blank"
          >
            <FaInstagram className="h-6 w-6" />
            <span className="text-sm font-medium">Instagram</span>
          </a>

          <a
            className="group flex flex-col items-center gap-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href={siteConfig.links.whatsapp.href}
            target="_blank"
          >
            <FaWhatsapp className="h-6 w-6" />
            <span className="text-sm font-medium">Whatsapp</span>
          </a>
        </div>
      </div>
      <div className="space-y-4 pt-5">
        <div>
          <h1 className="text-2xl font-bold">Informacion de contacto</h1>
          <p className="hidden text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar mas detalles importantes para contactarte
            conmigo.
          </p>
        </div>
        <div className="space-y-2">
          <dl className="flex flex-wrap items-center gap-5 text-sm">
            <div>
              <dt className="font-bold">Email 1</dt>
              <dd>
                <Link
                  className="underline underline-offset-2"
                  href="mailto:alexanderperezreginaldo@gmail.com"
                >
                  alexanderperezreginaldo@gmail.com
                </Link>
              </dd>
            </div>

            <div>
              <dt className="font-bold">Email 2</dt>
              <dd>
                <Link
                  className="underline underline-offset-2"
                  href="mailto:alexander_pere@hotmail.com"
                >
                  alexander_pere@hotmail.com
                </Link>
              </dd>
            </div>

            <div>
              <dt className="font-bold">Celular</dt>
              <dd>+51 967 502 750</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="hidden">
        <h1 className="mb-2 text-2xl font-bold">Enviame un email:</h1>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button>Send message</Button>
        </div>
      </div>
    </div>
  );
}
