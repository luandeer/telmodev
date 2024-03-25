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
                <div className="container bg-gray-900 text-white rounded-xl py-0 mb-5">
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
                                <Image src={pathActual} className="w-40 h-40 object-cover object-center" alt="imagen" width={400} height={400}/>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Breadcrumb;