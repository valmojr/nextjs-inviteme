"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CreateHousePage({ children }: { children: React.ReactNode }) {
  return (
    <Card
      className={cn(
        "flex flex-col flex-nowrap justify-center items-center",
        "w-full h-full bg-zinc-900",
        "border"
      )}
    >
      {children}
    </Card>
  );
}

export default CreateHousePage;
