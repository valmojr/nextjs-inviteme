import { ReactElement, Suspense } from "react";
import { ResultContainerSkeleton } from "./ResultContainer";

export default function ResultFrame({children}: {children: ReactElement[]}) {
  return <div className={'w-full py-1'}>
    <Suspense fallback={<>
      <ResultContainerSkeleton />
      <ResultContainerSkeleton />
      <ResultContainerSkeleton />
    </>}>
      {children}
    </Suspense>
  </div>
}