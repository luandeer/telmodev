import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"

export default function NamePage() {
  return (
    <div className="container grid w-full gap-6 px-4 md:px-6 pb-12 space-y-4">

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Redes Sociales</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar todos mis redes sociales.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <a
            className="group flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Facebook</span>
          </a>
          <a
            className="group flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <TwitterIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Twitter</span>
          </a>
          <a
            className="group flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            href="#"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Informacion de contacto</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Aqui puedes encontrar mas detalles importantes para contactarte conmigo.
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
      <div>
        <h1 className="text-2xl font-bold mb-2">Enviame un email:</h1>
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
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
          <Button>Send message</Button>
        </div>

      </div>
    </div>
  );
}