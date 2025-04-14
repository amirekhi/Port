import ExperiencethreeD from '@/Components/3dExp/ExperiencethreeD'
import AboutHero from '@/Components/AboutHero'
import React from 'react'
import { expCards } from '@/data'

const page = () => {
  return (
    <>
     <AboutHero LanguageLink={'/Pe/About'}  Language={'فارسی'}  Header={'summar of what i been doing and learning for the past 5 years'}  TextGenerator = {'you can follow the tree to know what i have learned over the past 5 years'}   Paragraph = {" i have tried to demonstrate a clear road that took me here "}/>
     <ExperiencethreeD expCards = {expCards}  classes={""} dir={"ltr"} title={"My Profetional Work Experience"}/>
    </>
  )
}

export default page