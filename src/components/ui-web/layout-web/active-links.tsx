import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { NavItem } from "@/types/nav"


export const ActiveLinks = ({ item }: { item: NavItem }) => {
    const { title, icon: Icon, href } = item;

    const pathname = usePathname();


    // Comprueba si Icon está definido antes de usarlo
    const IconComponent = Icon ?? (() => null);
    return (
        <Link
            key={title}
            href={href}
            className={clsx(
                {
                    'flex text-sm items-center font-extrabold h-12 px-2 text-center border-b-2 text-header-active  border-header-active  dark:border-header-active dark:text-header-active whitespace-nowrap focus:outline-none gap-2': pathname === href,
                }, {
                'flex text-sm font-semibold items-center h-12 px-2 text-center bg-transparent  border-b-2 border-transparent  dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 gap-2': pathname !== href,
            }
            )}
        >
            <IconComponent size={18} />
            <p>{title}</p>
        </Link>
    );
};