'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    

    <button  onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark') 
      console.log('gg')
    }}
    className={`  relative inline-flex h-12 w-full md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group`}
   
  >
      <span className="absolute inset-[-1000%] 
  animate-[spin_2s_linear_infinite] 
  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
  group-hover:animate-[spin_0.5s_linear_infinite]
  group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#D8B4FE_0%,#7C3AED_50%,#D8B4FE_100%)]
" />
    {/* remove px-3 py-1, add px-5 gap-2 */}
    <span
      className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
           bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 
            group
            
           `}
    >
      
      {theme === 'dark' ? (
        <FaSun className="text-yellow-500" size={24} />
      ) : (
        <FaMoon className="text-blue-500" size={24} />
      )}
     
    </span>
  </button>

    // <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className=' rounded-2xl  '>
    //   
    // </button>

  )
}
   