"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { routes, PERoutes } from "@/data";

export const RouteSelect = () => {
  const pathname = usePathname();

  const usePERoutes = pathname.toLowerCase().includes("pe");
  const currentRoutes = usePERoutes ? PERoutes : routes;

  return (
    <div className="space-y-1">
      {currentRoutes.map(({ Icon, title, Url }) => (
        <Route
          key={Url}
          Icon={Icon}
          selected={pathname === Url}
          title={title}
          Url={Url}
          textRight={usePERoutes}
        />
      ))}
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  Url,
  textRight = false,
}: {
  selected: boolean;
  Icon: React.ComponentType<any>;
  title: string;
  Url: string;
  textRight?: boolean;
}) => {
  return (
    <Link href={Url}>
      <button
        className={`flex items-center gap-2 w-full rounded px-2 py-1.5 text-sm my-2 transition-[box-shadow,_background-color,_color] ${
          selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-500 bg-transparent hover:bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-none"
        } ${textRight ? "justify-end" : "justify-start"}`}
      >
        <Icon className={selected ? "text-violet-500" : ""} />
        <span>{title}</span>
      </button>
    </Link>
  );
};
