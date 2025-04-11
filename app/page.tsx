import Gridc from "@/Components/Gridcopy";
import Hero from "@/Components/Hero";
import RecentProjects from "../Components/RecentProjects";
import { FloatingNav } from "@/Components/Ui/FloatingNavbar";
import { navItems } from "@/data";
import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  ">
        <div className=" w-full">
          <FloatingNav navItems={navItems} />
           <Hero />
           <Gridc/>
           <RecentProjects/>
           <Clients/>
           <Experience/>
           <Approach/>
           <Footer/>
         
        </div>
    </main> 
  );
}
