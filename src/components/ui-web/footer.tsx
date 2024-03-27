export const Footer = () => {
    return (
        <div className="mx-auto w-full mt-20">
            <footer className="py-3">
                {/**
           * <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
              <Image src="/logo.webp" alt="logo" width={100} height={100} />
                  <span className="hidden self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sorteos</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                  <li>
                      <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Inicio</a>
                  </li>
                  <li>
                      <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Términos
                          y Condiciones</a>
                  </li>
                  <li>
                      <a href="#"
                          className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Política de privacidad</a>
                  </li>
                  <li>
                      <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">FAQ</a>
                  </li>
              </ul>
          </div>
          
           */}
                <hr className="border-t-1 mx-auto mb-3 border-gray-200" />
                <span className="block text-center text-sm text-muted-foreground dark:text-gray-400">
                    © 2024{" "}
                    <a
                        href="https://www.facebook.com/Sonquoficial"
                        target="_blank"
                        className="hover:underline"
                    >
                        Telmo Perez™
                    </a>. Reservados todos los derechos.
                </span>
            </footer>
        </div>
    );
};