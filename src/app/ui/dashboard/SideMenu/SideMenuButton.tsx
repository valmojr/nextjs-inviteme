"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function SideMenuButton({
  children,
  href,
  variant,
}: {
  children: JSX.Element[];
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}) {
  const [isOnRoute, setIsOnRoute] = useState<boolean>();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({variant: 'default'}),
        "w-full gap-3"
      )}
      onFocus={() => setIsOnRoute(true)}
    >
      {children}
    </Link>
  );
}
