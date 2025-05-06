import PHero from "@/components/PE/PHero";
import PGridc from "@/components/PE/PGridcopy";
import PClients from "@/components/PE/PClients";
import PExperience from "@/components/PE/PExperience";
import PFooter from "@/components/PE/PFooter";
import Projects from "@/components/Projects";
import { getProjects } from "@/app/(Dash)/AddProject/actions";
import TabsSection from "@/components/TabsSection";


export const revalidate = 3600;

export default async function PEHome() {
    const allProjects = await getProjects(); // Fetch all projects
  
    // Slice the array to get only the last 4 projects
    const latestProjects = allProjects.slice(0, 4);

 
  
  return (
      <>
           <PHero />
           <PGridc/>
           {/* Pass the sliced projects to the Projects component */}
           <Projects projects={latestProjects} lang={"fa"} />
           <PClients/>
           <PExperience/>
           <TabsSection/>        
           <PFooter/>             
      </> 
  );
}



