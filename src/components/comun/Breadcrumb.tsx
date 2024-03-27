import Image from "next/image";
const Breadcrumb = ({
    pageName,
    description,
    pathActual,
}: {
    pageName: string;
    description: string;
    pathActual: string;
}) => {
    return (
        <>
            <h1 className="hidden">sad</h1>
            {/** este es otra propuesta de encabezado */}
            <div className="hidden container bg-gray-900 text-white rounded-xl py-0 mb-5">
                <div className="-mx-4 flex max-sm:flex-col justify-between items-center">
                    <div className="w-full px-4">
                        <div className="my-6 md:my-0">
                            <h1 className="mb-5 text-2xl font-bold text-gray-50 dark:text-white sm:text-3xl">
                                {pageName}
                            </h1>
                            <p className="text-sm leading-relaxed text-gray-100 opacity-95">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center sm:justify-end px-4 md:w-4/12 lg:w-5/12">
                        <div>
                            <Image src={pathActual} className="w-40 h-40 object-cover object-center" alt="imagen" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex w-full flex-col items-center justify-center duration-700 animate-in slide-in-from-top-full">
                <div className="break-inside relative mb-4 flex w-full flex-col justify-between space-y-2 overflow-hidden rounded-xl bg-gray-800 px-4 pt-4 text-sm text-white">
                    <span className="text-xs font-medium uppercase text-gray-200">                                    {pageName}
                    </span>
                    <div className="flex flex-row items-center space-x-3">
                        <Image
                            src={pathActual}
                            className="h-20 w-20 rounded-xl object-cover object-center"
                            alt="imagen"
                            width={400}
                            height={400}
                        />
                        <span className="text-sm">
                            {description}
                        </span>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Breadcrumb;