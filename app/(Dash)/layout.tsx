import { DashSidebar } from "@/components/Sidebar/DashSidebar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
      
      <main className="relative h-screen w-screen flex  overflow-hidden mx-auto overflow-y-hidden  ">
       <DashSidebar/>
          
   
       <div className="flex-1 overflow-y-auto overflow-x-hidden ">
          {children}
      </div>
      
          
       </main>
      
      
        
    );
  }