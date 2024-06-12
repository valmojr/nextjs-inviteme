"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CreateHousePage({ children }: { children: React.ReactNode }) {

  return (
    <Card
      className={cn(
        "flex flex-col flex-wrap justify-start items-center",
        "w-full h-fit p-4",
        "border dark:bg-zinc-900 bg-zinc-100"
      )}
    >
      {children}
    </Card>
  );
}

export default CreateHousePage;
