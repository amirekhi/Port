import { cn } from "@/lib/Utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
  <>
    <div
    className={cn(
      "absolute inset-0",
      "[background-size:40px_40px]",
      
      "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
    )}
  />
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#000319]"></div>
    </>
    
    
  );
}
