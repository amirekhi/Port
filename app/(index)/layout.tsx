import { Sidebar } from "@/components/Sidebar/Sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import { FloatingNav } from "@/components/Ui/FloatingNavbar";
import { navItems } from "@/data";
import { Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <Sidebar/>
      <main className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto w-full ${inter.className} `}>
          <div className="absolute max-md:hidden z-40 top-0 left-[200px] "  >
             <ThemeToggle/>
          </div>
          <FloatingNav navItems={navItems} />
          
          {children}
          
       </main>
      
      </>
        
    );
  }