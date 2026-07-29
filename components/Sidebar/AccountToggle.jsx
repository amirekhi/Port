"use client"


import React, { useState } from "react";
import { FiX } from 'react-icons/fi';

import { useEffect } from "react";
// import { gettingClientsideSession } from "@/app/(index)/login/actions";


export const AccountToggle = ({ onToggle }) => {
//   const [ Session  , setSession ] = useState({userId : 'Unkown' , email : 'Unkown'})
 
//   useEffect(() => {
//    const gettingsession = async ( ) => {
//      const res = await gettingClientsideSession()
//      setSession(res)
//   }

//   gettingsession()
// } , [])


  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <div className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-blue-500 shadow"
        />
        <div className="text-start">
          {/* <span className="text-sm font-bold block">{Session.userId}</span>
          <span className="text-xs block text-stone-500">{Session.email}</span> */}
        </div>

        <button onClick={onToggle} className="z-50 md:hidden p-3 bg-gray-300 rounded-md " ><FiX/>  </button>
      </div>
    </div>
  );
};
