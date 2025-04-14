import Gridc from "@/Components/Gridcopy";
import Hero from "@/Components/Hero";
import RecentProjects from "../../Components/RecentProjects";
import { FloatingNav } from "@/Components/Ui/FloatingNavbar";
import { navItems } from "@/data";
import Clients from "@/Components/Clients";
import Experience from "@/Components/Experience";
import Approach from "@/Components/Approach";
import Footer from "@/Components/Footer";


export default function Home() {
  return (
    <>
        
         
           <Hero />
           <Gridc/>
           <RecentProjects/>
           <Clients/>
           <Experience/>
           <Approach/>
           <Footer/>
         
        
    </> 
  );
}
