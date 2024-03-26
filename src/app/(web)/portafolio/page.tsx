import Image from "next/image";
import { shuffle } from "@/lib/utils";
import { projects } from "@/config/constants/projects";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Breadcrumb from "@/components/comun/Breadcrumb";

export default function Portafolio() {
    return (
        <div className=" py-6 lg:pb-10">
            <div className="px-4 sm:px-0 duration-700 animate-in slide-in-from-top-full">
                <Breadcrumb
                    pageName="Portafolio"
                    pathActual="https://res.cloudinary.com/dsf39ftzm/image/upload/v1711330351/portafolio/axbrs2nixcaa1b5kyyrf.png"
                    description="Estos son los ultimos proyectos que he realizado."
                />
            </div>
            <section className="mb-12 grid grid-cols-1 gap-5 duration-700 animate-in slide-in-from-left-full md:grid-cols-2 xl:grid-cols-3">
                {shuffle(projects).map(
                    ({ projectUrl: { github, live }, logo, name, tagline }, i) => (
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

                            <div className="duration-1000 animate-in slide-in-from-bottom-full">
                                <div className="flex flex-col items-start justify-start">
                                    <h2 className="mb-1 text-lg tracking-wide">{name}</h2>
                                    <div className="line-clamp-2 text-sm text-foreground/60">
                                        {tagline}
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Link href={github} target="_blank" className="flex items-center gap-1 bg-gray-700 text-white py-1 px-2 rounded"><FaGithub size={20} /> GitHub</Link>

                                        {live && (
                                            <a href={live} target="_blank" className="flex items-center gap-1 bg-gray-700 text-white py-1 px-2 rounded">
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
