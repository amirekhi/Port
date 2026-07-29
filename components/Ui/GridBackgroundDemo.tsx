import { cn } from "@/lib/Utils";
import React from "react";

export function GridBackgroundDemo() {
  return (
  <>
<div
  className={cn(
    "absolute inset-0 [background-size:40px_40px]",
    // Dark mode grid color
    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
    // Light mode grid color (lighter and more faded)
    "light:[background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]"
  )}
/>
<div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] light:bg-[#ebe4da] bg-[#000319]"></div>

    </>
    
    
  );
}
