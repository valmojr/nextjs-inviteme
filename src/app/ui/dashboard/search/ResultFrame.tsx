import { ReactElement, Suspense } from "react";
import { ResultContainerSkeleton } from "./ResultContainer";
import { twMerge } from "tailwind-merge";
import { randomUUID } from "crypto";

export default function ResultFrame({children, className}: {children: ReactElement[], className?: string}) {
  return <div className={twMerge('flex flex-col flex-nowrap gap-3 w-full py-1', className)}>
    <Suspense fallback={<>
      <ResultContainerSkeleton key={randomUUID()} />
      <ResultContainerSkeleton key={randomUUID()} />
      <ResultContainerSkeleton key={randomUUID()} />
    </>}>
      {children}
    </Suspense>
  </div>
}