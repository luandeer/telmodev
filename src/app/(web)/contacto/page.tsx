import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import Breadcrumb from "@/components/comun/Breadcrumb";

export default function NamePage() {
  return (
    <div className="container grid w-full gap-2 px-5 pb-12 sm:px-0">
      <div className=" duration-700 animate-in slide-in-from-top-full sm:px-0">
        <Breadcrumb
          pageName="Contacto"
          pathActual="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png"
          description="Encuentrame por estos medios."
        />
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Redes Sociales</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar todos mis redes sociales.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <a
            className="group flex flex-col gap-2 items-center rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <FaFacebook className="h-6 w-6" />
            <span className="text-sm font-medium">Facebook</span>
          </a>
          <a
            className="group flex flex-col gap-2 items-center rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <FaLinkedin className="h-6 w-6" />
            <span className="text-sm font-medium">Linkedin</span>
          </a>
          <a
            className="group flex flex-col gap-2 items-center rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <FaGithub className="h-6 w-6" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
      <div className="space-y-4 pt-5">
        <div>
          <h1 className="text-2xl font-bold">Informacion de contacto</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar mas detalles importantes para contactarte
            conmigo.
          </p>
        </div>
        <div className="space-y-2">
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <dt className="font-medium">Email</dt>
              <dd>
                <Link className="underline underline-offset-2" href="#">
                  info@example.com
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-medium">Phone</dt>
              <dd>1-234-567-8900</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-medium">Address</dt>
              <dd>1234 Example St, City, State, 56789, Country</dd>
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
