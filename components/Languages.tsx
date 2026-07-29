"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'



const Languages = ({obj} : any) => {
  return (<>
  <h1 className="font-bold text-2xl md:text-5xl text-center light:text-[#3B3B3B] text-white my-20 max-md:my-10">
        {obj.describtion}
        <span className="text-purple-300 light:text-purple-500">  {obj.span}</span>
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {obj.Tech.map((Lang : any ) => (
        <div className='w-28 h-28' key={Lang.name} >
          <BallCanvas icon ={Lang.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(Languages)