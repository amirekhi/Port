import DashProjects from '@/components/DashProjects'

import React from 'react'
import { getProjects } from '../AddProject/actions';


const page = async () => {
  const projects = await getProjects();
  return (
    <div >
     
      <DashProjects projects={projects}/>
    </div>
  )
}

export default page