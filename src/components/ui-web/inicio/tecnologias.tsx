"use client";
import * as React from "react";
import AutoScrollType from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { initialData } from "@/seed/data-tecnologias";
const logos = initialData.logos;

export function Skills() {
    const plugin2 = React.useRef(
        AutoScrollType({
            startDelay: 0,
            speed: 0.5,
            stopOnMouseEnter: false,
            stopOnInteraction: false,
        }),
    );
    return (
        <Carousel
            plugins={[plugin2.current]}
            className="w-full"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent className="-ml-1 space-x-1">
                {logos.map((logo) => {
                    const { nombre, icon: Icon} = logo;
                    const IconComponent = Icon ?? (() => null);

                    return (
                    <CarouselItem key={nombre} className="pl-1 basis-1/2 md:basis-1/5 lg:basis-1/6">
                        <div className="w-full p-0">
                            <Card>
                                <CardContent className="flex items-center justify-center py-2 gap-1 text-gray-500">
                                <IconComponent size={25} />

                                    <strong className="text-lg whitespace-nowrap">{nombre}</strong>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                )})}
            </CarouselContent>
            <CarouselPrevious className="-left-10 hidden" />
            <CarouselNext className="-right-10 hidden" />
        </Carousel>
    );
}