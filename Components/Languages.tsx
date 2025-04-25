"use client"

import BallCanvas from './Ball'
import {SectionWrapper} from '../hoc'
import { LanguagesTech } from '@/data'


const Languages = () => {
  return (<>
  <h1 className="font-bold text-4xl md:text-5xl text-center light:text-[#3B3B3B] text-white my-20">
        familiar with these
        <span className="text-purple-300 light:text-purple-500">  Languages</span>
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

export default  SectionWrapper(Languages)