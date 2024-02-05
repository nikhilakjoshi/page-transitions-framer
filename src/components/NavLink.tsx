"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink: React.FC<{
  linkTitle: string;
  path: string;
}> = ({ linkTitle, path }) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={clsx(
        "text-2xl",
        currentPath === path
          ? "font-semibold text-gray-700"
          : "text-gray-300 transition-colors hover:text-gray-500",
      )}
    >
      {linkTitle}
    </Link>
  );
};

export default NavLink;
