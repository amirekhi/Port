"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import {Tool} from '@/data'


const PToolTech = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center text-white my-20">
        <span className="text-purple-300">ابزارها و ابزارک‌ها</span> مورد استفاده 
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {Tool.map((technologie ) => (
        <div className='w-28 h-28' key={technologie.name} >
          <BallCanvas icon ={technologie.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(PToolTech)