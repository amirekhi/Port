import { getProjects } from '@/app/(Dash)/AddProject/actions';
import Projects from '@/components/Projects';
import ProjHero from '@/components/ProjHero';

export const revalidate = 10; // revalidate every 10 seconds!

export default async function Page() {
  const projects = await getProjects();

  return (
    <>
      <ProjHero />
      <Projects projects={projects}  lang='en'/>
    </>
  );
}
