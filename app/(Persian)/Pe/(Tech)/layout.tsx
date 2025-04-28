import PTechHero from "@/components/PTechHero";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <>
       <PTechHero/>
        {children}
     
       </>
         
         
          
       
      
    );
  }