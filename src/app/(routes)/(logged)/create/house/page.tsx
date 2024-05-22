"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CreateHousePage() {
  return (
    <Card
      className={cn(
        "flex flex-col flex-nowrap justify-center items-center",
        "w-full h-full bg-zinc-900",
        "border"
      )}
    >
      <h1>Create House</h1>
    </Card>
  );
}

export default CreateHousePage;
