"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import {TWeb} from '@/data'


const PTechWeb = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center text-white my-20">
        <span className="text-purple-300"> تکنولوژی تحت وب </span>
       
          همه دوستشون داریم
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {TWeb.map((technologie ) => (
        <div className='w-28 h-28' key={technologie.name} >
          <BallCanvas icon ={technologie.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(PTechWeb)