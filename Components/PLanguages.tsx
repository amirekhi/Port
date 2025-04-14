"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import { LanguagesTech } from '@/data'


const PLanguages = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center text-white my-20">
        
        <span className="text-purple-300"> زبان ها</span>
      </h1>
  <div className='flex flex-row flex-wrap justify-center gap-10 '>
      
      {LanguagesTech.map((Lang ) => (
        <div className='w-28 h-28' key={Lang.name} >
          <BallCanvas icon ={Lang.icon} />  
        </div>
      ))

      }
    </div>
  </>
    
  )
}

export default  SectionWrapper(PLanguages)