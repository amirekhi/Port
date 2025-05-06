import DashProjects from '@/components/DashProjects'

import React from 'react'
import { getProjects } from '../AddProject/actions';

export const dynamic = "force-dynamic";

const page = async () => {
  const projects = await getProjects();
  

  return (
    <div >
     
      <DashProjects projects={projects}/>
    </div>
  )
}

export default page