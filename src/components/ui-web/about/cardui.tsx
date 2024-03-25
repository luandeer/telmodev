import React from "react";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

interface CategoryCardProps {
    readonly img: string;
    readonly title: string;
    readonly desc: string;
    readonly icon: React.ElementType;
}

function CardUi({ img, title, desc, icon: Icon }: CategoryCardProps) {
    return (
        <Card className="relative grid min-h-[12rem] w-full overflow-hidden rounded-xl">
            <Image
                width={768}
                height={768}
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 h-full w-full bg-black/70" />
            <CardContent className="relative flex flex-col justify-end">
                    {/* <Icon className="mt-6 text-gray-700 animate-spin" size={15} /> */}

                <div>
                    <CardTitle className="mb-1 text-gray-50 text-base">
                        {title}
                    </CardTitle>
                    <CardDescription
                    
                        className="text-xs opacity-70 text-gray-100 leading-relaxed"
                    >
                        {desc}
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    );
}
export default CardUi;
