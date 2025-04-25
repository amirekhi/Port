import ContactHero from '@/components/ContactHero'
import React from 'react'

const page = () => {
  return (
   
   <>
      <ContactHero title={'راه های ارتباطی با من '}  parag={'از هرکدام از راه ها که برای شما راحت تر می باشد با من تماس بگیرید'} dirClass={"mt-3"} linkUrl={'/ContactMe'} linkTxt={"English"}/>
   </>
  )
}

export default page