"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import {TPackages} from '@/data'


const TechPackage = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center text-white my-20">
        <span className="text-purple-300">Package Managers & Build Tools </span> neccecery for  development and deployment
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {TPackages.map((technologie ) => (
        <div className='w-28 h-28' key={technologie.name} >
          <BallCanvas icon ={technologie.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(TechPackage)