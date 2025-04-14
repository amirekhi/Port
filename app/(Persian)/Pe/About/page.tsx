import ExperiencethreeD from '@/Components/3dExp/ExperiencethreeD'
import AboutHero from '@/Components/AboutHero'
import { PexpCards } from '@/data'
import React from 'react'

const page = () => {
  return (
    <>
     <AboutHero LanguageLink={'/About'}  Language={'English'}  Header={' خلاصه ای از  یاد گیری من در طول 5 سال گزشته '}  TextGenerator = {'روند پیشرفت و یادگیریه به ترتیب در درخت پایین نمایش داده شده است'}   Paragraph = {" با دنبال کردن درخت میتوانید روند یاد گیری را سال به سال دنبال کنید "}/>
     <ExperiencethreeD expCards = {PexpCards} classes={"text-right"} dir={"rtl"} title={"تجربه کار حرفه ای من"}/>
    </>
  )
}

export default page