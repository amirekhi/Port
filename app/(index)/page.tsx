import Gridc from "@/components/Gridcopy";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects"; // Import the Projects component
import { getProjects } from "../(Dash)/AddProject/actions";
import TabsSection from "@/components/TabsSection";

// Revalidate the Home page every 8 hours (28,800 seconds)
export const revalidate = 3600;

export default async function Home() {
  const allProjects = await getProjects(); // Fetch all projects

  // Slice the array to get only the last 4 projects
  const latestProjects = allProjects.slice(0, 4);

  return (
    <>
      <Hero />
      <Gridc />
      {/* Pass the sliced projects to the Projects component */}
      <Projects projects={latestProjects} lang={"en"} />
      <Clients />
      <Experience />
      <TabsSection/> 
      <Footer />
    </>
  );
}
