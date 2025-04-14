import Pagin from "@/Components/Pagin";
import TechHero from "@/Components/TechHero";

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