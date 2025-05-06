import { getProjects } from '@/app/(Dash)/AddProject/actions';
import PProjHero from '@/components/PProjHero';
import Projects from '@/components/Projects';
import ProjHero from '@/components/ProjHero';

export const revalidate = 10; // revalidate every 10 seconds!

export default async function Page() {
  const projects = await getProjects();

  return (
    <>
      <PProjHero />
      <Projects projects={projects}  lang='fa'/>
    </>
  );
}
