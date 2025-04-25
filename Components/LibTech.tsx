"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import {Lib} from '@/data'


const Tech = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center light:text-[#3B3B3B] text-white my-20">
        <span className="text-purple-300 light:text-purple-500"> Frameworks & Libraries </span>that i work with
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {Lib.map((technologie ) => (
        <div className='w-28 h-28' key={technologie.name} >
          <BallCanvas icon ={technologie.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(Tech)