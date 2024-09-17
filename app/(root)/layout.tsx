
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Adrian', lastName: 'JSM'};

  return (
    <main className="flex w-full h-screen font-inter">
        <Sidebar 
          user={loggedIn}
        />

        <div className="flex size-full flex-col">
          <div className="root-layout"> 
            <Image 
              src="/icons/logo.svg"
              alt="Menu icon"
              width={30}
              height={30}
            />
            <div>
              <MobileNav 
                user={loggedIn}
              />
            </div>
          </div>
          {children}
        </div>

        
    </main>
  );
}
