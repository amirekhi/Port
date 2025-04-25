import { FloatingNav } from "@/components/Ui/FloatingNavbar";
import { navItems } from "@/data";
import PHero from "@/components/PE/PHero";
import PGridc from "@/components/PE/PGridcopy";
import PRecentProjects from "@/components/PE/PRecentProjects";
import PClients from "@/components/PE/PClients";
import PExperience from "@/components/PE/PExperience";
import PApproach from "@/components/PE/PApproach";
import PFooter from "@/components/PE/PFooter";


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