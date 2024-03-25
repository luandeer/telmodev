import { Footer, SiteHeader } from "@/components";
import ProviderBarra from "@/context/ProviderBarra";
import { Toaster } from "@/components/ui/sonner"
import ScrollToTop from "@/components/comun/ScrollToTop";

//lrc para crear layout (comando atajo)
export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[url('/noise.png')]">
      <div className="relative flex min-h-screen flex-col overflow-hidden dark:bg-transparent">
        <SiteHeader />
        <div className="container pt-16 overflow-auto sm:px-10 px-0">
          <ProviderBarra>{children}</ProviderBarra>
          
        </div>
        <ScrollToTop/>
        <Footer/>
      </div>
      <Toaster richColors/>

    </main>
  );
}