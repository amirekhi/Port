import ThemeToggle from "@/components/ThemeToggle";
import { FloatingNav } from "@/components/Ui/FloatingNavbar";
import { PnavItems } from "@/data";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto w-full  ">
            <div className="absolute max-md:hidden z-40 top-0 left-[200px] "  >
                       <ThemeToggle/>
                    </div>
          <FloatingNav navItems={PnavItems} />
          {children}
       </main>
      
    );
  }