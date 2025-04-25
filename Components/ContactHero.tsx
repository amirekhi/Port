import Link from 'next/link'
import React from 'react'
import MagicButton from './MagicButton'
import { Spotlight } from './Ui/Spotlight'
import { GridBackgroundDemo } from './Ui/GridBackgroundDemo'
import { FaLanguage, FaWhatsapp ,FaInstagram , FaPhone, FaTelegram, FaEnvelope } from 'react-icons/fa6'
import ContactExperience from './contact/ContactExperience'
import { contactItems } from '@/data'


<FaInstagram />


const ContactHero = ({ title , parag ,  dirClass , linkTxt , linkUrl} : any) => {
  return (
    <div className="pb-20 pt-36 w-[80vw] mx-auto relative h-[120vh] max-md:h-auto ">
      
    <div className="absolute max-md:hidden z-50 top-0 right-0" >
     < Link href={linkUrl} >
          <MagicButton
            title={linkTxt}
            icon={<FaLanguage size={35} />}
            position="right"
            buttonClasses="md:w-32"
          />
        </Link>
    </div>
    
    {/**
     *  UI: Spotlights
     *  Link: https://ui.aceternity.com/components/spotlight
     */}
    <div>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    </div>

    {/**
     *  UI: grid
     *  change bg color to bg-black-100 and reduce grid color from
     *  0.2 to 0.03
     */}
   <GridBackgroundDemo/>
   <p className={` ${dirClass} uppercase tracking-widest text-xs text-center light:text-[#3B3B3B] text-blue-100 w-full relative`}>
           {title}
          </p>
          <p className={` ${dirClass} text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl light:text-[#3B3B3B] text-white relative `}>
            {parag}
          </p>
   <div className=" grid grid-cols-12 gap-12 max-md:gap-0 max-md:h-auto h-96  mt-[150px] light:text-[#3B3B3B] text-white relative">
          <div className="col-span-5  max-md:col-span-12 max-md:h-96 h-full">
           <ul className='h-full flex justify-around items-start flex-col w-full '>
                      {contactItems.map((item, index) => (
                        <Link href={item.href} target="_blank" rel="noopener noreferrer" key={index} className='block w-full'>
                        <li  className="flex justify-between w-full items-center hover:bg-gradient-to-r from-purple-400 to-purple-600 transition duration-200   hover:shadow-2xl shadow-purple-200 p-4 rounded-2xl ">
                        <span>{item.label} : {item.value}</span>
                        <item.icon size={34}   className='light:text-[#3B3B3B] text-white'/>
                        </li>
                        </Link>
                      ))}
           </ul>
            
          </div>
          <div className="col-span-7 max-md:col-span-12  max-md:h-96 h-full relative max-md:mt-20">
            <div className="bg-gray-800 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
  </div>
  )
}

export default ContactHero