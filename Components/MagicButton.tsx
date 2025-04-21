import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  buttonClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  buttonClasses?: string;
}) => {
  return (
    <button
      className={` ${buttonClasses} relative inline-flex h-12 w-full md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group`}
      onClick={handleClick}
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
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}
              group
              
             `}
      >
        {position === "left" && icon}
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text group-hover:text-transparent">
        {title}
        </div>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
