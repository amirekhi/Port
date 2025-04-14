import { FloatingNav } from "@/Components/Ui/FloatingNavbar";
import { PnavItems } from "@/data";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto w-full  ">
          <FloatingNav navItems={PnavItems} />
          {children}
       </main>
      
    );
  }