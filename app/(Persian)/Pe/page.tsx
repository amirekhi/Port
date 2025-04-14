import { FloatingNav } from "@/Components/Ui/FloatingNavbar";
import { navItems } from "@/data";
import PHero from "@/Components/PE/PHero";
import PGridc from "@/Components/PE/PGridcopy";
import PRecentProjects from "@/Components/PE/PRecentProjects";
import PClients from "@/Components/PE/PClients";
import PExperience from "@/Components/PE/PExperience";
import PApproach from "@/Components/PE/PApproach";
import PFooter from "@/Components/PE/PFooter";


export default function PEHome() {
  return (
      <>
           <PHero />
           <PGridc/>
           <PRecentProjects/>
           <PClients/>
           <PExperience/>
           <PApproach/>
           <PFooter/>             
      </> 
  );
}