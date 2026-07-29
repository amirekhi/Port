import React from 'react'
import { Tabs } from './Ui/Tabs';
import Image from "next/image";


const TabsSection = () => {

    const tabs = [    
        {
          title: "Shopping Card",
          value: "services",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 max-md:h-[400px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-300 to-violet-900">
              <p className='max-md:text-sm'> Clean and minimalistic Shopping card</p>
              <DummyContent  imgLink={'/Tabs/shoppingCard.png'}/>
            </div>
          ),
        },
        {
          title: "Dashboards",
          value: "Stylish yet Productive Robust Dashboards",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl  max-md:h-[400px] md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
              <p className='max-md:text-sm'>Stylish yet Productive Robust Dashboards</p>
          <DummyContent imgLink={'/Tabs/dashboard.png'}/>
            </div>
          ),
        },
        {
          title: "Stock App",
          value: "random",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl max-md:h-[400px] font-bold text-white bg-gradient-to-br from-[#3C2598] to-violet-900">
              <p className='max-md:text-sm'> Hero section</p>
              <DummyContent imgLink={'/Tabs/stock.png'} />
            </div>
          ),
        },
        {
          title: "Contact page that works",
          value: "contact",
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold max-md:h-[400px] text-white bg-gradient-to-br from-[#3C2598] to-violet-900">
              <p className='max-md:text-sm'>Contact page</p>
              <DummyContent imgLink={'/contact.png'} />
            </div>
          ),
        },
      ];
  return (
    <div className="h-[20rem] md:h-[60rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-[95%]  items-start justify-start mt-10 mb-40 max-md:my-12 max-md:mb-[400px] pb-[200px]">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-md:text-center max-md:w-full">a catalog of my work</h2>
    <Tabs tabs={tabs} />
  </div>
  )
}


const DummyContent = ({imgLink} : {imgLink : string}) => {
    return (
      <Image
        src={imgLink}
        alt="dummy image"
        width="1000"
        height="1000"
        className=" object-left-top h-[60%] object-contain md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] max-md:bottom-10 rounded-xl mx-auto max-md:object-center"
      />
    );
  };

export default TabsSection