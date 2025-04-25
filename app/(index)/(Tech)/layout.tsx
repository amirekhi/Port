import Pagin from "@/components/Pagin";
import TechHero from "@/components/TechHero";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <>
       <TechHero/>
        {children}
        <Pagin/>
       </>
         
         
          
       
      
    );
  }