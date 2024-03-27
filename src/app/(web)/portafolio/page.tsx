import Image from "next/image";
import { shuffle } from "@/lib/utils";
import { projects } from "@/config/constants/projects";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Breadcrumb from "@/components/comun/Breadcrumb";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
export default function Portafolio() {
    return (
        <div className="lg:pb-10">
            <div className="px-4 sm:px-0 duration-700 animate-in slide-in-from-top-full">
                <Breadcrumb
                    pageName="Portafolio"
                    pathActual="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711476842/portafolio/zhvonvodiorwgcmvrv5q.png"
                    description="Estos son los ultimos proyectos que he realizado."
                />
            </div>
            <section className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 px-5 sm:px-0">
                {shuffle(projects).map(
                    ({ projectUrl: { github, live }, logo, name, tagline, description }, i) => (
                        <div
                            key={i}
                            className="group flex items-center gap-x-4 rounded-lg border bg-secondary/50 p-4 duration-300 hover:bg-secondary/90 hover:shadow-md"
                        >
                            <Image
                                src={logo}
                                width={60}
                                height={60}
                                alt={name}
                                className="h-24 w-24 rounded-md bg-foreground/5 object-contain p-2 duration-300 group-hover:bg-foreground/10"
                            />

                            <div>
                                <div className="flex flex-col items-start justify-start">
                                    

                                    <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="link" className="p-0 h-0 hover:underline mb-3"><h2 className="text-lg tracking-wide">{name}</h2></Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                            <AlertDialogTitle>{name}</AlertDialogTitle>
                                                <AlertDialogHeader>
                                                    <AlertDialogDescription>
                                                    {description}
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Volver</AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    <div className="line-clamp-2 text-xs text-foreground/60 mt-1">
                                        {tagline}
                                    </div>

                                    <div className="flex items-center gap-2 mt-2">
                                        {github && (
                                            <Link href={github} target="_blank" className="flex items-center gap-1 bg-gray-700 text-white py-1 px-2 rounded text-sm"><FaGithub size={20} /> GitHub</Link>
                                        )}


                                        {live && (
                                            <a href={live} target="_blank" className="flex items-center gap-1 bg-gray-700 text-white py-1 px-2 rounded text-sm">
                                                <TbWorld size={20} /> Visitar
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </section>
        </div>
    );
}
