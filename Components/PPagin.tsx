"use client"

import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { PPaginationItems } from '@/data';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type  item = {
    pageNumber: number;
    pageURl: string;
}

const PPagin = () => {
    const [page , setPage] = useState<number >(1);
    const router = useRouter();

    const handleClick = (item : item)=> {
        setPage(item.pageNumber)
        router.push(item.pageURl);

    }


const handleRightPagination = () => {
const item = PPaginationItems[page ]
router.push(item.pageURl);
setPage(prevState => prevState + 1)

}    

const handleLeftPagination = () => {
    const item = PPaginationItems[page - 2 ]
    router.push(item.pageURl);
    setPage(prevState => prevState - 1)
}    


  return (

        <div className='mx-auto w-[155px] my-20 flex justify-between items-center'>

             <button className={`cursor-pointer group  ${page == 1 && ('hidden')} `} onClick={handleLeftPagination}><HiChevronLeft color='pink ' className='group-hover:scale-125 transition duration-150 ease-in-out' size={24}/></button>
           
            {PPaginationItems.map((item) => (
                <button key={item.pageNumber} className={`${item.pageNumber == page && ('bg-purple-400')} w-[24px] h-[24px] bg-pink-200 hover:bg-purple-500 rounded-sm flex justify-center items-center cursor-pointer`} onClick={() => handleClick(item)}>{item.pageNumber}</button>
            ))}
              
             
              

              <button className={`cursor-pointer group ${page == PPaginationItems.length && ('hidden')}`} onClick={handleRightPagination}> <HiChevronRight color='pink' className='group-hover:scale-125 transition duration-150 ease-in-out' size={24}/> </button>   
       </div>
  )
}

export default PPagin