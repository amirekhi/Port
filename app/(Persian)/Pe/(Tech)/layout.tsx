import PPagin from "@/Components/PPagin";
import PTechHero from "@/Components/PTechHero";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <>
       <PTechHero/>
        {children}
        <PPagin/>
       </>
         
         
          
       
      
    );
  }